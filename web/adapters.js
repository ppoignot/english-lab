/* English Lab — native adapters.
   They expose the same small interface the app already used inside claude.ai (window.claude.use(name)),
   backed by: Supabase (data), the Anthropic API (Claude), Android speech (voice + microphone). */
(function(){
const CFG=window.EL_CONFIG||{};
const NATIVE=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());
const PL=NATIVE?window.Capacitor.Plugins:{};
const ls={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{v==null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){}}};
const jget=(k,d)=>{try{const v=ls.get(k);return v?JSON.parse(v):d}catch(e){return d}};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const MODE=window.EL_MODE||"student";

/* ---------------- Supabase (REST, no library) ---------------- */
const SESS_K="el-sb-session";
const sess=()=>jget(SESS_K,null),setSess=v=>ls.set(SESS_K,v?JSON.stringify(v):null);
function stamp(j){j.expires_at=j.expires_at||Math.floor(Date.now()/1000)+(j.expires_in||3600);return j}
async function token(){const s=sess();if(!s)return null;if(Date.now()/1000<s.expires_at-60)return s.access_token;
  try{const r=await fetch(CFG.supabaseUrl+"/auth/v1/token?grant_type=refresh_token",{method:"POST",headers:{apikey:CFG.supabaseKey,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:s.refresh_token})});
    if(!r.ok){if(r.status===400||r.status===401)setSess(null);return null}
    const j=stamp(await r.json());setSess(j);return j.access_token}catch(e){return null}}
async function sb(path,opt={},auth=true){
  const h={apikey:CFG.supabaseKey,"Content-Type":"application/json",...(opt.headers||{})};
  if(auth){const t=await token();if(!t)throw {code:"signed_out"};h.Authorization="Bearer "+t}else if(!/^sb_/.test(CFG.supabaseKey))h.Authorization="Bearer "+CFG.supabaseKey;
  const r=await fetch(CFG.supabaseUrl+path,{...opt,headers:h});
  if(!r.ok){let m="";try{const j=await r.json();m=j.msg||j.message||j.error_description||""}catch(e){}throw {code:"http_"+r.status,message:m}}
  const tx=await r.text();return tx?JSON.parse(tx):null}
window.EL_AUTH={
  configured:()=>!!(CFG.supabaseUrl&&CFG.supabaseKey),
  signedIn:()=>!!sess(),
  email:()=>{const s=sess();return s&&s.user&&s.user.email||""},
  async signIn(email,password){
    const r=await fetch(CFG.supabaseUrl+"/auth/v1/token?grant_type=password",{method:"POST",headers:{apikey:CFG.supabaseKey,"Content-Type":"application/json"},body:JSON.stringify({email,password})});
    if(!r.ok){let m="";try{m=(await r.json()).error_description||""}catch(e){}throw {code:"auth",message:m||"Identifiants incorrects"}}
    setSess(stamp(await r.json()));await DBA.pull();await DBA.flush()},
  signOut(){setSess(null)},
  sb,
  async coachLink(){const ex=await sb("/rest/v1/coach_links?select=token");let t=ex&&ex[0]&&ex[0].token;
    if(!t){t=[...crypto.getRandomValues(new Uint8Array(18))].map(b=>b.toString(36).padStart(2,"0")).join("").slice(0,24);await sb("/rest/v1/coach_links",{method:"POST",headers:{Prefer:"return=minimal"},body:JSON.stringify({token:t})})}
    return (CFG.webUrl||window.EL_BASE||location.origin+location.pathname.replace(/[^/]*$/,""))+"coach.html?k="+t},
  async coachSnapshot(t){return sb("/rest/v1/rpc/coach_snapshot",{method:"POST",body:JSON.stringify({t})},false)},
  async importData(obj){/* obj: {coll:{id:data}} — merges into the cloud, newest wins on the app side */
    let n=0;for(const c in obj)for(const id in obj[c]){DBA.queue(c,id,obj[c][id]);n++}await DBA.flush();await DBA.pull();return n},
};

