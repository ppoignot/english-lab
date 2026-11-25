/* ============ COURS 6, 7, 8 et 10 (Suivi des cours, version 3) + leurs visuels ============
   Chargé après app.js et memovis.js : ajoute les cours, exercices, devoirs, phrases du mode voiture,
   mémos et schémas. Les cours futurs restent verrouillés jusqu'à leur date (13 h). */

/* ---------- pictos ---------- */
const P7={
 belt:`<rect x="4" y="36" width="56" height="8" rx="4" fill="#7D685D"/><circle cx="12" cy="40" r="2" fill="#fff"/><circle cx="52" cy="40" r="2" fill="#fff"/>`,
 case:(x,y,c="#B8400F")=>`<rect x="${x}" y="${y}" width="20" height="15" rx="2" fill="#FFE2B8" stroke="${c}" stroke-width="2.5"/><path d="M${x+6} ${y}v-3h8v3" fill="none" stroke="${c}" stroke-width="2"/>`,
 man:(x,y,c)=>`<circle cx="${x}" cy="${y}" r="5" fill="${c}"/><rect x="${x-4}" y="${y+6}" width="8" height="12" rx="3" fill="${c}"/>`,
 door:(x,c)=>`<rect x="${x}" y="6" width="12" height="36" rx="2" fill="#F2E8FC" stroke="${c}" stroke-width="2.5"/>`,
};
const pic=(inner)=>`<svg viewBox="0 0 64 48" class="mvpi">${inner}</svg>`;
const OK7=`<span class="mvok">✓</span>`, KO7=`<span class="mvko">✗</span>`;
const VIS=k=>MEMO_VIS[k]?`<div class="mvis">${MEMO_VIS[k]()}</div>`:"";
const MBTN=(...ks)=>`<div class="row mvbtns">${ks.filter(k=>MEMOS[k]).map(k=>`<button class="btn small memobtn" data-memo="${k}">${ICON.book}<span>${esc(MEMOS[k].t)}</span></button>`).join("")}</div>`;

