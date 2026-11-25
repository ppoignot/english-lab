
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

/* ============ SMALL RULES : one memo + one picture for each ============ */
/* generic visual: coloured cards with a big word, a picto and an example */
const vCards=(cards,cols)=>`<div class="mvcards" style="--cols:${cols||cards.length}">${cards.map(c=>`<div class="mvc" style="--c:${c.c}">${c.ico?`<svg viewBox="0 0 64 48" class="mvpi">${c.ico}</svg>`:""}<div class="mvbig${String(c.w).replace(/<[^>]+>/g,"").length>7?" sm":""}">${c.w}</div>${c.s?`<div class="mvsub">${c.s}</div>`:""}${c.ex?`<div class="en say mvs">${c.ex}</div>`:""}</div>`).join("")}</div>`;
const vTable=(head,rows,colors)=>`<div class="mvtab"><table><tr>${head.map((h,i)=>`<th style="background:${colors[i]||VC.ink}">${h}</th>`).join("")}</tr>${rows.map(r=>`<tr>${r.map((x,i)=>`<td class="${i?"en":""}" style="--c:${colors[i]||VC.ink}">${x}</td>`).join("")}</tr>`).join("")}</table></div>`;
const vScale=(items,title)=>`<div class="mvscale">${title?`<div class="mvsub">${title}</div>`:""}<div class="mvbar">${items.map(([w,p,c])=>`<div style="--c:${c}"><b>${w}</b><span>${p}</span></div>`).join("")}</div></div>`;
const G1="#1A6FB0",G2="#C9461A",G3="#7E3BB8",G4="#16794B",G5="#A86200";
const PIC={
 dot:`<circle cx="32" cy="24" r="9" fill="${G2}"/><circle cx="32" cy="24" r="16" fill="none" stroke="${G2}" stroke-width="2" stroke-dasharray="4 3"/>`,
 surf:`<rect x="8" y="30" width="48" height="8" rx="2" fill="${G1}"/><circle cx="32" cy="22" r="8" fill="#fff" stroke="${VC.ink}" stroke-width="3"/>`,
 box:`<path d="M12 16h40v26H12z" fill="#FFE2B8" stroke="${G3}" stroke-width="3"/><circle cx="32" cy="30" r="8" fill="#fff" stroke="${VC.ink}" stroke-width="3"/>`,
 clock:`<circle cx="32" cy="24" r="17" fill="#fff" stroke="${VC.ink}" stroke-width="3"/><path d="M32 13v11l8 5" stroke="${G2}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
 cal:`<rect x="14" y="8" width="36" height="34" rx="4" fill="#fff" stroke="${VC.ink}" stroke-width="3"/><rect x="14" y="8" width="36" height="10" fill="${G1}"/><text x="32" y="37" text-anchor="middle" font-size="15" font-weight="800" fill="${VC.ink}">3</text>`,
 year:`<rect x="10" y="10" width="44" height="30" rx="5" fill="#F2E8FC" stroke="${G3}" stroke-width="3"/><text x="32" y="31" text-anchor="middle" font-size="13" font-weight="800" fill="${G3}">2027</text>`,
};
Object.assign(MEMO_VIS,{
 prepplace:()=>vCards([{w:"at",c:G2,ico:PIC.dot,s:"un point, une adresse, un lieu d'événement",ex:"at the airport · at CES · at home"},{w:"on",c:G1,ico:PIC.surf,s:"une surface, une ligne",ex:"on the table · on the 3rd floor · on the map"},{w:"in",c:G3,ico:PIC.box,s:"à l'intérieur, une ville, un pays",ex:"in the car · in Lyon · in the USA"}],3),
 preptime:()=>`<div class="mvpyr"><div style="--c:${G3};width:100%"><b>IN</b><span>mois · années · saisons · moments de la journée</span><i class="en">in January · in 2027 · in the morning</i></div><div style="--c:${G1};width:82%"><b>ON</b><span>jours · dates</span><i class="en">on Monday · on 3 January · on my birthday</i></div><div style="--c:${G2};width:64%"><b>AT</b><span>heures précises · moments fixes</span><i class="en">at 9:30 · at night · at the weekend</i></div></div><p class="mvnote">Du plus large (IN) au plus précis (AT).</p>`,
 forsince:()=>tlFrame(`<rect x="110" y="114" width="210" height="18" rx="9" fill="${G1}" opacity=".85"/>${flag(110,G2,"since 2019")}${bubble(215,78,"for 7 years",G1)}${cross(70,G3)}${tag(70,96,"10 years ago",G3)}`)
   +vEx([[G2,`I have worked at Ryo ${H("since","#C9461A")} 2019. (point de départ)`],[G1,`I have worked at Ryo ${H("for","#1A6FB0")} seven years. (durée)`],[G3,`I started ten years ${H("ago","#7E3BB8")}. (il y a → past simple)`]]),
 verbprep:()=>vCards([["listen to",G1],["wait for",G2],["look at",G3],["talk to / about",G4],["depend on",G5],["pay for",G1],["ask for",G2],["think about",G3],["arrive in / at",G4],["agree with",G5]].map(([w,c])=>({w:`<span class="en" style="font-size:.75em">${w}</span>`,c})),2),
 articles:()=>vCards([{w:"a / an",c:G1,s:"un, une : la 1re fois, un parmi d'autres · <b>an</b> devant un son voyelle",ex:"a tour · an app · an hour"},{w:"the",c:G2,s:"le, la, les : une chose précise, déjà connue",ex:"the app I told you about"},{w:"Ø",c:G3,s:"pas d'article : généralités, pluriels, noms de villes, de repas",ex:"I love Ø cities. Ø Lunch is at one."}],3),
 countable:()=>vTable(["","Comptable (tours, people)","Indénombrable (time, money)"],[["Beaucoup","many · a lot of","much · a lot of"],["Quelques / un peu","a few","a little"],["Affirmatif","some tours","some time"],["Question / négatif","any tours?","any time?"],["Combien ?","How many…?","How much…?"]],[VC.ink,G1,G2]),
 comparatives:()=>vTable(["Adjectif","Comparatif","Superlatif"],[["court : cheap","cheap<b>er</b> than","the cheap<b>est</b>"],["en -y : easy","eas<b>ier</b> than","the eas<b>iest</b>"],["long : expensive","<b>more</b> expensive than","the <b>most</b> expensive"],["good","<b>better</b> than","the <b>best</b>"],["bad","<b>worse</b> than","the <b>worst</b>"],["far","<b>further</b> than","the <b>furthest</b>"]],[VC.ink,G1,G3])+`<p class="mvnote">Égalité : <span class="en">as cheap <b>as</b></span> · infériorité : <span class="en"><b>not as</b> cheap <b>as</b></span></p>`,
 pronouns:()=>vTable(["Sujet","Complément","Possessif + nom","Possessif seul"],[["I","me","my bag","mine"],["you","you","your bag","yours"],["he","him","his bag","his"],["she","her","her bag","hers"],["it","it","its name","—"],["we","us","our bag","ours"],["they","them","their bag","theirs"]],[G1,G2,G3,G4])+`<p class="mvnote">Le <b>'s</b> : <span class="en">Pierre-Olivier<b>'s</b> app · the client<b>'s</b> office · my parents<b>'</b> house</span></p>`,
 thereis:()=>vCards([{w:"there is",c:G1,s:"il y a + singulier / indénombrable",ex:"There is a bus at nine. There isn't any time."},{w:"there are",c:G3,s:"il y a + pluriel",ex:"There are three guides. Are there any seats?"},{w:"there was / were",c:G2,s:"il y avait",ex:"There were a lot of people at CES."}],3),
 adverbfreq:()=>vScale([["always","100 %",G4],["usually","80 %",G1],["often","60 %",G1],["sometimes","40 %",G5],["rarely","10 %",G2],["never","0 %",G2]],"Place : avant le verbe, mais après be")+vEx([[G1,`I ${H("usually","#1A6FB0")} work from home.`],[G2,`She ${H("is","#C9461A")} ${H("always","#16794B")} on time.`]]),
 plurals:()=>vTable(["Règle","Pluriel / he-she-it","Exemples"],[["cas général","+ s","tour → tours · work → works"],["-s, -sh, -ch, -x, -o","+ es","bus → buses · watch → watches · go → goes"],["consonne + y","y → ies","city → cities · study → studies"],["voyelle + y","+ s","day → days · play → plays"],["irréguliers","—","man → men · person → people · child → children"]],[VC.ink,G1,G3]),
 spelling:()=>vTable(["Règle","-ing","-ed"],[["cas général","work → working","work → worked"],["e muet","make → making","like → liked"],["1 voyelle + 1 consonne (accent)","run → running · stop → stopping","stop → stopped · plan → planned"],["-ie / consonne + y","lie → lying","study → studied"],["voyelle + y","play → playing","play → played"]],[VC.ink,G1,G2]),
 modals:()=>vScale([["must / have to","obligation",G2],["should","conseil",G5],["can","possibilité, capacité",G1],["may / might","peut-être",G3],["don't have to","pas obligé",G4],["mustn't","interdit",G2]])+vEx([[G2,`I ${H("have to","#C9461A")} renew my passport.`],[G5,`You ${H("should","#A86200")} book the hotel now.`],[G1,`${H("Can","#1A6FB0")} I pay by card?`]])+`<p class="mvnote">Après un modal : verbe de base, sans to, sans -s : <span class="en">She can speak</span> (jamais <i>cans</i>, <i>can to</i>).</p>`,
 makedo:()=>vCards([{w:"make",c:G2,s:"fabriquer, créer, produire un résultat",ex:"make a decision · make money · make a call · make a mistake · make a plan"},{w:"do",c:G1,s:"faire une activité, une tâche, un travail",ex:"do business · do a job · do homework · do a test · do my best"}],2),
 saytell:()=>vCards([{w:"say",c:G1,s:"dire quelque chose (sans personne après)",ex:"He said (that) he was late. · say hello"},{w:"tell",c:G2,s:"dire À quelqu'un : tell + personne",ex:"He told me he was late. · tell a story"},{w:"speak",c:G3,s:"parler une langue, prendre la parole",ex:"I speak English. Can I speak to the manager?"},{w:"talk",c:G4,s:"discuter, avoir une conversation",ex:"Let's talk about the project."}],2),
 verbing:()=>vCards([{w:"verbe + -ing",c:G1,s:"enjoy, finish, mind, avoid, suggest, keep, like / love / hate",ex:"I enjoy travelling. We finished testing."},{w:"verbe + to",c:G2,s:"want, need, decide, plan, hope, would like, try, forget",ex:"I want to visit Vegas. We decided to launch."},{w:"préposition + -ing",c:G3,s:"after, before, about, interested in, good at…",ex:"I'm interested in learning. Before leaving…"}],3),
 shortans:()=>vTable(["Question","Oui","Non"],[["Do you work…?","Yes, I do.","No, I don't."],["Does she…?","Yes, she does.","No, she doesn't."],["Did you…?","Yes, I did.","No, I didn't."],["Are you…?","Yes, I am.","No, I'm not."],["Was it…?","Yes, it was.","No, it wasn't."],["Have you…?","Yes, I have.","No, I haven't."],["Will you…?","Yes, I will.","No, I won't."],["Can you…?","Yes, I can.","No, I can't."]],[VC.ink,G4,G2])+`<p class="mvnote">On reprend l'auxiliaire de la question : c'est très naturel à l'oral.</p>`,
 polite:()=>vCards([{w:"I'd like…",c:G1,s:"je voudrais (commander, demander)",ex:"I'd like a table for four, please."},{w:"Could you…?",c:G3,s:"pourriez-vous… (demander un service)",ex:"Could you call a taxi, please?"},{w:"Can I have…?",c:G4,s:"est-ce que je peux avoir…",ex:"Can I have the bill, please?"},{w:"Would you like…?",c:G2,s:"voulez-vous… (proposer)",ex:"Would you like a demo of the app?"}],2),
 firstcond:()=>`<div class="mvif"><div style="--c:${G1}"><b>If</b> + présent</div><span>→</span><div style="--c:${G3}"><b>will</b> + verbe</div></div>`+vEx([[G1,`${H("If","#1A6FB0")} the flight ${H("is","#1A6FB0")} late, I ${H("will call","#7E3BB8")} you.`],[G3,`We ${H("will meet","#7E3BB8")} them ${H("if","#1A6FB0")} we ${H("have","#1A6FB0")} time.`]])+`<p class="mvnote">Jamais <i>will</i> après if : <span class="en">If it rains</span> (pas <i>if it will rain</i>). Pareil après <b>when</b> au futur : <span class="en">When I arrive, I'll text you.</span></p>`,
 timedates:()=>vCards([{w:"9:00",c:G1,ico:PIC.clock,s:"nine o'clock",ex:"at nine (o'clock)"},{w:"9:15",c:G4,s:"(a) quarter past nine",ex:"nine fifteen"},{w:"9:30",c:G5,s:"half past nine",ex:"nine thirty"},{w:"9:45",c:G2,s:"(a) quarter to ten",ex:"nine forty-five"},{w:"3 Jan",c:G3,ico:PIC.cal,s:"the third of January",ex:"on January 3rd"},{w:"2027",c:G3,ico:PIC.year,s:"twenty twenty-seven",ex:"in 2027"}],3)+`<p class="mvnote">a.m. = matin · p.m. = après-midi / soir : <span class="en">The flight leaves at 6 p.m.</span></p>`,
});
const MEMO_GROUPS=[["Les temps",["pressimple","prescont","presperfect","pastsimple","pastcont","pastperfect","will","goingto","futcont","futperfect"]],
 ["Phrases et questions",["questions","shortans","bepast","thereis","polite","firstcond"]],
 ["Prépositions",["prepplace","preptime","prepmove","ininto","intime","forsince","verbprep"]],
 ["Mots : articles, quantités, comparaisons",["articles","countable","comparatives","pronouns","adverbfreq","timedates"]],
 ["Verbes et orthographe",["modals","makedo","saytell","verbing","plurals","spelling"]]];