/* ---------------- data: offline-first, synced to Supabase ---------------- */
const CACHE_K="el-cache",Q_K="el-queue";
const DBA={
  cache:jget(CACHE_K,{}),subs:{},pulling:null,lastPull:0,
  saveCache(){ls.set(CACHE_K,JSON.stringify(this.cache))},
  queue(coll,id,data){(this.cache[coll]=this.cache[coll]||{})[id]=data;this.saveCache();const q=jget(Q_K,[]);q.push({coll,id,data,at:Date.now()});ls.set(Q_K,JSON.stringify(q))},
  async flush(){if(this.flushing||!sess()||!window.EL_AUTH.configured())return;const q=jget(Q_K,[]);if(!q.length)return;this.flushing=true;
    const m={};q.forEach(x=>m[x.coll+"\u0001"+x.id]=x);
    try{await sb("/rest/v1/docs?on_conflict=owner,coll,id",{method:"POST",headers:{Prefer:"resolution=merge-duplicates,return=minimal"},
        body:JSON.stringify(Object.values(m).map(x=>({coll:x.coll,id:x.id,data:x.data,updated_at:new Date(x.at).toISOString()})))});
      ls.set(Q_K,JSON.stringify(jget(Q_K,[]).slice(q.length)));window.EL_SYNC_OK=Date.now()}
    catch(e){console.warn("sync",e)}finally{this.flushing=false}},
  async pull(){if(!sess()||!window.EL_AUTH.configured())return;if(this.pulling)return this.pulling;
    this.pulling=(async()=>{try{
      const rows=await sb("/rest/v1/docs?select=coll,id,data&limit=10000");const fresh={};
      rows.forEach(r=>{(fresh[r.coll]=fresh[r.coll]||{})[r.id]=r.data});
      jget(Q_K,[]).forEach(x=>{(fresh[x.coll]=fresh[x.coll]||{})[x.id]=x.data});/* unsent local changes win */
      this.cache=fresh;this.saveCache();this.lastPull=Date.now();window.EL_SYNC_OK=Date.now();this.emitAll()}
      catch(e){console.warn("pull",e)}finally{this.pulling=null}})();return this.pulling},
  emit(c){const docs=Object.entries(this.cache[c]||{}).map(([id,d])=>({id,data:()=>d}));(this.subs[c]||[]).forEach(f=>{try{f({docs})}catch(e){console.warn(e)}})},
  emitAll(){Object.keys(this.subs).forEach(c=>this.emit(c))},
};
const db={collection(c){return{
  onSnapshot(cb){(DBA.subs[c]=DBA.subs[c]||[]).push(cb);setTimeout(()=>DBA.emit(c),0);DBA.pull();return()=>{DBA.subs[c]=DBA.subs[c].filter(f=>f!==cb)}},
  doc(id){return{async set(data){DBA.queue(c,id,data);DBA.flush();return true},async get(){const d=(DBA.cache[c]||{})[id];return{exists:!!d,data:()=>d}}}}}}};
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"){DBA.flush().then(()=>{if(Date.now()-DBA.lastPull>20000)DBA.pull()})}else DBA.flush()});
addEventListener("online",()=>DBA.flush());
setInterval(()=>DBA.flush(),30000);
window.EL_DB=DBA;

/* ---------------- Claude (Anthropic API, key stored on the phone only) ---------------- */
const MODELS={quick:"claude-haiku-5-5",default:"claude-sonnet-5-5",complex:"claude-opus-5-5"};
function parseJSON(t){t=String(t).trim().replace(/^```(?:json)?\s*/i,"").replace(/```\s*$/,"");
  try{return JSON.parse(t)}catch(e){}const i=Math.min(...["{","["].map(c=>{const k=t.indexOf(c);return k<0?1e9:k}));const j=Math.max(t.lastIndexOf("}"),t.lastIndexOf("]"));
  if(i<1e9&&j>i)return JSON.parse(t.slice(i,j+1));throw {code:"bad_json"}}