Object.assign(MEMO_VIS,{
 /* ---- articles : les 3 cercles + l'arbre comptable / indénombrable ---- */
 articles:()=>{const D=[[-42,-34],[0,-48],[42,-34],[-56,6],[0,0],[56,6],[-38,44],[0,48],[38,44]];
   const circ=(cx,c,mode)=>`<circle cx="${cx}" cy="112" r="88" fill="${c}" opacity=".08"/><circle cx="${cx}" cy="112" r="88" fill="none" stroke="${c}" stroke-width="4"/>`
     +D.map(([dx,dy],i)=>{const on=mode==="all"||i===4;return `<circle cx="${cx+dx}" cy="${112+dy}" r="${on?13:11}" fill="${on?c:"#DCCBBE"}" stroke="#fff" stroke-width="2"/>`}).join("")
     +(mode==="one"?`<circle cx="${cx}" cy="112" r="22" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="5 4"/><text x="${cx}" y="118" text-anchor="middle" class="mvb" style="font-size:16px">?</text>`:"")
     +(mode==="the"?`<path d="M${cx+70} 26 L${cx+20} 96" stroke="${VC.ink}" stroke-width="4" marker-end="url(#mvA6)"/>`:"");
   return `<svg class="mvsvg" viewBox="0 0 640 270" role="img" aria-label="a an : un parmi d'autres ; the : celui qu'on connaît ; rien : en général">
    <defs><marker id="mvA6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="${VC.ink}"/></marker></defs>
    ${circ(110,G1,"one")}${circ(320,G2,"the")}${circ(530,G3,"all")}
    <text x="110" y="232" text-anchor="middle" class="mvt" style="font-size:30px" fill="${G1}">A / AN</text><text x="110" y="260" text-anchor="middle" class="mvl" fill="${VC.mut}">un, parmi d'autres</text>
    <text x="320" y="232" text-anchor="middle" class="mvt" style="font-size:30px" fill="${G2}">THE</text><text x="320" y="260" text-anchor="middle" class="mvl" fill="${VC.mut}">celui qu'on connaît</text>
    <text x="530" y="232" text-anchor="middle" class="mvt" style="font-size:30px" fill="${G3}">Ø</text><text x="530" y="260" text-anchor="middle" class="mvl" fill="${VC.mut}">en général</text></svg>`
   +vEx([[G1,`I booked ${H("a","#1A6FB0")} room near the station. <small>(nouveau)</small>`],[G2,`${H("The","#C9461A")} room has a desk. <small>(on sait laquelle)</small>`],[G3,`${H("Ø","#7E3BB8")} Hotels usually provide towels. <small>(en général)</small>`]])
   +vTable(["Le nom","Pas précis : nouveau ou général","Précis : on sait lequel"],[["Comptable singulier","<b>a</b> sensor · <b>an</b> adapter","<b>the</b> sensor"],["Comptable pluriel","<b>Ø</b> sensors","<b>the</b> sensors"],["Indénombrable","<b>Ø</b> software · <b>Ø</b> information","<b>the</b> software"]],[VC.ink,G1,G2])},
 /* ---- a ou an : le son ---- */
 aan:()=>{const L="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),V="AEFHILMNORSX";
   return `<div class="mvgrid2"><div class="mvbox" style="--c:${G1}"><div class="mvpr">son CONSONNE</div><div class="mvbig">a</div><div class="en mvs">a book · a car<br>a hotel<br>a <b>u</b>niversity</div></div>
    <div class="mvbox" style="--c:${G2}"><div class="mvpr">son VOYELLE</div><div class="mvbig">an</div><div class="en mvs">an app · an update<br>an office<br>an <b>h</b>our</div></div></div>
   <div class="mvwarn"><b>Attention : c'est le SON qui compte, pas la lettre écrite</b><div class="mvpairs en">
    <span>a <b>h</b>ouse</span><i>mais</i><span>an <b>h</b>our <small>« ow-er »</small></span>
    <span>an <b>u</b>ncle</span><i>mais</i><span>a <b>u</b>niversity <small>« you »</small></span>
    <span>an <b>o</b>nline demo</span><i>mais</i><span>a <b>E</b>uropean client <small>« you »</small></span>
    <span>a <b>h</b>otel</span><i>mais</i><span>an <b>h</b>onest reply <small>« aw-nest »</small></span></div></div>
   <div class="mvsub">Sigles : on épelle les lettres. Les lettres en orange se prononcent avec un son voyelle au début (A « ay », F « eff », H « eitch », M « em », S « ess », X « ex »…) → <b>an</b></div>
   <div class="mvabc">${L.map(l=>`<span class="${V.includes(l)?"v":""}">${l}</span>`).join("")}</div>
   <div class="mvchips en">${[["an","FBI agent"],["an","MRI"],["an","SMS"],["an","HDMI cable"],["an","X-ray"],["an","AI agent"],["an","FYI"],["a","USB cable"],["a","KPI"],["a","DIY project"],["a","CPA"],["a","CEO"]].map(([a,w])=>`<span class="${a}"><b>${a}</b> ${w}</span>`).join("")}</div>`},
 /* ---- in / on / at : la pyramide temps + lieu ---- */
 inonat:()=>{const xl=y=>320-150*(300-y)/280,xr=y=>320+150*(300-y)/280;
   const side=(rows,c)=>rows.map(([y,l,r])=>`<text x="${xl(y)-10}" y="${y}" text-anchor="end" class="mvside" fill="${c}">${l}</text><text x="${xr(y)+10}" y="${y}" class="mvside" fill="${c}">${r}</text>`).join("");
   return `<svg class="mvsvg" viewBox="0 0 640 310" role="img" aria-label="Pyramide inversée : IN le plus large, ON plus précis, AT très précis, pour le temps et les lieux">
    <polygon points="170,30 470,30 417,129 223,129" fill="${G3}"/><polygon points="223,129 417,129 367,212 273,212" fill="${G1}"/><polygon points="273,212 367,212 320,300" fill="${G2}"/>
    <text x="320" y="80" text-anchor="middle" class="mvb" style="font-size:38px">IN</text><text x="320" y="108" text-anchor="middle" class="mvb" style="font-size:16px">le plus large</text>
    <text x="320" y="170" text-anchor="middle" class="mvb" style="font-size:34px">ON</text><text x="320" y="195" text-anchor="middle" class="mvb" style="font-size:15px">plus précis</text>
    <text x="320" y="250" text-anchor="middle" class="mvb" style="font-size:28px">AT</text>
    <text x="16" y="20" class="mvl" fill="${VC.mut}">TEMPS</text><text x="624" y="20" text-anchor="end" class="mvl" fill="${VC.mut}">LIEUX</text>
    ${side([[54,"1988 · the 80s","France · Lyon"],[78,"January","Limonest"],[102,"the morning","the terminal"]],G3)}
    ${side([[150,"Monday","my street"],[174,"9th August","the 3rd floor"],[198,"my birthday","a shelf"]],G1)}
    ${side([[238,"9:15 · 4 p.m.","the gate"],[262,"night","home · work"]],G2)}</svg>`
   +vEx([[G3,`I was born ${H("in","#7E3BB8")} 1988. I live ${H("in","#7E3BB8")} Limonest, near Lyon.`],[G1,`My birthday is ${H("on","#1A6FB0")} the 9th of August. I live ${H("on","#1A6FB0")} Route du Puy d'Or.`],[G2,`I was born ${H("at","#C9461A")} 4 p.m. Meet me ${H("at","#C9461A")} the gate ${H("at","#C9461A")} 9:15.`]])},
 /* ---- by / until ---- */
 byuntil:()=>`<svg class="mvsvg" viewBox="0 0 640 262" role="img" aria-label="Until : ça continue jusqu'à 17 h. By : fini au plus tard à 17 h.">
   ${bubble(72,78,"UNTIL",G1)}<line x1="140" y1="70" x2="620" y2="70" stroke="${VC.ink}" stroke-width="3"/><rect x="150" y="61" width="320" height="18" rx="9" fill="${G1}"/>
   <line x1="470" y1="30" x2="470" y2="100" stroke="${VC.ink}" stroke-width="3"/><path d="M470 30l34 9l-34 9z" fill="${VC.ink}"/><text x="470" y="22" text-anchor="middle" class="mvt" fill="${VC.ink}">17:00</text>
   <text x="310" y="118" text-anchor="middle" class="mvside" fill="${G1}">ça continue… jusqu'à 17 h</text>
   ${bubble(72,198,"BY",G2)}<line x1="140" y1="190" x2="620" y2="190" stroke="${VC.ink}" stroke-width="3"/><rect x="470" y="168" width="150" height="44" fill="${G2}" opacity=".12"/>
   <circle cx="320" cy="190" r="15" fill="${G2}"/><path d="M312 190l6 6l11-12" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"/><g stroke="${G2}" stroke-width="6" stroke-linecap="round"><line x1="537" y1="179" x2="559" y2="201"/><line x1="559" y1="179" x2="537" y2="201"/></g>
   <line x1="470" y1="150" x2="470" y2="220" stroke="${VC.ink}" stroke-width="3"/><path d="M470 150l34 9l-34 9z" fill="${VC.ink}"/>
   <text x="320" y="246" text-anchor="middle" class="mvside" fill="${G2}">fini AU PLUS TARD à 17 h (date limite)</text></svg>`
   +vEx([[G1,`You have ${H("until","#1A6FB0")} 5 p.m. to do your homework. · Wait ${H("until","#1A6FB0")} 9:00.`],[G2,`Do your homework ${H("by","#C9461A")} 5 p.m. · Check in ${H("by","#C9461A")} 8:00.`]])
   +vTable(["Expression","Quand l'utiliser","Exemple"],[["before / after","l'ordre des actions","<b>before</b> boarding · <b>after</b> landing"],["from … to …","le début et la fin","<b>from</b> 8:00 <b>to</b> 9:00"],["since","point de départ jusqu'à maintenant","We've been waiting <b>since</b> 8:00."],["on time / in time","à l'heure pile / à temps","The train left <b>on time</b>."]],[VC.ink,G3,G1]),
 /* ---- for / during / while ---- */
 fordurwhile:()=>`<svg class="mvsvg" viewBox="0 0 640 190" role="img" aria-label="During : pendant le vol. For : pendant deux heures. While : pendant que.">
   <rect x="110" y="70" width="420" height="34" rx="17" fill="${G2}" opacity=".9"/><text x="320" y="94" text-anchor="middle" class="mvb">the flight ✈</text>
   <path d="M200 58 q10 -14 20 0 q10 14 20 0 q10 -14 20 0 q10 14 20 0 q10 -14 20 0 q10 14 20 0" fill="none" stroke="${G2}" stroke-width="5" stroke-linecap="round"/><text x="260" y="34" text-anchor="middle" class="mvside" fill="${G2}">I slept DURING the flight</text>
   <path d="M110 122 v12 h420 v-12" fill="none" stroke="${G1}" stroke-width="4"/><text x="320" y="164" text-anchor="middle" class="mvside" fill="${G1}">FOR two hours (la durée)</text>
   ${tag(590,94,"quand ?",VC.mut)}</svg>`
   +vCards([{w:"during",c:G2,ico:`<rect x="6" y="18" width="52" height="14" rx="7" fill="${G2}"/><circle cx="32" cy="12" r="5" fill="${VC.ink}"/>`,s:"QUAND ? + un événement, une période (un nom)",ex:"I slept during the flight."},
     {w:"for",c:G1,ico:`<path d="M20 6h24l-10 18l10 18H20l10-18z" fill="#E6EEFF" stroke="${G1}" stroke-width="3"/>`,s:"COMBIEN DE TEMPS ? + une durée",ex:"We waited for twenty minutes."},
     {w:"while",c:G3,ico:`<rect x="6" y="12" width="52" height="8" rx="4" fill="${G3}"/><rect x="6" y="28" width="52" height="8" rx="4" fill="${G3}" opacity=".55"/>`,s:"EN MÊME TEMPS + sujet + verbe",ex:"I checked the map while we were waiting."}],3),
 /* ---- position ou mouvement ---- */
 posmove:()=>{const it=(w,ico,ex,c)=>`<div class="mvp" style="--c:${c}">${pic(ico)}<div><span class="mvpt">${w}</span><div class="en say">${ex}</div></div></div>`;
   const R=[
    [[["on",P7.belt+P7.case(22,21),"The case is <b>on</b> the belt."]],[["onto",P7.belt+P7.case(4,4)+AR("M26 10Q40 8 40 22",G2)+HEAD(40,24,90,G2),"Lift the case <b>onto</b> the belt."]]],
    [[["next to",P7.case(8,22)+P7.case(34,22,G1),"The café is <b>next to</b> the lift."],["opposite",`<rect x="2" y="20" width="60" height="9" fill="#DCCBBE"/>`+P7.case(22,2)+P7.case(22,32,G1),"The lift is <b>opposite</b> the café."]],[["past",P7.case(22,6,G1)+AR("M4 38H52",G2)+HEAD(52,38,0,G2),"Walk <b>past</b> the café."]]],
    [[["between",P7.door(4,G3)+P7.door(48,G3)+P7.case(22,26,G1),"The desk is <b>between</b> two doors."],["under",`<rect x="8" y="12" width="48" height="6" fill="#7D685D"/><rect x="10" y="18" width="4" height="26" fill="#7D685D"/><rect x="50" y="18" width="4" height="26" fill="#7D685D"/>`+P7.case(22,27,G1),"The bag is <b>under</b> the table."]],
     [["through",P7.door(26,G3)+AR("M4 24H54",G2)+HEAD(54,24,0,G2),"Walk <b>through</b> the door."],["across",`<rect x="22" y="2" width="20" height="44" fill="#BFD1F7"/>`+AR("M4 24H54",G2)+HEAD(54,24,0,G2),"Walk <b>across</b> the hall."]]],
    [[["near",P7.case(10,22,G1)+P7.man(46,20,VC.ink),"The sign is <b>near</b> the desk."],["above",`<rect x="16" y="4" width="32" height="12" rx="2" fill="${G2}"/><text x="32" y="14" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">EXIT</text><rect x="12" y="30" width="40" height="14" fill="#7D685D"/>`,"The sign is <b>above</b> the desk."]],
     [["towards",P7.man(8,14,VC.ink)+AR("M18 24H42",G2)+HEAD(42,24,0,G2)+`<rect x="48" y="14" width="14" height="10" rx="2" fill="${G2}"/>`,"Walk <b>towards</b> the sign."]]],
   ];
   return `<div class="mvpm"><div class="mvpmh" style="--c:${G1}">POSITION<span>où c'est (be, stay, sit)</span></div><div class="mvpmh" style="--c:${G2}">MOUVEMENT<span>où ça va (walk, go, put, lift)</span></div>
    ${R.map(([a,b])=>`<div class="mvpmc">${a.map(x=>it(...x,G1)).join("")}</div><div class="mvpmc">${b.map(x=>it(...x,G2)).join("")}</div>`).join("")}</div>`
   +vTable(["Forme","Sens","Exemple"],[["to","la destination","Walk <b>to</b> the gate."],["into","vers l'intérieur","Walk <b>into</b> the terminal."],["onto","vers une surface","Put the case <b>onto</b> the belt."],["from / out of","le départ / la sortie","Come <b>from</b> the station. Walk <b>out of</b> the terminal."],["in / on","la position (pas de mouvement)","The case is <b>in</b> the locker. The laptop is <b>on</b> the belt."]],[VC.ink,G3,G2])},
 /* ---- itinéraire : le trajet jusqu'à la pharmacie (cours 7) ---- */
 directions:()=>{const n=(x,y,k)=>`<circle cx="${x}" cy="${y}" r="15" fill="${G2}" stroke="#fff" stroke-width="3"/><text x="${x}" y="${y+6}" text-anchor="middle" class="mvb" style="font-size:16px">${k}</text>`;
   return `<svg class="mvsvg" viewBox="0 0 640 420" role="img" aria-label="Plan : de la maison à la pharmacie">
    <rect width="640" height="420" rx="16" fill="#F4EFE8"/>
    <path d="M60 380 H200 V60" fill="none" stroke="#fff" stroke-width="34" stroke-linejoin="round"/><path d="M200 120 H420 V40" fill="none" stroke="#fff" stroke-width="34" stroke-linejoin="round"/>
    <path d="M360 120 V60 l20 -8" fill="none" stroke="#DCCBBE" stroke-width="0"/>
    <circle cx="200" cy="250" r="34" fill="#fff"/><circle cx="200" cy="250" r="16" fill="#9CCB8A"/>
    <rect x="30" y="345" width="40" height="34" fill="#FFE2B8" stroke="#B8400F" stroke-width="2.5"/><path d="M26 347 l24 -20 l24 20z" fill="#C9461A"/><text x="50" y="408" text-anchor="middle" class="mvside" fill="${VC.ink}">home</text>
    ${[300,330].map(y=>`<rect x="232" y="${y}" width="26" height="22" fill="#E6D7C9"/>`).join("")}<rect x="144" y="300" width="26" height="22" fill="#E6D7C9"/>
    <rect x="236" y="160" width="70" height="44" rx="4" fill="#BFD1F7" stroke="${G1}" stroke-width="2.5"/><text x="271" y="188" text-anchor="middle" style="font:800 14px var(--body)" fill="${G1}">POLICE</text>
    <rect x="182" y="118" width="12" height="30" rx="3" fill="${VC.ink}"/><circle cx="188" cy="124" r="3.5" fill="#E2551F"/><circle cx="188" cy="133" r="3.5" fill="#F5B400"/><circle cx="188" cy="142" r="3.5" fill="#16794B"/>
    <rect x="300" y="60" width="78" height="40" rx="4" fill="#F2E8FC" stroke="${G3}" stroke-width="2.5"/><text x="339" y="85" text-anchor="middle" style="font:800 13px var(--body)" fill="${G3}">MAIRIE</text>
    <rect x="462" y="58" width="60" height="44" fill="#fff" stroke="${VC.mut}" stroke-width="2.5"/><path d="M462 58 l30 -22 l30 22z" fill="${VC.mut}"/><path d="M492 66v18M484 72h16" stroke="${VC.ink}" stroke-width="3"/>
    <rect x="396" y="0" width="48" height="26" rx="4" fill="#16794B"/><path d="M420 4v18M411 13h18" stroke="#fff" stroke-width="5"/>
    <path d="M64 372 H192 V140 H412 V34" fill="none" stroke="${G2}" stroke-width="5" stroke-dasharray="10 7" stroke-linejoin="round"/>
    ${n(120,356,1)}${n(222,372,2)}${n(176,310,3)}${n(240,250,4)}${n(320,190,5)}${n(232,138,6)}${n(444,120,7)}${n(470,20,8)}
    <text x="600" y="210" text-anchor="end" class="mvside" fill="${VC.mut}">uphill ↑</text></svg>`
   +`<ol class="mvsteps en">${["I go <b>along</b> my alley.","I <b>turn right towards</b> Limonest centre.","I walk <b>along</b> the road and go <b>past</b> houses, trees and bus stops.","<b>At</b> the roundabout, I go <b>straight</b>.","The police station is <b>on my right</b>.","<b>At</b> the traffic light, I go <b>across</b> the street.","The street goes <b>uphill</b>. The Mayor's Office is <b>on my left</b>, the church is <b>on my right</b>.","The pharmacy is <b>at the top of</b> the street."].map(s=>`<li><span class="say">${s}</span></li>`).join("")}</ol>`},
 /* ---- comptable / indénombrable ---- */
 countunc:()=>{const row=(a,b)=>`<div class="mvcur"><span>${a}</span><b>→</b><span class="en">${b}</span></div>`;
   return `<div class="mvcu" style="--c:${G4}"><div class="mvcuh">COMPTABLE <small>on peut compter</small></div>${row("un singulier ET un pluriel","a ticket → two ticket<b>s</b>")}${row("verbe singulier ou pluriel","The ticket <b>is</b> ready. The tickets <b>are</b> ready.")}${row("a / an ou un nombre","<b>a</b> chair · <b>three</b> chairs")}</div>
   <div class="mvcu" style="--c:${G2}"><div class="mvcuh">INDÉNOMBRABLE <small>on ne compte pas directement</small></div>${row("pas de pluriel",`<s>luggages</s> → luggage`)}${row("toujours un verbe singulier","The information <b>is</b> online.")}${row("pas de a / an, pas de nombre",`<s>an advice</s> · <s>two equipments</s> → two <b>pieces of</b> equipment`)}</div>
   <div class="mvcats">${[["Idées (on ne les touche pas)",G3,"information · advice · feedback · progress · research · security · access · help · news"],["Ensembles, matériel",G1,"equipment · luggage · furniture · software · firmware · documentation · storage · bandwidth"],["Liquides, énergie, matières",G5,"water · coffee · electricity · paper · data"],["ATTENTION : indénombrables en anglais (pluriel en français)",G2,"information (des informations) · advice (des conseils) · luggage (des bagages) · equipment (du matériel) · furniture (des meubles) · news · feedback · research"]].map(([t,c,w])=>`<div style="--c:${c}"><b>${t}</b><span class="en">${w}</span></div>`).join("")}</div>`},
 /* ---- les 4 effets ---- */
 fourfx:()=>vTable(["Effet","Comptable : a ticket","Indénombrable : equipment"],[["1. L'article","<b>a</b> ticket · <b>the</b> ticket","<s>an equipment</s> → <b>the</b> equipment · <b>Ø</b> equipment"],["2. Le pluriel","two ticket<b>s</b>","<s>equipments</s> → equipment"],["3. La quantité","<b>many</b> · <b>a few</b> · <b>two</b> tickets","<b>much</b> · <b>a little</b> · two <b>pieces of</b> equipment"],["4. L'accord du verbe","The tickets <b>are</b> ready.","The equipment <b>is</b> ready."]],[VC.ink,G4,G2])
   +`<p class="mvnote">Un nombre va directement avec un nom comptable. Pour un indénombrable, on ajoute une unité : <span class="en">two <b>pieces of</b> equipment</span>.</p>`,
 /* ---- compter l'indénombrable ---- */
 units:()=>vCards([{w:"piece of",c:G2,ico:`<rect x="16" y="16" width="32" height="24" rx="4" fill="#FFE2B8" stroke="#B8400F" stroke-width="3"/><path d="M26 16v-6h12v6" fill="none" stroke="#B8400F" stroke-width="3"/>`,s:"luggage · advice · information · furniture · equipment",ex:"two pieces of luggage"},
   {w:"item of",c:G1,ico:`<rect x="10" y="10" width="44" height="30" rx="3" fill="#E6EEFF" stroke="${G1}" stroke-width="3"/><path d="M18 20h28M18 28h20" stroke="${G1}" stroke-width="3"/>`,s:"equipment · news · une liste",ex:"four items from the equipment list"},
   {w:"bottle of",c:G4,ico:`<path d="M27 4h10v8l6 8v24H21V20l6-8z" fill="#D7F0E3" stroke="${G4}" stroke-width="3"/>`,s:"water · wine",ex:"three bottles of water"},
   {w:"cup of",c:G5,ico:`<path d="M14 14h30v16a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12z" fill="#FFF0CF" stroke="${G5}" stroke-width="3"/><path d="M44 18h6a6 6 0 0 1 0 12h-6" fill="none" stroke="${G5}" stroke-width="3"/>`,s:"coffee · tea",ex:"a cup of coffee"},
   {w:"sheet of",c:G3,ico:`<path d="M18 4h22l8 8v32H18z" fill="#fff" stroke="${G3}" stroke-width="3"/>`,s:"paper",ex:"a sheet of paper"}],3),
 /* ---- quantifieurs : ✓ / ✗ ---- */
 countable:()=>vTable(["Mot","Sens","Comptable (tickets)","Indénombrable (time)"],[["many","beaucoup",OK7,KO7],["much","beaucoup (surtout ? et −)",KO7,OK7],["a lot of / lots of","beaucoup",OK7,OK7],["a few","quelques",OK7,KO7],["a little","un peu",KO7,OK7],["some","des, du (phrase +)",OK7,OK7],["any","des, du (? et −)",OK7,OK7],["How …?","combien ?","How <b>many</b>?","How <b>much</b>?"]],[VC.ink,VC.mut,G4,G2]),
 /* ---- collocations ---- */
 collocations:()=>`<div class="mvcoll">${[["MAKE",G2,["a booking","a decision"],["a mistake","a call","money","an appointment"]],["DO",G1,["research"],["business","a job","homework","my best"]],["TAKE",G3,["a tour","a break"],["a photo","a taxi","notes","time"]],["HAVE",G4,["a meeting","a problem"],["lunch","a call","a good time"]],["GIVE",G5,["a demonstration"],["a presentation","a talk","advice","feedback"]],["GET",VC.ink,[],["a ticket","a taxi","an email","a visa"]]]
   .map(([v,c,key,more])=>`<div class="mvcl" style="--c:${c}"><b>${v}</b><ul class="en">${key.map(x=>`<li class="k">${v.toLowerCase()} ${x}</li>`).join("")}${more.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}</div><p class="mvnote">En gras : les 8 expressions du cours. On les apprend en bloc (verbe + nom), jamais mot à mot depuis le français.</p>`,
});
/* la même pyramide pour les mémos « temps » et « lieux » */
MEMO_VIS.preptime=MEMO_VIS.inonat;
{const old=MEMO_VIS.prepplace;MEMO_VIS.prepplace=()=>MEMO_VIS.inonat()+old()}

Object.assign(MEMOS,{
 aan:M("A ou an ? (le son)","mots",["<b>a</b> devant un <b>son</b> consonne, <b>an</b> devant un <b>son</b> voyelle.","On écoute le premier son du mot qui suit, pas la première lettre."],
  [["Son consonne","a + son consonne","a book · a hotel · a university · a USB cable"],["Son voyelle","an + son voyelle","an app · an hour · an honest reply · an HDMI cable"],["Sigles","on épelle : A, E, F, H, I, L, M, N, O, R, S, X → an","an FBI agent · an MRI · an SMS · a KPI · a DIY project"]],
  "a · an · hour · honest · university · European · USB · HDMI",["h muet : <b>an</b> hour, <b>an</b> honest reply. h prononcé : <b>a</b> hotel.","u et eu qui sonnent « you » : <b>a</b> university, <b>a</b> European client, <b>a</b> USB cable.","Ça marche aussi avec un adjectif : <b>an</b> easy lesson, <b>a</b> very crazy person."],["We need an HDMI cable.","It's a USB cable.","I'll be back in an hour."]),
 inonat:M("In / on / at : temps et lieux","prep",["Du plus large au plus précis : <b>in</b> (grand), <b>on</b> (plus précis), <b>at</b> (très précis).","La même logique marche pour le temps et pour les lieux."],
  [["in","années, mois, périodes · pays, villes, quartiers, espaces fermés","in 1988 · in January · in Limonest · in the terminal"],["on","jours, dates · rues, surfaces, étages","on Monday · on 9th August · on Route du Puy d'Or · on a shelf"],["at","heures · adresses, points précis","at 9:15 · at the gate · at home"]],
  "in the 80s · on my birthday · at 4 p.m. · in France · on the street · at the airport",["in the morning, mais <b>on</b> Monday morning.","Pas de préposition avec next, last, this, every : <i>next week</i>."],["I was born in 1988, on the 9th of August, at 4 p.m.","I live in Limonest, near Lyon."]),
 byuntil:M("By ou until ?","prep",["<b>until</b> = jusqu'à : l'action continue jusqu'à ce moment.","<b>by</b> = au plus tard : une date limite, c'est fini avant."],
  [["until","action qui dure + until + moment","Wait <b>until</b> 9:00."],["by","action finie + by + date limite","Check in <b>by</b> 8:00."],["from … to","du début à la fin","open <b>from</b> nine <b>to</b> five"]],
  "until noon, until Friday · by noon, by Friday · from 8 to 9 · since 8:00",["« Tu as <b>jusqu'à</b> 17 h » = <i>You have <b>until</b> 5 p.m.</i> · « Fais-le <b>pour</b> 17 h » = <i>Do it <b>by</b> 5 p.m.</i>","<b>since</b> = depuis un point de départ jusqu'à maintenant (avec le present perfect)."],["Please send the updated route by noon.","We'll stay at the desk until noon."]),
 fordurwhile:M("For, during ou while ?","prep",["<b>for</b> + une durée : combien de temps ?","<b>during</b> + un nom (événement, période) : quand ?","<b>while</b> + sujet + verbe : deux choses en même temps."],
  [["for","for + durée","We waited <b>for</b> twenty minutes."],["during","during + nom","It rained <b>during</b> the flight."],["while","while + sujet + verbe","I checked the map <b>while</b> we were waiting."]],
  "for two hours, for a week · during the flight, during the night · while I was driving",["Jamais <i>during two hours</i> : <b>for</b> two hours.","Après <b>while</b>, il faut un sujet et un verbe : <i>while <b>we were</b> waiting</i>."],["I slept during the flight.","I walk for ten minutes to the pharmacy."]),
 posmove:M("Position ou mouvement ?","prep",["Position (où c'est) : on, in, next to, opposite, between, under, near, above.","Mouvement (où ça va) : onto, into, to, past, through, across, towards."],
  [["on → onto","position → mouvement vers une surface","The case is <b>on</b> the belt. Lift it <b>onto</b> the belt."],["next to / opposite → past","à côté, en face → passer devant","Walk <b>past</b> the café."],["between → through / across","entre → à travers, d'un côté à l'autre","Walk <b>through</b> the door and <b>across</b> the hall."],["near / above → towards","près, au-dessus → vers","Walk <b>towards</b> the sign."]],
  "on, onto, in, into, next to, opposite, past, between, through, across, near, above, towards",["Avec un verbe de mouvement (walk, put, lift, go), pense à la forme de mouvement : <i>put it <b>onto</b> the belt</i>.","<b>Walk to</b> the desk (pas <i>walk on</i>)."],["The meeting room is between the lift and the stairs.","Walk across the hall and go past the café."]),
 directions:M("Donner un itinéraire","prep",["Pour guider quelqu'un : un verbe de mouvement + une préposition + un repère."],
  [["Avancer","go straight · go along · go past","Go <b>past</b> the church."],["Tourner","turn right / left · at the roundabout · at the traffic light","<b>Turn right at</b> the traffic light."],["Situer","on my right / on your left · at the top of · opposite","The pharmacy is <b>on your left</b>."]],
  "go straight, turn right, turn left, along, past, across, towards, uphill, downhill, roundabout, traffic light",["<b>at</b> the roundabout, <b>at</b> the traffic light (un point précis).","Prononciation : <i>arrive</i> = « a-ryve »."],["At the roundabout, go straight.","The Mayor's Office is on my right."]),
 countunc:M("Comptable ou indénombrable ?","mots",["<b>Comptable</b> : on peut compter directement (a ticket, two tickets).","<b>Indénombrable</b> : pas de pluriel, verbe au singulier, pas de a / an (information, advice, equipment, luggage)."],
  [["Comptable","a / an · nombre · pluriel en -s","a ticket · two tickets"],["Indénombrable","Ø · some · the · verbe singulier","The information <b>is</b> online."],["Compter un indénombrable","a piece of / an item of + nom","two <b>pieces of</b> luggage"]],
  "information, advice, equipment, luggage, furniture, software, feedback, progress, research, news",["En français on dit <i>des informations, des conseils, des bagages</i>, mais en anglais : <b>information, advice, luggage</b> (jamais de s).","Jamais <i>an information</i> : <b>some information</b> ou <b>a piece of information</b>."],["The equipment is ready.","Can you give me some advice?"]),
 fourfx:M("Les 4 effets du dénombrable","mots",["Savoir si un nom est comptable change 4 choses : l'article, le pluriel, la quantité et le verbe."],
  [["1. Article","comptable : a / an · indénombrable : Ø ou the","a ticket · Ø equipment"],["2. Pluriel","comptable : -s · indénombrable : jamais de -s","tickets · equipment"],["3. Quantité","many, a few, deux · much, a little, two pieces of","two pieces of equipment"],["4. Verbe","pluriel → are · indénombrable → is","The equipment <b>is</b> ready."]],
  "a / an, -s, many / much, a few / a little, is / are",["Vérifie les 4 effets à chaque fois : <i>The <b>tickets are</b> ready, but the <b>equipment is</b> missing.</i>"],["The new chairs are in the meeting room.","The information about delivery is on the printed sheet."]),
 units:M("A piece of, an item of…","mots",["Pour compter un indénombrable, on ajoute une unité : <b>piece, item, bottle, cup, sheet</b>."],
  [["piece of","luggage, advice, information, furniture","a <b>piece of</b> advice"],["item of","equipment, une liste","four <b>items</b> from the list"],["bottle / cup / sheet of","water / coffee / paper","three <b>bottles of</b> water"]],
  "a piece of, two pieces of, an item of, a bottle of, a cup of, a sheet of",["C'est l'unité qui prend le -s : two <b>pieces</b> of luggage (pas <i>two piece of luggages</i>)."],["Each guest may bring two pieces of luggage.","One piece of equipment is missing."]),
 collocations:M("Collocations : make, do, take, have, give","verbes",["Certains noms vont toujours avec le même verbe : on les apprend en bloc."],
  [["make","réserver, décider","make a booking · make a decision"],["do / take","étudier · visiter, faire une pause","do research · take a tour · take a break"],["have / give","se réunir, avoir un souci · montrer","have a meeting · have a problem · give a demonstration"]],
  "make a booking, make a decision, do research, take a tour, take a break, have a meeting, have a problem, give a demonstration",["« Prendre une décision » = <b>make</b> a decision (jamais <i>take a decision</i> en anglais américain).","<b>research</b> est indénombrable : <i>do research</i>, jamais <i>researches</i>."],["We need to make a decision today.","We give a demonstration of the app."]),
});
MEMO_GROUPS.forEach(g=>{if(g[0]==="Prépositions")g[1].unshift("inonat","byuntil","fordurwhile","posmove","directions");
 if(g[0].startsWith("Mots"))g[1].unshift("aan","countunc","fourfx","units");
 if(g[0].startsWith("Verbes"))g[1].unshift("collocations")});
MEMO_ORDER.unshift(["aan",/\b(a|an) (hour|honest|usb|hdmi|european|university|mri|fbi|sms|x ray|ai|online)\b/],["byuntil",/\b(by|until)\b/],["fordurwhile",/\b(during|while)\b/],
 ["posmove",/\b(onto|opposite|next to|between|above|towards|through|across)\b/],["countunc",/\b(informations|advices|equipments|luggages|furnitures|feedbacks|softwares|researches)\b|\b(an|a) (information|advice|equipment|luggage|furniture)\b/],
 ["collocations",/\b(make|take|do|have|give|made|took|did|had|gave) (a |an )?(booking|decision|research|tour|break|meeting|problem|demonstration)\b/]);

/* ---------- les cours ---------- */
LESSONS.push(
 {id:"L6",n:6,date:"2026-11-24",tense:"mots",topic:"Les articles : a, an, the ou rien",en:"Articles in travel and product demonstrations",drills:["L6-sound","L6-meaning","L6-tense"],hw:["L6-H1","L6-H2","L6-H3"]},
 {id:"L7",n:7,date:"2026-11-25",tense:"prep",topic:"Prépositions de temps, de lieu et de mouvement",en:"Prepositions of time, place and movement",drills:["L7-atonin","L7-time","L7-fdw","L7-move","L7-itin","L7-tense"],hw:["L7-H1","L7-H2","L7-H3"],coach:"trip"},
 {id:"L8",n:8,date:"2026-12-01",tense:"mots",topic:"Dénombrables et indénombrables : les 4 effets",en:"Countable and uncountable nouns and the four things countability affects",drills:["L8-sort","L8-form","L8-fix","L8-qty"],hw:["L8-H1","L8-H2","L8-H3"]},
 {id:"L10",n:10,date:"2026-12-08",tense:"verbes",topic:"Collocations : voyage, visites et CES",en:"Collocations for travel, digital tours and CES conversations",drills:["L10-verb","L10-fill"],hw:["L10-H1","L10-H2","L10-H3"]});
Object.assign(LDOM,{L6:["gram"],L7:["gram","vocab"],L8:["gram","vocab"],L10:["vocab","oral"]});
Object.assign(THEME_T,{L6:"Les articles a / an / the",L7:"Prépositions : heures, lieux, trajets",L8:"Comptable ou pas ?",L10:"Collocations pour le CES"});
Object.assign(THEME_IC,{L6:"abc",L7:"plane",L8:"puzzle",L10:"chat"});
SCENARIOS.trip={ic:"plane",c:"blue",label:"Raconter un trajet (prépositions)",focus:"prepositions of time, place and movement (at/on/in, by/until, for/during/while, into/onto/past/across/towards) while describing a trip or giving directions, across past, present and future",open:"Ask him how he gets from his home to the pharmacy, then about his last trip to Paris: when he left, where he waited and for how long."};
SCEN_LESSON.trip="L7";

const AO=["a","an","the","no article"];
Object.assign(DRILLS,{
 "L6-sound":{title:"A ou an ? (le son)",src:"Cours 6, ex. 2 et 4",type:"choice",items:[
  ["USB cable",0,"USB se dit « you-ess-bee » : son consonne."],["HDMI cable",1,"H se dit « eitch » : son voyelle."],["European client",0,"Eu se dit « you » : son consonne."],["online demo",1,"o : son voyelle."],
  ["honest reply",1,"h muet : « aw-nest »."],["hour",1,"h muet : « ow-er »."],["university",0,"u se dit « you »."],["FBI agent",1,"F se dit « eff » : son voyelle."],["MRI",1,"M se dit « em »."],
  ["KPI",0,"K se dit « kay » : son consonne."],["SMS",1,"S se dit « ess »."],["DIY project",0,"D se dit « dee »."],["AI agent",1,"A se dit « ay » : son voyelle."],["X-ray",1,"X se dit « ex »."],["hotel",0,"h prononcé : son consonne."],["update",1,"u se dit « uh » : son voyelle."]
 ].map(([w,a,why])=>({q:"___ "+w,opts:["a","an"],a,why}))},
 "L6-meaning":{title:"A, the ou rien ? (le sens)",src:"Cours 6, ex. 5 et 6",type:"choice",items:[
  ["We ordered ___ new sensor yesterday. (on en parle pour la 1re fois)",0,"Nouveau, singulier : a."],["___ sensor we ordered arrived today.",2,"On sait lequel (celui qu'on a commandé) : the."],
  ["___ software usually needs updates.",3,"Indénombrable, en général : pas d'article."],["Can you send ___ attachment we discussed?",2,"Celle dont on a parlé : the."],
  ["Yesterday we tested a new sensor. ___ sensor worked well.",2,"On en reparle : the."],["Today I'm preparing ___ online demo.",1,"Nouveau + son voyelle : an."],
  ["We need the equipment, especially ___ laptop beside the printer.",2,"Le portable précis, à côté de l'imprimante : the."],["___ clients usually ask for information about security.",3,"Pluriel en général : pas d'article."],
  ["We also need ___ extension lead.",1,"Nouveau + son voyelle (e) : an."],["___ extension lead we ordered yesterday is already here.",2,"Celle qu'on a commandée : the."],
  ["I booked ___ room near the station.",0,"Nouvelle information : a."],["___ hotels usually provide towels.",3,"Pluriel en général : pas d'article."],
  ["She is ___ engineer.",1,"Métier : a / an obligatoire, ici son voyelle."],["I'm ___ CEO of Ryo.",2,"Une seule personne précise : the."]
 ].map(([q,a,why])=>({q,opts:AO,a,why}))},
 "L6-tense":{title:"Articles + temps : la démo",src:"Cours 6, ex. 7 et 8",type:"fill",items:[
  {q:"Yesterday, I ___ a USB cable. (order)",a:["ordered"],why:"Yesterday : past simple. Prononciation « or-durred »."},
  {q:"Today, I ___ the same cable. (collect, en cours)",a:["am collecting","'m collecting"],why:"En cours aujourd'hui : am + -ing."},
  {q:"Right now, I ___ an online demo. (prepare, en cours)",a:["am preparing","'m preparing"],why:"Right now : present continuous."},
  {q:"Tomorrow at ten, I ___ the same demo. (present, en cours)",a:["will be presenting","'ll be presenting"],why:"En cours à un moment futur : will be + -ing."},
  {q:"Yesterday, I ___ the new sensor. (receive)",a:["received"],why:"Yesterday : past simple."},
  {q:"Tomorrow, I ___ an HDMI cable. (need, futur)",a:["will need","'ll need"],why:"Futur : will + verbe de base."}]},
 "L7-atonin":{title:"At, on ou in ?",src:"Cours 7, ex. 1 et 2",type:"choice",items:[
  ["Meet me ___ 9:15.",0,"Heure précise : at."],["I was born ___ 1988.",2,"Année : in."],["My birthday is ___ the 9th of August.",1,"Date : on."],["I was born ___ a Monday.",1,"Jour : on."],
  ["I was born ___ 4 p.m.",0,"Heure : at."],["I was born ___ the 80s.",2,"Décennie : in."],["I live ___ Limonest.",2,"Ville : in."],["I live ___ Route du Puy d'Or.",1,"Rue : on."],
  ["Meet me ___ the gate.",0,"Point précis : at."],["The case is ___ the shelf.",1,"Surface : on."],["We waited ___ the terminal.",2,"Espace fermé : in."],["CES is ___ January.",2,"Mois : in."],
  ["See you ___ Monday morning.",1,"Jour (même avec morning) : on."],["I'm ___ the airport entrance.",0,"Point précis : at."],["See you ___ the morning.",2,"Partie de la journée : in."]
 ].map(([q,a,why])=>({q,opts:["at","on","in"],a,why}))},
 "L7-time":{title:"By, until, since, from, on / in time",src:"Cours 7, ex. 2 et 6",type:"choice",items:[
  {q:"Please send the updated route ___ noon.",opts:["by","until"],a:0,why:"Date limite : by."},{q:"We'll stay at the desk ___ noon.",opts:["by","until"],a:1,why:"Ça continue jusqu'à midi : until."},
  {q:"We've been waiting ___ 08:10.",opts:["since","for"],a:0,why:"Point de départ : since."},{q:"We've been waiting ___ twenty minutes.",opts:["since","for"],a:1,why:"Durée : for."},
  {q:"The help desk is open ___ nine to five.",opts:["from","since"],a:0,why:"Début et fin : from … to."},{q:"We got there just ___ time to catch the last train.",opts:["on","in"],a:1,why:"Assez tôt : in time."},
  {q:"The train left ___ time, at nine exactly.",opts:["on","in"],a:0,why:"Pile à l'heure : on time."},{q:"You have ___ 5 p.m. to do your homework.",opts:["by","until"],a:1,why:"Tu as jusqu'à 17 h : until."},
  {q:"Do your homework ___ 5 p.m.",opts:["by","until"],a:0,why:"Au plus tard : by."},{q:"Check in ___ 8:00.",opts:["by","until"],a:0,why:"Date limite : by."},
  {q:"Wait ___ 9:00.",opts:["by","until"],a:1,why:"Ça continue jusqu'à 9 h : until."},{q:"Call me ___ landing.",opts:["after","since"],a:0,why:"Ordre des actions : after."}]},
 "L7-fdw":{title:"For, during ou while ?",src:"Cours 7, ex. 4 et 5",type:"choice",items:[
  ["We waited ___ twenty minutes.",0,"Durée : for."],["I slept ___ the flight.",1,"Pendant + nom : during."],["I checked the map ___ we were waiting.",2,"Pendant que + sujet + verbe : while."],
  ["It rained ___ the flight.",1,"Pendant + nom : during."],["I walk ___ ten minutes to the pharmacy.",0,"Durée : for."],["Keep your ticket in your bag ___ the journey.",1,"Pendant + nom : during."],
  ["I had tea ___ you were in the shower.",2,"Sujet + verbe après : while."],["He has worked at Ryo ___ five years.",0,"Durée : for."],["Some people got lost ___ the journey.",1,"Pendant + nom : during."],
  ["I listen to podcasts ___ I'm driving.",2,"Sujet + verbe après : while."]
 ].map(([q,a,why])=>({q,opts:["for","during","while"],a,why}))},
 "L7-move":{title:"Position ou mouvement ?",src:"Cours 7, ex. 3, 5 et 7",type:"choice",items:[
  {q:"The passport is ___ the side pocket.",opts:["in","into"],a:0,why:"Position : in."},{q:"Slide the laptop ___ the flat belt.",opts:["onto","into"],a:0,why:"Mouvement vers une surface : onto."},
  {q:"Walk ___ the information desk.",opts:["on","to"],a:1,why:"Destination : to."},{q:"Walk ___ the terminal.",opts:["into","in"],a:0,why:"Mouvement vers l'intérieur : into."},
  {q:"Walk ___ the hall to the lift.",opts:["across","above"],a:0,why:"D'un côté à l'autre : across."},{q:"Walk ___ the café, don't stop.",opts:["past","next to"],a:0,why:"Passer devant : past."},
  {q:"The meeting room is ___ the lift and the stairs.",opts:["between","through"],a:0,why:"Entre deux choses : between."},{q:"The sign is ___ the desk.",opts:["above","towards"],a:0,why:"Position au-dessus : above."},
  {q:"Walk ___ the sign.",opts:["towards","above"],a:0,why:"Mouvement vers : towards."},{q:"After landing, we walked ___ the terminal.",opts:["out of","from"],a:0,why:"Sortie : out of."},
  {q:"The café is ___ the lift.",opts:["next to","past"],a:0,why:"Position à côté : next to."},{q:"Walk ___ the door.",opts:["through","between"],a:0,why:"Traverser une ouverture : through."},
  {q:"Lift the case ___ the belt.",opts:["onto","on"],a:0,why:"Lift = mouvement : onto."},{q:"The case is ___ the belt.",opts:["on","onto"],a:0,why:"Is = position : on."},
  {q:"At the roundabout, go ___.",opts:["straight","right on"],a:0,why:"Tout droit : go straight."},{q:"The Mayor's Office is ___ my right.",opts:["on","at"],a:0,why:"on my right / on my left."}]},
 "L7-itin":{title:"L'itinéraire Lyon → Paris",src:"Cours 7, ex. 8",type:"fill",items:[
  {q:"Yesterday, we travelled ___ Lyon to Paris.",a:["from"],why:"Point de départ : from … to."},{q:"We arrived ___ the terminal on Monday morning.",a:["at"],why:"arrive at + lieu précis."},
  {q:"We arrived at the terminal ___ Monday morning.",a:["on"],why:"Jour : on."},{q:"We waited ___ forty minutes in the departure lounge.",a:["for"],why:"Durée : for."},
  {q:"We waited for forty minutes ___ the departure lounge.",a:["in"],why:"Espace fermé : in."},{q:"___ the flight, I put my notebook back into my bag.",a:["during"],why:"Pendant + nom : during."},
  {q:"During the flight, I put my notebook back ___ my bag.",a:["into","in"],why:"Mouvement vers l'intérieur : into."},{q:"At security, we lifted the case ___ the belt.",a:["onto"],why:"Mouvement vers une surface : onto."},
  {q:"After landing, we walked ___ the terminal.",a:["out of"],why:"Sortie : out of."},{q:"Then we took a taxi ___ the hotel.",a:["to"],why:"Destination : to."}]},
 "L7-tense":{title:"Même trajet, autres temps",src:"Cours 7, ex. 9 et 10",type:"fill",items:[
  {q:"Yesterday at 9:15, I ___ at the terminal. (arrive)",a:["arrived"],why:"Action terminée : past simple, arrive at."},
  {q:"At 9:30 yesterday, I ___ in the departure lounge. (wait, en cours)",a:["was waiting"],why:"En cours dans le passé : was + -ing."},
  {q:"Right now, I ___ to gate 12. (walk, en cours)",a:["am walking","'m walking"],why:"Maintenant : am + -ing, to = destination."},
  {q:"Tomorrow, I ___ a taxi to the station. (take, futur)",a:["will take","'ll take","am going to take","'m going to take"],why:"Prochaine étape : will ou going to."},
  {q:"At 9:30 tomorrow, I ___ on the platform. (wait, en cours)",a:["will be waiting","'ll be waiting"],why:"En cours à un moment futur : will be + -ing."}]},
 "L8-sort":{title:"Comptable ou indénombrable ?",src:"Cours 8, ex. 1 et 2",type:"choice",items:[
  ["suitcase",0],["equipment",1],["appointment",0],["advice",1],["chair",0],["furniture",1],["document",0],["information",1],["prototype",0],["software",1],["device",0],["feedback",1],
  ["bug",0],["firmware",1],["sensor",0],["electricity",1],["battery",0],["progress",1],["update",0],["research",1],["password",0],["storage",1],["licence",0],["access",1]
 ].map(([w,a])=>({q:w,opts:["countable","uncountable"],a,why:a?`${w} : pas de pluriel, verbe au singulier.`:`${w} : a ${w}, two ${w==="battery"?"batteries":w+"s"}.`}))},
 "L8-form":{title:"La bonne forme (les 4 effets)",src:"Cours 8, ex. 4",type:"choice",items:[
  {q:"We need ___.",opts:["an information sheet","an information"],a:0,why:"Article : information n'a pas de a / an."},{q:"Your luggage ___ ready.",opts:["is","are"],a:0,why:"Verbe : indénombrable → is."},
  {q:"Please bring ___.",opts:["two equipments","two pieces of equipment"],a:1,why:"Quantité : two pieces of equipment."},{q:"We booked ___.",opts:["a ticket","a travel"],a:0,why:"Article : ticket est comptable."},
  {q:"The new documents ___ on the table.",opts:["is","are"],a:1,why:"Verbe : pluriel → are."},{q:"The information ___ on the website.",opts:["is","are"],a:0,why:"Verbe : indénombrable → is."},
  {q:"Please send me ___.",opts:["some advice","an advice"],a:0,why:"Article : advice n'a pas de a / an."},{q:"I packed ___.",opts:["two bags","two luggages"],a:0,why:"Pluriel : luggage n'a pas de s."},
  {q:"The furniture ___ on the second floor.",opts:["is","are"],a:0,why:"Verbe : indénombrable → is."},{q:"Breakfast ___ included.",opts:["is","are"],a:0,why:"Verbe : is."},
  {q:"How ___ tickets do you need?",opts:["many","much"],a:0,why:"Quantité : comptable → many."},{q:"How ___ equipment do we need?",opts:["much","many"],a:0,why:"Quantité : indénombrable → much."},
  {q:"We have ___ information about parking.",opts:["a little","a few"],a:0,why:"Indénombrable : a little."},{q:"There are ___ chairs in the room.",opts:["a few","a little"],a:0,why:"Comptable : a few."}]},
 "L8-fix":{title:"Corriger la liste",src:"Cours 8, ex. 5 et devoir 2",type:"order",items:[
  {q:"We need three equipments.",a:["we need three pieces of equipment","we need three items of equipment"],why:"equipment : jamais de s → three pieces of equipment."},
  {q:"The information are on the website.",a:["the information is on the website"],why:"information → is."},
  {q:"Please send me an advice.",a:["please send me some advice","please send me a piece of advice"],why:"advice : some advice ou a piece of advice."},
  {q:"The ticket for Lyon are in my bag.",a:["the ticket for lyon is in my bag","the tickets for lyon are in my bag"],why:"ticket → is · tickets → are."},
  {q:"I packed two luggages.",a:["i packed two pieces of luggage","i packed two bags","i packed two suitcases"],why:"luggage : two pieces of luggage."},
  {q:"The furnitures are on the second floor.",a:["the furniture is on the second floor"],why:"furniture : pas de s, verbe is."},
  {q:"Can you send me an information?",a:["can you send me some information","can you send me a piece of information","can you send me the information"],why:"information : some / a piece of."},
  {q:"We ordered three new piece of equipment.",a:["we ordered three new pieces of equipment"],why:"C'est l'unité qui prend le s : pieces."},
  {q:"The two ticket is in the envelope.",a:["the two tickets are in the envelope"],why:"two tickets → are."}]},
 "L8-qty":{title:"Compter l'indénombrable",src:"Cours 8, ex. 6",type:"fill",items:[
  {q:"Three ___ of water for the trip.",a:["bottles"],why:"bottles of water."},{q:"Two ___ of luggage.",a:["pieces"],why:"pieces of luggage."},
  {q:"Four ___ from the equipment list.",a:["items"],why:"items from a list."},{q:"One ___ of advice from the travel adviser.",a:["piece"],why:"a piece of advice."},
  {q:"A ___ of coffee before the meeting.",a:["cup"],why:"a cup of coffee."},{q:"A ___ of paper for the notes.",a:["sheet","piece"],why:"a sheet of paper."},
  {q:"Two ___ for the meeting. (document)",a:["documents"],why:"document est comptable : two documents."}]},
 "L10-verb":{title:"Make, do, take, have ou give ?",src:"Cours 10, ex. 2 et 3",type:"choice",items:[
  ["Reserve a room: ___ a booking.",0],["Study visitor needs: ___ research.",1],["Show the app: ___ a demonstration.",4],["Visit the old town: ___ a tour.",2],["Stop to rest: ___ a break.",2],
  ["Meet a partner: ___ a meeting.",3],["Choose after thinking: ___ a decision.",0],["The link doesn't work: I ___ a problem.",3],["___ a mistake.",0],["___ business in the US.",1],
  ["___ a photo of the booth.",2],["___ a presentation at CES.",4],["___ notes during the meeting.",2],["___ a phone call.",0]
 ].map(([q,a])=>({q,opts:["make","do","take","have","give"],a,why:"Collocation : "+["make","do","take","have","give"][a]+" "+q.replace(/^.*?___ /,"").replace(/\.$/,"")}))},
 "L10-fill":{title:"Un message précis",src:"Cours 10, ex. 4 et 6",type:"fill",items:[
  {q:"We ___ research before creating a route.",a:["do"],why:"do research."},{q:"Visitors ___ a tour at their own pace.",a:["take"],why:"take a tour."},
  {q:"We ___ a meeting with a travel partner tomorrow.",a:["will have","'ll have","are having","have"],why:"have a meeting."},{q:"The group needs to ___ a decision about the start time.",a:["make"],why:"make a decision."},
  {q:"Could you ___ a demonstration of the offline map?",a:["give"],why:"give a demonstration."},{q:"Please ___ a booking for Friday.",a:["make"],why:"make a booking."},
  {q:"After a short ___, we will have a meeting.",a:["break"],why:"take a break."},{q:"Yesterday, we ___ a demonstration of the app. (give)",a:["gave"],why:"give – gave – given."}]},
});

Object.assign(HW,{
 "L6-H1":{lesson:"L6",title:"Ex. 1 — Read a Client Note",prompt:`<div class="reading en say">We booked a room for the demo. The room has a screen. Software updates are available online. Please bring an HDMI cable.</div>Underline the articles. Explain two choices and find one general noun with no article.`},
 "L6-H2":{lesson:"L6",title:"Ex. 2 — Complete a Checklist",prompt:`Add a, an, the or Ø.<ul><li>Bring ___ laptop from the meeting room.</li><li>We also need ___ extension lead and ___ equipment for testing.</li><li>___ extension lead we ordered yesterday is already here.</li></ul>`},
 "L6-H3":{lesson:"L6",title:"Ex. 3 — Write a Demo Update",prompt:`Use the cues to write four sentences and one question. Introduce one item, refer to it again and make one general statement.<ul><li>Yesterday · buy one adapter</li><li>Now · same adapter in the lab</li><li>In general · cables need labels</li></ul>`},
 "L7-H1":{lesson:"L7",title:"Ex. 1 — Read a Change Notice",prompt:`<div class="reading en say">The shuttle leaves from the hotel at eight. Wait in the lobby for ten minutes. During the journey, keep your ticket in your bag. The driver will drop you at the station.</div>Underline the prepositions. Label each time, place, movement or duration. Then write two sentences summarising the change.`},
 "L7-H2":{lesson:"L7",title:"Ex. 2 — Complete a Travel Note",prompt:`Use at, on, in, into, onto, during or for. Then rewrite the first line using tomorrow.<ul><li>I arrived ___ the terminal ___ 8:20.</li><li>The passport was ___ the bag, and I put the bag ___ the belt.</li><li>We waited ___ fifteen minutes ___ boarding.</li></ul>`},
 "L7-H3":{lesson:"L7",title:"Ex. 3 — Write from the Timeline",prompt:`Write one sentence for each cue, then a question to confirm tomorrow's arrangements.<ul><li>Yesterday · airport · arrived at nine</li><li>Now · station · waiting on platform two</li><li>Tomorrow · hotel · meeting during breakfast</li></ul>`},
 "L8-H1":{lesson:"L8",title:"Ex. 1 — Read a Booking Email",prompt:`<div class="reading en say">The hotel has two rooms available. Breakfast is included. The information about parking is in the confirmation email. Each guest may bring two pieces of luggage.</div>Identify two countable nouns and two uncountable nouns. Explain one article choice and one verb choice.`},
 "L8-H2":{lesson:"L8",title:"Ex. 2 — Correct a Supply List",prompt:`Rewrite each line so the noun, verb, article and quantity agree.<ul><li>The furnitures are on the second floor.</li><li>Can you send me an information?</li><li>We ordered three new piece of equipment.</li><li>The two ticket is in the envelope.</li></ul>`},
 "L8-H3":{lesson:"L8",title:"Ex. 3 — Write a Travel Handover",prompt:`Write five sentences to explain what is ready and what is missing. Use the facts and include at least two countable and two uncountable nouns.<ul><li>Ready · two tickets, three bags, the travel information</li><li>Missing · one piece of equipment, advice about parking</li></ul>`},
 "L10-H1":{lesson:"L10",title:"Ex. 1 — Read and Interpret",prompt:`<div class="reading en say">Please make a booking for Friday. We can give a demonstration before the group takes a tour. After a short break, we will have a meeting and make a decision about the next test.</div>Answer each question in full sentences.<ul><li>What happens before the tour?</li><li>When is the meeting?</li><li>What is the purpose of the meeting?</li></ul>`},
 "L10-H2":{lesson:"L10",title:"Ex. 2 — Write for a Specific Audience",prompt:`Write 60–90 words confirming the Tuesday demonstration. State the purpose, what the app offers and one question for the partner. Use five collocations from the lesson.`},
 "L10-H3":{lesson:"L10",title:"Ex. 3 — Build a Personal Language Record",prompt:`Select six expressions from this lesson. Write a fresh sentence for each, then rewrite two sentences for a different audience. Explain your two changes in one sentence each.`},
});
Object.assign(HWDOM,{"L6-H1":["compr","gram"],"L6-H2":["gram"],"L6-H3":["ecrit","gram"],"L7-H1":["compr","gram"],"L7-H2":["gram"],"L7-H3":["ecrit","gram"],"L8-H1":["compr","gram"],"L8-H2":["gram"],"L8-H3":["ecrit","gram"],"L10-H1":["compr","vocab"],"L10-H2":["ecrit","vocab"],"L10-H3":["ecrit","vocab"]});

