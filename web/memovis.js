
/* ============ VISUAL MEMOS : one picture per rule (timelines, word order, prepositions) ============ */
const VC={past:"#C9461A",pres:"#1A6FB0",fut:"#7E3BB8",ok:"#16794B",ink:"#1E1410",mut:"#7D685D",line:"#EAD5C4"};
/* timeline frame: past | NOW | future, with the tense drawn on top */
function tlFrame(inner,labels=true){
  return `<svg class="mvsvg" viewBox="0 0 640 200" role="img" aria-label="Ligne du temps">
   <defs><marker id="mva" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${VC.ink}"/></marker>
   ${[["mvP",VC.pres],["mvF",VC.fut]].map(([id,c])=>`<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`).join("")}</defs>
   <rect x="20" y="118" width="200" height="10" rx="5" fill="${VC.past}" opacity=".12"/><rect x="420" y="118" width="200" height="10" rx="5" fill="${VC.fut}" opacity=".12"/>
   <line x1="20" y1="123" x2="622" y2="123" stroke="${VC.ink}" stroke-width="3" marker-end="url(#mva)"/>
   <line x1="320" y1="40" x2="320" y2="150" stroke="${VC.pres}" stroke-width="3" stroke-dasharray="6 5"/>
   ${labels?`<text x="110" y="175" text-anchor="middle" class="mvl" fill="${VC.past}">PASSÉ</text><text x="320" y="175" text-anchor="middle" class="mvl" fill="${VC.pres}">MAINTENANT</text><text x="530" y="175" text-anchor="middle" class="mvl" fill="${VC.fut}">FUTUR</text>`:""}
   ${inner}</svg>`}
const dot=(x,c,r=11)=>`<circle cx="${x}" cy="123" r="${r}" fill="${c}" stroke="#fff" stroke-width="3"/>`;
const cross=(x,c)=>`<g stroke="${c}" stroke-width="6" stroke-linecap="round"><line x1="${x-11}" y1="112" x2="${x+11}" y2="134"/><line x1="${x+11}" y1="112" x2="${x-11}" y2="134"/></g>`;
const bar=(x1,x2,c,wavy)=>wavy?`<path d="M${x1} 123 ${Array.from({length:Math.round((x2-x1)/20)},(_,i)=>`q5 -14 10 0 q5 14 10 0`).join(" ")}" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`:`<rect x="${x1}" y="114" width="${x2-x1}" height="18" rx="9" fill="${c}"/>`;
const tag=(x,y,txt,c,anchor="middle")=>`<text x="${x}" y="${y}" text-anchor="${anchor}" class="mvt" fill="${c}">${txt}</text>`;
const bubble=(x,y,txt,c)=>{const w=txt.length*11.6+26;return `<g><rect x="${x-w/2}" y="${y-24}" width="${w}" height="34" rx="17" fill="${c}"/><text x="${x}" y="${y}" text-anchor="middle" class="mvb">${txt}</text></g>`};
const flash=(x)=>`<path d="M${x+4} 60 L${x-8} 92 L${x+2} 92 L${x-6} 118 L${x+12} 82 L${x+2} 82 L${x+10} 60z" fill="#F5B400" stroke="${VC.ink}" stroke-width="1.5"/>`;
const flag=(x,c,txt)=>`<line x1="${x}" y1="58" x2="${x}" y2="140" stroke="${c}" stroke-width="3"/><path d="M${x} 58 l30 8 l-30 8z" fill="${c}"/>${tag(x,50,txt,c)}`;
/* example strip under each picture */
const vEx=(rows)=>`<div class="mvex">${rows.map(([c,html])=>`<div class="mvexr" style="--c:${c}"><span class="en say">${html}</span></div>`).join("")}</div>`;
const H=(t,c)=>`<b style="color:${c}">${t}</b>`;