async function claude(input,opts={},json){
  const key=ls.get("el-apikey");if(!key)throw {code:"not_granted",message:"Clé API Claude manquante (Réglages)"};
  const msgs=typeof input==="string"?[{role:"user",content:input}]:input.map(m=>({role:m.role,content:String(m.content)}));
  const body={model:MODELS[opts.modelTier]||MODELS.default,max_tokens:opts.maxTokens||2000,messages:msgs};
  if(json)body.system="Respond with only one valid JSON value. No prose, no markdown code fences.";
  const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",signal:opts.signal,headers:{"x-api-key":key,"anthropic-version":"2023-06-01","content-type":"application/json","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify(body)});
  if(r.status===429||r.status===529)throw {code:"rate_limited"};
  if(r.status===401)throw {code:"not_granted",message:"Clé API Claude refusée"};
  if(!r.ok){let m="";try{m=(await r.json()).error.message}catch(e){}throw {code:"http_"+r.status,message:m}}
  const j=await r.json();const text=(j.content||[]).filter(c=>c.type==="text").map(c=>c.text).join("");
  if(opts.onText)try{opts.onText({text,delta:text})}catch(e){}
  return text}
const sample=async(i,o)=>({text:await claude(i,o),truncated:false});
sample.json=async(i,o)=>parseJSON(await claude(i,o,true));
sample.limits=async()=>({images:false});