/* ---------- phrases du mode voiture et du 15 min (seulement après chaque cours) ---------- */
CAR_BANK.push(
 ["l6a","L6","J'ai réservé une chambre près de la gare.",["I booked a room near the station"],"Première mention : a."],
 ["l6b","L6","La chambre a un bureau.",["The room has a desk"],"On sait laquelle : the."],
 ["l6c","L6","Les hôtels fournissent généralement des serviettes.",["Hotels usually provide towels","Hotels generally provide towels"],"Généralité au pluriel : pas d'article."],
 ["l6d","L6","J'ai besoin d'un câble HDMI.",["I need an HDMI cable"],"HDMI se dit « eitch » : son voyelle → an."],
 ["l6e","L6","C'est un câble USB.",["It's a USB cable","It is a USB cable"],"USB se dit « you » : son consonne → a."],
 ["l6f","L6","Je suis le PDG de Ryo.",["I'm the CEO of Ryo","I am the CEO of Ryo"],"Une seule personne précise : the."],
 ["l6g","L6","Les logiciels ont souvent besoin de mises à jour.",["Software often needs updates","Software usually needs updates"],"Software : indénombrable, en général → pas d'article."],
 ["l6h","L6","Je reviens dans une heure.",["I'll be back in an hour","I will be back in an hour"],"Hour : h muet → an."],
 ["l6i","L6","C'est un agent IA.",["It's an AI agent","It is an AI agent"],"AI se dit « ay-eye » : an."],
 ["l6j","L6","Hier, nous avons testé un nouveau capteur. Le capteur a bien marché.",["Yesterday we tested a new sensor The sensor worked well"],"a pour présenter, puis the pour en reparler."],
 ["l7a","L7","Je suis né en 1988.",["I was born in 1988"],"Année : in."],
 ["l7b","L7","Je suis né le 9 août.",["I was born on the 9th of August","I was born on August 9th","I was born on 9th August","I was born on August the 9th"],"Date : on."],
 ["l7c","L7","Je suis né à 16 heures.",["I was born at 4 pm","I was born at four pm","I was born at 4 p.m.","I was born at four p.m.","I was born at 4pm"],"Heure : at."],
 ["l7d","L7","J'habite à Limonest, près de Lyon.",["I live in Limonest near Lyon"],"Ville : in · près de : near."],
 ["l7e","L7","Rendez-vous à la porte à 9 h 15.",["Meet me at the gate at 9:15","Meet me at the gate at nine fifteen","See you at the gate at 9:15","See you at the gate at nine fifteen"],"Point précis et heure : at."],
 ["l7f","L7","Envoie-moi le rapport pour midi au plus tard.",["Send me the report by noon","Please send me the report by noon"],"Date limite : by."],
 ["l7g","L7","J'ai attendu jusqu'à 9 heures.",["I waited until 9","I waited until nine","I waited until 9 o'clock","I waited until nine o'clock"],"Ça continue jusqu'à : until."],
 ["l7h","L7","Le train est parti à l'heure.",["The train left on time"],"Pile à l'heure : on time."],
 ["l7i","L7","Nous sommes arrivés à temps pour embarquer.",["We arrived in time to board"],"Assez tôt : in time."],
 ["l7j","L7","J'ai dormi pendant le vol.",["I slept during the flight"],"Pendant + nom : during."],
 ["l7k","L7","Nous avons attendu vingt minutes.",["We waited for twenty minutes","We waited twenty minutes","We waited for 20 minutes"],"Durée : for."],
 ["l7l","L7","J'ai regardé la carte pendant que nous attendions.",["I checked the map while we were waiting","I looked at the map while we were waiting"],"Pendant que + sujet + verbe : while."],
 ["l7m","L7","Mets la valise sur le tapis.",["Put the case onto the belt","Put the suitcase onto the belt","Lift the case onto the belt"],"Mouvement vers une surface : onto."],
 ["l7n","L7","Entre dans le terminal.",["Walk into the terminal","Go into the terminal"],"Mouvement vers l'intérieur : into."],
 ["l7o","L7","Traverse le hall et passe devant le café.",["Walk across the hall and go past the cafe","Walk across the hall and walk past the cafe","Go across the hall and go past the cafe"],"across = traverser · past = passer devant."],
 ["l7p","L7","La salle de réunion est entre l'ascenseur et l'escalier.",["The meeting room is between the lift and the stairs","The meeting room is between the elevator and the stairs"],"between = entre."],
 ["l7q","L7","Au rond-point, va tout droit.",["At the roundabout go straight","At the roundabout go straight on","At the roundabout go straight ahead"],"Point précis : at the roundabout."],
 ["l7r","L7","La mairie est sur ma droite.",["The Mayor's Office is on my right","The town hall is on my right"],"on my right / on my left."],
 ["l7s","L7","Je marche vers le centre de Limonest.",["I walk towards Limonest centre","I walk towards Limonest center","I'm walking towards Limonest centre","I'm walking towards Limonest center","I am walking towards Limonest center"],"towards = vers."],
 ["l8a","L8","Les informations sont sur le site.",["The information is on the website"],"Information : indénombrable → is, pas de s."],
 ["l8b","L8","Peux-tu me donner un conseil ?",["Can you give me some advice","Can you give me a piece of advice","Could you give me some advice","Could you give me a piece of advice"],"Advice : some advice ou a piece of advice."],
 ["l8c","L8","J'ai deux bagages.",["I have two pieces of luggage","I've got two pieces of luggage"],"Luggage : two pieces of luggage."],
 ["l8d","L8","Le matériel est prêt.",["The equipment is ready"],"Equipment : indénombrable, verbe au singulier."],
 ["l8e","L8","Il nous manque un équipement.",["We are missing one piece of equipment","We're missing one piece of equipment","We are missing a piece of equipment","We're missing a piece of equipment"],"Compter : a piece of equipment."],
 ["l8f","L8","Les billets sont dans mon sac.",["The tickets are in my bag"],"Comptable pluriel → are."],
 ["l8g","L8","Le petit-déjeuner est inclus.",["Breakfast is included"],"Breakfast : pas d'article, verbe is."],
 ["l8h","L8","Combien de temps avons-nous ?",["How much time do we have"],"Indénombrable : how much."],
 ["l8i","L8","J'ai acheté trois bouteilles d'eau.",["I bought three bottles of water"],"Unité : bottles of water."],
 ["l8j","L8","Les nouvelles chaises sont dans la salle de réunion.",["The new chairs are in the meeting room"],"Comptable pluriel → are."],
 ["l10a","L10","Je fais une réservation pour vendredi.",["I'm making a booking for Friday","I am making a booking for Friday","I make a booking for Friday","I'll make a booking for Friday","I will make a booking for Friday"],"make a booking."],
 ["l10b","L10","Nous devons prendre une décision aujourd'hui.",["We need to make a decision today","We have to make a decision today"],"make a decision."],
 ["l10c","L10","Nous faisons des recherches avant un voyage.",["We do research before a trip"],"do research (indénombrable)."],
 ["l10d","L10","Les visiteurs font une visite à pied.",["Visitors take a walking tour"],"take a tour."],
 ["l10e","L10","Faisons une pause.",["Let's take a break","Let us take a break"],"take a break."],
 ["l10f","L10","Nous avons une réunion avec un partenaire.",["We have a meeting with a partner"],"have a meeting."],
 ["l10g","L10","Un visiteur a un problème avec le lien.",["A visitor has a problem with the link"],"have a problem."],
 ["l10h","L10","Nous faisons une démonstration de l'appli.",["We give a demonstration of the app","We're giving a demonstration of the app","We are giving a demonstration of the app"],"give a demonstration."],
 ["l10i","L10","Pouvons-nous l'essayer avant de prendre une décision ?",["Can we try it before making a decision","Can we try it before we make a decision"],"before + -ing."]);
