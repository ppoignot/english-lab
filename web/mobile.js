/* ============ MOBILE SHELL : top bar + bottom menu + hubs + settings ============ */
const NAV_S=[["today","Accueil","sun"],["learn","Cours","book"],["practice","Pratique","zap"],["car","Voiture","car"],["progress","Progrès","trophy"]];
const NAV_C=[["progress","Suivi","trophy"],["learn","Cours","book"],["practice","Pratique","zap"]];
const GROUP={today:"today",learn:"learn",lessons:"learn",homework:"learn",practice:"practice",exercises:"practice",review:"practice",coach:"practice",session:"practice",car:"car",progress:"progress",settings:"progress"};
const ROOTS=["today","learn","practice","car","progress"];
const TITLE={today:"Aujourd'hui",learn:"Cours",lessons:"Cours",homework:"Devoirs",practice:"Pratique",exercises:"Exercices",review:"Révisions",coach:"Oral avec Emma",session:"15 min express",car:"Mode voiture",progress:"Progrès",settings:"Réglages"};
const EL_BASE=window.EL_BASE||"./";

function route(){
  applyRole();
  const h=(location.hash||"").slice(1);const [v,s]=h.split("--");
  let nv=GROUP[v]?v:(isCoach()?"progress":"today");if(isCoach()&&["car","today","settings"].includes(nv))nv="progress";if(nv==="lessons"&&!s)nv="learn";
  view=nv;sub=s||null;
  if(SES&&SES.listening&&view!=="session"){SES.listening=false;DICT&&DICT.stop().catch(()=>{})}
  if(PRON.active&&view!=="coach"){PRON.active=false;PRON.phase="ready";try{DICT0&&DICT0.stop().catch(()=>{})}catch(e){}}
  if(ORAL.active&&view!=="coach"){oralStopListening(true);oralStopSpeech();ORAL.active=false;ORAL.phase="idle"}
  if(CAR.active&&view!=="car")carStop(true);
  render();window.scrollTo(0,0);
}
function ensureShell(){if($("#mnav"))return;
  document.body.innerHTML=`<header class="mbar" id="mbar"></header><div id="banner"></div><div id="tabs" hidden></div><div id="hright" hidden></div><main id="app"></main><nav class="mnav" id="mnav"></nav>`}
function goBack(){if(history.length>1&&!ROOTS.includes(view)||sub)history.back();else location.hash=GROUP[view]||"today"}
function render(){
  ensureShell();hidePop();
  const app=$("#app"),coach=isCoach();
  const immersive=(view==="car"&&CAR.active)||(view==="session"&&SES&&!SES.done);
  document.body.classList.toggle("immersive",!!immersive);document.body.classList.toggle("coachmode",coach);
  const isRoot=ROOTS.includes(view)&&!sub&&!(view==="progress"&&coach&&false);
  const p=P(),dx=(p.xpDays||{})[todayISO()]||0,stk=streakOf(p),open=hwOpen().length;
  const title=sub&&view==="lessons"?(()=>{const l=LESSONS.find(x=>x.id===sub);return l?"Cours "+l.n:"Cours"})():sub&&view==="exercises"&&DRILLS[sub]?DRILLS[sub].title:sub&&view==="homework"&&HW[sub]?"Devoir":(coach&&view==="progress"?"Suivi de Pierre-Olivier":TITLE[view]);
  $("#mbar").innerHTML=`${isRoot?"":`<button class="mback" id="mBack" aria-label="Retour">${ICON.back||"‹"}</button>`}<h1 class="mtitle">${esc(title)}</h1><span class="spacer"></span>
    ${coach?`<span class="chip">${ICON.users}<span>Coach</span></span>`:`<span class="chip mstreak" title="Jours d'affilée">${ICON.flame}<span>${stk}</span></span><span class="chip mxp" title="Objectif du jour">${ring(dx,DAILY_GOAL,24,4)}<span>${dx}</span></span>
    <a class="mgear" href="#settings" aria-label="Réglages">${ICON.gear}</a>`}`;
  if($("#mBack"))$("#mBack").onclick=goBack;
  const nav=coach?NAV_C:NAV_S,g=GROUP[view];
  $("#mnav").innerHTML=nav.map(([k,l,ic])=>`<a href="#${k}" class="${g===k?"on":""}" aria-current="${g===k?"page":"false"}"><span class="ni">${ICON[ic]}${k==="learn"&&open&&!coach?`<span class="badge">${open}</span>`:""}</span><span>${l}</span></a>`).join("");
  const banner=coach&&view==="progress"&&!sub?`<div class="cbanner">${ICON.info}<div><b>Accès coach</b> · tu vois les réponses, fautes et corrections de Pierre-Olivier${SNAP.at?" (mises à jour le "+fmtTs(SNAP.at)+")":""}. Tu peux faire les exercices : rien n'est enregistré.</div></div>`:updBanner();
  ({today:vHome,learn:vLearn,lessons:vLessons,exercises:vExercises,homework:vHomework,review:vReview,coach:vCoach,car:vCar,session:vSession,progress:vProgress,practice:vPractice,settings:vSettings})[view](app);
  $("#banner").innerHTML="";if(banner)app.insertAdjacentHTML("afterbegin",banner);
  if($("#updGo"))$("#updGo").onclick=()=>location.reload();
  decorate(app);
}
ICON.back=sv('<path d="M15 18l-6-6 6-6"/>');
ICON.gear=sv('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>');
ICON.chev=sv('<path d="M9 18l6-6-6-6"/>');