const M=(t,g,quand,forme,indices,pieges,ex)=>({t,tense:g,quand,forme,indices,pieges,ex});
Object.assign(MEMOS,{
 prepplace:M("In / on / at (lieux)","prep",["<b>at</b> = un point précis, une adresse, un lieu d'événement.","<b>on</b> = une surface, une ligne, un étage.","<b>in</b> = à l'intérieur, une ville, un pays."],
  [["at","at + lieu-point","I'm <b>at</b> the airport."],["on","on + surface / étage","The office is <b>on</b> the 3rd floor."],["in","in + espace fermé / ville / pays","We stay <b>in</b> Las Vegas."]],"at home, at work, at the station · on the street, on the bus · in the car, in the room, in France",
  ["<b>in</b> the car / a taxi, mais <b>on</b> the bus / train / plane.","<b>at</b> home, <b>at</b> work (pas <i>in home</i>)."],["I'm at the hotel.","The keys are on the desk.","We live in Lyon."]),
 preptime:M("In / on / at (temps)","prep",["<b>at</b> + heure précise.","<b>on</b> + jour, date.","<b>in</b> + mois, année, saison, partie de la journée."],
  [["at","at + heure / night / the weekend","The demo is <b>at</b> 10."],["on","on + jour / date","We fly <b>on</b> Saturday."],["in","in + mois / année / morning","CES is <b>in</b> January."]],"at 9, at noon, at night · on Monday, on 3 January · in May, in 2027, in the evening",
  ["Pas de préposition avec <b>next, last, this, every</b> : <i>next week, last Monday</i>.","<b>in</b> the morning, mais <b>on</b> Monday morning."],["See you on Monday at nine.","I was born in 1988."]),
 forsince:M("For / since / ago","prep",["<b>for</b> + durée (depuis 3 ans, pendant 2 heures).","<b>since</b> + point de départ (depuis 2019, depuis lundi).","<b>ago</b> = il y a (avec le past simple)."],
  [["for","present perfect + for + durée","I've lived here <b>for</b> ten years."],["since","present perfect + since + date","I've lived here <b>since</b> 2016."],["ago","past simple + durée + ago","I moved here ten years <b>ago</b>."]],"for two hours, for a week · since Monday, since 2019 · two days ago",
  ["« J'habite ici depuis 10 ans » → <i>I <b>have lived</b> here for ten years</i> (pas <i>I live here since</i>).","<b>ago</b> se place après la durée et va avec le past simple."],["We have known each other for years.","I met him two years ago."]),
 verbprep:M("Verbes + préposition","prep",["Certains verbes sont toujours suivis de la même préposition : il faut les apprendre ensemble."],
  [["Écouter / attendre","listen <b>to</b> · wait <b>for</b>","I'm waiting <b>for</b> the taxi."],["Regarder / parler","look <b>at</b> · talk <b>to</b> someone <b>about</b> something","Let's talk <b>about</b> the price."],["Dépendre / payer / demander","depend <b>on</b> · pay <b>for</b> · ask <b>for</b>","It depends <b>on</b> the client."]],"listen to, wait for, look at, look for, talk to, talk about, depend on, pay for, ask for, think about, agree with, arrive in / at",
  ["<b>arrive in</b> une ville, <b>arrive at</b> un lieu précis, jamais <i>arrive to</i>.","<b>look for</b> = chercher, <b>look at</b> = regarder."],["Can you wait for me?","I agree with you."]),
 articles:M("Articles : a / an / the / Ø","mots",["<b>a / an</b> : une chose parmi d'autres, la première fois qu'on en parle.","<b>the</b> : une chose précise, connue.","<b>Ø</b> (rien) : les généralités et les pluriels en général."],
  [["a / an","a + son consonne · an + son voyelle","a city · an app · an hour · a university"],["the","the + chose précise","The app is free."],["Ø","généralités, villes, pays, repas","I love Ø travel. Ø Paris is beautiful."]],"a, an, the, (rien)",
  ["Métier : <i>I am <b>a</b> CEO</i> (l'article est obligatoire).","Pas de <b>the</b> devant les généralités : <i>Ø People love audio tours.</i>"],["I have a meeting at the office.","She is an engineer."]),
 countable:M("Much / many / some / any","mots",["Comptable (on peut compter : tours, people) ou indénombrable (time, money, information, advice)."],
  [["Beaucoup","many + comptable · much + indénombrable · a lot of (les deux)","How <b>many</b> cities? How <b>much</b> time?"],["Quelques","a few + comptable · a little + indénombrable","a <b>few</b> days · a <b>little</b> time"],["Some / any","some (affirmatif) · any (question, négatif)","Do you have <b>any</b> questions?"]],"many, much, a lot of, a few, a little, some, any, how many, how much",
  ["<b>information, advice, news, money, luggage</b> n'ont pas de pluriel : <i>some information</i>.","<b>some</b> dans une offre : <i>Would you like some coffee?</i>"],["How much does it cost?","There aren't many people today."]),
 comparatives:M("Comparatifs et superlatifs","mots",["Comparer deux choses (plus… que) ou la meilleure de toutes (le plus…)."],
  [["Adjectif court","-er than · the -est","cheaper than · the cheapest"],["Adjectif long","more … than · the most …","more expensive · the most expensive"],["Irréguliers","good → better → the best · bad → worse → the worst","Ryo is <b>the best</b> app!"]],"than, the most, as … as, not as … as",
  ["Jamais <i>more cheaper</i> : soit -er, soit more.","Après un comparatif : <b>than</b> (pas <i>that</i>)."],["This hotel is cheaper than the other one.","It's the biggest show in the world."]),
 pronouns:M("Pronoms et possessifs","mots",["Sujet (I), complément (me), possessif devant un nom (my), possessif seul (mine).","<b>'s</b> pour dire « de quelqu'un »."],
  [["Sujet → complément","I → me · he → him · she → her · we → us · they → them","Call <b>me</b> tomorrow."],["Possessif + nom","my · your · his · her · its · our · their","<b>Their</b> office is in Lyon."],["Possessif seul","mine · yours · his · hers · ours · theirs","This bag is <b>mine</b>."]],"me, him, her, us, them · my, his, her, their · mine, yours · 's",
  ["<b>his</b> = à lui, <b>her</b> = à elle (selon le possesseur, pas l'objet).","<b>its</b> (possessif) ≠ <b>it's</b> (it is)."],["I gave him my card.","Is this phone yours?"]),
 thereis:M("There is / there are","phrases",["Pour dire « il y a »."],
  [["Singulier","there is (there's) + singulier","There's a bus at nine."],["Pluriel","there are + pluriel","There are two guides."],["Passé","there was / there were","There were many visitors."]],"there is, there are, there was, there were, is there…?, are there…?",
  ["Question : <b>Is there</b> a pharmacy near here?","Futur : <b>there will be</b>."],["Is there a restaurant in the hotel?","There aren't any seats left."]),
 adverbfreq:M("Adverbes de fréquence","mots",["Dire à quelle fréquence on fait quelque chose."],
  [["Position","avant le verbe principal","I <b>often</b> travel."],["Avec be","après be","I am <b>always</b> late."],["Question","How often…?","How <b>often</b> do you go to Paris?"]],"always, usually, often, sometimes, rarely, never, every day, once a week",
  ["<b>never</b> est déjà négatif : <i>I never go</i> (pas <i>I don't never go</i>).","once, twice, three times a week."],["We usually start at nine.","He is never late."]),
 plurals:M("-s : pluriels et he / she / it","verbes",["Le même -s pour le pluriel des noms et pour he / she / it au présent simple."],
  [["Cas général","+ s","tours · works"],["-s -sh -ch -x -o","+ es","buses · watches · goes"],["consonne + y","→ ies","cities · studies"]],"he works, she goes, it costs · tours, cities, buses",
  ["Irréguliers : person → people, man → men, child → children.","have → <b>has</b>, do → <b>does</b>, go → <b>goes</b>."],["She works in Paris.","We visited three cities."]),
 spelling:M("Orthographe : -ing et -ed","verbes",["Petites règles pour écrire les verbes en -ing (continu) et en -ed (passé)."],
  [["e muet","on enlève le e devant -ing","make → making · write → writing"],["Consonne doublée","verbe court, 1 voyelle + 1 consonne","run → running · stop → stopped"],["y","consonne + y → ied ; voyelle + y → yed","study → studied · play → played"]],"making, running, writing, stopped, planned, studied",
  ["travel → travelling (anglais britannique).","Pas de doublement si 2 voyelles : wait → waiting."],["We are planning the launch.","She stopped at the hotel."]),
 modals:M("Modaux : can, must, should, have to","verbes",["Ils ajoutent un sens au verbe : capacité, obligation, conseil, possibilité."],
  [["Capacité / permission","can · could","<b>Can</b> I help you?"],["Obligation","must · have to · don't have to (pas obligé)","You <b>have to</b> check in online."],["Conseil","should · shouldn't","You <b>should</b> try the app."]],"can, could, must, have to, should, may, might",
  ["Après un modal : verbe de base, sans to, sans -s.","<b>mustn't</b> = interdit ≠ <b>don't have to</b> = pas obligé."],["You must show your passport.","We should leave now."]),
 makedo:M("Make ou do ?","verbes",["<b>make</b> = créer, produire. <b>do</b> = faire une activité, une tâche."],
  [["make","make + résultat","make a decision, make money, make a call, make a mistake, make an appointment"],["do","do + activité","do business, do a job, do homework, do sport, do the shopping"]],"make a plan, make a reservation · do a test, do your best",
  ["« Faire une erreur » = <b>make</b> a mistake.","« Faire du sport » = <b>do</b> sport."],["We made a decision.","I do business in the US."]),
 saytell:M("Say, tell, speak, talk","verbes",["<b>say</b> quelque chose · <b>tell</b> quelqu'un · <b>speak</b> une langue · <b>talk</b> = discuter."],
  [["say / tell","say (to someone) · tell + personne","He told <b>me</b> the price."],["speak / talk","speak English · talk to / about","Can I <b>speak</b> to Anna?"]],"say, said · tell, told · speak, spoke · talk",
  ["Jamais <i>say me</i> : <b>tell me</b>.","<b>tell</b> a story, a joke, the truth."],["She said it was fine.","Tell me about your company."]),
 verbing:M("Verbe + -ing ou verbe + to ?","verbes",["Après certains verbes : -ing. Après d'autres : to + verbe."],
  [["+ -ing","enjoy, finish, avoid, suggest, keep, mind","I enjoy <b>travelling</b>."],["+ to","want, need, decide, plan, hope, would like","I want <b>to visit</b> San Francisco."],["préposition + -ing","before, after, about, interested in","After <b>landing</b>, call me."]],"enjoy doing, finish doing · want to do, need to do, decide to do",
  ["<b>like / love</b> + -ing (en général) ; <b>would like</b> + to.","<b>I look forward to meeting you</b> (to + -ing)."],["We decided to launch in the US.","I'm interested in learning English."]),
 shortans:M("Réponses courtes","phrases",["À l'oral, on répond avec l'auxiliaire de la question : <i>Yes, I do. No, I didn't.</i>"],
  [["Présent","do / does · am / is / are","Do you like it? <b>Yes, I do.</b>"],["Passé","did · was / were","Did you go? <b>No, I didn't.</b>"],["Autres","have · will · can","Can you come? <b>Yes, I can.</b>"]],"Yes, I do · No, I don't · Yes, I did · No, I wasn't",
  ["On ne répond pas <i>Yes, I like</i> : <b>Yes, I do</b>."],["Are you ready? Yes, I am.","Have you finished? Not yet."]),
 polite:M("Demander poliment","phrases",["Formules utiles en voyage et en rendez-vous pro."],
  [["Commander","I'd like… / Can I have…, please?","<b>I'd like</b> a coffee, please."],["Demander un service","Could you…? / Would you mind + -ing?","<b>Could you</b> repeat, please?"],["Proposer","Would you like…? / Shall we…?","<b>Would you like</b> a demo?"]],"I'd like, could you, can I have, would you like, shall we",
  ["<b>I want</b> peut sembler brusque : préfère <b>I'd like</b>.","Toujours <b>please</b> et <b>thank you</b>."],["Could you call a taxi for me, please?","Would you like to see the app?"]),
 firstcond:M("If + présent, will","phrases",["Une condition réelle dans le futur : si…, alors…"],
  [["Condition","If + présent simple","<b>If</b> the flight <b>is</b> late…"],["Résultat","will + verbe de base","…I <b>will call</b> you."]],"if, when, as soon as, unless",
  ["Jamais <b>will</b> juste après if / when : <i>When I arrive, I'll text you.</i>"],["If you have time, we'll visit the site.","I'll call you when I land."]),
 timedates:M("L'heure et les dates","mots",["Dire l'heure, les dates et les années en anglais."],
  [["Heure","at + heure · half past · quarter past / to","at <b>half past</b> nine"],["Date","the 3rd of January · January 3rd","on <b>January 3rd</b>"],["Année","twenty twenty-seven","in <b>2027</b>"]],"o'clock, half past, quarter to, a.m., p.m., the first, the second, the third",
  ["Ordinaux : 1st first, 2nd second, 3rd third, 4th fourth…","Américains : mois avant le jour : 1/3 = January 3rd."],["The flight leaves at 6 p.m.","We arrive on January 3rd."]),
});
MEMO_ORDER.unshift(["forsince",/\b(for|since)\b.*\b(years?|months?|days?|20\d\d)\b|\bago\b|depuis/],["preptime",/\b(on|at|in) (monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|march|april|may|june|july|august|september|october|november|december|\d{1,2}(:\d\d)?|the morning|night)\b/],
 ["firstcond",/\bif\b.*\bwill\b|\bif it will\b/],["modals",/\b(must|should|have to|can't|cannot|could)\b/],["comparatives",/\b(than|the most|the best|the worst|cheaper|bigger|better|worse)\b/],["countable",/\b(much|many|a few|a little|any)\b/],["articles",/\b(a|an|the)\b article|article/],
 ["verbing",/\b(enjoy|finish|avoid|suggest|want to|need to|decide)\b/],["saytell",/\b(said|told|say|tell)\b/],["makedo",/\b(make|made|do) (a |an )?(decision|mistake|money|business|homework|job)\b/],["thereis",/\bthere (is|are|was|were)\b/],["shortans",/\byes, (i|she|he|we|they) |no, (i|she|he|we|they) /]);