Object.assign(OPENQ,{
 L6:[["Introduce a new device, then talk about it again.","Yesterday, we tested a new sensor. The sensor works well now.","a puis the"],["What do clients usually ask for?","Clients usually ask for information about security.","Généralité : pas d'article"]],
 L7:[["How do you get to the pharmacy from your house?","I go along my alley, turn right towards Limonest centre and go past the houses.","Prépositions de mouvement"],["When and where were you born?","I was born in 1988, on the 9th of August, at 4 p.m.","in / on / at"],["Where were you waiting at 9:30 yesterday?","At 9:30 yesterday, I was waiting in the departure lounge.","Past continuous + in"]],
 L8:[["What is ready for the demo and what is missing?","Three tickets and all the luggage are ready, but one piece of equipment is missing.","Comptable / indénombrable"]],
 L10:[["Can we try the app before making a decision?","Of course, we can give you a demonstration on Tuesday. How many people will attend?","give a demonstration, make a decision"],["Introduce Ryo at CES in two sentences.","We are a digital travel agency. Visitors take walking tours with offline maps.","Collocations"]],
});
/* vocabulaire noté en cours (V = / P =) */
CARDS.push(...[
 ["v6-sensor","a sensor","un capteur","We tested a new sensor."],["v6-especially","especially","surtout, en particulier","We need equipment, especially the laptop."],["v6-then","then","ensuite, et puis","I will send an email, then I will drink a coffee."],
 ["v6-ordered","ordered","commandé","Prononciation : « or-durred »"],["v6-honest","honest","honnête","Prononciation : « aw-nest » → an honest reply"],["v6-hour","an hour","une heure","Prononciation : « ow-er »"],
 ["v6-lead","an extension lead","une rallonge","We need an extension lead."],["v7-decade","a decade","une décennie","I was born in the 80s."],["v7-neigh","a neighbourhood","un quartier","I like my neighbourhood."],
 ["v7-towards","towards","vers","I walk towards Limonest centre."],["v7-near","near","près de","I live near Lyon."],["v7-behind","behind","derrière","The car park is behind the hotel."],
 ["v7-alley","an alley","une allée","I go along my alley."],["v7-turn","turn (right / left)","tourner (à droite / à gauche)","Turn right at the traffic light."],["v7-round","a roundabout","un rond-point","At the roundabout, go straight."],
 ["v7-straight","straight (on)","tout droit","Go straight."],["v7-uphill","uphill","en montée","The street goes uphill."],["v7-downhill","downhill","en descente","The road goes downhill."],
 ["v7-enough","enough","assez","That's enough! · not enough money"],["v7-arrive","arrive","arriver","Prononciation : « a-ryve »"],["v7-burg","Burgundy","la Bourgogne",""],["v7-britt","Brittany","la Bretagne",""],
 ["v7-mayor","the Mayor's Office","la mairie","The Mayor's Office is on my left."],["v7-lounge","the departure lounge","la salle d'embarquement","We waited in the departure lounge."],["v7-belt","the belt","le tapis (bagages, sécurité)","Put the case onto the belt."],
].map(([id,en,fr,note])=>({id,en,fr,note,kind:"vocab"})));