const MEMO_VIS={
 pressimple:()=>tlFrame(`${[60,130,200,270,370,440,510,580].map(x=>dot(x,VC.pres,9)).join("")}${bubble(320,78,"every day · usually",VC.pres)}${tag(320,30,"une habitude qui se répète",VC.mut)}`)
   +vEx([[VC.pres,`Every day, I ${H("work","#1A6FB0")} at the office.`],[VC.pres,`The app ${H("offers","#1A6FB0")} audio tours.`]]),
 prescont:()=>tlFrame(`${bar(250,390,VC.pres,true)}${bubble(320,78,"now · this week",VC.pres)}${tag(320,30,"en train de se faire, maintenant",VC.mut)}`)
   +vEx([[VC.pres,`Right now, we ${H("are testing","#1A6FB0")} a new route.`]]),
 presperfect:()=>tlFrame(`${dot(90,VC.pres,8)}${dot(170,VC.pres,8)}${dot(240,VC.pres,8)}<path d="M90 100 Q205 40 312 104" fill="none" stroke="${VC.pres}" stroke-width="4" marker-end="url(#mvP)"/>${bubble(205,48,"so far · already · ever",VC.pres)}${tag(470,80,"→ le bilan compte maintenant",VC.mut)}`)
   +vEx([[VC.pres,`So far, we ${H("have tested","#1A6FB0")} three routes.`],[VC.pres,`${H("Have","#1A6FB0")} you ever ${H("been","#1A6FB0")} to Las Vegas?`]]),
 pastsimple:()=>tlFrame(`${cross(150,VC.past)}${bubble(150,78,"yesterday · last week · ago",VC.past)}${tag(470,80,"terminé, c'est fini",VC.mut)}`)
   +vEx([[VC.past,`Yesterday, we ${H("tested","#C9461A")} the route.`],[VC.past,`I ${H("didn't go","#C9461A")} to the meeting.`]]),
 pastcont:()=>tlFrame(`${bar(80,260,VC.past,true)}${flash(190)}${tag(170,48,"was sleeping…",VC.past)}${tag(170,152,"…when you called",VC.ink)}${tag(500,80,"en cours dans le passé",VC.mut)}`)
   +vEx([[VC.past,`I ${H("was driving","#C9461A")} when you ${H("called","#1E1410")}.`],[VC.past,`At ten, the guides ${H("were waiting","#C9461A")}.`]]),
 pastperfect:()=>tlFrame(`${dot(110,VC.past)}${dot(240,VC.ink)}<text x="110" y="128" text-anchor="middle" class="mvn">1</text><text x="240" y="128" text-anchor="middle" class="mvn">2</text>
   <path d="M118 96 Q175 62 232 96" fill="none" stroke="${VC.past}" stroke-width="3" stroke-dasharray="5 4"/>${tag(110,64,"had left",VC.past)}${tag(240,64,"I arrived",VC.ink)}${tag(470,80,"1 est fini AVANT 2",VC.mut)}`)
   +vEx([[VC.past,`When I ${H("arrived","#1E1410")}, the bus ${H("had left","#C9461A")}.`]]),
 bepast:()=>`<div class="mvgrid2"><div class="mvbox" style="--c:${VC.past}"><div class="mvpr">I · he · she · it</div><div class="mvbig">was</div><div class="mvsub">wasn't · Was…?</div></div>
   <div class="mvbox" style="--c:${VC.fut}"><div class="mvpr">you · we · they</div><div class="mvbig">were</div><div class="mvsub">weren't · Were…?</div></div></div>`
   +vEx([[VC.past,`The route ${H("was","#C9461A")} quiet.`],[VC.fut,`They ${H("were","#7E3BB8")} at the office.`]]),
 will:()=>tlFrame(`<g transform="translate(305 52)"><circle r="14" fill="#F5B400"/><path d="M-4 18h8" stroke="${VC.ink}" stroke-width="3"/></g>${tag(320,30,"je décide maintenant",VC.mut)}<path d="M330 104 Q420 60 498 104" fill="none" stroke="${VC.fut}" stroke-width="4" marker-end="url(#mvF)"/>${cross(510,VC.fut)}${bubble(510,160,"tomorrow",VC.fut)}`,false)
   +vEx([[VC.fut,`The phone is ringing. I${H("'ll answer","#7E3BB8")} it.`],[VC.fut,`I ${H("will send","#7E3BB8")} you the report tomorrow.`]]),
 goingto:()=>tlFrame(`${dot(220,VC.fut,8)}${tag(220,78,"plan décidé",VC.fut)}<path d="M228 123 L500 123" stroke="${VC.fut}" stroke-width="4" stroke-dasharray="8 6"/>${cross(510,VC.fut)}${bubble(510,78,"on Friday",VC.fut)}`)
   +vEx([[VC.fut,`We ${H("are going to visit","#7E3BB8")} the site on Friday.`]]),
 futcont:()=>tlFrame(`${bar(440,600,VC.fut,true)}<line x1="520" y1="84" x2="520" y2="146" stroke="${VC.ink}" stroke-width="3"/>${bubble(520,70,"at 10 tomorrow",VC.fut)}${tag(150,80,"en cours dans le futur",VC.mut)}`)
   +vEx([[VC.fut,`At ten tomorrow, I ${H("will be flying","#7E3BB8")} to Las Vegas.`]]),
 futperfect:()=>tlFrame(`${cross(450,VC.fut)}${flag(560,VC.ink,"by Friday")}<path d="M462 100 Q510 74 552 100" fill="none" stroke="${VC.fut}" stroke-width="3" stroke-dasharray="5 4"/>${tag(450,160,"fini avant",VC.fut)}`)
   +vEx([[VC.fut,`By Friday, we ${H("will have finished","#7E3BB8")} the test.`]]),
 questions:()=>{const C=["#7E3BB8","#C9461A","#1A6FB0","#16794B","#7D685D"],L=["WH","Aux.","Sujet","Verbe","…"];
   const R=[["Where","do","you","work","?"],["What","are","you","doing","now?"],["Where","did","you","go","yesterday?"],["What","have","you","done","so far?"],["When","will","you","send","it?"]];
   return `<div class="mvq"><div class="mvqr head">${L.map((l,i)=>`<span style="--c:${C[i]}">${l}</span>`).join("")}</div>${R.map(r=>`<div class="mvqr en">${r.map((w,i)=>`<span style="--c:${C[i]}">${w}</span>`).join("")}</div>`).join("")}</div>
   <p class="mvnote">L'auxiliaire porte le temps : <b>do/does</b> (présent) · <b>am/is/are</b> (en cours) · <b>did</b> (passé) · <b>have/has</b> (bilan) · <b>will</b> (futur). Le verbe reste à la base après do / did / will.</p>`},
 ininto:()=>`<div class="mvgrid2"><div class="mvbox" style="--c:${VC.pres}"><svg viewBox="0 0 160 110" class="mvico"><path d="M30 50l-14-16h100l14 16" fill="#F5C77A"/><circle cx="80" cy="62" r="18" fill="#fff" stroke="${VC.ink}" stroke-width="3"/><path d="M30 66h100v38H30z" fill="#E8A94F"/></svg>
     <div class="mvbig">in</div><div class="mvsub">où c'est : une position</div><div class="en say mvs">The phone is ${H("in","#1A6FB0")} my bag.</div></div>
   <div class="mvbox" style="--c:${VC.past}"><svg viewBox="0 0 160 110" class="mvico"><path d="M30 60h100v44H30z" fill="#E8A94F"/><path d="M30 60l-14-16h100l14 16" fill="#F5C77A"/><circle cx="40" cy="22" r="14" fill="#fff" stroke="${VC.ink}" stroke-width="3"/><path d="M58 18 Q90 10 92 46" fill="none" stroke="${VC.past}" stroke-width="4" marker-end="url(#mvc)"/><defs><marker id="mvc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="${VC.past}"/></marker></defs></svg>
     <div class="mvbig">into</div><div class="mvsub">où ça va : un mouvement vers l'intérieur</div><div class="en say mvs">I put the phone ${H("into","#C9461A")} my bag.</div></div></div>`,
 intime:()=>`<svg class="mvsvg" viewBox="0 0 640 225"><line x1="20" y1="120" x2="622" y2="120" stroke="${VC.ink}" stroke-width="3"/><path d="M612 113l12 7l-12 7z" fill="${VC.ink}"/>
   <rect x="150" y="50" width="96" height="40" rx="8" fill="#fff" stroke="${VC.ink}" stroke-width="3"/><text x="198" y="78" text-anchor="middle" class="mvclock">08:50</text><line x1="198" y1="90" x2="198" y2="136" stroke="${VC.ink}" stroke-width="3"/>
   <rect x="420" y="50" width="96" height="40" rx="8" fill="#fff" stroke="${VC.ink}" stroke-width="3"/><text x="468" y="78" text-anchor="middle" class="mvclock">09:00</text><line x1="468" y1="90" x2="468" y2="136" stroke="${VC.past}" stroke-width="4"/>
   <line x1="198" y1="120" x2="468" y2="120" stroke="${VC.pres}" stroke-width="4" stroke-dasharray="7 6"/>${bubble(198,168,"IN TIME : en avance",VC.pres)}${bubble(468,205,"ON TIME : pile à l'heure",VC.past)}${tag(468,30,"le rendez-vous",VC.mut)}</svg>`
   +vEx([[VC.pres,`I arrived ${H("in time","#1A6FB0")} to get a coffee before the meeting.`],[VC.past,`The demo started ${H("on time","#C9461A")}, at 9:00 sharp.`]]),
 prepmove:()=>`<div class="mvprep">${PREPS.map(([p,c,ico,ex])=>`<div class="mvp" style="--c:${c}"><svg viewBox="0 0 64 48" class="mvpi">${ico}</svg><div><span class="mvpt">${p}</span><div class="en say">${ex.replace(new RegExp("\\b"+p+"\\b","i"),m=>`<b>${m}</b>`)}</div></div></div>`).join("")}</div>`,
};
/* little pictograms for movement prepositions */
const AR=(d,c)=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
const HEAD=(x,y,a,c)=>`<path d="M0 -7L12 0L0 7z" fill="${c}" transform="translate(${x} ${y}) rotate(${a})"/>`;
const BOX=`<rect x="34" y="12" width="24" height="24" rx="3" fill="#FFE2B8" stroke="#B8400F" stroke-width="2"/>`;
const PREPS=[
 ["to","#C3342A",`${AR("M6 24H38","#C3342A")}${HEAD(38,24,0,"#C3342A")}<circle cx="54" cy="24" r="8" fill="none" stroke="#C3342A" stroke-width="3"/>`,"I'm going to the CES."],
 ["from","#1D56C9",`<circle cx="12" cy="24" r="8" fill="none" stroke="#1D56C9" stroke-width="3"/>${AR("M22 24H50","#1D56C9")}${HEAD(50,24,0,"#1D56C9")}`,"The guide comes from Lyon."],
 ["into","#16794B",`${BOX}${AR("M4 24H40","#16794B")}${HEAD(40,24,0,"#16794B")}`,"Get into the taxi."],
 ["out of","#E8A400",`${BOX}${AR("M44 24H60","#E8A400")}${HEAD(58,24,0,"#E8A400")}`,"We got out of the taxi."],
 ["on","#E2551F",`<rect x="10" y="32" width="44" height="8" rx="2" fill="#B8400F"/>${AR("M32 4V22","#E2551F")}${HEAD(32,24,90,"#E2551F")}`,"Put the tickets on the table."],
 ["off","#7536B0",`<rect x="6" y="32" width="30" height="8" rx="2" fill="#7536B0" opacity=".5"/>${AR("M22 26H44Q54 26 54 36","#7536B0")}${HEAD(54,40,90,"#7536B0")}`,"Get off the bus here."],
 ["up","#1D56C9",`<path d="M6 42L40 8L58 42z" fill="#E6EEFF" stroke="#1D56C9" stroke-width="2"/>${AR("M10 38L28 18","#1D56C9")}${HEAD(30,16,-45,"#1D56C9")}`,"We walked up the hill."],
 ["down","#A86200",`<path d="M6 42L24 8L58 42z" fill="#FFF0CF" stroke="#A86200" stroke-width="2"/>${AR("M32 16L50 36","#A86200")}${HEAD(52,38,45,"#A86200")}`,"He ran down the stairs."],
 ["along","#A86200",`<rect x="4" y="34" width="56" height="8" rx="2" fill="#FFF0CF" stroke="#A86200" stroke-width="2"/>${AR("M6 22H50","#A86200")}${HEAD(50,22,0,"#A86200")}`,"We walked along the river."],
 ["through","#1D56C9",`<path d="M22 8h20v32H22z" fill="#E6EEFF" stroke="#1D56C9" stroke-width="2"/>${AR("M4 24H52","#1D56C9")}${HEAD(52,24,0,"#1D56C9")}`,"The bus drove through the tunnel."],
 ["across","#7536B0",`<rect x="24" y="4" width="16" height="40" fill="#BFD1F7"/>${AR("M4 24H52","#7536B0")}${HEAD(52,24,0,"#7536B0")}`,"We walked across the bridge."],
 ["towards","#E2551F",`${AR("M4 24H28","#E2551F")}${HEAD(28,24,0,"#E2551F")}<circle cx="44" cy="24" r="3" fill="#E2551F"/><circle cx="54" cy="24" r="3" fill="#E2551F"/>`,"He walked towards me."],
 ["over","#E8A400",`<rect x="24" y="28" width="16" height="16" fill="#FFE2B8" stroke="#B8400F" stroke-width="2"/>${AR("M8 40Q32 0 54 36","#E8A400")}${HEAD(55,38,70,"#E8A400")}`,"We flew over the mountains."],
 ["under","#16794B",`<path d="M8 20Q32 2 56 20" fill="none" stroke="#16794B" stroke-width="4"/>${AR("M4 34H52","#16794B")}${HEAD(52,34,0,"#16794B")}`,"We drove under the bridge."],
 ["around","#1D56C9",`<circle cx="32" cy="24" r="14" fill="none" stroke="#1D56C9" stroke-width="5" stroke-dasharray="20 8"/>${HEAD(46,22,90,"#1D56C9")}`,"We walked around the old town."],
 ["past","#C3342A",`<circle cx="32" cy="12" r="6" fill="#C3342A"/><rect x="28" y="18" width="8" height="12" rx="3" fill="#C3342A"/>${AR("M4 40H52","#C3342A")}${HEAD(52,40,0,"#C3342A")}`,"The bus drove past our hotel."],
];
Object.assign(MEMOS,{
 prepmove:{t:"Prépositions de mouvement",tense:"prep",quand:["Elles disent <b>où va</b> quelqu'un ou quelque chose : la direction du mouvement.","Elles suivent un verbe de mouvement : go, walk, drive, run, get, fly, put…"],
  forme:[["Direction","go / walk / drive + <b>to / towards / into / across…</b> + lieu","I walked <b>across</b> the street."],["Monter / descendre","get <b>on / off</b> (bus, train, avion) · get <b>into / out of</b> (voiture, taxi)","Get <b>off</b> the bus here."],["Passer","<b>through</b> (dedans) · <b>over</b> (au-dessus) · <b>under</b> (dessous) · <b>past</b> (devant, sans s'arrêter)","We drove <b>through</b> the tunnel."]],
  indices:"to, from, into, out of, on, off, up, down, along, through, across, towards, over, under, around, past",
  pieges:["<b>go to</b> un lieu, mais <b>go home</b> (sans to).","Bus, train, avion : <b>on / off</b>. Voiture, taxi : <b>into / out of</b>.","<b>arrive in</b> une ville / <b>arrive at</b> un lieu précis : jamais <i>arrive to</i>."],
  ex:["We flew from Lyon to Las Vegas.","Get into the taxi, please.","The guide walked us across the old town."]},
 ininto:{t:"In ou into ?",tense:"prep",quand:["<b>in</b> = la position : où se trouve la chose (pas de mouvement).","<b>into</b> = le mouvement : la chose entre à l'intérieur."],
  forme:[["Position","be / stay / sit + <b>in</b>","The keys are <b>in</b> the car."],["Mouvement","go / put / get / walk + <b>into</b>","She walked <b>into</b> the room."]],
  indices:"in the box, in the car · into the box, into the car",
  pieges:["Avec un verbe de mouvement, pense <b>into</b> : <i>Get into the car</i>.","Pour sortir : <b>out of</b> : <i>Get out of the car</i>."],
  ex:["The ball is in the box.","He put the ball into the box."]},
 intime:{t:"In time ou on time ?",tense:"prep",quand:["<b>on time</b> = pile à l'heure prévue (ponctuel).","<b>in time</b> = assez tôt, avant l'heure limite (avec de la marge)."],
  forme:[["Ponctuel","<b>on time</b>","The meeting started <b>on time</b>."],["Avant la limite","<b>in time</b> (to + verbe / for + nom)","I arrived <b>in time</b> for the demo."]],
  indices:"on time = à l'heure · in time = à temps",
  pieges:["<b>just in time</b> = juste à temps.","Le contraire de <i>on time</i> : <b>late</b>."],
  ex:["Our flight left on time.","We got to the airport just in time."]},
});
MEMO_ORDER.unshift(["ininto",/\binto\b.*\bin\b|\bin\b.*\binto\b|in ou into|in vs into/],["intime",/\b(in|on) time\b/],["prepmove",/préposition|\b(into|out of|across|through|towards|along|past)\b/]);