/* big tappable row / tile helpers */
const mrow=(href,t,ic,title,txt,right="",attr="")=>`<a class="mrow t-${t}" ${href?`href="${href}"`:""} ${attr}>${tile(t,{ic})}<div class="mrt"><b>${title}</b>${txt?`<span>${txt}</span>`:""}</div>${right}<span class="mchev">${ICON.chev}</span></a>`;
const mtile=(href,t,ic,title,txt,attr="")=>`<a class="mtile t-${t}" ${href?`href="${href}"`:""} ${attr}>${tile(t,{ic,solid:true})}<b>${title}</b>${txt?`<span>${txt}</span>`:""}</a>`;

/* ---- Accueil ---- */
function vHome(app){
  const l=nextLesson(),p=P(),xp=p.xp||0,lv=levelOf(xp),dx=(p.xpDays||{})[todayISO()]||0,stk=streakOf(p);
  const done=LESSONS.filter(started),cur=done[done.length-1];
  let next="";
  if(l){const st=lessonStatus(l),mins=Math.round((lessonStart(l)-new Date())/60000);
    const when=st==="live"?"En cours":st==="today"?(mins<=0?"Maintenant":mins<60?`dans ${mins} min`:`dans ${Math.floor(mins/60)} h ${String(mins%60).padStart(2,"0")}`):fmtDate(l.date,{weekday:"long",day:"numeric",month:"long"})+" · 13 h";
    next=`<div class="mcard t-cours"><div class="row">${tile("cours",{ic:"video"})}<div style="flex:1;min-width:0"><span class="ptype">${st==="live"?"Cours en ce moment":"Prochain cours"}</span><h3>Cours ${l.n} · ${esc(l.topic)}</h3><span class="muted small">${when}</span></div></div>
      <a class="mbtn" href="${TEAMS}" target="_blank" rel="noopener">${ICON.video}<span>Rejoindre sur Teams</span></a></div>`}
  const todo=cur?done.flatMap(x=>x.drills).filter(d=>!drillFluent(DRILLS[d],S.drills[d])):[];
  const due=hwOpen().filter(id=>started(LESSONS.find(x=>x.id===HW[id].lesson))),rw=toRework().length,cards=dueCards().length;
  app.innerHTML=`<section class="view">
   <div class="mhello"><div><span class="muted small" style="font-weight:800">${greet()}</span><h2>Niveau ${lv.n} · ${esc(lv.name)}</h2><span class="muted small">${xp} XP${lv.to?" · encore "+(lv.to-xp)+" XP":""}</span></div>
     <div class="mring">${ring(dx,DAILY_GOAL,92,10)}<div><b>${dx}</b><small>/ ${DAILY_GOAL}</small></div></div></div>
   <div class="row" style="justify-content:center">${resChip(stk?"ok":"neutral",plural(stk,"jour")+" d'affilée")}</div>
   <a class="mhero" href="#session">${ICON.zap}<div><b>15 min express</b><span>Une session différente à chaque fois</span></div></a>
   <div class="mtiles">
    ${mtile("#car","coach","car","Voiture",rw?plural(rw,"point")+" à revoir":"Mains libres")}
    ${mtile("#coach","coach","chat","Oral","Avec Emma")}
    ${mtile("#review","rev","layers","Révisions",cards?plural(cards,"carte")+" à revoir":"À jour")}
    ${mtile("","exo","grid","7 temps","Tableau",'data-chart="1"')}
   </div>
   ${next}
   ${cur?`<h3 class="msec">Programme du jour</h3><div class="mlist">
     ${mrow(`#lessons--${cur.id}`,"cours","book","Relire la fiche",`Cours ${cur.n} · ${esc(cur.topic)}`,p["cheat-"+cur.id]?resChip("ok","Lu"):"")}
     ${mrow(todo.length?`#exercises--${todo[0]}`:"#exercises","exo","target","Exercices",todo.length?plural(todo.length,"série")+" pas encore fluide"+(todo.length>1?"s":""):"Toutes fluides",todo.length?"":resChip("ok","OK"))}
     ${mrow(due.length?`#homework--${due[0]}`:"#homework","devoir","pencil","Devoirs",due.length?plural(due.length,"devoir")+" à rendre":"Tout est rendu",due.length?`<span class="badge">${due.length}</span>`:resChip("ok","OK"))}
   </div>`:""}
  </section>`;
}
/* ---- Cours ---- */
function vLearn(app){
  const nl=nextLesson(),open=hwOpen().length,cur=curLesson();
  const row=x=>{const st=lessonStatus(x),d=new Date(x.date+"T12:00:00"),lk=locked(x);
    const chip=st==="done"?resChip("ok","Fait"):st==="live"?resChip("warn","En cours"):lk?`<span class="res neutral">${ICON.lock}</span>`:resChip("warn","Prochain");
    return `<a class="mlesson ${x===nl?"now":""} ${lk?"lk":""}" href="#lessons--${x.id}"><div class="d">${String(d.getDate()).padStart(2,"0")}<small>${d.toLocaleDateString("fr-FR",{month:"short"})}</small></div><div class="mrt"><b>Cours ${x.n}</b><span>${esc(x.topic)}</span></div>${chip}</a>`};
  app.innerHTML=`<section class="view">
   <div class="mtiles">
    ${mtile("","exo","grid","Les 7 temps","Tableau + frise",'data-chart="1"')}
    ${mtile("","rev","abc","Verbes irréguliers",IRR.length+" verbes",'data-irrlist="1"')}
    ${mtile("#homework","devoir","pencil","Devoirs",open?open+" à rendre":"À jour")}
    ${mtile("#exercises","exo","target","Exercices","Par cours")}
   </div>
   ${cur?`<a class="mhero alt" href="#lessons--${cur.id}">${ICON.book}<div><b>Dernier cours : n° ${cur.n}</b><span>${esc(cur.topic)}</span></div></a>`:""}
   <h3 class="msec">Tous les cours</h3>
   <div class="mlist">${LESSONS.slice().reverse().map(row).join("")}</div>
  </section>`;
}
/* ---- Pratique ---- */
function vPractice(app){
  const cards=dueCards().length,rw=toRework().length;
  app.innerHTML=`<section class="view">
   <a class="mhero" href="#session">${ICON.zap}<div><b>15 min express</b><span>Écrit, oral, réflexes, verbes : tout mélangé</span></div></a>
   <div class="mlist">
    ${mrow("#exercises","exo","target","Exercices des cours","Séries par cours, jusqu'au réflexe")}
    ${mrow("#review","rev","layers","Révisions (flashcards)",cards?plural(cards,"carte")+" à revoir aujourd'hui":"Tout est à jour",cards?`<span class="badge">${cards}</span>`:"")}
    ${mrow("#coach","coach","chat","Oral avec Emma","Conversation et prononciation")}
    ${isCoach()?"":mrow("#car","coach","car","Mode voiture",rw?plural(rw,"point")+" à retravailler":"Gros bouton micro, voix")}
    ${mrow("","exo","grid","Tableau des 7 temps","La base à connaître par cœur","",'data-chart="1"')}
    ${mrow("","rev","abc","Verbes irréguliers","Liste, exemples, entraînement","",'data-irrlist="1"')}
   </div></section>`;
}
/* ---- Réglages ---- */
function vSettings(app){
  const A=window.EL_AUTH,cfg=A&&A.configured(),inn=A&&A.signedIn(),key=lsGet("el-apikey");
  const sync=window.EL_SYNC_OK?"Dernière synchro : "+new Date(window.EL_SYNC_OK).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}):"";
  const q=(()=>{try{return JSON.parse(localStorage.getItem("el-queue")||"[]").length}catch(e){return 0}})();
  app.innerHTML=`<section class="view">
   <div class="mcard"><h3>${ICON.cloud} Compte et sauvegarde</h3>
    ${!cfg?`<p class="muted">Sauvegarde en ligne pas encore configurée : tout est enregistré sur le téléphone en attendant.</p>`:
     inn?`<p>Connecté : <b>${esc(A.email())}</b></p><p class="muted small">${sync}${q?" · "+q+" changement(s) en attente d'envoi":" · tout est envoyé"}</p>
      <div class="mbtns"><button class="mbtn" id="sSync">${ICON.cloud}<span>Synchroniser</span></button><button class="mbtn ghost" id="sOut">Se déconnecter</button></div>`:
     `<p class="muted small">Connecte-toi pour sauvegarder tes réponses et que ton coach puisse les voir.</p>
      <input class="mf" id="sEmail" type="email" placeholder="E-mail" autocomplete="username" value="${esc(lsGet("el-email")||"")}"><input class="mf" id="sPw" type="password" placeholder="Mot de passe" autocomplete="current-password">
      <button class="mbtn primary" id="sIn">Se connecter</button>`}
   </div>
   <div class="mcard"><h3>${ICON.spark} Claude (corrections, Emma, voiture)</h3>
    <p class="muted small">${key?"Clé enregistrée sur ce téléphone ("+esc(key.slice(0,10))+"…).":"Colle ta clé API Anthropic (console.anthropic.com). Elle reste sur ce téléphone."}</p>
    <input class="mf" id="sKey" type="password" placeholder="sk-ant-…" autocomplete="off">
    <div class="mbtns"><button class="mbtn primary" id="sKeySave">Enregistrer</button>${key?`<button class="mbtn" id="sKeyTest">Tester</button>`:""}</div>
   </div>
   <div class="mcard"><h3>${ICON.speak} Voix</h3>
    <label class="mlab">Vitesse de la voix <b id="sRateV">${(+(lsGet("el-rate")||1)).toFixed(2)}</b></label><input type="range" id="sRate" min="0.7" max="1.3" step="0.05" value="${lsGet("el-rate")||1}">
    <label class="mlab">Accent anglais</label><div class="mseg">${[["en-GB","Britannique"],["en-US","Américain"]].map(([k,l])=>`<button data-acc="${k}" class="${(lsGet("el-accent")||"en-GB")===k?"on":""}">${l}</button>`).join("")}</div>
    <div id="sVoices"></div>
    <button class="mbtn" id="sVoiceTest">${ICON.speak}<span>Tester la voix</span></button>
   </div>
   ${cfg&&inn?`<div class="mcard"><h3>${ICON.users} Accès de ton coach</h3><p class="muted small">Un lien à lui envoyer : elle voit tes réponses et corrections, sans compte, et ne consomme rien.</p>
    <button class="mbtn" id="sCoach">${ICON.copy}<span>Obtenir le lien coach</span></button><div id="sCoachOut"></div></div>
   <div class="mcard"><h3>${ICON.history} Importer mon historique</h3><p class="muted small">Choisis le fichier <b>historique-anglais.json</b> que je t'ai envoyé (ou colle son contenu).</p>
    <label class="mbtn">${ICON.note}<span>Choisir le fichier</span><input type="file" id="sImpFile" accept=".json,application/json" hidden></label>
    <textarea class="mf" id="sImp" rows="2" placeholder="… ou colle le contenu ici"></textarea><button class="mbtn" id="sImpGo">Importer</button></div>`:""}
   <div class="mcard"><h3>${ICON.info} Application</h3>
    <p class="muted small">Contenu et fonctionnalités : version ${esc(String(window.EL_VERSION||"locale").slice(0,7))}${window.EL_NATIVE_VER?" · appli Android "+esc(window.EL_NATIVE_VER):""}. Les mises à jour arrivent toutes seules à l'ouverture.</p>
    <button class="mbtn" id="sUpd">${ICON.history}<span>Rechercher une mise à jour</span></button>${window.EL_NATIVE_LATEST?`<a class="mbtn" href="${window.EL_NATIVE_LATEST}">Télécharger la dernière appli</a>`:""}
   </div></section>`;
  const on=(id,f)=>{const e=$("#"+id);if(e)e.onclick=f};
  on("sIn",async()=>{const e=$("#sEmail").value.trim(),pw=$("#sPw").value;lsSet("el-email",e);try{$("#sIn").disabled=true;await A.signIn(e,pw);toast("Connecté");render()}catch(x){toast(x.message||"Connexion impossible");$("#sIn").disabled=false}});
  on("sOut",()=>{A.signOut();render()});
  on("sSync",async()=>{await window.EL_DB.flush();await window.EL_DB.pull();toast("Synchronisé");render()});
  on("sKeySave",()=>{const v=$("#sKey").value.trim();if(!v){toast("Colle la clé d'abord");return}lsSet("el-apikey",v);SAMPLE0=SAMPLE0||null;toast("Clé enregistrée");location.reload()});
  on("sKeyTest",async()=>{try{const r=await SAMPLE.json('Reply with {"ok":true}',{modelTier:"quick"});toast(r&&r.ok?"Claude répond ✔":"Réponse inattendue")}catch(e){toast("Erreur : "+(e.message||e.code))}});
  $("#sRate").oninput=e=>{lsSet("el-rate",e.target.value);$("#sRateV").textContent=(+e.target.value).toFixed(2)};
  app.querySelectorAll("[data-acc]").forEach(b=>b.onclick=()=>{lsSet("el-accent",b.dataset.acc);lsSet("el-voice",null);render()});
  on("sVoiceTest",()=>{TTS&&TTS.speak([{text:"Hello Pierre-Olivier! Are you ready for today's lesson?",language:"en"},{text:"Prêt pour la session ?",language:"fr"}]).catch(()=>{})});
  if(window.EL_TTS_VOICES)window.EL_TTS_VOICES().then(vs=>{const acc=lsGet("el-accent")||"en-GB",list=vs.filter(v=>v.lang.replace("_","-").toLowerCase()===acc.toLowerCase());if(!list.length||!$("#sVoices"))return;
    $("#sVoices").innerHTML=`<label class="mlab">Voix</label><select class="mf" id="sVoice"><option value="">Par défaut</option>${list.map(v=>`<option value="${v.i}" ${lsGet("el-voice")==String(v.i)?"selected":""}>${esc(v.name)}${v.localService?"":" (réseau)"}</option>`).join("")}</select>`;
    $("#sVoice").onchange=e=>lsSet("el-voice",e.target.value||null)});
  on("sCoach",async()=>{try{const u=await A.coachLink();$("#sCoachOut").innerHTML=`<p class="mlink">${esc(u)}</p>`;if(navigator.share)navigator.share({title:"Suivi anglais de Pierre-Olivier",url:u}).catch(()=>copyText(u));else copyText(u)}catch(e){toast("Impossible : "+(e.message||e.code))}});
  const imp=async txt=>{try{const o=JSON.parse(txt);const n=await A.importData(o.data||o);toast(n+" éléments importés");render()}catch(e){toast("Données illisibles")}};
  if($("#sImpFile"))$("#sImpFile").onchange=e=>{const f=e.target.files[0];if(f)f.text().then(imp)};
  on("sImpGo",async()=>{try{const o=JSON.parse($("#sImp").value);const n=await A.importData(o.data||o);toast(n+" éléments importés");render()}catch(e){toast("Données illisibles")}});
  on("sUpd",()=>checkUpdate(true));
}
/* ---- live updates of the web code (no reinstall) ---- */
let UPD=null;
function updBanner(){return UPD?`<div class="ubanner">${ICON.spark}<span>Nouvelle version disponible</span><button class="mbtn small primary" id="updGo">Mettre à jour</button></div>`:""}
async function checkUpdate(manual){try{const r=await fetch(EL_BASE+"version.json?t="+Date.now(),{cache:"no-store"});const j=await r.json();
  if(j.native&&window.EL_NATIVE_VER&&j.native!==window.EL_NATIVE_VER)window.EL_NATIVE_LATEST=j.apk;
  if(window.EL_VERSION&&j.v!==window.EL_VERSION){UPD=j;if(manual)location.reload();else render()}else if(manual)toast("Tu as déjà la dernière version")}catch(e){if(manual)toast("Pas de réseau")}}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")checkUpdate(false)});
setTimeout(()=>checkUpdate(false),4000);
/* Android back button */
try{const App=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.App;if(App){App.addListener("backButton",()=>{if(document.querySelector(".ov")){document.querySelectorAll(".ov").forEach(o=>o.remove());return}if(ROOTS.includes(view)&&!sub){if(view!=="today")location.hash="today";else App.minimizeApp()}else goBack()});
  App.getInfo().then(i=>{window.EL_NATIVE_VER=i.version}).catch(()=>{})}}catch(e){}
/* keep the screen on in car mode */
try{const KA=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.KeepAwake;if(KA){const _cs=carStart,_cst=carStop;carStart=function(){KA.keepAwake().catch(()=>{});return _cs.apply(this,arguments)};carStop=function(){KA.allowSleep().catch(()=>{});return _cst.apply(this,arguments)}}}catch(e){}
ELBOOT();