/* ---------- fiches mémo de chaque cours : les visuels d'abord ---------- */
const RULE=(t,f,ex)=>`<div class="rule"><b>${t}</b>${f?`<span class="f">${f}</span>`:""}${ex?`<span class="ex en say">${ex}</span>`:""}</div>`;
Object.assign(CHEATS,{
 L6:VIS("articles")
  +RULE("Dans un même message : a pour présenter, the pour en reparler","","Yesterday, we tested <b>a</b> new sensor. <b>The</b> sensor worked well.")
  +VIS("aan")
  +RULE("Pièges du cours","Métier : <i>She is <b>an</b> engineer.</i> · Indénombrable (equipment, information, software) : jamais a / an.","Clients usually ask for <b>Ø</b> information about security.")
  +MBTN("articles","aan","countunc"),
 L7:VIS("inonat")+VIS("byuntil")+VIS("intime")+VIS("posmove")+VIS("fordurwhile")+VIS("directions")
  +RULE("Même trajet, autres temps","Le temps change, la préposition reste.","Yesterday at 9:15, I <b>arrived at</b> the terminal. Right now, I <b>am walking to</b> gate 12. At 9:30 tomorrow, I <b>will be waiting on</b> the platform.")
  +MBTN("inonat","byuntil","intime","posmove","prepmove","fordurwhile","directions","forsince"),
 L8:VIS("countunc")+VIS("fourfx")+VIS("units")+VIS("countable")
  +RULE("Une passation claire","","Three tickets <b>are</b> ready. All the luggage <b>is</b> ready. One <b>piece of</b> equipment is missing.")
  +MBTN("countunc","fourfx","units","countable"),
 L10:VIS("collocations")
  +`<div class="tblwrap"><table><tr><th>Expression</th><th>Sens</th><th>Exemple</th></tr>${[["make a booking","réserver un service","I make a booking for tomorrow."],["make a decision","choisir après réflexion","We need to make a decision today."],["do research","chercher et étudier des informations","We do research before a trip."],["take a tour","faire une visite (guidée)","Visitors take a walking tour."],["take a break","faire une pause","We take a break near the museum."],["have a meeting","se réunir","We have a meeting with a partner."],["have a problem","avoir un souci","A visitor has a problem with the link."],["give a demonstration","montrer comment marche un produit","We give a demonstration of the app."]].map(([a,b,c])=>`<tr><td class="v">${a}</td><td>${b}</td><td class="en say">${c}</td></tr>`).join("")}</table></div>`
  +MBTN("collocations","makedo"),
});