/* ---------------- voice (text-to-speech) ---------------- */
const FR_RX=/[àâçéèêëîïôûùüÿœ]|\b(le|la|les|un|une|des|est|et|tu|je|pour|avec|dans|sur|pas|c'est|réponse|règle)\b/i;
function lang(l,text){if(l==="fr"||/^fr/.test(l||""))return "fr-FR";if(/^en/.test(l||""))return ls.get("el-accent")||"en-GB";return FR_RX.test(text||"")?"fr-FR":(ls.get("el-accent")||"en-GB")}
function makeTTS(speakOne,stopAll){
  let tok=0;const L=[],P=[],S=[];const emit=(a,x)=>a.forEach(f=>{try{f(x)}catch(e){}});
  async function speak(x,o={}){const my=++tok;stopAll();await wait(60);
    const lines=(Array.isArray(x)?x:[{text:x,language:o.language}]).filter(l=>l&&l.text);
    emit(S,{state:"speaking"});
    for(let i=0;i<lines.length;i++){if(my!==tok)throw {code:"viewer_stopped"};const ln=lines[i];emit(L,{line:i,id:ln.id});
      const t0=Date.now(),iv=setInterval(()=>emit(P,{ms:Date.now()-t0,line:i}),120);
      try{await speakOne(String(ln.text).replace(/_{2,}/g,"blank"),lang(ln.language||o.language,ln.text),(ln.rate||o.rate||1))}catch(e){}finally{clearInterval(iv)}}
    if(my!==tok)throw {code:"viewer_stopped"};emit(S,{state:"idle",reason:"completed"})}
  return{speak,add:speak,stop(){tok++;stopAll();emit(S,{state:"idle",reason:"viewer_stopped"})},setRate(){},pause(){},resume(){},
    onLine:f=>{L.push(f);return()=>{}},onPosition:f=>{P.push(f);return()=>{}},onState:f=>{S.push(f);return()=>{}}}}
function nativeTTS(){const T=PL.TextToSpeech;if(!T)return null;
  const voiceIdx=()=>{const v=ls.get("el-voice");return v==null||v===""?undefined:+v};
  return makeTTS((text,lg,rate)=>T.speak({text,lang:lg,rate:Math.max(.5,Math.min(1.5,rate*(+(ls.get("el-rate")||1)))),pitch:1,volume:1,category:"playback",voice:/^en/.test(lg)?voiceIdx():undefined,queueStrategy:0}),()=>{T.stop().catch(()=>{})})}
function webTTS(){if(!("speechSynthesis" in window))return null;const ss=speechSynthesis;
  const pick=lg=>{const vs=ss.getVoices().filter(v=>v.lang.replace("_","-").toLowerCase().startsWith(lg.slice(0,2)));return vs.find(v=>/google|natural|neural/i.test(v.name)&&v.lang.startsWith(lg))||vs.find(v=>v.lang.startsWith(lg))||vs[0]};
  return makeTTS((text,lg,rate)=>new Promise(res=>{const u=new SpeechSynthesisUtterance(text);u.lang=lg;const v=pick(lg);if(v)u.voice=v;u.rate=rate*(+(ls.get("el-rate")||1));
    let done=false;const fin=()=>{if(!done){done=true;res()}};u.onend=fin;u.onerror=fin;setTimeout(fin,3000+text.length*120);ss.speak(u)}),()=>ss.cancel())}

/* ---------------- microphone (speech-to-text) ---------------- */
function makeDict(engine){
  const P=[],F=[],S=[];const emit=(a,x)=>a.forEach(f=>{try{f(x)}catch(e){}});
  let state="idle",last="",userStop=false,endT=null,stopRes=null,run=0;
  function finish(reason){if(state==="idle")return;clearTimeout(endT);state="idle";const t=last;last="";if(t)emit(F,{text:t});emit(S,{state:"idle",reason:userStop?"stopped":reason});if(stopRes){stopRes();stopRes=null}}
  const api={
    async start(o={}){if(state!=="idle"){userStop=true;finish("stopped");await wait(150)}
      const my=++run;userStop=false;last="";state="starting";emit(S,{state:"starting"});
      try{await engine.start(o.language==="fr"?"fr-FR":"en-US",{
        partial:t=>{if(my!==run||state==="idle")return;last=t;emit(P,{text:t});if(endT){clearTimeout(endT);endT=setTimeout(()=>finish("ended"),250)}},
        started:()=>{if(my!==run)return;if(state==="starting"){state="listening";emit(S,{state:"listening"})}},
        ended:()=>{if(my!==run)return;clearTimeout(endT);endT=setTimeout(()=>finish("ended"),900)},/* the final words arrive just after */
        error:code=>{if(my!==run)return;if(code==="not_granted"){state="idle";emit(S,{state:"idle",reason:"not_granted"});return}clearTimeout(endT);endT=setTimeout(()=>finish("ended"),300)}})}
      catch(e){state="idle";emit(S,{state:"idle",reason:e&&e.code||"unavailable"});throw e}
      setTimeout(()=>{if(my===run&&state==="starting"){state="listening";emit(S,{state:"listening"})}},500)},
    stop(){if(state==="idle")return Promise.resolve();userStop=true;return new Promise(res=>{stopRes=res;engine.stop();clearTimeout(endT);endT=setTimeout(()=>finish("stopped"),1000)})},
    active:()=>state!=="idle",
    onPartial:f=>{P.push(f);return()=>{}},onFinal:f=>{F.push(f);return()=>{}},onState:f=>{S.push(f);return()=>{}}};
  return api}
function nativeDict(){const R=PL.SpeechRecognition;if(!R)return null;let H=null,ready=null;
  const listen=()=>ready||(ready=Promise.all([R.addListener("partialResults",d=>H&&H.partial((d.matches||[])[0]||"")),R.addListener("listeningState",d=>H&&(d.status==="started"?H.started():H.ended()))]));
  return makeDict({async start(lg,h){H=h;await listen();
      let p=await R.checkPermissions();if(p.speechRecognition!=="granted")p=await R.requestPermissions();
      if(p.speechRecognition!=="granted")throw {code:"not_granted"};
      R.start({language:lg,maxResults:1,partialResults:true,popup:false}).catch(e=>h.error(String(e&&e.message||e)))},
    stop(){R.stop().catch(()=>{})}})}
function webDict(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return null;let rec=null;
  return makeDict({async start(lg,h){rec=new SR();rec.lang=lg;rec.interimResults=true;rec.continuous=false;
      rec.onstart=()=>h.started();rec.onresult=e=>{let t="";for(const r of e.results)t+=r[0].transcript;h.partial(t)};
      rec.onend=()=>h.ended();rec.onerror=e=>h.error(e.error==="not-allowed"?"not_granted":e.error);rec.start()},
    stop(){try{rec&&rec.stop()}catch(e){}}})}

/* ---------------- expose ---------------- */
const coach=MODE==="coach";
const CAPS={
  db:coach?null:db,
  sample:coach?null:sample,
  tts:coach?null:(NATIVE?nativeTTS():webTTS()),
  dictation:coach?null:(NATIVE?nativeDict():webDict()),
  user:{isOwner:async()=>!coach,canEdit:async()=>!coach,id:async()=>"me"},
  assets:null,artifact:null};
window.claude={use:async n=>CAPS[n]||null};
window.EL_NATIVE=NATIVE;
window.EL_TTS_VOICES=async()=>{if(!NATIVE||!PL.TextToSpeech)return[];try{const r=await PL.TextToSpeech.getSupportedVoices();return(r.voices||[]).map((v,i)=>({...v,i})).filter(v=>/^en/i.test(v.lang))}catch(e){return[]}};
})();
