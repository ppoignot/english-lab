/* ============ CONTENT (from the course log "Suivi des cours — ANGLAIS VISIO LILATE") ============ */
const TEAMS = "https://teams.live.com/meet/9316138895210?p=OSDvyJP09LrGku2PyZ";
const TOTAL_HOURS = 22, DEADLINE = "2027-05-31";

const LESSONS = [
 {id:"L1",n:1,date:"2026-10-27",tense:"present",topic:"Se présenter avec des verbes d'action",en:"Introducing yourself personally and professionally through action verbs",drills:["L1-form"],hw:["L1-H1"],coach:"intro"},
 {id:"L2",n:2,date:"2026-11-06",tense:"present",topic:"Présent simple, continu et parfait",en:"Present simple, present continuous and present perfect: statements, negatives and WH questions",drills:["L2-simple","L2-cont","L2-perf","L2-order"],hw:["L2-H1","L2-H2","L2-H3"],coach:"update"},
 {id:"L3",n:3,date:"2026-11-10",tense:"past",topic:"Passé simple, continu et parfait",en:"Past simple, past continuous and past perfect",drills:["L3-regular","L3-irregular","L3-cont","L3-perfect","L3-choose","L3-questions"],hw:["L3-H1","L3-H2","L3-H3"],coach:"incident"},
 {id:"L4",n:4,date:"2026-11-17",tense:"future",topic:"Les quatre futurs (lancement d'un parcours)",en:"The four future tenses for a route launch",drills:["L4-forms","L4-choose","L4-irregular"],hw:["L4-H1","L4-H2","L4-H3"],coach:"plan"},
 {id:"L5",n:5,date:"2026-11-18",tense:"mixed",topic:"Révision : conjugaison et questions présent/passé/futur",en:"Conjugation and questions across present, past and future forms",drills:["L5-fix","L5-mixed"],hw:["L5-H1","L5-H2","L5-H3"],coach:"interview",openEarly:true},
];

const CHEATS = {
 L1:`<div class="rule present"><b>À la 3e personne (he / she / it / the app / my company) : ajoute -s</b><span class="f">I work → he work<b>s</b> · the app offer<b>s</b> · it help<b>s</b></span></div>
 <div class="rule present"><b>want / need + <u>to</u> + verbe</b><span class="ex en say">I want <b>to present</b> the product. I need <b>to improve</b> my English.</span></div>
 <div class="rule present"><b>allow + quelqu'un + to (permettre)</b><span class="ex en say">The app <b>allows</b> travellers <b>to discover</b> cities.</span></div>
 <div class="tblwrap"><table><tr><th>Verbe</th><th>Sens</th><th>Ta phrase</th></tr>
 <tr><td class="v">run</td><td>diriger une entreprise</td><td class="en say">I run a digital travel agency.</td></tr>
 <tr><td class="v">create</td><td>créer</td><td class="en say">We create audio-guided walking tours.</td></tr>
 <tr><td class="v">offer</td><td>proposer</td><td class="en say">The app offers self-guided visits.</td></tr>
 <tr><td class="v">cover</td><td>couvrir</td><td class="en say">It covers more than 500 cities.</td></tr>
 <tr><td class="v">help</td><td>aider</td><td class="en say">It helps travellers discover a city.</td></tr>
 <tr><td class="v">meet</td><td>rencontrer</td><td class="en say">I meet clients and partners.</td></tr>
 <tr><td class="v">present</td><td>présenter</td><td class="en say">I present the product at events.</td></tr>
 <tr><td class="v">improve</td><td>améliorer</td><td class="en say">I want to improve my English.</td></tr></table></div>`,
 L2:`<div class="rule present"><b>Present simple : routine, fait, habitude</b><span class="f">I work · he work<b>s</b> · I do not work · Do you work? · Where <b>do</b> you work? · What <b>does</b> the company sell?</span><span class="ex en say">Normally, we <b>develop</b> walking tours. Every Monday, the team <b>checks</b> the map.</span></div>
 <div class="rule present"><b>Present continuous : maintenant / cette semaine</b><span class="f">am / is / are + verbe-ing</span><span class="ex en say">Right now, we <b>are testing</b> a route. This week, I <b>am preparing</b> a presentation.</span></div>
 <div class="rule present"><b>Present perfect : action passée, impact maintenant</b><span class="f">have / has + participe passé · indices : already, yet, just, ever, never, so far</span><span class="ex en say">So far, we <b>have tested</b> three routes. I <b>have worked</b> all day, so I'm tired.</span></div>
 <div class="rule"><b>Pièges</b><span>Après <span class="mono">does</span> → verbe de base : <i>What does the company <b>sell</b>?</i> (pas "sells"). Avec <i>be</i>, pas de "do" : <i>Where <b>is</b> the office?</i> · Jamais le present perfect avec <i>yesterday</i> : <i>We <b>tested</b> a route yesterday.</i></span></div>
 <div class="rule"><b>How are you? ≠ How have you been?</b><span>Comment vas-tu (là) ? / Comment vas-tu depuis la dernière fois ?</span></div>`,
 L3:`<div class="rule past"><b>Past simple : action terminée, moment terminé</b><span class="f">verbe-ed (ou irrégulier) · négatif : did not + base · question : WH + did + sujet + base</span><span class="ex en say">We <b>tested</b> a route last Monday. We <b>didn't check</b> the prices. Where <b>did</b> you <b>go</b> last week?</span><span class="small muted">Indices : yesterday, last week, ago, at ten</span></div>
 <div class="rule past"><b>Past continuous : en cours à un moment passé (le décor)</b><span class="f">was / were + verbe-ing · question : WH + was/were + sujet + -ing</span><span class="ex en say">We <b>were checking</b> the map <b>when</b> the client <b>called</b>. What <b>were</b> you <b>testing</b> at ten?</span><span class="small muted">was : I / he / she / it · were : you / we / they</span></div>
 <div class="rule past"><b>Past perfect : terminé AVANT une autre action passée</b><span class="f">had + participe passé · question : WH + had + sujet + participe</span><span class="ex en say">When the visit started, we <b>had checked</b> the prices. What <b>had</b> you <b>written</b> before the call?</span><span class="small muted">Méthode : trouve d'abord l'événement passé le plus récent, puis regarde en arrière.</span></div>
 <div class="rule"><b>Pièges</b><span>Après <span class="mono">did</span> / <span class="mono">did not</span> → base : <i>Where did you <b>go</b>?</i> (pas "went"). N'utilise pas le past perfect pour chaque action d'une histoire.</span></div>`,
 L4:`<div class="rule future"><b>Future simple : décision maintenant, prédiction, promesse</b><span class="f">will + base · won't + base</span><span class="ex en say">The phone is ringing. I'<b>ll answer</b> it.</span></div>
 <div class="rule future"><b>Future continuous : en cours à un moment futur</b><span class="f">will be + -ing</span><span class="ex en say">At eleven tomorrow, we <b>will be testing</b> the route.</span></div>
 <div class="rule future"><b>Future perfect : terminé AVANT une échéance</b><span class="f">will have + participe passé · indices : by Friday, by then</span><span class="ex en say">By Friday, we <b>will have completed</b> the test.</span></div>
 <div class="rule future"><b>Future perfect continuous : durée jusqu'à un point futur</b><span class="f">will have been + -ing</span><span class="ex en say">By noon, we <b>will have been testing</b> for two hours.</span></div>
 <div class="rule"><b>Bonus : be going to = intention déjà décidée</b><span class="ex en say">We <b>are going to visit</b> the site on Friday.</span></div>`,
 L5:`<div class="tblwrap"><table><tr><th>Temps</th><th>Affirmation</th><th>Question WH</th></tr>
 <tr><td>Present simple</td><td class="en say">We check the route.</td><td class="en say">What <b>do</b> you check?</td></tr>
 <tr><td>Present continuous</td><td class="en say">We are checking it.</td><td class="en say">What <b>are</b> you checking?</td></tr>
 <tr><td>Present perfect</td><td class="en say">We have checked it.</td><td class="en say">What <b>have</b> you checked so far?</td></tr>
 <tr><td>Past simple</td><td class="en say">We checked it.</td><td class="en say">What <b>did</b> you check?</td></tr>
 <tr><td>Past continuous</td><td class="en say">We were checking it.</td><td class="en say">What <b>were</b> you checking?</td></tr>
 <tr><td>Past perfect</td><td class="en say">We had checked it.</td><td class="en say">What <b>had</b> you checked?</td></tr>
 <tr><td>Will</td><td class="en say">We will check it.</td><td class="en say">When <b>will</b> you check it?</td></tr>
 <tr><td>Going to</td><td class="en say">We are going to check it.</td><td class="en say">When <b>are</b> you going to check it?</td></tr>
 <tr><td>Future continuous</td><td class="en say">We will be checking it.</td><td class="en say">What <b>will</b> you be checking?</td></tr></table></div>
 <div class="rule"><b>La règle d'or</b><span>WH + auxiliaire + sujet + verbe. L'auxiliaire porte le temps, le verbe reste à la bonne forme : base après do/does/did/will, -ing après be, participe après have/had.</span></div>`
};

/* Drill sets. type: fill (a = accepted answers), choice (opts + a index), order (a = accepted sentences) */
const DRILLS = {
 "L1-form":{title:"Choisir la bonne forme",src:"Cours 1, ex. 4",type:"choice",items:[
  {q:"I ___ in digital tourism.",opts:["work","works"],a:0},
  {q:"My company ___ walking tours.",opts:["create","creates"],a:1},
  {q:"The app ___ self-guided visits.",opts:["offer","offers"],a:1},
  {q:"It ___ travellers discover a city.",opts:["help","helps"],a:1},
  {q:"We ___ international partners.",opts:["meet","meets"],a:0},
  {q:"I want ___ the product.",opts:["present","to present"],a:1},
  {q:"I need ___ my English.",opts:["improve","to improve"],a:1},
  {q:"Yesterday, I ___ a new partner.",opts:["meet","met"],a:1}]},
 "L2-simple":{title:"Present simple",src:"Cours 2, ex. 4 + devoir 2",type:"fill",items:[
  {q:"We ___ travel tools. (develop)",a:["develop"]},
  {q:"The app ___ a map. (have)",a:["has"]},
  {q:"What ___ the company sell?",a:["does"]},
  {q:"Where ___ you work?",a:["do"]},
  {q:"We do not ___ on Sunday. (work)",a:["work"]},
  {q:"Where ___ the office?",a:["is"]},
  {q:"What ___ the team checking?",a:["is"]}]},
 "L2-cont":{title:"Present continuous",src:"Cours 2, ex. 6",type:"fill",items:[
  {q:"I ___ preparing a presentation.",a:["am"]},
  {q:"We ___ testing the app.",a:["are"]},
  {q:"What ___ you doing today?",a:["are"]},
  {q:"The group ___ not coming today.",a:["is"]},
  {q:"-ing de : work",a:["working"]},
  {q:"-ing de : make",a:["making"],hint:"on enlève le e final"},
  {q:"-ing de : run",a:["running"],hint:"on double la consonne"}]},
 "L2-perf":{title:"Present perfect",src:"Cours 2, ex. 6.2 + 7",type:"choice",items:[
  {q:"So far, we ___ three routes.",opts:["test","have tested"],a:1},
  {q:"Yesterday, we ___ a route.",opts:["tested","have tested"],a:0},
  {q:"Every Monday, the team ___ the map.",opts:["checks","is checking"],a:0},
  {q:"This week, I ___ a presentation.",opts:["prepare","am preparing"],a:1},
  {q:"___ you ever taken a guided tour?",opts:["Did","Have"],a:1},
  {q:"How many routes ___ the team tested?",opts:["have","has"],a:1}]},
 "L2-order":{title:"Construire les questions au présent",src:"Cours 2, ex. 8 · trouve l'auxiliaire et la forme",type:"order",items:[
  {q:"what / you / sell ? (habitude)",a:["what do you sell"],why:"Habitude : What + do + you + verbe de base"},
  {q:"where / the team / work ? (habitude)",a:["where does the team work"],why:"The team = 3e personne : does + verbe de base (work, sans -s)"},
  {q:"what / you / do / today ? (en ce moment)",a:["what are you doing today"],why:"En cours aujourd'hui : What + are + you + -ing"},
  {q:"where / the team / work / this week ? (en ce moment)",a:["where is the team working this week"],why:"Cette semaine : Where + is + the team + -ing"},
  {q:"how many routes / the team / test / so far ? (bilan)",a:["how many routes has the team tested so far"],why:"So far : present perfect, has + participe passé"}]},
 "L3-regular":{title:"Past simple — verbes réguliers",src:"Cours 3, ex. 2",type:"fill",items:[
  {q:"Yesterday, we ___ a new route. (test)",a:["tested"]},
  {q:"The client ___ us last Monday. (contact)",a:["contacted"]},
  {q:"We ___ the prices an hour ago. (check)",a:["checked"]},
  {q:"I ___ the app yesterday. (not use)",a:["did not use"]},
  {q:"The visit ___ at ten. (start)",a:["started"]}]},
 "L3-irregular":{title:"Past simple — verbes irréguliers",src:"Cours 3, ex. 3",type:"fill",items:[
  {q:"Last Friday, I ___ to a meeting. (go)",a:["went"]},
  {q:"We ___ a problem with the map. (have)",a:["had"]},
  {q:"The guide ___ the new entrance. (see)",a:["saw"]},
  {q:"I ___ the file yesterday. (send)",a:["sent"]},
  {q:"We did not ___ the file again. (send)",a:["send"],hint:"après did not → base"},
  {q:"The route ___ quiet… (be)",a:["was"]},
  {q:"…but the guides ___ busy. (be)",a:["were"]}]},
 "L3-cont":{title:"Past continuous",src:"Cours 3, ex. 5–6",type:"fill",items:[
  {q:"At ten, I ___ the description. (check)",a:["was checking"]},
  {q:"The guides ___ a route when the rain started. (test)",a:["were testing"]},
  {q:"We ___ the app at eleven. (not use)",a:["were not using"]},
  {q:"The client ___ near the entrance. (wait)",a:["was waiting"]},
  {q:"At nine, we ___ a video. (make)",a:["were making"]},
  {q:"At ten, one guide ___ towards the station. (run)",a:["was running"]}]},
 "L3-perfect":{title:"Past perfect",src:"Cours 3, ex. 7–8",type:"fill",items:[
  {q:"Before the visit started, we ___ the route. (test)",a:["had tested"]},
  {q:"When the client called, I ___ the prices; they were ready. (check)",a:["had checked"]},
  {q:"We ___ the guide before the meeting began. (not contact)",a:["had not contacted"]},
  {q:"Before the meeting started, I ___ the summary. (write)",a:["had written"]},
  {q:"When the visitor called, we ___ the new entrance. (see)",a:["had seen"]},
  {q:"Before the visit began, we ___ the address. (send)",a:["had sent"]},
  {q:"I ___ the final check when the client called; it was still unfinished. (not do)",a:["had not done"]}]},
 "L3-choose":{title:"Choisir entre les 3 passés",src:"Cours 3, ex. 10",type:"choice",items:[
  {q:"We ___ the long description when the phone rang; the check was unfinished.",opts:["checked","were checking"],a:1,why:"Action en cours, interrompue → past continuous"},
  {q:"Yesterday, the client ___ once at ten and left a message.",opts:["called","had called"],a:0,why:"Événement terminé, simple → past simple"},
  {q:"When the visit started, we ___ the route; testing was already complete.",opts:["tested","had tested"],a:1,why:"Terminé avant un autre événement passé → past perfect"},
  {q:"At ten, the guides ___ while I checked the booking.",opts:["waited","were waiting"],a:1,why:"En cours à un moment précis → past continuous"},
  {q:"Before the call, I ___ the address, so the visitor already had it.",opts:["sent","had sent"],a:1,why:"Avant l'appel → past perfect"}]},
 "L3-questions":{title:"Construire les questions au passé",src:"Cours 3, ex. 4, 6, 9 · trouve l'auxiliaire et la forme",type:"order",items:[
  {q:"what / you / check / yesterday ? (passé, terminé)",a:["what did you check yesterday"],why:"Action terminée : What + did + you + verbe de base"},
  {q:"where / you / go / last week ? (passé, terminé)",a:["where did you go last week"],why:"Après did : verbe de base (go, pas went)"},
  {q:"when / the visit / start ? (passé, terminé)",a:["when did the visit start"],why:"When + did + sujet + verbe de base"},
  {q:"why / the route / be / quiet ? (passé, état)",a:["why was the route quiet"],why:"Be au passé : was + adjectif (quiet), sans did ni -ing"},
  {q:"what / you / test / at ten ? (en cours à 10 h)",a:["what were you testing at ten"],why:"En cours à un moment précis : What + were + you + -ing"},
  {q:"where / the guide / wait ? (en cours à ce moment-là)",a:["where was the guide waiting"],why:"Past continuous : Where + was + the guide + -ing"},
  {q:"what / you / write / before the call ? (fini avant l'appel)",a:["what had you written before the call"],why:"Fini avant une autre action passée : What + had + you + participe passé (written)"},
  {q:"how many prices / you / check / before the meeting ? (fini avant)",a:["how many prices had you checked before the meeting"],why:"Past perfect : had + participe passé"}]},
 "L4-forms":{title:"Les 4 futurs",src:"Cours 4, ex. 3",type:"fill",items:[
  {q:"The phone is ringing. I ___ it. (answer)",a:["will answer"]},
  {q:"We ___ the client after six. (not contact)",a:["will not contact"]},
  {q:"At eleven tomorrow, we ___ the route. (test)",a:["will be testing"]},
  {q:"At noon, they ___ the map. (not print)",a:["will not be printing"]},
  {q:"By Thursday, we ___ the labels. (check)",a:["will have checked"]},
  {q:"By Friday morning, we ___ the budget. (not confirm)",a:["will not have confirmed"]},
  {q:"By twelve, we ___ for two hours. (walk)",a:["will have been walking"]},
  {q:"By nine, we ___ for very long. (not wait)",a:["will not have been waiting"]}]},
 "L4-choose":{title:"Choisir le futur",src:"Cours 4, ex. 4 + 6",type:"choice",items:[
  {q:"The client needs an answer now. I ___ immediately.",opts:["will reply","will have replied"],a:0},
  {q:"At eleven tomorrow, the test will be in progress. We ___ the new route.",opts:["will test","will be testing"],a:1},
  {q:"By Friday all the checks will be complete. We ___ every sign.",opts:["will have checked","will be checking"],a:0},
  {q:"At noon we will still be working. We ___ for two hours.",opts:["will have tested","will have been testing"],a:1},
  {q:"By Friday, I will have ___ the summary.",opts:["written","wrote"],a:0},
  {q:"By ten, we will have ___ the photos.",opts:["took","taken"],a:1}]},
 "L4-irregular":{title:"Compléter sans options",src:"Cours 4, ex. 7",type:"fill",items:[
  {q:"By Friday, we will have ___ the changes. (make)",a:["made"]},
  {q:"At eleven, I will be ___ the route notes. (write)",a:["writing"]},
  {q:"By noon, the client will have ___ the map. (see)",a:["seen"]},
  {q:"I will ___ the equipment to the site. (take)",a:["take"]}]},
 "L5-fix":{title:"Corriger l'erreur",src:"Cours 5, ex. 12",type:"order",items:[
  {q:"Where did you went yesterday?",a:["where did you go yesterday"]},
  {q:"What has the team check so far?",a:["what has the team checked so far"]},
  {q:"What will the team be test at ten?",a:["what will the team be testing at ten"]}]},
 "L5-mixed":{title:"Tous les temps",src:"Cours 5, ex. 3, 5, 7",type:"fill",items:[
  {q:"Where ___ you work on Mondays? (do/does)",a:["do"]},
  {q:"How often ___ the app update its map? (do/does)",a:["does"]},
  {q:"Yesterday, the team ___ the map. (test)",a:["tested"]},
  {q:"At ten yesterday, the team ___ the map. (test, en cours)",a:["was testing"]},
  {q:"Before the call, the team ___ the map. (test, terminé avant)",a:["had tested"]},
  {q:"Last week, the team ___ to the site. (go)",a:["went"]},
  {q:"By noon, the client ___ the map. (see; past perfect)",a:["had seen"]}]},
};

/* Homework (verbatim prompts from the log) */
const HW = {
 "L1-H1":{lesson:"L1",title:"Te présenter et expliquer tes objectifs",prompt:`<b>Write a paragraph to introduce yourself and explain your reasons for taking this course.</b><ul><li>Your full name</li><li>Where you are from and where you currently live</li><li>What you do and how long you've been doing it</li><li>Your interests or hobbies, and why you enjoy them</li><li>When and how you started learning English</li><li>Why you want to improve your English</li><li>What concrete differences you would like to see by the end</li><li>Your overall goal (fluency, confidence…)</li><li>Specific objectives or areas you struggle with</li><li>What level you hope to reach</li></ul>`},
 "L2-H1":{lesson:"L2",title:"Ex. 1 — Read and choose",prompt:`<div class="reading en say">We develop walking tours. The app has a map. Today, we are checking a new route. We are not selling flight tickets.</div><ul><li>Write one routine sentence and one current-activity sentence.</li><li>Write a WH question about what the company develops.</li><li>Write a WH question about today's work.</li></ul>`},
 "L2-H2":{lesson:"L2",title:"Ex. 2 — Complete the forms",prompt:`Use do, does, has, is or are. Write the whole sentence.<ul><li>Where ___ you work?</li><li>What ___ the company sell?</li><li>The app ___ a map.</li><li>What ___ the team checking?</li><li>We ___ testing a route.</li><li>Write the -ing forms of work, make and run.</li></ul>`},
 "L2-H3":{lesson:"L2",title:"Ex. 3 — Write a short update",prompt:`Write six short sentences: two routines, two current activities and one negative in each tense. Then write one WH question in each tense. Use true details and check the auxiliary before the main verb.`},
 "L3-H1":{lesson:"L3",title:"Ex. 1 — Read the sequence",prompt:`<div class="reading en say">Last Friday, I was checking a hotel booking when a client called. The hotel had sent the wrong arrival date earlier that morning. I contacted the hotel and received a corrected confirmation at eleven.</div><ul><li>What was in progress when the client called?</li><li>What had happened earlier?</li><li>What did the writer do next?</li><li>Copy one verb phrase in each of the three past tenses.</li></ul>`},
 "L3-H2":{lesson:"L3",title:"Ex. 2 — Regular, then irregular forms",prompt:`Write each whole sentence. Then write a WH question that asks for one detail.<ul><li>Yesterday, we ___ the route. (test)</li><li>At ten, I ___ a long file when the phone rang. (check)</li><li>Before the meeting began, we ___ all five prices. (check)</li><li>Yesterday, I ___ the summary. (send)</li><li>Before the call, I ___ the report. (write)</li><li>The guides ___ busy at ten. (be)</li></ul>`},
 "L3-H3":{lesson:"L3",title:"Ex. 3 — Write an incident report",prompt:`Write six to eight short sentences about a real incident or the meeting-point case. Include a finished event, a background activity and an earlier completed action. Add one negative and one WH question. Check did + base verb, was/were + -ing and had + past participle.`},
 "L4-H1":{lesson:"L4",title:"Ex. 1 — Read a schedule",prompt:`<div class="reading en say">I'll confirm the venue today. At nine tomorrow, we will be setting up the equipment. By eleven, we will have tested every sign. By noon, the team will have been working outside for three hours.</div><ul><li>What will be confirmed today?</li><li>What will be in progress at nine?</li><li>What will be complete by eleven?</li><li>How long will the outdoor work have been going on by noon?</li></ul>`},
 "L4-H2":{lesson:"L4",title:"Ex. 2 — Choose and ask",prompt:`Choose the option, then write a WH question about the time or duration.<ul><li>By six, we <i>will have sent / will be sending</i> all six files. They will all be ready.</li><li>At six, the team <i>will be checking / will have checked</i> the map. The check will still be in progress.</li><li>By noon, we <i>will have been walking / will walk</i> for two hours. We will still be on the route.</li></ul>`},
 "L4-H3":{lesson:"L4",title:"Ex. 3 — Write a project update",prompt:`Write 75–100 words. Include one decision, one action in progress at a future hour, one finished result by a deadline and one duration. Add a question about the timetable.<ul><li>Decision: send an email today.</li><li>Tomorrow at 10: test in progress.</li><li>By Thursday: take photos and send a report.</li><li>By Friday: work on the route for a week.</li></ul>`},
 "L5-H1":{lesson:"L5",title:"Ex. 1 — Read and identify time",prompt:`<div class="reading en say">We update the route each Monday. Today we are checking a new map. Yesterday we sent a short note, and we had written the full report before the meeting. Next Friday we are going to present the result. At ten tomorrow, we will be testing the final version.</div><ul><li>Which action is routine?</li><li>Which is happening now?</li><li>Which two actions happened in the past, and in what order?</li><li>Which future event was planned earlier?</li></ul>`},
 "L5-H2":{lesson:"L5",title:"Ex. 2 — Complete and question",prompt:`Conjugate each verb, then write a WH question about a stated time or object.<ul><li>Yesterday, we ___ the report. (write)</li><li>Now, the team ___ the route. (test)</li><li>Before the meeting, I ___ the note. (send; past perfect)</li><li>Next week, we ___ the result. (going to + present)</li><li>At noon tomorrow, they ___ the app. (future continuous + check)</li></ul>`},
 "L5-H3":{lesson:"L5",title:"Ex. 3 — Write a timeline",prompt:`Write eight sentences about a fictional project: two present, three past and three future. Include one irregular past verb and three WH questions using different helpers. Underline the helper in each question. Check that did is followed by a base verb.`},
};

/* Flashcards: vocabulary noted in class (V = / P =), irregular verbs, key phrases */
const CARDS = [
 ["v-company","a company","une entreprise",""],["v-run","run (a business)","diriger (une entreprise)","I run a digital travel agency."],
 ["v-offer","offer","proposer, offrir","The app offers self-guided visits."],["v-cover","cover","couvrir","It covers more than 500 cities."],
 ["v-improve","improve","améliorer","I want to improve my English."],["v-allow","allow … to","permettre de","The app allows travellers to discover cities."],
 ["v-laugh","laugh","rire","Prononciation : « lah-ff »"],["v-throw","throw away","jeter",""],["v-pull","pull","tirer",""],["v-climb","climb","grimper",""],
 ["v-hope","hope","espoir / espérer",""],["v-wonder","wonder","merveille / se demander",""],["v-forget","forget","oublier","forget – forgot – forgotten"],
 ["v-believe","believe","croire",""],["v-whisper","whisper","chuchoter","I always whisper…"],["v-argue","argue","se disputer, argumenter","Prononciation : « arr-gew », 2 syllabes"],
 ["v-shout","shout","crier","Prononciation : « showt »"],["v-cry","cry","pleurer",""],["v-build","build","construire","Prononciation : « bild »"],
 ["v-buy","buy","acheter","buy – bought – bought"],["v-activate","activate","activer",""],["v-send","send","envoyer","send – sent – sent"],
 ["v-modify","modify","modifier",""],["v-report","report","signaler",""],["v-develop","develop","développer","At work, I develop the app."],
 ["v-convert","convert","convertir",""],["v-meet","meet (with)","rencontrer, se réunir avec","meet – met – met"],["v-stake","stakeholders","parties prenantes","I meet with stakeholders."],
 ["p-how1","How are you?","Comment vas-tu (maintenant) ?",""],["p-how2","How have you been?","Comment vas-tu depuis la dernière fois ?","Present perfect"],
 ["i-be","be","was / were · been","irrégulier"],["i-have","have","had · had","irrégulier"],["i-do","do","did · done","irrégulier"],["i-go","go","went · gone","irrégulier"],
 ["i-see","see","saw · seen","irrégulier"],["i-write","write","wrote · written","irrégulier"],["i-send","send","sent · sent","irrégulier"],["i-take","take","took · taken","irrégulier"],
 ["i-make","make","made · made","irrégulier"],["i-speak","speak","spoke · spoken","irrégulier"],
].map(([id,en,fr,note])=>({id,en,fr,note,kind:id[0]==="i"?"verb":"vocab"}));

const SCENARIOS = {
 intro:{ic:"hand",c:"blue",label:"Me présenter (Ryo)",focus:"introducing himself and his company Ryo with action verbs (live, work, run, create, offer, cover, help, meet, present, improve)",open:"Ask him to introduce himself and his company."},
 update:{ic:"spark",c:"mint",label:"Point d'avancement au présent",focus:"present simple vs present continuous vs present perfect, talking about his normal work and what he is doing this week",open:"Ask what he usually does at work and what he is working on this week."},
 incident:{ic:"clock",c:"past",label:"Raconter un incident (passé)",focus:"past simple, past continuous and past perfect: telling a short story about a real incident at work or while travelling",open:"Ask him what happened at work last week, and push him to use 'was …ing when…' and 'had …'."},
 plan:{ic:"rocket",c:"future",label:"Planning de lancement (futur)",focus:"the four future forms (will, will be -ing, will have + participle, will have been -ing) and going to, about a route launch or CES preparation",open:"Ask about his plans for the next weeks and the CES trip in January."},
 interview:{ic:"chat",c:"pink",label:"Interview croisée (tous temps)",focus:"asking and answering WH questions in present, past and future",open:"Interview him, then ask him to ask you three questions in different tenses."},
 ces:{ic:"users",c:"sun",label:"Networking au CES",focus:"CES Las Vegas networking: greeting a visitor, presenting Ryo in two sentences, asking about their work, exchanging contacts, closing politely",open:"Play an international visitor at the CES booth. Greet him."},
};



/* ============ PAST-TENSE REFLEX (simple vocabulary, many repetitions) ============ */
const R_PS="Action terminée : past simple (worked, went). Négatif et question : did + verbe de base.";
const R_BE="Be au passé : was / were. Pas de did avec be.";
const R_PC="Action en cours à ce moment-là : was / were + -ing.";
const R_PSPC="Le décor en cours : was / were + -ing. L'événement qui coupe : past simple.";
const R_PP="Action finie AVANT une autre action passée : had + participe passé.";
const R_PSPP="L'action la plus ancienne : had + participe. La plus récente : past simple.";
const R_SEQ="Une suite d'actions terminées : past simple pour chacune.";
const PAST_BANK=[
 ["J'ai travaillé hier.",["I worked yesterday"],R_PS],["Je n'ai pas travaillé hier.",["I didn't work yesterday"],R_PS],["Tu as travaillé hier ?",["Did you work yesterday"],R_PS],
 ["Elle est allée à Paris.",["She went to Paris"],R_PS],["Elle n'est pas allée à Paris.",["She didn't go to Paris"],R_PS],["Est-ce qu'elle est allée à Paris ?",["Did she go to Paris"],R_PS],
 ["Nous avons mangé à midi.",["We ate at noon","We had lunch at noon"],R_PS],["Ils ont vu le film.",["They saw the film","They saw the movie"],R_PS],["Il a appelé ce matin.",["He called this morning"],R_PS],
 ["Je n'ai pas vu le message.",["I didn't see the message"],R_PS],["Où es-tu allé ?",["Where did you go"],R_PS],["Qu'est-ce que tu as mangé ?",["What did you eat"],R_PS],
 ["J'étais fatigué.",["I was tired"],R_BE],["Tu étais où ?",["Where were you"],R_BE],["Nous n'étions pas au bureau.",["We weren't at the office","We weren't in the office"],R_BE],["Est-ce qu'il était content ?",["Was he happy"],R_BE],
 ["Je dormais.",["I was sleeping"],R_PC],["Je ne dormais pas.",["I wasn't sleeping"],R_PC],["Tu dormais ?",["Were you sleeping"],R_PC],["Il conduisait.",["He was driving"],R_PC],
 ["Nous regardions la télé.",["We were watching TV","We were watching television"],R_PC],["Ils ne travaillaient pas.",["They weren't working"],R_PC],["Qu'est-ce que tu faisais ?",["What were you doing"],R_PC],
 ["À huit heures, je cuisinais.",["At eight I was cooking","At eight o'clock I was cooking","I was cooking at eight"],R_PC],["Je lisais pendant qu'elle cuisinait.",["I was reading while she was cooking"],R_PC],
 ["Je dormais quand tu as appelé.",["I was sleeping when you called"],R_PSPC],["Il conduisait quand il a vu l'accident.",["He was driving when he saw the accident"],R_PSPC],
 ["Nous mangions quand elle est arrivée.",["We were eating when she arrived"],R_PSPC],["Elle travaillait quand le téléphone a sonné.",["She was working when the phone rang"],R_PSPC],
 ["Qu'est-ce que tu faisais quand je t'ai appelé ?",["What were you doing when I called you","What were you doing when I called"],R_PSPC],["Il pleuvait quand nous sommes partis.",["It was raining when we left"],R_PSPC],
 ["J'avais fini.",["I had finished"],R_PP],["Je n'avais pas fini.",["I hadn't finished"],R_PP],["Elle était déjà partie.",["She had already left"],R_PP],["Avais-tu mangé ?",["Had you eaten"],R_PP],
 ["Quand je suis arrivé, il était parti.",["When I arrived he had left","When I arrived he had gone"],R_PSPP],["Quand elle a appelé, j'avais fini.",["When she called I had finished"],R_PSPP],
 ["Le film avait commencé quand nous sommes arrivés.",["The film had started when we arrived","The movie had started when we arrived"],R_PSPP],["Je n'avais jamais vu Las Vegas avant.",["I had never seen Las Vegas before"],R_PP],
 ["Il avait envoyé le mail avant la réunion.",["He had sent the email before the meeting"],R_PP],["Ils étaient partis avant midi.",["They had left before noon"],R_PP],
 ["J'ai raté le train parce que je m'étais réveillé tard.",["I missed the train because I had woken up late"],R_PSPP],["Il a dit qu'il avait fini.",["He said he had finished","He said that he had finished"],R_PSPP],
 ["Je suis rentré, j'ai mangé et j'ai dormi.",["I went home I ate and I slept","I came home I ate and I slept","I went home ate and slept","I came home ate and slept"],R_SEQ],
 ["Hier à dix heures, je travaillais.",["Yesterday at ten I was working","I was working at ten yesterday"],R_PC],["Hier, j'ai travaillé de neuf heures à midi.",["Yesterday I worked from nine to noon","Yesterday I worked from nine to twelve"],R_PS],
];
Object.assign(DRILLS,{
 "L3-reflex-aux":{title:"Réflexe : did, was, were ou had ?",src:"Cours 3 · entraînement réflexe",type:"fill",items:[
  {q:"___ you work yesterday?",a:["did"]},{q:"She ___ sleeping when I called.",a:["was"]},{q:"They ___ watching TV.",a:["were"]},{q:"When I arrived, he ___ left.",a:["had"]},
  {q:"I ___ not see the message.",a:["did"]},{q:"What ___ you doing at eight?",a:["were"]},{q:"We ___ finished before noon.",a:["had"]},{q:"Where ___ she go?",a:["did"]},
  {q:"It ___ raining when we left.",a:["was"]},{q:"___ you eaten before the meeting?",a:["had"]},{q:"He ___ not driving.",a:["was"]},{q:"Why ___ they leave early?",a:["did"]}]},
 "L3-reflex-tense":{title:"Réflexe : quel passé ?",src:"Cours 3 · entraînement réflexe",type:"choice",items:[
  {q:"I ___ when you called.",opts:["slept","was sleeping","had slept"],a:1,why:"En cours au moment de l'appel"},
  {q:"Yesterday, we ___ to Lyon.",opts:["went","were going","had gone"],a:0,why:"Action terminée, moment terminé"},
  {q:"When I arrived, the film ___.",opts:["started","was starting","had started"],a:2,why:"Commencé AVANT mon arrivée"},
  {q:"At eight, she ___ dinner.",opts:["cooked","was cooking","had cooked"],a:1,why:"En cours à huit heures"},
  {q:"He ___ the email before the meeting.",opts:["sent","was sending","had sent"],a:2,why:"Fini AVANT la réunion"},
  {q:"They ___ TV when the phone rang.",opts:["watched","were watching","had watched"],a:1,why:"Le décor, coupé par le téléphone"},
  {q:"I ___ my keys this morning.",opts:["lost","was losing","had lost"],a:0,why:"Action terminée"},
  {q:"She missed the train because she ___ up late.",opts:["woke","was waking","had woken"],a:2,why:"Plus ancien que « missed »"},
  {q:"What ___ at ten yesterday?",opts:["did you do","were you doing","had you done"],a:1,why:"En cours à dix heures"},
  {q:"___ to the meeting last week?",opts:["Did you go","Were you going","Had you gone"],a:0,why:"Action terminée : did + base"},
  {q:"We ___ when it started to rain.",opts:["walked","were walking","had walked"],a:1,why:"En cours quand la pluie a commencé"},
  {q:"By the time I called, he ___.",opts:["left","was leaving","had left"],a:2,why:"Déjà fini avant mon appel"}]},
 "L3-reflex-neg":{title:"Réflexe : négatif et question",src:"Cours 3 · entraînement réflexe",type:"order",items:[
  {q:"Négatif → I worked yesterday.",a:["I did not work yesterday"]},{q:"Question → She called you.",a:["Did she call you"]},
  {q:"Négatif → They were sleeping.",a:["They were not sleeping"]},{q:"Question → He was driving.",a:["Was he driving"]},
  {q:"Négatif → We had finished.",a:["We had not finished"]},{q:"Question → You had eaten.",a:["Had you eaten"]},
  {q:"Négatif → She went to Paris.",a:["She did not go to Paris"]},{q:"Question → They saw the film.",a:["Did they see the film"]}]},
});
LESSONS[2].drills.unshift("L3-reflex-tense","L3-reflex-aux","L3-reflex-neg");


/* ============ THE 7 CORE TENSES (his permanent revision base) ============ */
const CORE_TENSES=[
 {k:"PS",row:"present",col:"simple",name:"Present simple",memo:"pressimple",f:"sujet + verbe de base (+ s à he / she / it)",quand:"Habitude, routine, fait général",ind:"every day, usually, often",ex:["I work. He works.","I don't work. He doesn't work.","Do you work? Does he work?"]},
 {k:"PC",row:"present",col:"continuous",name:"Present continuous",memo:"prescont",f:"sujet + am / is / are + verbe-ing",quand:"En cours maintenant, cette semaine",ind:"now, right now, this week",ex:["I am working. He is working.","I'm not working. He isn't working.","Are you working? Is he working?"]},
 {k:"PP",row:"present",col:"perfect",name:"Present perfect",memo:"presperfect",f:"sujet + have / has + participe passé",quand:"Bilan jusqu'à maintenant, sans date précise",ind:"so far, already, yet, ever, never",ex:["I have worked. He has worked.","I haven't worked. He hasn't worked.","Have you worked? Has he worked?"]},
 {k:"PaS",row:"past",col:"simple",name:"Past simple",memo:"pastsimple",f:"sujet + verbe au passé (-ed ou irrégulier)",quand:"Action terminée, moment terminé",ind:"yesterday, last week, ago",ex:["I worked. He went.","I didn't work.","Did you work?"]},
 {k:"PaC",row:"past",col:"continuous",name:"Past continuous",memo:"pastcont",f:"sujet + was / were + verbe-ing",quand:"En cours à un moment du passé",ind:"at ten yesterday, when…, while…",ex:["I was working. They were working.","I wasn't working. You weren't working.","Were you working? Was he working?"]},
 {k:"FS",row:"future",col:"simple",name:"Future simple",memo:"will",f:"sujet + will + verbe de base",quand:"Décision, promesse, prédiction",ind:"tomorrow, next week",ex:["I will work.","I won't work.","Will you work?"]},
 {k:"FC",row:"future",col:"continuous",name:"Future continuous",memo:"futcont",f:"sujet + will be + verbe-ing",quand:"En cours à un moment du futur",ind:"at ten tomorrow",ex:["I will be working.","I won't be working.","Will you be working?"]},
];
const CORE_MORE={
 PS:["Ryo offers audio tours in 500 cities.","I usually work from Lyon.","My team doesn't work on Sundays.","What does your company do?"],
 PC:["Right now, we are testing a new route.","This week, I'm preparing CES.","She isn't listening.","What are you working on?"],
 PP:["So far, we have tested three routes.","I have never been to Las Vegas.","Has the team finished yet?","We haven't launched the new version yet."],
 PaS:["Yesterday, I sent the report.","We went to Paris last week.","I didn't see your message.","Where did you go on holiday?"],
 PaC:["I was driving when you called.","At ten, the guides were waiting.","We weren't working at that time.","What were you doing at eight?"],
 FS:["I will call you tomorrow.","The phone is ringing. I'll answer it.","We won't be late.","Will you come to CES?"],
 FC:["At ten tomorrow, I will be flying to Las Vegas.","This time next week, we will be visiting CES.","I won't be working on Saturday.","Will you be using the app tomorrow?"]};
const COLC={simple:"#E8772E",continuous:"#2FA84F",perfect:"#2E86DE",pcont:"#9B59D0"};
/* mini timeline: where the tense sits between past, now and future */
function miniTL(t){const c=COLC[t.col];let g="";
  if(t.k==="PS")g=[30,60,90,120,150,180,210].map(x=>`<circle cx="${x}" cy="28" r="4.5" fill="${c}"/>`).join("");
  if(t.k==="PC")g=`<rect x="96" y="22" width="48" height="12" rx="6" fill="${c}"/>`;
  if(t.k==="PP")g=`<circle cx="44" cy="28" r="5" fill="${c}"/><line x1="44" y1="28" x2="112" y2="28" stroke="${c}" stroke-width="4"/><polygon points="112,22 121,28 112,34" fill="${c}"/>`;
  if(t.k==="PaS")g=`<circle cx="62" cy="28" r="7" fill="${c}"/>`;
  if(t.k==="PaC")g=`<rect x="26" y="22" width="70" height="12" rx="6" fill="${c}"/><polygon points="78,8 84,18 72,18" fill="var(--past)"/>`;
  if(t.k==="FS")g=`<circle cx="180" cy="28" r="7" fill="${c}"/>`;
  if(t.k==="FC")g=`<rect x="146" y="22" width="70" height="12" rx="6" fill="${c}"/>`;
  if(t.k==="PaP")g=`<circle cx="34" cy="28" r="7" fill="${c}"/><polygon points="80,8 86,18 74,18" fill="var(--past)"/><line x1="80" y1="20" x2="80" y2="36" stroke="var(--past)" stroke-width="3"/>`;
  if(t.k==="GT")g=`<circle cx="120" cy="28" r="5" fill="${c}"/><path d="M124 28 Q150 6 176 24" stroke="${c}" stroke-width="3" fill="none" stroke-dasharray="4 3"/><circle cx="182" cy="28" r="7" fill="${c}"/>`;
  if(t.k==="FP")g=`<circle cx="166" cy="28" r="7" fill="${c}"/><line x1="206" y1="14" x2="206" y2="42" stroke="var(--future)" stroke-width="3"/><polygon points="200,8 212,8 206,16" fill="var(--future)"/>`;
  if(t.k==="FPC")g=`<rect x="130" y="22" width="76" height="12" rx="6" fill="${c}"/><line x1="206" y1="14" x2="206" y2="42" stroke="var(--future)" stroke-width="3"/>`;
  return `<svg class="mtl" viewBox="0 0 240 50" role="img" aria-label="Position de ${t.name} sur la ligne du temps">
   <rect x="6" y="18" width="110" height="20" rx="10" fill="var(--past)" opacity=".08"/><rect x="124" y="18" width="110" height="20" rx="10" fill="var(--future)" opacity=".08"/>
   <line x1="6" y1="28" x2="232" y2="28" stroke="var(--line)" stroke-width="3" stroke-linecap="round"/><polygon points="232,23 240,28 232,33" fill="var(--line)"/>
   <line x1="120" y1="12" x2="120" y2="42" stroke="var(--ink)" stroke-width="2" stroke-dasharray="3 3"/>
   ${g}<text x="8" y="48" class="lbl">passé</text><text x="120" y="10" text-anchor="middle" class="lbl" font-weight="800">now</text><text x="232" y="48" text-anchor="end" class="lbl">futur</text></svg>`}
/* the big timeline with the 7 tenses */
function bigTL(){const C=COLC,lab=(x,y,a,b,col)=>`<text x="${x}" y="${y}" text-anchor="middle" font-weight="800" fill="${col}">${a}</text><text x="${x}" y="${y+15}" text-anchor="middle" class="lbl2">${b}</text>`;
  return `<div class="tl"><svg class="bigtl" viewBox="0 0 900 250" role="img" aria-label="Les 7 temps sur une ligne du temps">
   <rect x="30" y="40" width="405" height="175" rx="16" fill="var(--past)" opacity=".07"/><rect x="465" y="40" width="405" height="175" rx="16" fill="var(--future)" opacity=".07"/>
   <line x1="30" y1="205" x2="866" y2="205" stroke="var(--line)" stroke-width="5" stroke-linecap="round"/><polygon points="866,197 882,205 866,213" fill="var(--line)"/>
   <line x1="450" y1="30" x2="450" y2="215" stroke="var(--ink)" stroke-width="3" stroke-dasharray="6 6"/>
   <text x="450" y="236" text-anchor="middle" font-weight="800" fill="var(--ink)">NOW</text><text x="230" y="236" text-anchor="middle" font-weight="800" fill="var(--past)">PASSÉ</text><text x="670" y="236" text-anchor="middle" font-weight="800" fill="var(--future)">FUTUR</text>
   ${lab(450,18,"Present simple","I work · every day (habitude)",C.simple)}${[60,120,180,240,300,360,420,480,540,600,660,720,780,840].map(x=>`<circle cx="${x}" cy="48" r="5" fill="${C.simple}"/>`).join("")}
   ${lab(170,78,"Past simple","I worked · yesterday",C.simple)}<circle cx="170" cy="110" r="9" fill="${C.simple}"/>
   ${lab(360,78,"Present perfect","I have worked · so far",C.perfect)}<circle cx="290" cy="110" r="6" fill="${C.perfect}"/><line x1="290" y1="110" x2="438" y2="110" stroke="${C.perfect}" stroke-width="5"/><polygon points="438,102 450,110 438,118" fill="${C.perfect}"/>
   ${lab(720,78,"Future simple","I will work · tomorrow",C.simple)}<circle cx="720" cy="110" r="9" fill="${C.simple}"/>
   ${lab(195,140,"Past continuous","I was working · when you called",C.continuous)}<rect x="90" y="166" width="210" height="16" rx="8" fill="${C.continuous}"/><polygon points="240,152 248,163 232,163" fill="var(--past)"/>
   ${lab(450,140,"Present continuous","I am working · now",C.continuous)}<rect x="405" y="166" width="90" height="16" rx="8" fill="${C.continuous}"/>
   ${lab(712,140,"Future continuous","I will be working · at ten tomorrow",C.continuous)}<rect x="610" y="166" width="205" height="16" rx="8" fill="${C.continuous}"/>
  </svg></div>`}
const CORE_ROWS=[["present","Présent","PRÉSENT"],["past","Passé","PASSÉ"],["future","Futur","FUTUR"]];
const CORE_COLS=[["simple","Simple"],["continuous","Continuous"],["perfect","Perfect"]];
function openChart(){
  const ov=document.createElement("div");ov.className="ov chart-ov";
  const cell=(r,c)=>{const t=CORE_TENSES.find(x=>x.row===r&&x.col===c);
    if(!t)return `<div class="cc empty"><span>—</span></div>`;return tenseCard(t)};
  ov.innerHTML=`<div class="box chartbox">
    <div class="row" style="padding:16px 20px 0"><h2 style="flex:1">Les 7 temps de base</h2><button class="btn primary" id="chartTrain">${ICON.zap}<span>M'entraîner</span></button><button class="btn ghost" id="chartX" aria-label="Fermer">${ICON.x}</button></div>
    <div style="padding:8px 20px 0">${bigTL()}</div>
    <div class="chartgrid">
      <div></div>${CORE_COLS.map(([c,l])=>`<div class="ch c-${c}">${l}</div>`).join("")}
      ${CORE_ROWS.map(([r,l,L])=>`<div class="rh r-${r}"><span>${L}</span></div>${CORE_COLS.map(([c])=>cell(r,c)).join("")}`).join("")}
    </div></div>`;
  document.querySelectorAll(".chart-ov").forEach(o=>o.remove());document.body.appendChild(ov);decorate(ov);
  const close=()=>ov.remove();$("#chartX",ov).onclick=close;ov.onclick=e=>{if(e.target===ov)close()};
  $("#chartTrain",ov).onclick=()=>{close();coreNewSeries();location.hash="exercises--CORE-chart";route()};
}
/* --- conjugation engine for drills --- */
const CORE_VERBS=[{b:"work",fr:"travailler"},{b:"walk",fr:"marcher"},{b:"play",fr:"jouer"},{b:"call",fr:"appeler"},{b:"watch",fr:"regarder"},{b:"travel",fr:"voyager",ed:"travelled",ing:"travelling"},{b:"study",fr:"étudier"},
 {b:"go",fr:"aller",past:"went",pp:"gone"},{b:"eat",fr:"manger",past:"ate",pp:"eaten"},{b:"see",fr:"voir",past:"saw",pp:"seen"},{b:"write",fr:"écrire",past:"wrote",pp:"written"},{b:"take",fr:"prendre",past:"took",pp:"taken"},
 {b:"make",fr:"faire, fabriquer",past:"made",pp:"made"},{b:"do",fr:"faire",past:"did",pp:"done"},{b:"have",fr:"avoir",past:"had",pp:"had"},{b:"send",fr:"envoyer",past:"sent",pp:"sent"},{b:"run",fr:"courir",past:"ran",pp:"run",ing:"running"},{b:"meet",fr:"rencontrer",past:"met",pp:"met"}];
const SUBJ=["I","you","he","she","we","they"];
const third=s=>s==="he"||s==="she";
const vIng=v=>v.ing||(/ie$/.test(v.b)?v.b.slice(0,-2)+"ying":/[^e]e$/.test(v.b)?v.b.slice(0,-1)+"ing":v.b+"ing");
const vS=v=>v.b==="have"?"has":v.b==="do"?"does":v.b==="go"?"goes":/(s|sh|ch|x)$/.test(v.b)?v.b+"es":/[^aeiou]y$/.test(v.b)?v.b.slice(0,-1)+"ies":v.b+"s";
const vEd=v=>v.past||v.ed||(/e$/.test(v.b)?v.b+"d":/[^aeiou]y$/.test(v.b)?v.b.slice(0,-1)+"ied":v.b+"ed");
const vPP=v=>v.pp||vEd(v);
const beP=s=>s==="I"?"am":third(s)?"is":"are", beT=s=>s==="I"||third(s)?"was":"were", haveP=s=>third(s)?"has":"have";
function conj(t,form,s,v){const S=s,cap=x=>x.charAt(0).toUpperCase()+x.slice(1);
  switch(t){
   case"PS":return form==="+"?`${S} ${third(s)?vS(v):v.b}`:form==="-"?`${S} ${third(s)?"does":"do"} not ${v.b}`:`${cap(third(s)?"does":"do")} ${S} ${v.b}?`;
   case"PC":return form==="+"?`${S} ${beP(s)} ${vIng(v)}`:form==="-"?`${S} ${beP(s)} not ${vIng(v)}`:`${cap(beP(s))} ${S} ${vIng(v)}?`;
   case"PP":return form==="+"?`${S} ${haveP(s)} ${vPP(v)}`:form==="-"?`${S} ${haveP(s)} not ${vPP(v)}`:`${cap(haveP(s))} ${S} ${vPP(v)}?`;
   case"PaS":return form==="+"?`${S} ${vEd(v)}`:form==="-"?`${S} did not ${v.b}`:`Did ${S} ${v.b}?`;
   case"PaC":return form==="+"?`${S} ${beT(s)} ${vIng(v)}`:form==="-"?`${S} ${beT(s)} not ${vIng(v)}`:`${cap(beT(s))} ${S} ${vIng(v)}?`;
   case"FS":return form==="+"?`${S} will ${v.b}`:form==="-"?`${S} will not ${v.b}`:`Will ${S} ${v.b}?`;
   case"FC":return form==="+"?`${S} will be ${vIng(v)}`:form==="-"?`${S} will not be ${vIng(v)}`:`Will ${S} be ${vIng(v)}?`;
  }}
const FORM_FR={"+":"affirmatif","-":"négatif","?":"question"};
function coreItem(seed){const r=k=>{seed=(seed*9301+49297)%233280;return Math.floor(seed/233280*k)};
  const t=CORE_TENSES[r(CORE_TENSES.length)],form=["+","-","?"][r(3)],s=SUBJ[r(SUBJ.length)];
  const vs=/C$/.test(t.k)?CORE_VERBS.filter(x=>!["have","see"].includes(x.b)):CORE_VERBS,v=vs[r(vs.length)];
  const ans=conj(t.k,form,s,v);const disp=ans.charAt(0).toUpperCase()+ans.slice(1);
  return {t,form,s,v,q:`${t.name} · ${FORM_FR[form]} : ${s} / ${v.b}`,a:[disp],why:`${t.name} : ${t.f}${form==="-"?" (négatif)":form==="?"?" (question)":""}`}}
function coreNewSeries(){const base=Date.now()%100000;DRILLS["CORE-chart"].items=[...Array(10)].map((_,k)=>coreItem(base+k*977+13))}
DRILLS["CORE-chart"]={title:"Les 7 temps de base",src:"Tableau des temps · nouvelle série à chaque fois",type:"order",items:[]};coreNewSeries();
const CORE_LESSON={id:"CORE",n:"base",date:"2026-10-01",tense:"mixed",topic:"Les 7 temps de base",drills:["CORE-chart"],hw:[]};
function corePoolItems(){const out=[];for(let k=0;k<40;k++){const c=coreItem(k*7919+101);out.push({id:"core-"+c.t.k+c.form+c.s+c.v.b,kind:"chart",l:null,focus:true,ask:c.q,
  say:[{text:c.t.name+",",lang:"en"},{text:FORM_FR[c.form]+" :",lang:"fr"},{text:c.s+", "+c.v.b,lang:"en"}],ans:c.a,ansLang:"en",rule:c.why,memoKey:c.t.memo})}
  const seen=new Set();return out.filter(x=>!seen.has(x.id)&&seen.add(x.id))}


/* ============ IRREGULAR VERBS (regular practice) ============ */
/* [base, past, past participle, French, top priority] */
const IRR=[["be","was / were","been","être",1],["have","had","had","avoir",1],["do","did","done","faire",1],["go","went","gone","aller",1],["get","got","got","obtenir, recevoir",1],["make","made","made","faire, fabriquer",1],["say","said","said","dire",1],["see","saw","seen","voir",1],["take","took","taken","prendre",1],["come","came","come","venir",1],["know","knew","known","savoir, connaître",1],["think","thought","thought","penser",1],["give","gave","given","donner",1],["find","found","found","trouver",1],["tell","told","told","dire, raconter",1],["leave","left","left","partir, laisser",1],["feel","felt","felt","(se) sentir",1],["put","put","put","mettre",1],["bring","brought","brought","apporter",1],["begin","began","begun","commencer",1],["keep","kept","kept","garder",1],["write","wrote","written","écrire",1],["buy","bought","bought","acheter",1],["send","sent","sent","envoyer",1],["meet","met","met","rencontrer",1],["pay","paid","paid","payer",1],["speak","spoke","spoken","parler",1],["eat","ate","eaten","manger",1],["drive","drove","driven","conduire",1],["fly","flew","flown","voler (en avion)",1],["sell","sold","sold","vendre",1],["build","built","built","construire",1],["spend","spent","spent","dépenser, passer (du temps)",1],["understand","understood","understood","comprendre",1],
 ["become","became","become","devenir"],["break","broke","broken","casser"],["catch","caught","caught","attraper"],["choose","chose","chosen","choisir"],["cost","cost","cost","coûter"],["cut","cut","cut","couper"],["drink","drank","drunk","boire"],["fall","fell","fallen","tomber"],["forget","forgot","forgotten","oublier"],["grow","grew","grown","grandir, pousser"],["hear","heard","heard","entendre"],["hold","held","held","tenir"],["lend","lent","lent","prêter"],["let","let","let","laisser, permettre"],["lose","lost","lost","perdre"],["mean","meant","meant","signifier, vouloir dire"],["read","read","read","lire"],["ride","rode","ridden","monter (vélo, cheval)"],["ring","rang","rung","sonner"],["run","ran","run","courir"],["set","set","set","fixer, régler"],["show","showed","shown","montrer"],["shut","shut","shut","fermer"],["sing","sang","sung","chanter"],["sit","sat","sat","s'asseoir"],["sleep","slept","slept","dormir"],["stand","stood","stood","être debout"],["swim","swam","swum","nager"],["teach","taught","taught","enseigner"],["throw","threw","thrown","jeter, lancer"],["wake","woke","woken","(se) réveiller"],["wear","wore","worn","porter (un vêtement)"],["win","won","won","gagner"],["forgive","forgave","forgiven","pardonner"],["draw","drew","drawn","dessiner"],["hide","hid","hidden","cacher"]];
/* new verbs: work, travel, daily life [base, past, pp, French, top, category, example] */
const IRR_NEW=[
 ["lead","led","led","diriger, mener",0,"travail","She led the meeting yesterday."],
 ["deal","dealt","dealt","traiter, gérer",0,"travail","We have dealt with the problem."],
 ["forecast","forecast","forecast","prévoir",0,"travail","We forecast more clients next year."],
 ["rise","rose","risen","augmenter, monter",0,"travail","Sales have risen this month."],
 ["withdraw","withdrew","withdrawn","retirer",0,"travail","The partner withdrew its offer."],
 ["overcome","overcame","overcome","surmonter",0,"travail","We overcame the first problems."],
 ["undertake","undertook","undertaken","entreprendre",0,"travail","The team undertook a big project."],
 ["seek","sought","sought","rechercher",0,"travail","We are seeking new partners."],
 ["quit","quit","quit","quitter, arrêter",0,"travail","He quit his job last year."],
 ["split","split","split","partager, diviser",0,"travail","We split the work between two teams."],
 ["spread","spread","spread","(se) répandre, étaler",0,"travail","The news spread very fast."],
 ["bet","bet","bet","parier",0,"travail","I bet the app will win a prize."],
 ["oversleep","overslept","overslept","ne pas se réveiller à temps",0,"voyage","I overslept and missed my flight."],
 ["mistake","mistook","mistaken","confondre, se tromper",0,"voyage","I mistook the gate number."],
 ["lie","lay","lain","être allongé",0,"voyage","I lay on the beach all afternoon."],
 ["hang","hung","hung","accrocher, pendre",0,"voyage","I hung my coat in the hotel room."],
 ["light","lit","lit","allumer, éclairer",0,"voyage","The streets were lit at night."],
 ["shine","shone","shone","briller",0,"voyage","The sun shone all week in Las Vegas."],
 ["freeze","froze","frozen","geler",0,"voyage","It froze last night in the mountains."],
 ["hurt","hurt","hurt","faire mal, blesser",0,"quotidien","My back hurt after the flight."],
 ["shake","shook","shaken","secouer, serrer (la main)",0,"quotidien","I shook hands with the CEO."],
 ["steal","stole","stolen","voler (dérober)",0,"quotidien","Someone stole my phone."],
 ["hit","hit","hit","frapper, heurter",0,"quotidien","The car hit a tree."],
 ["feed","fed","fed","nourrir",0,"quotidien","I fed the cat this morning."],
 ["tear","tore","torn","déchirer",0,"quotidien","I tore my ticket by mistake."],
 ["bite","bit","bitten","mordre",0,"quotidien","The dog bit the postman."],
 ["blow","blew","blown","souffler",0,"quotidien","The wind blew all night."],
 ["stick","stuck","stuck","coller, rester coincé",0,"quotidien","We were stuck in traffic."]];
const IRR_CAT={},IRR_EX={},IRR_NEWSET=new Set(IRR_NEW.map(v=>v[0]));
const _cat={travail:"make send meet pay sell build spend understand write speak begin keep lend set show choose cost win mean teach hold lose forgive draw tell say think know give become",
 voyage:"go fly drive leave take come bring buy eat drink ride swim sleep wake wear catch find see sit stand hide fall run"};
IRR.forEach(v=>{IRR_CAT[v[0]]=_cat.travail.split(" ").includes(v[0])?"travail":_cat.voyage.split(" ").includes(v[0])?"voyage":"quotidien"});
IRR_NEW.forEach(v=>{IRR_CAT[v[0]]=v[5];IRR_EX[v[0]]=v[6];IRR.push(v.slice(0,5))});
Object.assign(IRR_EX,{go:"We went to Las Vegas last January.",fly:"I have flown to the US twice.",drive:"I drove to the office this morning.",leave:"The train left at nine.",take:"I took a taxi to the hotel.",bring:"I brought my laptop.",buy:"I bought a new phone.",send:"I sent the report yesterday.",meet:"We met the client at CES.",pay:"I paid the hotel by card.",sell:"We sold the app to a big partner.",build:"We have built a new route.",spend:"I spent two days in Paris.",write:"I have written the proposal.",speak:"I spoke English all day.",begin:"The meeting began at ten.",make:"We made a decision.",get:"I got your message.",lose:"I lost my keys.",forget:"I forgot my passport!",sleep:"I slept badly last night.",wake:"I woke up at six.",eat:"We ate in a nice restaurant.",see:"I saw the new office.",find:"I found a good hotel.",choose:"We chose the best offer.",catch:"I caught the last train.",wear:"I wore a suit for the meeting."});
const IRR_EX2={"be": ["I was in Paris yesterday.", "I have been to Las Vegas twice."], "have": ["We had a meeting this morning.", "I have had a busy week."], "do": ["I did my homework last night.", "Have you done the report?"], "go": ["We went to Las Vegas last January.", "She has gone to the office."], "get": ["I got your message yesterday.", "I have got a new phone."], "make": ["We made a decision on Monday.", "We have made a lot of progress."], "say": ["He said yes.", "I have said it many times."], "see": ["I saw the new office last week.", "Have you ever seen the Grand Canyon?"], "take": ["I took a taxi to the hotel.", "I have taken the train today."], "come": ["The client came at ten.", "Winter has come early this year."], "know": ["I knew the answer.", "I have known him for ten years."], "think": ["I thought it was a good idea.", "Have you thought about the price?"], "give": ["She gave me her card.", "We have given a discount to the client."], "find": ["I found a good hotel.", "Have you found your keys?"], "tell": ["He told me the news.", "I have told the team."], "leave": ["The train left at nine.", "She has already left."], "feel": ["I felt tired after the flight.", "I have never felt so good."], "put": ["I put my bag on the table.", "Where have you put the file?"], "bring": ["I brought my laptop.", "Have you brought your passport?"], "begin": ["The meeting began at ten.", "The project has begun."], "keep": ["I kept the receipt.", "We have kept our promise."], "write": ["I wrote an email to the client.", "I have written the proposal."], "buy": ["I bought a new phone.", "We have bought the tickets."], "send": ["I sent the report yesterday.", "Have you sent the invoice?"], "meet": ["We met the client at CES.", "I have met many partners this year."], "pay": ["I paid the hotel by card.", "The client has paid the invoice."], "speak": ["I spoke English all day.", "Have you spoken to the manager?"], "eat": ["We ate in a nice restaurant.", "I haven't eaten yet."], "drive": ["I drove to the office this morning.", "I have driven in the US once."], "fly": ["We flew to San Francisco.", "I have flown to the US twice."], "sell": ["We sold the app to a big partner.", "We have sold 1,000 subscriptions."], "build": ["They built a new hotel.", "We have built a new route."], "spend": ["I spent two days in Paris.", "We have spent too much money."], "understand": ["I understood the question.", "Have you understood the rule?"], "become": ["He became CEO in 2020.", "The app has become very popular."], "break": ["I broke my glasses.", "Someone has broken the printer."], "catch": ["I caught the last train.", "I have caught a cold."], "choose": ["We chose the best offer.", "Have you chosen a hotel?"], "cost": ["The ticket cost 200 dollars.", "The trip has cost a lot."], "cut": ["They cut the price by ten percent.", "We have cut our costs."], "drink": ["I drank a coffee at the airport.", "I have drunk too much coffee today."], "fall": ["Sales fell last month.", "The price has fallen."], "forget": ["I forgot my passport!", "I have forgotten his name."], "grow": ["The company grew fast.", "Our team has grown this year."], "hear": ["I heard the news this morning.", "Have you heard about the new app?"], "hold": ["We held a meeting on Friday.", "The team has held three workshops."], "lend": ["He lent me his car.", "I have lent my laptop to a colleague."], "let": ["She let me use her phone.", "They have let us test the app."], "lose": ["I lost my keys.", "We have lost a client."], "mean": ["I meant tomorrow, not today.", "I have always meant to visit Japan."], "read": ["I read the contract last night.", "Have you read my email?"], "ride": ["I rode a bike in Amsterdam.", "I have never ridden a horse."], "ring": ["The phone rang during the meeting.", "The bell has rung."], "run": ["I ran five kilometres yesterday.", "He has run the company for ten years."], "set": ["We set a deadline for Friday.", "Have you set the alarm?"], "show": ["I showed the app to the client.", "We have shown the demo at CES."], "shut": ["They shut the shop at seven.", "The airport has shut because of the snow."], "sing": ["We sang at the party.", "I have never sung in public."], "sit": ["I sat next to the CEO.", "We have sat here for an hour."], "sleep": ["I slept badly last night.", "Have you slept well?"], "stand": ["We stood in line for an hour.", "He has stood by me."], "swim": ["I swam in the hotel pool.", "I have swum in the Pacific."], "teach": ["She taught me English.", "My coach has taught me a lot."], "throw": ["I threw the old papers away.", "Have you thrown the box away?"], "wake": ["I woke up at six.", "The noise has woken the baby."], "wear": ["I wore a suit for the meeting.", "I have never worn a tie at work."], "win": ["We won a prize at CES.", "Our team has won the contract."], "forgive": ["She forgave him.", "I have forgiven you."], "draw": ["He drew a map for me.", "We have drawn a new plan."], "hide": ["I hid the gift in the car.", "Where have you hidden the keys?"], "lead": ["She led the meeting yesterday.", "He has led the team for two years."], "deal": ["I dealt with the client's problem.", "We have dealt with the problem."], "forecast": ["We forecast a good year.", "Experts have forecast more growth."], "rise": ["Prices rose last year.", "Sales have risen this month."], "withdraw": ["The partner withdrew its offer.", "I have withdrawn some cash."], "overcome": ["We overcame the first problems.", "The team has overcome every obstacle."], "undertake": ["The team undertook a big project.", "We have undertaken a new study."], "seek": ["They sought a new partner.", "We have sought advice from a lawyer."], "quit": ["He quit his job last year.", "She has quit smoking."], "split": ["We split the bill.", "We have split the work between two teams."], "spread": ["The news spread very fast.", "The app has spread across Europe."], "bet": ["I bet ten dollars in Vegas.", "He has bet on the wrong horse."], "oversleep": ["I overslept and missed my flight.", "I have never overslept before a meeting."], "mistake": ["I mistook the gate number.", "You have mistaken me for someone else."], "lie": ["I lay on the beach all afternoon.", "He has lain in bed all day."], "hang": ["I hung my coat in the hotel room.", "We have hung the posters on the stand."], "light": ["We lit a fire in the evening.", "The streets have been lit for Christmas."], "shine": ["The sun shone all week in Las Vegas.", "The sun has shone all day."], "freeze": ["It froze last night in the mountains.", "The lake has frozen."], "hurt": ["My back hurt after the flight.", "I have hurt my knee."], "shake": ["I shook hands with the CEO.", "The news has shaken the team."], "steal": ["Someone stole my phone.", "My wallet has been stolen."], "hit": ["The car hit a tree.", "The crisis has hit our sales."], "feed": ["I fed the cat this morning.", "Have you fed the dog?"], "tear": ["I tore my ticket by mistake.", "I have torn my jacket."], "bite": ["The dog bit the postman.", "A mosquito has bitten me."], "blow": ["The wind blew all night.", "The storm has blown the roof off."], "stick": ["We were stuck in traffic.", "The door has stuck again."]};
let IRR_FILTER="";
/* the flashcards' irregular verbs now come from this list (same ids as before, so progress is kept) */
for(let k=CARDS.length-1;k>=0;k--)if(CARDS[k].kind==="verb")CARDS.splice(k,1);
IRR.forEach(([b,pa,pp,fr,top])=>CARDS.push({id:"i-"+b,en:b,fr:pa+" · "+pp,note:fr,kind:"verb",top:!!top,frMeaning:fr}));
function irrAnswers(pa,pp){const ps=pa.split(" / "),out=new Set();ps.forEach(p=>out.add(p+" "+pp));if(ps.length>1){out.add(ps.join(" ")+" "+pp);out.add(ps.slice().reverse().join(" ")+" "+pp)}return [...out]}
function irrState(b){try{return ST().car["cv-i-"+b]}catch(e){return undefined}}
function irrNewSeries(){
  let t="";try{t=todayISO()}catch(e){}
  const sc=v=>{const r=irrState(v[0]);let s=Math.random()*3;if(IRR_NEWSET.has(v[0])&&!r)s+=6;if(r&&((r.errs||0)+(r.slow||0))>0&&(r.box||0)<3)s+=9;else if(!r)s+=v[4]?6:2;else if(r.due<=t)s+=4;else s-=4;if(v[4])s+=2;return s};
  DRILLS["IRR-drill"].items=IRR.filter(v=>!IRR_FILTER||IRR_CAT[v[0]]===IRR_FILTER).map(v=>({v,s:sc(v)})).sort((a,b)=>b.s-a.s).slice(0,10).map(({v})=>({q:`${v[0]} (${v[3]}) → passé + participe passé`,a:irrAnswers(v[1],v[2]),why:`${v[0]} · ${v[1]} · ${v[2]}${IRR_EX2[v[0]]?" — "+IRR_EX2[v[0]].join(" / "):""}`,ref:{id:"cv-i-"+v[0],card:"i-"+v[0],kind:"verb",ask:v[0],ans:[v[1].replace(" / "," or ")+" "+v[2]],rule:`Verbe irrégulier : ${v[0]}, ${v[1]}, ${v[2]}`}}));
}
DRILLS["IRR-drill"]={title:"Verbes irréguliers",src:"Base · passé + participe passé · nouvelle série à chaque fois",type:"order",items:[]};irrNewSeries();
CORE_LESSON.drills.push("IRR-drill");
const GEN_DRILLS={"CORE-chart":()=>coreNewSeries(),"IRR-drill":()=>irrNewSeries()};
function openIrr(){
  const ov=document.createElement("div");ov.className="ov irr-ov";
  const stat=b=>{const r=irrState(b);if(!r)return["new","Pas encore vu"];if(((r.errs||0)+(r.slow||0))>0&&(r.box||0)<3)return["bad","À retravailler"];if((r.box||0)>=3)return["ok","Maîtrisé"];return["mid","En cours"]};
  const counts={ok:0,mid:0,bad:0,new:0};IRR.forEach(v=>counts[stat(v[0])[0]]++);
  const CATS=[["","Tous"],["travail","Travail"],["voyage","Voyage"],["quotidien","Quotidien"]];
  const rows=()=>{const q=norm(($("#irrQ",ov)||{}).value||"");return IRR.filter(v=>(!q||norm(v.join(" ")).includes(q))&&(!IRR_FILTER||IRR_CAT[v[0]]===IRR_FILTER)).map(v=>{const st=stat(v[0]);
    return `<tr><td><span class="vdot ${st[0]}" title="${st[1]}"></span></td><td class="en"><b>${esc(v[0])}</b>${v[4]?' <span class="star" title="Prioritaire">★</span>':""}${IRR_NEWSET.has(v[0])?' <span class="irrcat" style="background:#FFF4CC;color:#8A6500">nouveau</span>':""}</td><td class="en v2">${esc(v[1])}${IRR_EX2[v[0]]?`<div class="irrex en say">${esc(IRR_EX2[v[0]][0])}</div>`:""}</td><td class="en v3">${esc(v[2])}${IRR_EX2[v[0]]?`<div class="irrex en say">${esc(IRR_EX2[v[0]][1])}</div>`:""}</td><td class="muted">${esc(v[3])} <span class="irrcat ${IRR_CAT[v[0]]}">${IRR_CAT[v[0]]}</span></td><td><button class="spk" data-irr="${esc(v[0])}" aria-label="Écouter">${ICON.speak}</button></td></tr>`}).join("")};
  ov.innerHTML=`<div class="box irrbox">
    <div class="row" style="padding:16px 20px 0"><h2 style="flex:1">Verbes irréguliers</h2><button class="btn primary" id="irrTrain">${ICON.zap}<span>M'entraîner</span></button><button class="btn ghost" id="irrX" aria-label="Fermer">${ICON.x}</button></div>
    <div class="row" style="padding:10px 20px 0">${resChip("ok",counts.ok+" maîtrisés")}${resChip("warn",counts.mid+" en cours")}${resChip("ko",counts.bad+" à retravailler")}${resChip("neutral",counts.new+" pas encore vus")}<span class="spacer"></span><input class="f" id="irrQ" placeholder="Chercher un verbe" style="max-width:220px"></div>
    <div class="row" style="padding:10px 20px 0" id="irrCats">${CATS.map(([k,l])=>`<button class="btn small ${k===IRR_FILTER?"typed t-cours":""}" data-cat="${k}">${l} · ${IRR.filter(v=>!k||IRR_CAT[v[0]]===k).length}</button>`).join("")}</div>
    <div class="tblwrap" style="padding:10px 20px 20px"><table class="irrtab"><thead><tr><th></th><th>Base</th><th>Passé</th><th>Participe passé</th><th>Français</th><th></th></tr></thead><tbody id="irrBody">${rows()}</tbody></table></div></div>`;
  document.querySelectorAll(".irr-ov").forEach(o=>o.remove());document.body.appendChild(ov);
  ov.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{IRR_FILTER=b.dataset.cat;ov.querySelectorAll("[data-cat]").forEach(x=>x.classList.toggle("typed",x===b));ov.querySelectorAll("[data-cat]").forEach(x=>x.classList.toggle("t-cours",x===b));$("#irrBody",ov).innerHTML=rows();bind();decorate($("#irrBody",ov))});
  const bind=()=>ov.querySelectorAll("[data-irr]").forEach(b=>b.onclick=()=>{const v=IRR.find(x=>x[0]===b.dataset.irr);say(`${v[0]}, ${v[1].replace(" / "," or ")}, ${v[2]}`)});bind();
  $("#irrQ",ov).oninput=()=>{$("#irrBody",ov).innerHTML=rows();bind()};
  const close=()=>ov.remove();$("#irrX",ov).onclick=close;ov.onclick=e=>{if(e.target===ov)close()};
  $("#irrTrain",ov).onclick=()=>{close();irrNewSeries();location.hash="exercises--IRR-drill";route()};
}
document.addEventListener("click",e=>{const c=e.target.closest("[data-irrlist]");if(c){e.preventDefault();e.stopPropagation();openIrr()}},true);

/* ============ TENSE CARDS IN THE LESSONS (same visual as the chart) ============ */
const EXTRA_TENSES=[
 {k:"PaP",row:"past",col:"perfect",name:"Past perfect",memo:"pastperfect",f:"sujet + had + participe passé",quand:"Fini AVANT une autre action passée",ind:"before, already, by the time",ex:["I had finished.","I hadn't finished.","Had you finished?"]},
 {k:"GT",row:"future",col:"simple",name:"Be going to",memo:"goingto",f:"sujet + am / is / are going to + verbe de base",quand:"Intention, projet déjà décidé",ind:"next week, on Friday",ex:["I'm going to visit the site.","I'm not going to travel.","Are you going to come?"]},
 {k:"FP",row:"future",col:"perfect",name:"Future perfect",memo:"futperfect",f:"sujet + will have + participe passé",quand:"Terminé AVANT une échéance future",ind:"by Friday, by then",ex:["I will have finished.","I won't have finished.","Will you have finished?"]},
 {k:"FPC",row:"future",col:"pcont",name:"Future perfect continuous",memo:"futperfect",f:"sujet + will have been + verbe-ing",quand:"Durée jusqu'à un moment futur",ind:"by noon, for two hours",ex:["By noon, I will have been working for two hours.","I won't have been waiting long.","How long will you have been working?"]},
];
const ALL_TENSES=[...CORE_TENSES,...EXTRA_TENSES];
const LESSON_TENSES={L1:["PS"],L2:["PS","PC","PP"],L3:["PaS","PaC","PaP"],L4:["FS","FC","GT","FP","FPC"],L5:["PS","PC","PP","PaS","PaC","FS","FC"]};
function tenseCard(t,o={}){
  return `<div class="cc c-${t.col}"><div class="ccname">${t.name}</div>${miniTL(t)}
      <div class="ccwhen"><span class="cwl">Quand ?</span><b>${esc(t.quand)}</b><div class="cind">${t.ind.split(/,\s*/).map(w=>`<span class="en">${esc(w)}</span>`).join("")}</div></div><div class="ccf">${t.f}</div>
      <div class="ccl en say"><span class="sg plus">+</span>${esc(t.ex[0])}</div><div class="ccl en say"><span class="sg minus">−</span>${esc(t.ex[1])}</div><div class="ccl en say"><span class="sg q">?</span>${esc(t.ex[2])}</div>
      ${o.more!==false&&CORE_MORE[t.k]?`<div class="ccmore">${CORE_MORE[t.k].map(x=>`<div class="ccl en say">${esc(x)}</div>`).join("")}</div>`:""}${memoBtn(t.memo)}</div>`;
}
function lessonTensesPanel(l,o={}){
  const ks=LESSON_TENSES[l.id];if(!ks)return "";
  const cards=ks.map(k=>tenseCard(ALL_TENSES.find(t=>t.k===k),{more:o.more})).join("");
  return panel("cours",l.id==="L5"?"Les 7 temps : choisir le bon":"Les temps de ce cours",`${l.id==="L5"||l.id==="L2"?bigTL():""}<div class="tcards">${cards}</div>`,{kicker:"Cours "+l.n+" · Repères visuels",ic:"grid",dom:["gram"],right:`<button class="btn small" data-chart="1">${ICON.grid}<span>Tableau des temps</span></button>`});
}

/* ============ LESSON 5 : choose the right tense, always switching (7 validated tenses only) ============ */
CHEATS.L5=`<div class="tblwrap"><table><tr><th>Temps</th><th>Quand ?</th><th>Affirmation</th><th>Question</th></tr>
 <tr><td><b>Present simple</b></td><td>habitude</td><td class="en say">I work every day.</td><td class="en say">What <b>do</b> you do?</td></tr>
 <tr><td><b>Present continuous</b></td><td>en cours maintenant</td><td class="en say">I am working now.</td><td class="en say">What <b>are</b> you doing?</td></tr>
 <tr><td><b>Present perfect</b></td><td>bilan jusqu'à maintenant</td><td class="en say">I have worked so far.</td><td class="en say">What <b>have</b> you done?</td></tr>
 <tr><td><b>Past simple</b></td><td>terminé, moment terminé</td><td class="en say">I worked yesterday.</td><td class="en say">What <b>did</b> you do?</td></tr>
 <tr><td><b>Past continuous</b></td><td>en cours dans le passé</td><td class="en say">I was working at ten.</td><td class="en say">What <b>were</b> you doing?</td></tr>
 <tr><td><b>Future simple</b></td><td>décision, promesse</td><td class="en say">I will work tomorrow.</td><td class="en say">What <b>will</b> you do?</td></tr>
 <tr><td><b>Future continuous</b></td><td>en cours dans le futur</td><td class="en say">I will be working at ten tomorrow.</td><td class="en say">What <b>will</b> you <b>be doing</b>?</td></tr></table></div>
 <div class="rule"><b>La méthode réflexe</b><span>1. Je repère le moment (mot-indice). 2. Je choisis : terminé, en cours, ou bilan ? 3. L'auxiliaire suit : do / am-is-are / have / did / was-were / will / will be.</span></div>`;
const TN=["Present simple","Present continuous","Present perfect","Past simple","Past continuous","Future simple","Future continuous"];
const opt3=(a,b,c)=>[a,b,c];
Object.assign(DRILLS,{
 "L5-choice":{title:"Quel temps ? Choisis la bonne forme",src:"Cours 5 · gymnastique des 7 temps",type:"choice",items:[
  {q:"Every Monday, I ___ my team.",opts:["meet","am meeting","met"],a:0,why:"Habitude (every Monday) → present simple"},
  {q:"Right now, I ___ an email.",opts:["write","am writing","wrote"],a:1,why:"En cours maintenant → present continuous"},
  {q:"So far, Ryo ___ 500 cities.",opts:["covered","has covered","is covering"],a:1,why:"Bilan (so far) → present perfect"},
  {q:"Yesterday, the client ___ me.",opts:["called","has called","was calling"],a:0,why:"Moment terminé (yesterday) → past simple"},
  {q:"At 8 pm yesterday, I ___ dinner.",opts:["had","was having","have had"],a:1,why:"En cours à 20 h hier → past continuous"},
  {q:"Don't worry, I ___ you the report tomorrow.",opts:["send","will send","will be sending"],a:1,why:"Promesse → future simple"},
  {q:"At ten tomorrow, I ___ to Las Vegas.",opts:["will fly","will be flying","fly"],a:1,why:"En cours à 10 h demain → future continuous"},
  {q:"She ___ when the phone rang.",opts:["slept","was sleeping","has slept"],a:1,why:"En cours, coupé par un événement → past continuous"},
  {q:"I ___ to Las Vegas before.",opts:["have never been","never went","am never going"],a:0,why:"Expérience jusqu'à maintenant (never… before) → present perfect"},
  {q:"This week, we ___ a new route.",opts:["test","are testing","tested"],a:1,why:"Cette semaine, temporaire → present continuous"},
  {q:"Last year, Ryo ___ 100 new cities.",opts:["adds","added","has added"],a:1,why:"Last year → past simple"},
  {q:"The app usually ___ well.",opts:["works","is working","worked"],a:0,why:"Usually → present simple"},
  {q:"This time next week, we ___ CES.",opts:["visit","will visit","will be visiting"],a:2,why:"En cours à ce moment-là la semaine prochaine → future continuous"},
  {q:"___ the report yet?",opts:["Did you send","Have you sent","Are you sending"],a:1,why:"Yet → present perfect"}]},
 "L5-which":{title:"Reconnaître le temps",src:"Cours 5 · gymnastique des 7 temps",type:"choice",items:[
  {q:"« I was driving when you called. »",opts:["Past simple","Past continuous","Present perfect"],a:1,why:"was + -ing → past continuous"},
  {q:"« We have tested three routes. »",opts:["Present perfect","Past simple","Present simple"],a:0,why:"have + participe → present perfect"},
  {q:"« She works in Lyon. »",opts:["Present continuous","Present simple","Future simple"],a:1,why:"verbe + s → present simple"},
  {q:"« I will call you. »",opts:["Future simple","Future continuous","Present simple"],a:0,why:"will + base → future simple"},
  {q:"« They are testing the app. »",opts:["Present continuous","Past continuous","Present perfect"],a:0,why:"are + -ing → present continuous"},
  {q:"« We went to Paris. »",opts:["Present perfect","Past continuous","Past simple"],a:2,why:"went (passé irrégulier) → past simple"},
  {q:"« At ten tomorrow, I will be flying. »",opts:["Future simple","Future continuous","Present continuous"],a:1,why:"will be + -ing → future continuous"},
  {q:"« Did you see the message? »",opts:["Past simple","Present perfect","Past continuous"],a:0,why:"did + base → past simple"},
  {q:"« Has he finished? »",opts:["Past simple","Present perfect","Present simple"],a:1,why:"has + participe → present perfect"},
  {q:"« Were you sleeping? »",opts:["Past continuous","Past simple","Present continuous"],a:0,why:"were + -ing → past continuous"}]},
 "L5-signal":{title:"Mots-indices : quel temps ?",src:"Cours 5 · gymnastique des 7 temps",type:"choice",items:[
  {q:"« yesterday »",opts:["Present perfect","Past simple","Past continuous"],a:1,why:"Moment terminé → past simple"},
  {q:"« so far »",opts:["Present perfect","Past simple","Present simple"],a:0,why:"Bilan jusqu'à maintenant → present perfect"},
  {q:"« right now »",opts:["Present simple","Present continuous","Future simple"],a:1,why:"En cours maintenant → present continuous"},
  {q:"« every day »",opts:["Present simple","Present continuous","Present perfect"],a:0,why:"Habitude → present simple"},
  {q:"« at 8 pm yesterday »",opts:["Past simple","Past continuous","Present continuous"],a:1,why:"En cours à un moment précis du passé → past continuous"},
  {q:"« tomorrow »",opts:["Future simple","Present perfect","Past simple"],a:0,why:"Futur, décision → future simple"},
  {q:"« this time next week »",opts:["Future simple","Future continuous","Present continuous"],a:1,why:"En cours à un moment du futur → future continuous"},
  {q:"« already / yet »",opts:["Past simple","Present perfect","Present continuous"],a:1,why:"Bilan → present perfect"},
  {q:"« last week »",opts:["Past simple","Present perfect","Past continuous"],a:0,why:"Moment terminé → past simple"},
  {q:"« usually »",opts:["Present continuous","Present simple","Future simple"],a:1,why:"Habitude → present simple"}]},
 "L5-fill":{title:"Conjugue au bon temps",src:"Cours 5 · gymnastique des 7 temps",type:"fill",items:[
  {q:"We usually ___ at nine. (start)",a:["start"],why:"Usually → present simple"},
  {q:"Look! The guide ___ now. (come)",a:["is coming"],why:"Now → present continuous"},
  {q:"I ___ this file already. (check)",a:["have checked"],why:"Already → present perfect"},
  {q:"Two days ago, I ___ to Paris. (go)",a:["went"],why:"Ago → past simple"},
  {q:"When you called, I ___. (drive)",a:["was driving"],why:"En cours quand tu as appelé → past continuous"},
  {q:"I promise, I ___ you tomorrow. (call)",a:["will call"],why:"Promesse → future simple"},
  {q:"At noon tomorrow, we ___ with the client. (eat)",a:["will be eating"],why:"En cours à midi demain → future continuous"},
  {q:"My team ___ on Sundays. (not work)",a:["does not work"],why:"Habitude, négatif : does not + base"},
  {q:"We ___ the app at the moment. (not use)",a:["are not using"],why:"At the moment, négatif : are not + -ing"},
  {q:"I ___ the message yesterday. (not see)",a:["did not see"],why:"Yesterday, négatif : did not + base"},
  {q:"They ___ at ten last night. (not sleep)",a:["were not sleeping"],why:"En cours à 22 h, négatif : were not + -ing"},
  {q:"Don't worry, I ___ late. (not be)",a:["will not be"],why:"Promesse, négatif : will not + base"}]},
 "L5-translate":{title:"Traduis : même verbe, autre temps",src:"Cours 5 · gymnastique des 7 temps",type:"order",items:[
  {q:"Je travaille tous les jours.",a:["I work every day"],why:"Habitude → present simple"},
  {q:"Je travaille en ce moment.",a:["I am working at the moment","I am working right now","I am working now"],why:"En cours → present continuous"},
  {q:"J'ai beaucoup travaillé cette année.",a:["I have worked a lot this year"],why:"Bilan, période pas finie → present perfect"},
  {q:"J'ai travaillé hier.",a:["I worked yesterday"],why:"Yesterday → past simple"},
  {q:"Je travaillais quand tu as appelé.",a:["I was working when you called"],why:"En cours + interruption → past continuous + past simple"},
  {q:"Je travaillerai demain.",a:["I will work tomorrow"],why:"Futur → will + base"},
  {q:"Demain à dix heures, je serai en train de travailler.",a:["At ten tomorrow I will be working","Tomorrow at ten I will be working","I will be working at ten tomorrow"],why:"En cours à un moment du futur → will be + -ing"},
  {q:"Est-ce que tu as appelé le client hier ?",a:["Did you call the client yesterday"],why:"Question au past simple : did + base"},
  {q:"Est-ce que tu as déjà appelé le client ?",a:["Have you already called the client","Have you called the client yet","Have you called the client already"],why:"Already / yet → present perfect"},
  {q:"Qu'est-ce que tu faisais à huit heures ?",a:["What were you doing at eight","What were you doing at eight o'clock"],why:"En cours à 8 h → past continuous"}]},
});
/* generated series: a new mix of the 7 tenses every time */
const GYM_CUES={PS:[["Every day,","pre"],["Usually,","pre"],["On Mondays,","pre"]],PC:[["Right now,","pre"],["At the moment,","pre"],["Look!","pre"]],PP:[["So far,","pre"],["Up to now,","pre"]],
 PaS:[["Yesterday,","pre"],["Last week,","pre"],["Two days ago,","pre"]],PaC:[["At 8 pm yesterday,","pre"],["when you called.","post"]],FS:[["Tomorrow,","pre"],["Next week,","pre"]],FC:[["At ten tomorrow,","pre"],["This time next week,","pre"]]};
function gymNewSeries(){
  const ks=[...CORE_TENSES.map(t=>t.k),...CORE_TENSES.map(t=>t.k)].sort(()=>Math.random()-.5).slice(0,12);
  DRILLS["L5-gym"].items=ks.map(k=>{const t=CORE_TENSES.find(x=>x.k===k),cues=GYM_CUES[k],[cue,pos]=cues[Math.random()*cues.length|0],neg=Math.random()<.3;
    const vs=/C$/.test(k)?CORE_VERBS.filter(x=>!["have","see"].includes(x.b)):CORE_VERBS,v=vs[Math.random()*vs.length|0],s=SUBJ[Math.random()*SUBJ.length|0];
    const full=conj(k,neg?"-":"+",s,v),ans=full.slice(s.length+1),S0=s==="I"?"I":s.charAt(0).toUpperCase()+s.slice(1);
    const q=pos==="pre"?`${cue} ${s} ___ (${neg?"not ":""}${v.b}).`:`${S0} ___ (${neg?"not ":""}${v.b}) ${cue}`;
    return {q,a:[ans],why:`${t.name} : ${t.quand.toLowerCase()} (${cue.replace(/[,.!]/g,"")})`}});
}
DRILLS["L5-gym"]={title:"Gymnastique des temps (série infinie)",src:"Cours 5 · un nouveau mélange à chaque fois",type:"fill",items:[]};gymNewSeries();
GEN_DRILLS["L5-gym"]=()=>gymNewSeries();
LESSONS[4].drills=["L5-gym","L5-choice","L5-which","L5-signal","L5-fill","L5-translate","L5-fix"];

/* ============ CLASSIFICATION (domains) ============ */
const LDOM={L1:["vocab","gram"],L2:["gram"],L3:["gram"],L4:["gram"],L5:["gram"]};
const HWDOM={"L1-H1":["ecrit"],"L2-H1":["compr","gram"],"L2-H2":["gram"],"L2-H3":["ecrit","gram"],"L3-H1":["compr","gram"],"L3-H2":["gram"],"L3-H3":["ecrit","gram"],"L4-H1":["compr","gram"],"L4-H2":["gram"],"L4-H3":["ecrit","gram"],"L5-H1":["compr","gram"],"L5-H2":["gram"],"L5-H3":["ecrit","gram"]};
const drillDom=()=>["gram"];
const cardDom=c=>c.kind==="verb"?["gram"]:/Prononciation/.test(c.note)?["vocab","pron"]:["vocab"];

/* ============ UTIL ============ */
const $=(s,el=document)=>el.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const todayISO=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const addDays=(iso,n)=>{const d=new Date(iso+"T12:00:00");d.setDate(d.getDate()+n);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const lessonStart=l=>new Date(l.date+"T13:00:00"), lessonEnd=l=>new Date(l.date+"T14:00:00");
const fmtDate=(iso,o={weekday:"long",day:"numeric",month:"long"})=>new Date(iso+"T12:00:00").toLocaleDateString("fr-FR",o);
const fmtTs=ts=>new Date(ts).toLocaleString("fr-FR",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});
const plural=(n,w)=>n+" "+w+(n>1?"s":"");
const norm=s=>String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/[-–—]/g," ").replace(/\bwon't\b/g,"will not").replace(/\bcan't\b/g,"cannot").replace(/n't\b/g," not")
  .replace(/\b(i|you|we|they|he|she|it)'ll\b/g,"$1 will").replace(/\b(i)'m\b/g,"$1 am").replace(/\b(you|we|they)'re\b/g,"$1 are").replace(/[?.!,;:"]/g," ").replace(/\s+/g," ").trim();
const lsGet=k=>{try{return localStorage.getItem(k)}catch(e){return null}}, lsSet=(k,v)=>{try{v==null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){}};
const sv=d=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICON={
 sun:sv('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
 book:sv('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>'),
 pencil:sv('<path d="M17 3a2.8 2.8 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>'),
 layers:sv('<rect x="3" y="7" width="14" height="14" rx="3"/><path d="M7 3h11a3 3 0 0 1 3 3v11"/>'),
 chat:sv('<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"/>'),
 trophy:sv('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>'),
 target:sv('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
 clock:sv('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
 video:sv('<rect x="2" y="6" width="14" height="12" rx="3"/><path d="m16 10 6-3v10l-6-3"/>'),
 check:sv('<path d="M20 6 9 17l-5-5"/>'), x:sv('<path d="M18 6 6 18M6 6l12 12"/>'),
 pen:sv('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
 flame:sv('<path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-4 5-4 7-1-1-2-2-2-4-2 2-3 5-3 9 0 4 3 7 7 7z"/>'),
 spark:sv('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>'),
 plane:sv('<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>'),
 users:sv('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>'),
 user:sv('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
 rocket:sv('<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="M12 15l-3-3a22 22 0 0 1 2-4A13 13 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/>'),
 hand:sv('<path d="M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15"/>'),
 tap:sv('<path d="M9 9V4.5a1.5 1.5 0 0 1 3 0V12l3.5.6a2 2 0 0 1 1.6 2.3L16 21H9l-3.5-5.2a1.5 1.5 0 0 1 2.3-1.9L9 15"/>'),
 plus:sv('<path d="M12 5v14M5 12h14"/>'),
 note:sv('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'),
 cloud:sv('<path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 6 17.7"/><path d="M12 12v7M9 15l3-3 3 3"/>'),
 puzzle:sv('<path d="M19.4 14.6 17.7 13a2 2 0 1 0-2.8-2.8L13.3 8.6a1 1 0 0 1 0-1.4l1.6-1.6A2 2 0 1 1 17.7 2.8l3.5 3.5a1 1 0 0 1 0 1.4l-1.6 1.6a2 2 0 1 0 2.8 2.8"/><path d="M2.8 17.7 8.6 11.9a1 1 0 0 1 1.4 0l1.6 1.6a2 2 0 1 0 2.8 2.8l1.6 1.6a1 1 0 0 1 0 1.4l-3.5 3.5"/>'),
 abc:sv('<path d="M3 17l3-9 3 9M4 14h4M12 8v9h3a2.2 2.2 0 0 0 0-4.5H12M12 8h2.5a2 2 0 0 1 0 4.5M21 9.5a3 3 0 1 0 0 6"/>'),
 ear:sv('<path d="M6 8.5a6 6 0 0 1 12 0c0 6.5-6 5.5-6 10a3 3 0 0 1-6 0"/><path d="M15 8.5a3 3 0 1 0-6 0"/>'),
 eye:sv('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
 mic:sv('<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/>'),
 speak:sv('<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>'),
 copy:sv('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>'),
 star:sv('<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>'),
 zap:sv('<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>'),
 crown:sv('<path d="m2 18 2-11 5 5 3-7 3 7 5-5 2 11z"/><path d="M2 21h20"/>'),
 medal:sv('<circle cx="12" cy="15" r="6"/><path d="M8.5 10.5 5 2h4l3 6 3-6h4l-3.5 8.5"/>'),
 lock:sv('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
 history:sv('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>'),
 car:sv('<path d="M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M3 17v-5l2.5-5h13L21 12v5"/><path d="M3 12h18"/>'),
 grid:sv('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
 info:sv('<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'),
};
function toast(t){const el=document.createElement("div");el.className="toast";el.textContent=t;document.body.appendChild(el);setTimeout(()=>el.remove(),2400)}
function copyText(t){try{navigator.clipboard.writeText(t).then(()=>toast("Copié"),()=>toast("Sélectionne le texte et copie-le"))}catch(e){toast("Sélectionne le texte et copie-le")}}

/* ============ VISUAL LANGUAGE ============ */
const TY={cours:["Cours","book"],exo:["Exercice","target"],devoir:["Devoir","pencil"],rev:["Révision","layers"],coach:["Oral avec le coach","chat"],suivi:["Suivi","trophy"]};
const DOMS={gram:["Grammaire","puzzle"],vocab:["Vocabulaire","abc"],pron:["Prononciation","ear"],oral:["Oral","mic"],ecrit:["Écrit","note"],compr:["Compréhension","eye"]};
const tile=(t,o={})=>`<span class="tile t-${t} ${o.sm?"sm":""} ${o.solid?"solid":""}">${ICON[o.ic||TY[t][1]]}</span>`;
const dom=d=>`<span class="dom d-${d}">${ICON[DOMS[d][1]]}${DOMS[d][0]}</span>`;
const resChip=(k,txt,o={})=>`<span class="res ${k} ${o.strike?"strike":""}">${ICON[{ok:"check",ko:"x",fix:"pen",neutral:"history",warn:"clock"}[k]]}<span>${esc(txt)}</span></span>`;
function panel(t,title,body,o={}){return `<section class="panel t-${t} ${o.cls||""}"><header class="phead">${tile(t,{ic:o.ic})}<div class="ph"><span class="ptype">${o.kicker||TY[t][0]}</span><h2>${title}</h2></div><div class="ph-r">${(o.dom||[]).map(dom).join("")}${o.right||""}</div></header><div class="pbody ${o.bodyCls||""}">${body}</div></section>`}
const legendBlock=()=>`<details class="neutral"><summary>${ICON.info}Repères visuels : comprendre les couleurs et les pictos</summary><div class="hb">${legend()}</div></details>`;
function legend(){
  return `<div class="legend">
   <div><h3>Ce que c'est</h3><div class="lg">${Object.keys(TY).map(t=>`<div class="li">${tile(t,{sm:true})}${TY[t][0]}</div>`).join("")}</div></div>
   <div><h3>Tes résultats</h3><div class="lg"><div class="li">${resChip("ok","Juste")}Bonne réponse</div><div class="li">${resChip("ko","Faux",{strike:true})}Erreur (barrée)</div><div class="li">${resChip("fix","Correction")}La bonne réponse</div><div class="li">${resChip("neutral","Essai 2")}Historique des essais</div></div></div>
   <div><h3>De quoi on parle</h3><div class="lg">${Object.keys(DOMS).map(d=>`<div class="li">${dom(d)}</div>`).join("")}</div></div></div>`;
}

/* ============ STATE ============ */
const COLLS=["homework","cards","mycards","drills","notes","progress","uploads","car"];
const blank=()=>Object.fromEntries(COLLS.map(c=>[c,{}]));
const S=blank(), SCR=blank();
let DB=null,SAMPLE=null,TTS=null,DICT=null,USER=null,ASSETS=null,IS_OWNER=null,mode="loading";
let ROLE=window.EL_MODE||lsGet("el-role")||"student", COACHNAME=lsGet("el-coachname")||"";
const isCoach=()=>ROLE==="coach";
const ST=()=>isCoach()?SCR:S;
const LS="englishlab-v2";
function lsLoad(){try{const o=JSON.parse(localStorage.getItem(LS)||"{}");COLLS.forEach(c=>Object.assign(S[c],o[c]||{}))}catch(e){}}
function lsSave(){try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}}
const pending={};
function save(coll,id,data){
  if(isCoach()){SCR[coll][id]=data;return}
  S[coll][id]=data;
  if(DB){const k=coll+id;clearTimeout(pending[k]);pending[k]=setTimeout(()=>{delete pending[k];DB.collection(coll).doc(id).set(data).catch(e=>{console.warn(e);toast("Enregistrement impossible ("+(e.code||"erreur")+")")})},400)}
  else lsSave();
}
function P(){return ST().progress.main||{}}
function setP(fn){const o=P();const p={...o,days:{...(o.days||{})},xpDays:{...(o.xpDays||{})},badges:{...(o.badges||{})}};fn(p);save("progress","main",p);return p}

/* ============ GAMIFICATION ============ */
const DAILY_GOAL=30;
const LEVELS=[[0,"Débutant"],[100,"Apprenti voyageur"],[250,"Voyageur"],[500,"Explorateur"],[900,"Globe-trotter"],[1400,"Networker"],[2000,"Négociateur"],[2800,"Speaker"],[3800,"Pitch master"],[5000,"Prêt pour le CES"]];
function levelOf(xp){let i=0;LEVELS.forEach((l,k)=>{if(xp>=l[0])i=k});return{n:i+1,name:LEVELS[i][1],from:LEVELS[i][0],to:LEVELS[i+1]?LEVELS[i+1][0]:null}}
function streakOf(p){const d=p.days||{};let n=0,i=d[todayISO()]?0:1;while(d[addDays(todayISO(),-i)]){n++;i++}return n}
const firstOf=r=>r&&Array.isArray(r.attempts)&&r.attempts[0];
const bestOf=r=>r&&Array.isArray(r.attempts)?Math.max(0,...r.attempts.map(a=>a.score)):0;
const hwDoneCount=st=>Object.values(st.homework).filter(h=>["done","corrected"].includes(h.status)).length;
const BADGES=[
 ["first","Premier pas","Faire une première série d'exercices","target",st=>Object.keys(st.drills).length>=1],
 ["perfect","Sans faute","Une série à 100 % du premier coup","star",st=>Object.entries(st.drills).some(([id,r])=>DRILLS[id]&&firstOf(r)&&firstOf(r).score===DRILLS[id].items.length)],
 ["streak3","En feu","3 jours d'affilée","flame",st=>streakOf(st.progress.main||{})>=3],
 ["streak7","Semaine parfaite","7 jours d'affilée","flame",st=>streakOf(st.progress.main||{})>=7],
 ["hw1","Devoir rendu","Rendre un premier devoir","pencil",st=>hwDoneCount(st)>=1],
 ["hw5","Élève modèle","Rendre 5 devoirs","medal",st=>hwDoneCount(st)>=5],
 ["drills10","Machine à exercices","Faire 10 séries différentes","zap",st=>Object.keys(st.drills).length>=10],
 ["past","Maître du passé","Toutes les séries du cours 3 à 100 %","clock",st=>LESSONS[2].drills.every(d=>bestOf(st.drills[d])===DRILLS[d].items.length)],
 ["coach1","Premier dialogue","Répondre 3 fois au coach","chat",st=>!!(st.progress.main||{}).coachTalks],
 ["cards20","Mémoire d'éléphant","20 cartes au niveau 3 ou plus","layers",st=>Object.values(st.cards).filter(c=>c.box>=3).length>=20],
 ["words10","Collectionneur","Ajouter 10 mots à tes cartes","plus",st=>Object.keys(st.mycards).length>=10],
 ["ses1","Premier sprint","Terminer une session 15 min","zap",st=>((st.progress.main||{}).sessions||0)>=1],
 ["ses10","Habitué","10 sessions 15 min","zap",st=>((st.progress.main||{}).sessions||0)>=10],
 ["xp500","500 XP","Gagner 500 XP au total","crown",st=>((st.progress.main||{}).xp||0)>=500],
];
function gain(xp,why){
  const before=P(), t=todayISO(), dayBefore=(before.xpDays||{})[t]||0, lvBefore=levelOf(before.xp||0).n;
  const p=setP(p=>{p.xp=(p.xp||0)+xp;p.xpDays[t]=dayBefore+xp;p.days[t]=(p.days[t]||0)+1});
  floatXP(xp);
  if(dayBefore<DAILY_GOAL&&dayBefore+xp>=DAILY_GOAL)celebrate("Objectif du jour atteint !",`${DAILY_GOAL} XP aujourd'hui. Ta série continue.`,"flame");
  else if(levelOf(p.xp).n>lvBefore)celebrate(`Niveau ${levelOf(p.xp).n} !`,levelOf(p.xp).name,"crown");
  checkBadges();
}
function checkBadges(){
  const st=ST(), got=(st.progress.main||{}).badges||{};
  BADGES.forEach(([id,name,desc,ic,test])=>{if(!got[id]&&test(st)){setP(p=>{p.badges[id]=Date.now()});setTimeout(()=>celebrate("Badge débloqué !",name+" · "+desc,ic),900)}});
}
function floatXP(n){const el=document.createElement("div");el.className="toast";el.style.background="var(--exo)";el.innerHTML=`+${n} XP${isCoach()?" (non enregistré)":""}`;document.body.appendChild(el);setTimeout(()=>el.remove(),1500)}
function celebrate(title,sub,ic){
  const ov=document.createElement("div");ov.className="ov";ov.style.background="rgba(30,20,16,.3)";
  ov.innerHTML=`<div class="box" style="text-align:center;padding:28px;display:flex;flex-direction:column;align-items:center;gap:12px;border:4px solid var(--exo-l)"><span class="tile t-exo solid" style="width:84px;height:84px;border-radius:26px">${ICON[ic]}</span><h2 style="font-size:2rem">${esc(title)}</h2><p style="font-size:1.1rem">${esc(sub)}</p><button class="btn primary">Continuer</button></div>`;
  ov.querySelector(".icon").style.cssText="width:46px;height:46px";
  document.body.appendChild(ov);confetti();
  const close=()=>ov.remove();ov.querySelector("button").onclick=close;ov.onclick=e=>{if(e.target===ov)close()};setTimeout(close,4500);
}
function confetti(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const c=document.createElement("canvas");c.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:70";c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);
  const x=c.getContext("2d"),cols=["#E2551F","#F5B300","#1D56C9","#16794B","#BE2F67","#7536B0"];
  const ps=[...Array(140)].map(()=>({x:innerWidth/2,y:innerHeight/3,vx:(Math.random()-.5)*16,vy:Math.random()*-14-4,r:Math.random()*6+4,c:cols[Math.random()*6|0],a:Math.random()*6}));
  let f=0;(function tick(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.vy+=.45;p.x+=p.vx;p.y+=p.vy;p.a+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()});if(++f<110)requestAnimationFrame(tick);else c.remove()})();
}
function ring(val,max,size=46,stroke=6,color="var(--exo)"){
  const r=(size-stroke)/2,C=2*Math.PI*r,f=Math.min(1,val/max);
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${f>=1?"var(--good)":color}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${C*f} ${C}" transform="rotate(-90 ${size/2} ${size/2})"/></svg>`;
}

/* ============ ROUTER ============ */
const TABS_S=[["today","Aujourd'hui","sun","suivi"],["session","15 min","zap","suivi"],["lessons","Cours","book","cours"],["exercises","Exercices","target","exo"],["homework","Devoirs","pencil","devoir"],["review","Révisions","layers","rev"],["coach","Oral","chat","coach"],["car","Voiture","car","coach"],["progress","Mon suivi","trophy","suivi"]];
const TABS_C=[["progress","Suivi de Pierre-Olivier","trophy","suivi"],["session","15 min","zap","suivi"],["lessons","Cours","book","cours"],["exercises","Exercices","target","exo"],["homework","Devoirs","pencil","devoir"],["review","Révisions","layers","rev"],["coach","Oral","chat","coach"],["car","Voiture","car","coach"]];
let view="today",sub=null;
function route(){
  applyRole();
  const h=(location.hash||"").slice(1);const [v,s]=h.split("--");
  const tabs=isCoach()?TABS_C:TABS_S;
  view=tabs.some(t=>t[0]===v)?v:tabs[0][0]; sub=s||null;
  if(SES&&SES.listening&&view!=="session"){SES.listening=false;DICT&&DICT.stop().catch(()=>{})}
  if(PRON.active&&view!=="coach"){PRON.active=false;PRON.phase="ready";try{DICT0&&DICT0.stop().catch(()=>{})}catch(e){}}
  if(ORAL.active&&view!=="coach"){oralStopListening(true);oralStopSpeech();ORAL.active=false;ORAL.phase="idle"}
  if(CAR.active&&view!=="car")carStop(true);
  render();window.scrollTo(0,0);
}
addEventListener("hashchange",()=>route());
const started=l=>!!l.openEarly||lessonStart(l)<=new Date();
const locked=l=>!isCoach()&&!started(l);
const lessonOfDrill=d=>LESSONS.find(x=>x.drills.includes(d))||(CORE_LESSON.drills.includes(d)?CORE_LESSON:undefined);
const lockChip=l=>`<span class="res neutral">${ICON.lock}<span>Après le cours du ${fmtDate(l.date,{day:"numeric",month:"short"})}</span></span>`;
const SCEN_LESSON={intro:"L1",update:"L2",incident:"L3",plan:"L4",interview:"L5"};
function nextLesson(){const now=new Date();return LESSONS.find(l=>lessonEnd(l)>now)||null}
function lessonStatus(l){const now=new Date();if(lessonEnd(l)<now)return "done";if(lessonStart(l)<=now)return "live";return l.date===todayISO()?"today":"upcoming"}
function hwDue(id){const i=LESSONS.findIndex(l=>l.id===HW[id].lesson);return LESSONS[i+1]?LESSONS[i+1].date:null}
const hwState=(id,st=ST())=>(st.homework[id]||{}).status||"todo";
function hwOpen(st=S){const now=new Date();return Object.keys(HW).filter(id=>{const l=LESSONS.find(x=>x.id===HW[id].lesson);return lessonEnd(l)<=now&&!["done","corrected"].includes(hwState(id,st))})}

/* ============ RENDER ============ */
function render(){
  hidePop();
  const app=$("#app");
  if(!ROLE){$("#tabs").innerHTML="";$("#hright").innerHTML="";$("#banner").innerHTML="";vLanding(app);decorate(app);return}
  const tabs=isCoach()?TABS_C:TABS_S, open=hwOpen().length;
  $("#tabs").innerHTML=tabs.map(([k,l,ic,t])=>`<a class="t-${t}" href="#${k}" aria-current="${view===k?"page":"false"}">${ICON[ic]}<span>${l}</span>${k==="homework"&&open&&!isCoach()?`<span class="badge">${open}</span>`:""}</a>`).join("");
  if(isCoach()){
    $("#hright").innerHTML=`<button class="chip chartchip" data-chart="1">${ICON.grid}<span>Tableau des temps</span></button><button class="chip chartchip" data-irrlist="1">${ICON.abc}<span>Verbes irréguliers</span></button><span class="chip">${ICON.users}<span>Accès coach</span> · <button id="swRole">changer</button></span>`;
    $("#banner").innerHTML=`<div class="banner"><div class="banner-in"><span class="tile r-coach solid">${ICON.info}</span><div><b>Bonjour ! Tu es dans l'accès coach.</b><p>Tu peux consulter toutes les réponses, fautes et corrections de Pierre-Olivier (onglet <i>Suivi</i>). Tu peux aussi faire librement les exercices, les devoirs et l'oral : <b style="font-size:inherit">rien de ce que tu fais n'est enregistré</b> dans ses réponses ni dans sa progression.</p><p class="small" style="margin-top:6px">${mode==="db"?"Suivi en direct.":SNAP.at?`Suivi mis à jour le <b style="font-size:inherit">${fmtTs(SNAP.at)}</b>.`:"Pas encore de suivi disponible."} Dans l'accès coach, la correction par Claude, l'oral avec le coach et la traduction automatique sont désactivés.</p></div></div></div>`;
  }else{
    const p=P(), t=todayISO(), dx=(p.xpDays||{})[t]||0, stk=streakOf(p);
    $("#hright").innerHTML=`<button class="chip chartchip" data-chart="1">${ICON.grid}<span>Tableau des temps</span></button><button class="chip chartchip" data-irrlist="1">${ICON.abc}<span>Verbes irréguliers</span></button><span class="chip" title="Jours d'affilée" style="color:var(--suivi)">${ICON.flame}<span>${stk}</span></span>
      <span class="chip" title="Objectif du jour">${ring(dx,DAILY_GOAL,26,4)}<span>${dx}/${DAILY_GOAL} XP</span></span>
      <button class="chip sync" id="upBtn" title="Mettre à jour la fiche de suivi">${ICON.cloud}<span>${mode==="db"?"Synchronisé":"Fiche"}</span> · <u>mettre à jour</u></button>
      <span class="chip">${ICON.user}<span>Élève</span> · <button id="swRole">changer</button></span>`;
    $("#banner").innerHTML="";
    $("#upBtn").onclick=openUpload;
  }
  $("#swRole").onclick=()=>{ROLE=null;lsSet("el-role",null);location.hash="";render()};
  ({today:vToday,lessons:vLessons,exercises:vExercises,homework:vHomework,review:vReview,coach:vCoach,car:vCar,session:vSession,progress:vProgress})[view](app);
  decorate(app);
}

/* ---- Landing ---- */
function vLanding(app){
  const ownerBlock=IS_OWNER===false;
  app.innerHTML=`<div class="landing">
   <div style="text-align:center;display:flex;flex-direction:column;gap:8px;align-items:center">${tile("suivi",{solid:true,ic:"plane"})}<h1>Les cours d'anglais de Pierre-Olivier</h1><p class="muted">Anglais en visio · LILATE · 22 h · objectif CES Las Vegas 2027</p></div>
   <div class="roles">
    <div class="role t-suivi">${tile("suivi",{solid:true,ic:"user"})}<h2>Accès élève</h2><p>Pour Pierre-Olivier : préparer les cours, faire les exercices, les devoirs et l'oral, gagner des XP. Tout est enregistré.</p>
     <button class="btn primary" id="goS" ${ownerBlock?"disabled":""} style="align-self:flex-start">Entrer</button>${ownerBlock?`<p class="small muted">Réservé à Pierre-Olivier.</p>`:""}</div>
    <div class="role r-coach"><span class="tile solid">${ICON.users}</span><h2>Accès coach</h2><p>Consulter les exercices faits, les fautes et les corrections de Pierre-Olivier. Tu peux aussi faire les exercices librement : rien n'est enregistré dans sa progression.</p>
     <button class="btn typed" id="goC" style="align-self:flex-start">Entrer</button></div>
   </div>
   ${legendBlock()}
  </div>`;
  $("#goS").onclick=()=>{ROLE="student";lsSet("el-role","student");if(!DB){COLLS.forEach(c=>{for(const k in S[c])delete S[c][k]});lsLoad()}location.hash="today";route()};
  $("#goC").onclick=()=>{ROLE="coach";lsSet("el-role","coach");if(!DB)loadSnap();location.hash="progress";route()};
}

/* ---- Today (student) ---- */
function vToday(app){
  const l=nextLesson(), p=P(), xp=p.xp||0, lv=levelOf(xp), dx=(p.xpDays||{})[todayISO()]||0, stk=streakOf(p);
  const done=LESSONS.filter(started), cur=done[done.length-1];
  const game=`<div style="display:flex;flex-direction:column;gap:12px;align-items:center;text-align:center">
     <div style="position:relative;width:150px;height:150px">${ring(dx,DAILY_GOAL,150,14)}<div style="position:absolute;inset:0;display:grid;place-items:center"><div><div style="font-family:var(--display);font-size:2.2rem;font-weight:700;line-height:1">${dx}</div><div class="small muted" style="font-weight:800">/ ${DAILY_GOAL} XP</div></div></div></div>
     <div class="row" style="justify-content:center">${resChip(stk?"ok":"neutral",plural(stk,"jour")+" d'affilée")}</div></div>`;
  let heroTxt;
  if(l){const st=lessonStatus(l),mins=Math.round((lessonStart(l)-new Date())/60000);
    const when=st==="live"?"En cours":st==="today"?(mins<=0?"Maintenant":mins<60?`dans ${mins} min`:`dans ${Math.floor(mins/60)} h ${String(mins%60).padStart(2,"0")}`):fmtDate(l.date,{weekday:"short",day:"numeric",month:"short"});
    heroTxt=`<span class="k">${greet()} · ${st==="live"?"cours en ce moment":st==="today"?"cours aujourd'hui à 13 h":"prochain cours le "+fmtDate(l.date)+" à 13 h"}</span>
     <h1>${st==="live"?"Cours "+l.n+" en cours":"Prochain cours : n° "+l.n}</h1>
     <span class="count">${ICON.clock}<b>${when}</b></span>
     <div class="row"><a class="btn primary" href="#session">${ICON.zap}<span>Lancer 15 min</span></a><a class="btn" href="${TEAMS}" target="_blank" rel="noopener">${ICON.video}<span>Rejoindre sur Teams</span></a></div>`}
  else heroTxt=`<span class="k">${greet()}</span><h1>Pas de prochain cours planifié</h1><p>Envoie ta fiche à jour avec « mettre à jour » en haut.</p>`;
  if(!cur){app.innerHTML=`<section class="view"><div class="hero"><div style="display:flex;flex-direction:column;gap:12px">${heroTxt}</div>${game}</div></section>`;return}
  const todoDrills=done.flatMap(x=>x.drills).filter(d=>!drillFluent(DRILLS[d],S.drills[d])).sort((a,b)=>(/reflex/.test(b)?1:0)-(/reflex/.test(a)?1:0));
  const due=hwOpen().filter(id=>started(LESSONS.find(x=>x.id===HW[id].lesson)));
  const cheatSeen=!!p["cheat-"+cur.id], rw=toRework().length, coachDone=!!p["coach-"+cur.id];
  const step=(ok,t,ic,title,txt,btn)=>`<div class="step ${ok?"ok":""}">${tile(t,{ic:ok?"check":ic})}<div><h3>${title}</h3><p>${txt}</p></div>${btn}</div>`;
  app.innerHTML=`<section class="view">
   <div class="hero"><div style="display:flex;flex-direction:column;gap:12px;min-width:0">${heroTxt}
     <div class="row" style="margin-top:4px">${resChip("neutral","Niveau "+lv.n+" · "+lv.name)}<span class="small muted" style="font-weight:800">${xp} XP${lv.to?" · encore "+(lv.to-xp)+" XP pour le niveau "+(lv.n+1):""}</span></div>
   </div>${game}</div>
   <div class="cols"><div class="col">${panel("suivi","Réviser ce que tu as vu",`<div class="steps">
     ${step(cheatSeen,"cours","book","Relire la fiche du dernier cours",`Cours ${cur.n} : ${esc(cur.topic)}. +5 XP`,`<a class="btn" href="#lessons--${cur.id}">Ouvrir</a>`)}
     ${step(!todoDrills.length,"exo","target","Terminer les exercices",todoDrills.length?`${plural(todoDrills.length,"série")} pas encore fluide${todoDrills.length>1?"s":""} : sans faute ET rapide, jusqu'au réflexe`:"Toutes les séries des cours vus sont fluides.",todoDrills.length?`<a class="btn typed t-exo" href="#exercises--${todoDrills[0]}">S'entraîner</a>`:"")}
     ${step(!due.length,"devoir","pencil","Rendre les devoirs",due.length?due.map(id=>`<a href="#homework--${id}">Cours ${HW[id].lesson.slice(1)} · ${esc(HW[id].title)}</a>`).join("<br>"):"Tout est rendu.",`<a class="btn" href="#homework">Devoirs</a>`)}
     ${step(rw===0&&coachDone,"coach","car","Pratiquer à l'oral",rw?`${plural(rw,"point")} à retravailler en mode voiture`:"Mode voiture ou conversation avec le coach",`<a class="btn typed t-coach" href="#car">Voiture</a>`)}
   </div>`,{kicker:"Programme du jour",ic:"rocket"})}</div>
   <div class="col">${cheatPanel(cur)}</div></div>
   ${lessonTensesPanel(cur,{more:false})}
   ${cur.tense==="past"?pastTimeline():""}
   ${legendBlock()}
  </section>`;
}
function greet(){const h=new Date().getHours();return (h<12?"Bonjour":h<18?"Bon après-midi":"Bonsoir")+" Pierre-Olivier"}
const TIP=`<div class="tip">${ICON.tap}<span>Touche un mot anglais pour voir sa traduction. Le bouton bleu ${ICON.speak} lit la phrase à voix haute.</span></div>`;
function cheatPanel(l){return panel("cours","Fiche mémo",`<div class="cheat">${CHEATS[l.id]}</div>`,{kicker:"Cours "+l.n+" · Fiche mémo",dom:LDOM[l.id]})}
function markFlag(k,xp){if(P()[k])return;setP(p=>{p[k]=true});if(xp)gain(xp)}
function pastTimeline(){
  return panel("cours","Les trois passés sur une ligne du temps",`<div class="tl"><svg class="tlsvg" viewBox="0 0 640 150" role="img" aria-label="Frise : past perfect avant, past continuous en cours, past simple qui interrompt, puis maintenant">
   <line x1="20" y1="80" x2="620" y2="80" stroke="var(--line)" stroke-width="4" stroke-linecap="round"/><polygon points="620,74 632,80 620,86" fill="var(--line)"/>
   <circle cx="110" cy="80" r="7" fill="var(--past)"/><text x="110" y="52" text-anchor="middle">had sent</text><text x="110" y="112" text-anchor="middle" class="lbl">past perfect</text><text x="110" y="128" text-anchor="middle" class="lbl">fini AVANT</text>
   <rect x="210" y="70" width="200" height="20" rx="10" fill="var(--suivi-s)" stroke="var(--past)" stroke-width="2"/><text x="300" y="52" text-anchor="middle">was checking</text><text x="300" y="112" text-anchor="middle" class="lbl">past continuous</text><text x="300" y="128" text-anchor="middle" class="lbl">en cours (le décor)</text>
   <circle cx="340" cy="80" r="8" fill="var(--past)" stroke="var(--white)" stroke-width="2"/><text x="358" y="40" fill="var(--past)">called</text><text x="358" y="24" class="lbl">past simple</text>
   <line x1="560" y1="62" x2="560" y2="98" stroke="var(--present)" stroke-width="3"/><text x="560" y="52" text-anchor="middle" fill="var(--present)">NOW</text><text x="560" y="118" text-anchor="middle" class="lbl">maintenant</text></svg></div>
   <p class="en say" style="font-size:1.15rem;text-align:center"><i>The hotel <b>had sent</b> the wrong date. I <b>was checking</b> the booking <b>when</b> a client <b>called</b>.</i></p>`,{kicker:"Cours 3 · Schéma",dom:["gram"],ic:"clock"});
}

/* ---- Lessons ---- */
function vLessons(app){
  const l=LESSONS.find(x=>x.id===sub); if(l)return vLesson(app,l);
  const nl=nextLesson();
  const row=(x)=>{const st=lessonStatus(x),d=new Date(x.date+"T12:00:00");
    const chip=st==="done"?resChip("ok","Fait"):st==="live"?resChip("warn","En cours"):locked(x)?lockChip(x):x===nl?resChip("warn","Prochain"):resChip("neutral","À venir");
    return `<a class="lesson ${x===nl?"now":""}" href="#lessons--${x.id}"><div class="d">${String(d.getDate()).padStart(2,"0")}<small>${d.toLocaleDateString("fr-FR",{month:"short"})}</small></div><div><h3>Cours ${x.n} · ${esc(x.topic)}</h3><div class="chips">${LDOM[x.id].map(dom).join("")}</div></div>${chip}</a>`};
  app.innerHTML=`<section class="view"><div class="pagehead t-cours">${tile("cours")}<div><span class="k">Cours</span><h1>Tous les cours</h1></div></div>
   <div class="list"><div class="lesson"><div class="d">05<small>oct.</small></div><div><h3>Cours d'essai · analyse des besoins</h3><p class="muted small">Phrases complètes au-delà du présent, verbes d'action, questions, chiffres, voyage, CES.</p></div>${resChip("ok","Fait")}</div>${LESSONS.map(row).join("")}</div></section>`;
}
function vLesson(app,l){
  if(locked(l)){app.innerHTML=`<section class="view"><a class="oldback" href="#lessons">← Tous les cours</a><div class="pagehead t-cours">${tile("cours",{ic:"lock"})}<div><span class="k">Cours ${l.n} · ${fmtDate(l.date)} · 13 h</span><h1>${esc(l.topic)}</h1></div></div>${panel("cours","Pas encore disponible",`<p>Le contenu, les exercices et les devoirs de ce cours s'ouvriront le ${fmtDate(l.date)} à 13 h, au début du cours.</p>`,{kicker:"Cours à venir",ic:"lock"})}</section>`;return}
  const note=(S.notes[l.id]||{}).text||"", mine=(ST().notes[l.id]||{}).text||"";
  app.innerHTML=`<section class="view"><a class="oldback" href="#lessons">← Tous les cours</a>
   <div class="pagehead t-cours">${tile("cours")}<div><span class="k">Cours ${l.n} · ${fmtDate(l.date)} · 13 h</span><h1>${esc(l.topic)}</h1></div><div class="row">${LDOM[l.id].map(dom).join("")}</div></div>
   ${lessonTensesPanel(l)}
   ${l.tense==="past"?pastTimeline():""}
   <div class="cols"><div class="col">${cheatPanel(l)}</div>
   <div class="col">${panel("exo","Exercices de ce cours",`<div class="list">${l.drills.map(drillRow).join("")}</div>`,{kicker:"Exercices"})}
   ${panel("devoir","Devoirs de ce cours",`<div class="list">${l.hw.map(hwRow).join("")}</div>`,{kicker:"Devoirs"})}
   ${isCoach()?panel("cours","Notes de Pierre-Olivier",note?`<div class="answer">${esc(note)}</div>`:`<p class="empty">Pas encore de notes.</p>`,{kicker:"Notes et questions",ic:"note"})
     :panel("cours","Mes notes",`<textarea id="note-${l.id}" placeholder="Ex. : V = booking = réservation. Question : quand utiliser 'had' ?">${esc(mine)}</textarea>`,{kicker:"Notes et questions",ic:"note"})}
   </div></div></section>`;
  if(!isCoach())markFlag("cheat-"+l.id,5);
  const ta=$("#note-"+l.id); if(ta)ta.oninput=e=>save("notes",l.id,{text:e.target.value,updatedAt:Date.now()});
}
function drillChips(r,D){
  const f=firstOf(r); if(!f)return resChip("neutral","À faire");
  const n=D.items.length, err=n-f.score, best=bestOf(r);
  const lastPerfect=[...r.attempts].reverse().find(a=>a.score===a.total&&a.secs);
  const flu=drillFluent(D,r)?resChip("ok","Fluide"):lastPerfect?resChip("warn","Pas encore fluide · "+Math.round(lastPerfect.secs/lastPerfect.total)+" s/question"):"";
  return [flu,err?resChip("ko",plural(err,"faute")+" au 1er essai"):resChip("ok","Sans faute"), r.attempts.length>1?resChip("neutral",plural(r.attempts.length,"essai")):"", best===n?resChip("ok",`${best}/${n}`):resChip("warn",`${best}/${n}`)].join("");
}
function drillRow(d){const D=DRILLS[d],r=S.drills[d],L=lessonOfDrill(d);
  if(locked(L))return `<div class="irow" style="opacity:.6">${tile("exo",{sm:true,ic:"lock"})}<div class="it"><b>${esc(D.title)}</b><span>${esc(D.src)}</span></div><div class="chips">${lockChip(L)}</div></div>`;
  return `<a class="irow t-exo" href="#exercises--${d}">${tile("exo",{sm:true})}<div class="it"><b>${esc(D.title)}</b><span>${esc(D.src)}</span></div><div class="chips">${drillDom(d).map(dom).join("")}${drillChips(r,D)}</div></a>`}
function hwChips(id,st=S){const h=st.homework[id]||{},s=hwState(id,st),due=hwDue(id);
  const late=!["done","corrected"].includes(s)&&due&&due<=todayISO()&&lessonEnd(LESSONS.find(x=>x.id===HW[id].lesson))<new Date();
  const fb=h.feedback, errs=fb?countErrors(fb.corrected):null;
  return [s==="corrected"?resChip("ok","Corrigé"):s==="done"?resChip("ok","Rendu"):s==="draft"?resChip("warn","Brouillon"):late?resChip("ko","En retard"):resChip("neutral","À faire"),
    errs!=null?(errs?resChip("ko",plural(errs,"faute")):resChip("ok","0 faute")):"", fb&&fb.score!=null?resChip("neutral",fb.score+"/10"):""].join("")}
function hwRow(id){const L=LESSONS.find(x=>x.id===HW[id].lesson);
  if(locked(L))return `<div class="irow" style="opacity:.6">${tile("devoir",{sm:true,ic:"lock"})}<div class="it"><b>${esc(HW[id].title)}</b><span>Donné au cours ${L.n}</span></div><div class="chips">${lockChip(L)}</div></div>`;
  return `<a class="irow t-devoir" href="#homework--${id}">${tile("devoir",{sm:true})}<div class="it"><b>${esc(HW[id].title)}</b><span>${hwDue(id)?"à rendre le "+fmtDate(hwDue(id),{day:"numeric",month:"short"}):"date à venir"}</span></div><div class="chips">${HWDOM[id].map(dom).join("")}${hwChips(id)}</div></a>`}
const countErrors=c=>((c||"").match(/\[-[\s\S]+?-\](\{\+[\s\S]+?\+\})?|\{\+[\s\S]+?\+\}/g)||[]).length;

/* ---- Exercises ---- */
function vExercises(app){
  if(sub&&DRILLS[sub])return vDrill(app,sub);
  app.innerHTML=`<section class="view"><div class="pagehead t-exo">${tile("exo")}<div><span class="k">Exercices</span><h1>Exercices corrigés</h1></div></div>
   ${panel("exo","Les 7 temps de base",`<div class="list">${drillRow("CORE-chart")}${drillRow("IRR-drill")}</div><div class="row"><button class="btn" data-chart="1">${ICON.grid}<span>Tableau des temps</span></button><button class="btn" data-irrlist="1">${ICON.abc}<span>Liste des verbes irréguliers</span></button></div>`,{kicker:"Ma base de révision",ic:"grid",dom:["gram"]})}
   ${LESSONS.map(l=>panel("exo","Cours "+l.n+" · "+esc(l.topic),`<div class="list">${l.drills.map(drillRow).join("")}</div>`,{kicker:"Exercices",dom:LDOM[l.id]})).join("")}</section>`;
}
const FLU_DRILL={fill:6,choice:6,order:12};
function drillFluent(D,r){const at=r&&Array.isArray(r.attempts)?r.attempts:[];return at.some(a=>a.score===a.total&&a.secs&&a.secs/a.total<=(FLU_DRILL[D.type]||8))}
const PRAISE=["Bravo !","Parfait !","Excellent !","Bien joué !","Super !","Yes!","Great job!"];
function vDrill(app,id){
  if(locked(lessonOfDrill(id))){location.hash="exercises";return}
  const D=DRILLS[id], l=lessonOfDrill(id), next=l.drills[l.drills.indexOf(id)+1];
  const curQ=D.items.map(x=>x.q).join("|"),rec=ST().drills[id], attAll=rec&&Array.isArray(rec.attempts)?rec.attempts:[];
  const att=GEN_DRILLS[id]?attAll.filter(a=>a.qs&&a.qs.join("|")===curQ):attAll, last=att[att.length-1];
  const prevLine=i=>att.length?`<div class="prev">${ICON.history}<span>Tes essais :</span>${att.map((a,k)=>resChip(a.ok[i]?"ok":"ko",a.given[i]==null||a.given[i]===""?"(vide)":a.given[i],{strike:!a.ok[i]})).join("")}</div>`:"";
  const items=D.items.map((it,i)=>{const fixed=last&&!last.ok[i]&&last.fin&&last.fin[i];const st=last?(last.ok[i]||fixed?"right":"wrong"):"";
    return `<div class="item ${st}" data-i="${i}"><div class="row"><span class="q en"><span class="num">${i+1}</span>${esc(it.q)}</span><button class="spk" data-say="${i}" aria-label="Écouter">${ICON.speak}</button></div>
     <div class="ansrow">${D.type==="choice"?`<div class="choices">${it.opts.map((o,j)=>`<button data-o="${j}" class="${last&&last.given[i]===o?"sel":""}">${esc(o)}</button>`).join("")}</div>`:`<input type="text" id="d-${id}-${i}" ${id==="IRR-drill"?'placeholder="ex. went gone"':D.type==="order"?'placeholder="Phrase complète"':""} autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(last?last.given[i]||"":"")}">`}<button class="chk" data-chk="${i}" title="Vérifier cette réponse" aria-label="Vérifier cette réponse">${ICON.check}</button></div>
     ${it.hint?`<span class="muted small">Indice : ${esc(it.hint)}</span>`:""}<div class="fb">${fixed?resChip("warn","Juste après correction")+" "+resChip("ko",(last.pre[i]||[])[0]||"",{strike:true})+(it.why?` <span class="small muted">${esc(it.why)}</span>`:"")+" "+memoBtn(memoTopic(it.why,D.type==="choice"?it.opts[it.a]:it.a[0],D.title)):last&&!last.ok[i]?resChip("fix",D.type==="choice"?it.opts[it.a]:it.a[0])+(it.why?` <span class="small muted">${esc(it.why)}</span>`:"")+" "+memoBtn(memoTopic(it.why,D.type==="choice"?it.opts[it.a]:it.a[0],D.title)):last?resChip("ok","Juste")+(it.why?` <span class="small muted">${esc(it.why)}</span>`:""):""}</div>${last&&!last.ok[i]?`<div class="whyz">${(SAMPLE||memoTopic(D.type==="choice"?it.opts[it.a]:it.a[0],D.title))?`<button class="btn small whybtn" data-whyi="${i}">${ICON.info}<span>Pourquoi ?</span></button>`:""}</div>`:""}${prevLine(i)}</div>`}).join("");
  const studentPanel=isCoach()?panel("suivi","Réponses de Pierre-Olivier",attemptsDetail(D,S.drills[id]),{kicker:"Suivi de l'élève",right:drillChips(S.drills[id],D)}):"";
  app.innerHTML=`<section class="view"><a class="oldback" href="#exercises">← Exercices</a>
   <div class="pagehead t-exo">${tile("exo")}<div><span class="k">Exercice · ${l.id==="CORE"?"Base":"Cours "+l.n} · ${esc(D.src)}</span><h1>${esc(D.title)}</h1></div><div class="row">${drillDom(id).map(dom).join("")}<span class="res neutral">${ICON.zap}<span>Objectif : sans faute en ${(FLU_DRILL[D.type]||8)*D.items.length} s</span></span>${memoBtn(memoTopic(D.title))}</div></div>
   ${studentPanel}
   ${panel("exo",isCoach()?"À toi de jouer (non enregistré)":"À toi de jouer",`<div>${items}</div>
     <div class="row"><button class="btn primary" id="check">${ICON.check}<span>Corriger</span></button><button class="btn" id="reset">Effacer et recommencer</button><span class="spacer"></span><span id="combo"></span><span class="score" id="score">${last?`${last.score} / ${D.items.length}`:""}</span></div>`,{kicker:"Exercice"+(att.length?" · essai "+(att.length+1):"")})}
   ${att.length?panel("suivi",isCoach()?"Tes essais (cette session)":"Historique de tes essais",attemptsTable(D,att),{kicker:"Historique",ic:"history"}):""}
   ${l.id==="CORE"?`<div class="row"><button class="btn typed t-exo" id="coreNew">${ICON.zap}<span>Nouvelle série</span></button>${id==="IRR-drill"?`<button class="btn" data-irrlist="1">${ICON.abc}<span>Voir la liste</span></button>`:`<button class="btn" data-chart="1">${ICON.grid}<span>Voir le tableau</span></button>`}</div>`:GEN_DRILLS[id]?`<div class="row"><button class="btn typed t-exo" id="coreNew">${ICON.zap}<span>Nouvelle série</span></button><button class="btn" data-chart="1">${ICON.grid}<span>Voir le tableau</span></button>${next?`<a class="btn" href="#exercises--${next}">Série suivante : ${esc(DRILLS[next].title)} →</a>`:""}</div>`:next?`<a class="btn typed t-exo" href="#exercises--${next}" style="align-self:flex-start">Série suivante : ${esc(DRILLS[next].title)} →</a>`:`<a class="btn" href="#lessons--${l.id}" style="align-self:flex-start">Retour au cours ${l.n}</a>`}
  </section>`;
  let t0=null;const mark=()=>{if(!t0)t0=Date.now()};
  const sel={}; if(last&&D.type==="choice")last.given.forEach((g,i)=>{const j=D.items[i].opts.indexOf(g);if(j>=0)sel[i]=j});
  app.querySelectorAll(".choices").forEach(c=>c.onclick=e=>{const b=e.target.closest("button");if(!b)return;mark();const i=b.closest(".item").dataset.i;c.querySelectorAll("button").forEach(x=>x.classList.toggle("sel",x===b));sel[i]=+b.dataset.o});
  app.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>say(fullSentence(D,D.items[b.dataset.say])));
  app.querySelectorAll(".item input[type=text]").forEach(inp=>inp.addEventListener("input",mark));
  const pre={};
  const readOne=i=>{const it=D.items[i],el=app.querySelector(`.item[data-i="${i}"]`);
    if(D.type==="choice")return{given:sel[i]!=null?it.opts[sel[i]]:null,ok:sel[i]===it.a};
    const v=el.querySelector("input").value.trim();return{given:v,ok:it.a.some(a=>norm(a)===norm(v))}};
  const checkOne=i=>{const it=D.items[i],el=app.querySelector(`.item[data-i="${i}"]`),r=readOne(i);
    if(r.given==null||r.given===""){toast("Réponds d'abord");return false}
    const right=D.type==="choice"?it.opts[it.a]:it.a[0];
    el.classList.toggle("right",r.ok);el.classList.toggle("wrong",!r.ok);beep(r.ok);
    if(!r.ok)pre[i]=(pre[i]||[]).concat(r.given);
    el.querySelector(".fb").innerHTML=r.ok?resChip("ok","Juste")+(it.why?` <span class="small muted">${esc(it.why)}</span>`:"")
      :resChip("ko",r.given,{strike:true})+" "+resChip("fix",right)+(it.why?` <span class="small muted">${esc(it.why)}</span>`:"")+" "+memoBtn(memoTopic(it.why,right,D.title))+`<div class="whyz"></div>`;
    if(!r.ok)explainWrong(el.querySelector(".whyz"),it.q,r.given,D.type==="choice"?it.q.replace("___",right):right,D.title);
    return r.ok};
  app.querySelectorAll("[data-whyi]").forEach(b=>b.onclick=()=>{const i=+b.dataset.whyi,it=D.items[i],right=D.type==="choice"?it.opts[it.a]:it.a[0];
    const g=last&&last.pre&&last.pre[i]?last.pre[i][0]:last?last.given[i]:"";explainWrong(b.closest(".whyz"),it.q,g||"(vide)",D.type==="choice"?it.q.replace("___",right):right,D.title)});
  app.querySelectorAll("[data-chk]").forEach(b=>b.onclick=()=>{mark();const i=+b.dataset.chk;if(checkOne(i)){const n=app.querySelector(`.item[data-i="${i+1}"] input`);if(n)n.focus()}});
  app.querySelectorAll(".item input[type=text]").forEach((inp,i,all)=>inp.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();if(inp.value.trim()){if(checkOne(i))(all[i+1]||$("#check")).focus()}else(all[i+1]||$("#check")).focus()}});
  $("#check").onclick=()=>{
    const given=[],ok=[],fin=[];
    D.items.forEach((it,i)=>{const el=app.querySelector(`.item[data-i="${i}"]`);
      if(D.type==="choice"){given.push(sel[i]!=null?it.opts[sel[i]]:null);ok.push(sel[i]===it.a&&!pre[i]);fin.push(sel[i]===it.a)}
      else{const v=el.querySelector("input").value.trim();given.push(pre[i]?pre[i][0]:v);ok.push(it.a.some(a=>norm(a)===norm(v))&&!pre[i]);fin.push(it.a.some(a=>norm(a)===norm(v)))}});
    const score=ok.filter(Boolean).length;
    const prevOk=D.items.map((_,i)=>att.some(a=>a.ok[i]));
    const xp=ok.reduce((s,o,i)=>s+(o&&!prevOk[i]?(att.length?1:2):0),0)+(!att.length&&score===D.items.length?10:0);
    const secs=t0?Math.max(1,Math.round((Date.now()-t0)/1000)):null,lim=FLU_DRILL[D.type]||8,wasFluent=drillFluent(D,rec);
    const nr={attempts:[...attAll,{at:Date.now(),given,ok,score,total:D.items.length,secs,...(GEN_DRILLS[id]?{qs:D.items.map(x=>x.q),exp:D.items.map(x=>x.a[0])}:{}),...(Object.keys(pre).length?{pre,fin}:{})}]};
    save("drills",id,nr);
    if(id==="IRR-drill")D.items.forEach((it,i)=>{if(it.ref)recordItem(it.ref,ok[i],!!(ok[i]&&secs&&secs/D.items.length>(FLU_DRILL.order||12)),given[i])});
    let combo=0,maxc=0;ok.forEach(o=>{combo=o?combo+1:0;maxc=Math.max(maxc,combo)});
    vDrill(app,id);decorate(app);
    $("#score").textContent=`${score} / ${D.items.length}`+(secs?` · ${secs} s`:"");
    if(maxc>=3)$("#combo").innerHTML=resChip("ok","Combo ×"+maxc+" "+PRAISE[Math.random()*PRAISE.length|0]);
    if(xp)gain(xp);
    if(score===D.items.length){confetti();
      if(secs&&secs/D.items.length<=lim){if(!wasFluent){gain(5);setTimeout(()=>celebrate("Réflexe acquis !",`${D.title} : sans faute en ${secs} s.`,"zap"),600)}else toast(`Sans faute en ${secs} s`)}
      else toast(`Sans faute ! Maintenant plus vite : objectif ${lim*D.items.length} s (${secs?secs+" s cette fois":"chrono non mesuré"}).`)}
  };
  if($("#coreNew"))$("#coreNew").onclick=()=>{GEN_DRILLS[id]();vDrill(app,id);decorate(app)};
  $("#reset").onclick=()=>{app.querySelectorAll(".item").forEach(el=>{el.classList.remove("right","wrong");const inp=el.querySelector("input");if(inp)inp.value="";el.querySelectorAll(".choices button").forEach(b=>b.classList.remove("sel"));el.querySelector(".fb").innerHTML=""});for(const k in sel)delete sel[k];$("#score").textContent="";$("#combo").innerHTML=""};
}
function attemptsTable(D,att){
  return `<div class="list">${att.slice().reverse().map((a,k)=>{const n=att.length-k,err=a.total-a.score;
    return `<div class="irow t-suivi">${tile("suivi",{sm:true,ic:"history"})}<div class="it"><b>Essai ${n}${n===1?" (premier essai)":""}</b><span>${fmtTs(a.at)}</span></div><div class="chips">${err?resChip("ko",plural(err,"faute")):resChip("ok","Sans faute")}${resChip("neutral",a.score+"/"+a.total)}${a.secs?resChip("neutral",a.secs+" s"):""}</div></div>`}).join("")}</div>`;
}
function attemptsDetail(D,r){
  const att=r&&Array.isArray(r.attempts)?r.attempts:[];
  if(!att.length)return `<p class="empty">Pas encore fait.</p>`;
  if(att[0].qs){const a=att[att.length-1];return `<div class="tblwrap"><table class="mini"><tr><th>#</th><th>Question</th><th>Réponse</th><th>Bonne réponse</th></tr>${a.qs.map((q,i)=>`<tr><td>${i+1}</td><td class="en">${esc(q)}</td><td>${resChip(a.ok[i]?"ok":"ko",a.given[i]||"(vide)",{strike:!a.ok[i]})}</td><td>${resChip("fix",a.exp[i])}</td></tr>`).join("")}</table></div><p class="small muted">Dernière série · ${plural(att.length,"série")} faite${att.length>1?"s":""} au total</p>`}
  return `<div class="tblwrap"><table class="mini"><tr><th>#</th><th>Question</th><th>1er essai</th><th>Essais suivants</th><th>Bonne réponse</th></tr>${D.items.map((it,i)=>{const a0=att[0];
    return `<tr><td>${i+1}</td><td class="en">${esc(it.q)}</td><td>${resChip(a0.ok[i]?"ok":"ko",a0.given[i]||"(vide)",{strike:!a0.ok[i]})}</td><td>${att.slice(1).map(a=>resChip(a.ok[i]?"ok":"ko",a.given[i]||"(vide)",{strike:!a.ok[i]})).join(" ")||"–"}</td><td>${resChip("fix",D.type==="choice"?it.opts[it.a]:it.a[0])}</td></tr>`}).join("")}</table></div>
   <p class="small muted">${plural(att.length,"essai")} · premier essai le ${fmtTs(att[0].at)}</p>`;
}
function fullSentence(D,it){if(D.type==="choice")return it.q.replace("___",it.opts[it.a]);if(D.type==="order")return it.a[0];return it.q.replace(/\(.*?\)/g,"").replace("___",it.a[0]).replace(/^-ing de : .*/,it.a[0])}

/* ---- Homework ---- */
function vHomework(app){
  if(sub&&HW[sub])return vHw(app,sub);
  app.innerHTML=`<section class="view"><div class="pagehead t-devoir">${tile("devoir")}<div><span class="k">Devoirs</span><h1>Devoirs</h1></div></div>
   ${LESSONS.map(l=>panel("devoir","Cours "+l.n+" · "+esc(l.topic),`<div class="list">${l.hw.map(hwRow).join("")}</div>`,{kicker:"Devoirs",right:lessonEnd(l)>new Date()?resChip("neutral","Après le cours du "+fmtDate(l.date,{day:"numeric",month:"short"})):""})).join("")}</section>`;
}
function corrHTML(f,o={}){
  const marked=esc(f.corrected||"").replace(/\[-([\s\S]+?)-\]/g,"<del>$1</del>").replace(/\{\+([\s\S]+?)\+\}/g,"<ins>$1</ins>"), errs=countErrors(f.corrected);
  return `<div class="correction"><div class="row">${resChip("fix","Correction")}${errs?resChip("ko",plural(errs,"faute")):resChip("ok","Aucune faute")}${f.score!=null?resChip("neutral",f.score+"/10"):""}${o.when?`<span class="small muted">${fmtTs(o.when)}</span>`:""}</div>
   <div class="txt en">${marked}</div>
   ${(f.comments||[]).length?`<div><b>À retenir</b><ul>${f.comments.map(c=>`<li>${esc(c)} ${memoBtn(memoTopic(c))}</li>`).join("")}</ul></div>`:""}
   ${f.model?`<div><b>Version améliorée</b><p class="en say" style="white-space:pre-wrap">${esc(f.model)}</p></div>`:""}
   ${f.encouragement?`<p class="muted">${esc(f.encouragement)}</p>`:""}</div>`;
}
function hwHistory(h){const hist=(h&&h.history)||[];if(hist.length<2)return "";
  return `<details class="hist"><summary>${ICON.history}Corrections précédentes (${hist.length-1})</summary><div class="hb">${hist.slice(0,-1).reverse().map(v=>`<div class="answer">${esc(v.answer)}</div>${corrHTML(v.feedback,{when:v.at})}`).join("")}</div></details>`}
function vHw(app,id){
  if(locked(LESSONS.find(x=>x.id===HW[id].lesson))){location.hash="homework";return}
  const H=HW[id],l=LESSONS.find(x=>x.id===H.lesson),rec=ST().homework[id]||{},po=S.homework[id]||{};
  const head=`<a class="oldback" href="#homework">← Devoirs</a><div class="pagehead t-devoir">${tile("devoir")}<div><span class="k">Devoir · Cours ${l.n}${hwDue(id)?" · à rendre le "+fmtDate(hwDue(id),{day:"numeric",month:"long"}):""}</span><h1>${esc(H.title)}</h1></div><div class="row">${HWDOM[id].map(dom).join("")}</div></div>`;
  const coachView=isCoach()?panel("suivi","Réponse de Pierre-Olivier",po.answer?`<div class="row">${hwChips(id,S)}${po.updatedAt?`<span class="small muted">modifié le ${fmtTs(po.updatedAt)}</span>`:""}</div><div class="answer en">${esc(po.answer)}</div>${po.feedback?corrHTML(po.feedback,{when:(po.history||[]).slice(-1)[0]?.at}):""}${hwHistory(po)}`:`<p class="empty">Pas encore de réponse.</p>`,{kicker:"Suivi de l'élève"}):"";
  app.innerHTML=`<section class="view">${head}${coachView}
   ${panel("devoir",isCoach()?"Essaie toi-même (non enregistré)":"Ta réponse",`<div class="prompt en">${H.prompt}</div>
    <div class="row"><label for="ans"><b>Ta réponse</b></label><span class="spacer"></span>${DICT?`<button class="btn small" id="micHw">${ICON.mic}<span>Dicter</span></button>`:""}</div>
    <textarea id="ans" placeholder="Write your answer here…" style="min-height:220px">${esc(rec.answer||"")}</textarea>
    <div class="row">${SAMPLE?`<button class="btn primary" id="correct">${ICON.spark}<span>Faire corriger</span></button>`:""}
     ${isCoach()?"":`<button class="btn typed t-devoir" id="markDone">${ICON.check}<span>${["done","corrected"].includes(rec.status)?"Rendu":"Marquer comme rendu"}</span></button>`}
     <button class="btn ghost" id="copyAns">${ICON.copy}<span>Copier pour la fiche</span></button><span class="spacer"></span><span class="muted small" id="saved">${rec.updatedAt&&!isCoach()?"Enregistré":""}</span></div>
    <div id="corrBox">${rec.feedback?corrHTML(rec.feedback,{when:(rec.history||[]).slice(-1)[0]?.at}):""}</div>${isCoach()?"":hwHistory(rec)}`,{kicker:"Devoir"})}
</section>`;
  const ta=$("#ans");
  ta.oninput=()=>{const r={...(ST().homework[id]||{})};r.answer=ta.value;r.updatedAt=Date.now();if(!r.status||r.status==="todo")r.status="draft";save("homework",id,r);if(!isCoach())$("#saved").textContent="Enregistré"};
  if($("#markDone"))$("#markDone").onclick=()=>{const old=S.homework[id]||{};const first=!["done","corrected"].includes(old.status);const r={...old,answer:ta.value,updatedAt:Date.now(),doneAt:old.doneAt||Date.now()};r.status=r.feedback?"corrected":"done";save("homework",id,r);if(first)gain(20);render()};
  $("#copyAns").onclick=()=>copyText(ta.value);
  if($("#correct"))$("#correct").onclick=()=>correctHw(id,ta.value);
  if($("#micHw"))wireMic($("#micHw"),ta);
}
async function correctHw(id,answer){
  if(!answer.trim()){toast("Écris d'abord ta réponse");return}
  const H=HW[id],box=$("#corrBox"),btn=$("#correct");btn.disabled=true;
  box.innerHTML=`<div class="correction"><p class="muted">Correction en cours…</p></div>`;
  const tmp=document.createElement("div");tmp.innerHTML=H.prompt;
  const prompt=`You are a kind, precise English teacher correcting homework for a French adult learner (elementary level, A2), CEO of Ryo, an audio-guided city tour app. Lesson topic: ${LESSONS.find(l=>l.id===H.lesson).en}.

HOMEWORK INSTRUCTIONS:
${tmp.textContent.trim()}

STUDENT ANSWER:
${answer}

Return ONLY a JSON object:
{"corrected": the full answer with every mistake marked inline: wrong text as [-wrong-] immediately followed by the fix as {+right+}; keep correct text unchanged and keep line breaks,
 "score": integer 0-10,
 "comments": array of 2-5 short explanations IN FRENCH naming the rule (e.g. "Après did, verbe à la base : did you go"),
 "model": a short improved version in natural simple English ("" if already excellent),
 "encouragement": one short warm sentence in French}
NEVER count capital letters or punctuation (missing capital, missing full stop, comma, question mark) as mistakes: do not mark them, do not lower the score for them.
If a required part of the instructions is missing, say so in a comment.`;
  try{
    const f=await SAMPLE.json(prompt,{modelTier:"default"});
    const old=ST().homework[id]||{};
    const r={...old,answer,feedback:f,updatedAt:Date.now(),history:[...(old.history||[]),{at:Date.now(),answer,feedback:f,errors:countErrors(f.corrected)}]};
    if(r.status==="done")r.status="corrected";else if(!r.status||r.status==="todo")r.status="draft";
    save("homework",id,r);box.innerHTML=corrHTML(f,{when:Date.now()});decorate(box);
    gain(old.history&&old.history.length?5:10);
    if(countErrors(f.corrected)===0)confetti();
  }catch(e){box.innerHTML=`<div class="correction"><p style="color:var(--bad)">${e.code==="rate_limited"?"Trop de demandes, réessaie dans une minute.":e.code==="not_granted"?"La correction automatique n'est pas autorisée sur cette page.":"La correction n'a pas abouti. Réessaie."}</p></div>`}
  btn.disabled=false;
}

/* ---- Review (flashcards) ---- */
let cardDir="fr2en",cardFilter="due",cardIdx=0,cardFlip=false,cardShownAt=0,cardShownId=null,cardFlipAt=0;
function allCards(st=ST()){return [...CARDS,...Object.entries(st.mycards).map(([id,c])=>({id,en:c.en,fr:c.fr,note:c.note||"",kind:"mine"}))]}
function dueCards(){const t=todayISO(),all=allCards(),cs=ST().cards;
  if(cardFilter==="verbs")return all.filter(c=>c.kind==="verb");if(cardFilter==="mine")return all.filter(c=>c.kind==="mine");if(cardFilter==="all")return all;
  return all.filter(c=>{const s=cs[c.id];return !s||s.due<=t})}
const INTERVALS=[0,1,2,4,8,16];
function vReview(app){
  const list=dueCards();if(cardIdx>=list.length)cardIdx=0;
  const c=list[cardIdx],s=c?ST().cards[c.id]:null,box=s?s.box:0,enFront=c&&!(cardDir==="fr2en"&&c.kind!=="verb");
  const front=c?(enFront?c.en:c.fr):"",back=c?(enFront?c.fr:c.en):"";
  if(c&&!cardFlip&&cardShownId!==c.id+cardDir){cardShownId=c.id+cardDir;cardShownAt=Date.now()}
  const known=Object.values(ST().cards).filter(x=>x.box>=3).length;
  app.innerHTML=`<section class="view"><div class="pagehead t-rev">${tile("rev")}<div><span class="k">Révisions</span><h1>Flashcards</h1></div><div class="row">${resChip("ok",known+" cartes mémorisées")}${resChip("neutral",plural(list.length,"carte")+" dans ce paquet")}</div></div>
   <div class="cols"><div class="col">${panel("rev","Carte "+(c?cardIdx+1:0)+" sur "+list.length,`
    <div class="row"><select id="cf" aria-label="Paquet"><option value="due">À réviser aujourd'hui</option><option value="verbs">Verbes irréguliers</option><option value="mine">Mes mots</option><option value="all">Toutes les cartes</option></select>
    <select id="cd" aria-label="Sens"><option value="fr2en">Français → anglais</option><option value="en2fr">Anglais → français</option></select></div>
    ${c?`<div class="card ${cardFlip?"flipped":""}" id="card" tabindex="0" role="button" aria-label="Retourner la carte"><div class="row" style="justify-content:center">${cardDom(c).map(dom).join("")}</div>
      <div class="front">${esc(front)}</div>${cardFlip?`<div class="back">${esc(back)}</div>${c.note?`<div class="note">${esc(c.note)}</div>`:""}`:`<div class="note">Touche la carte</div>`}</div>
     <div class="row"><button class="btn small" id="sayCard">${ICON.speak}<span>Écouter</span></button><span class="spacer"></span><span class="small muted" style="font-weight:800">Niveau de mémorisation</span></div>
     <div class="boxes">${[1,2,3,4,5].map(i=>`<span class="${box>=i?"on":""}"></span>`).join("")}</div>
     ${cardFlip?`<div class="row"><button class="btn" id="cNo" style="flex:1;justify-content:center">${ICON.x}<span>À revoir</span></button><button class="btn typed t-rev" id="cYes" style="flex:1;justify-content:center">${ICON.check}<span>Je savais (+2 XP)</span></button></div>`:`<button class="btn typed t-rev" id="cFlip" style="justify-content:center">Voir la réponse</button>`}`
    :`<p class="empty">${cardFilter==="due"?"Rien à réviser aujourd'hui, bravo ! Reviens demain ou choisis « Toutes les cartes ».":"Aucune carte ici pour l'instant."}</p>`}`,{kicker:"Révision"})}</div>
   <div class="col">${panel("rev","Ajouter un mot vu en cours",`<div class="row"><input class="f" id="nEn" placeholder="Anglais (ex. booking)" style="flex:1"><input class="f" id="nFr" placeholder="Français (ex. réservation)" style="flex:1"></div>
    <input class="f" id="nNote" placeholder="Exemple ou prononciation (facultatif)"><div class="row"><button class="btn typed t-rev" id="nAdd">${ICON.plus}<span>Ajouter la carte (+2 XP)</span></button><span class="muted small">${plural(Object.keys(ST().mycards).length,"mot")} ajouté(s)</span></div>`,{kicker:"Vocabulaire",ic:"plus",dom:["vocab"]})}</div></div></section>`;
  $("#cf").value=cardFilter;$("#cd").value=cardDir;
  $("#cf").onchange=e=>{cardFilter=e.target.value;cardIdx=0;cardFlip=false;render()};
  $("#cd").onchange=e=>{cardDir=e.target.value;cardFlip=false;render()};
  const flip=()=>{cardFlip=true;cardFlipAt=Date.now();render()};
  if($("#card")){$("#card").onclick=flip;$("#card").onkeydown=e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();flip()}}}
  if($("#cFlip"))$("#cFlip").onclick=flip;
  if($("#sayCard"))$("#sayCard").onclick=()=>say(c.kind==="verb"?c.en+", "+c.fr.replace(/·|\//g,","):c.en);
  const grade=ok=>{const s=ST().cards[c.id]||{box:0},secs=(cardFlipAt-cardShownAt)/1000,slow=ok&&secs>5;
    const b=slow?Math.max(1,Math.min(s.box||0,2)):ok?Math.min(5,(s.box||0)+1):1;
    save("cards",c.id,{box:b,due:addDays(todayISO(),slow?1:ok?INTERVALS[b]:0),seen:(s.seen||0)+1,slow:slow?(s.slow||0)+1:(s.slow||0)});
    cardShownId=null;if(slow)toast(`Juste mais lent (${Math.round(secs)} s) : on la revoit demain`);
    cardFlip=false;if(cardFilter!=="due"||!ok)cardIdx++;gain(ok?2:1);render()};
  if($("#cYes"))$("#cYes").onclick=()=>grade(true);
  if($("#cNo"))$("#cNo").onclick=()=>grade(false);
  $("#nAdd").onclick=()=>{const en=$("#nEn").value.trim(),fr=$("#nFr").value.trim();if(!en||!fr){toast("Remplis l'anglais et le français");return}
    save("mycards","m"+Date.now(),{en,fr,note:$("#nNote").value.trim(),createdAt:Date.now()});gain(2);render()};
}

/* ---- Coach (oral) ---- */
let WISH=lsGet("el-oral-wish")||"";
/* ---- Oral: a live spoken conversation with Emma (illustrated coach) ---- */
const ORAL={active:false,scen:null,msgs:[],phase:"idle",subsOn:true,trOn:false,rate:1,lines:[],curLine:-1,curWord:-1,heard:"",heardF:"",lt:null,last:null,pos:null,ttsHooked:false,answers:0};
function avatarSVG(){return `<svg viewBox="0 0 200 200" class="avsvg" aria-hidden="true">
  <circle cx="100" cy="100" r="96" fill="var(--coach-s)"/>
  <path d="M38 196c6-40 30-58 62-58s56 18 62 58z" fill="var(--coach)"/>
  <path d="M84 132h32v18c0 9-32 9-32 0z" fill="#E8B48F"/>
  <path d="M46 98c0-46 22-70 54-70s54 24 54 70c0 26-6 44-12 52H58c-6-8-12-26-12-52z" fill="#5A3624"/>
  <ellipse cx="100" cy="98" rx="38" ry="44" fill="#F3C9A6"/>
  <path d="M62 88c4-30 20-42 40-42 22 0 36 14 38 40-14-4-30-14-38-26-8 14-24 24-40 28z" fill="#5A3624"/>
  <g class="eyes"><ellipse cx="86" cy="98" rx="4.2" ry="5" fill="#2A1A14"/><ellipse cx="114" cy="98" rx="4.2" ry="5" fill="#2A1A14"/></g>
  <path d="M79 88q7-4 13 0M108 88q7-4 13 0" stroke="#5A3624" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <circle cx="78" cy="114" r="6" fill="#F29C9C" opacity=".45"/><circle cx="122" cy="114" r="6" fill="#F29C9C" opacity=".45"/>
  <path class="smile" d="M88 120q12 10 24 0" stroke="#A8434B" stroke-width="3.2" fill="none" stroke-linecap="round"/>
  <ellipse class="mouth" cx="100" cy="122" rx="9" ry="6" fill="#A8434B"/>
  <circle cx="146" cy="104" r="4" fill="var(--exo)"/>
 </svg>`}
const oralScen=()=>ORAL.scen==="custom"?{label:"Ma demande",focus:WISH,custom:true,open:"Begin with a short reminder if useful, then the first exercise or question."}:SCENARIOS[ORAL.scen];
function vCoach(app){
  if(sub&&SCENARIOS[sub]){const L=LESSONS.find(x=>x.id===SCEN_LESSON[sub]);if(L&&locked(L))sub=null}
  const head=`<div class="pagehead t-coach">${tile("coach")}<div><span class="k">Oral</span><h1>Parler avec Emma</h1></div><div class="row">${dom("oral")}${dom("pron")}</div></div>`;
  if(!SAMPLE){app.innerHTML=`<section class="view">${head}${panel("coach","Indisponible ici",`<p>La conversation avec Emma a besoin d'un accès à Claude.</p>`)}</section>`;return}
  if(PRON.active)return vPron(app);
  if(ORAL.active)return vOralStage(app);
  app.innerHTML=`<section class="view">${head}
   <div class="oralhero"><div class="avatar big">${avatarSVG()}</div><div><h2>Hi, I'm Emma!</h2><p>Ta coach d'anglais. On discute à voix haute : je te pose des questions, tu réponds au micro, je te corrige (grammaire, vocabulaire, prononciation) avec des sous-titres si besoin.</p>
     ${window.EL_NATIVE?"":`<div style="margin-top:10px"><b class="small">Voix d'Emma</b>${voicePicker()}</div>`}</div></div>
   <button class="irow t-coach" id="pronGo" style="cursor:pointer;text-align:left">${tile("coach",{ic:"ear"})}<div class="it"><b>Mode prononciation</b><span>Lis des phrases à voix haute : les mots mal compris s'affichent en rouge, avec une astuce et un bouton pour les écouter.</span></div>${dom("pron")}</button>
   ${panel("coach","Que veux-tu travailler ?",`<textarea id="wish" style="min-height:84px" placeholder="Ex. : je veux réviser à l'oral toutes les formes du passé, avec des exercices, des corrections et des rappels de grammaire.">${esc(WISH)}</textarea>
     <div class="row"><button class="btn typed t-coach" id="wishGo">${ICON.mic}<span>Commencer la conversation</span></button></div>`,{kicker:"Ma demande",ic:"spark"})}
   <div class="scen">${Object.entries(SCENARIOS).map(([k,s])=>{const L=LESSONS.find(x=>x.id===SCEN_LESSON[k]);return L&&locked(L)?`<button disabled style="opacity:.55">${tile("coach",{sm:true,ic:"lock"})}<span>${esc(s.label)}<br><span class="small muted">après le cours ${L.n}</span></span></button>`:`<button data-s="${k}">${tile("coach",{sm:true,ic:s.ic})}${esc(s.label)}</button>`}).join("")}</div>
  </section>`;
  const w=$("#wish");w.oninput=()=>{WISH=w.value;lsSet("el-oral-wish",WISH)};
  $("#wishGo").onclick=()=>{WISH=w.value.trim();if(!WISH){toast("Écris d'abord ce que tu veux travailler");return}lsSet("el-oral-wish",WISH);oralStart("custom")};
  bindVoicePicker(app);$("#pronGo").onclick=pronStart;
  app.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>oralStart(b.dataset.s));
}
function oralStart(k){Object.assign(ORAL,{active:true,scen:k,msgs:[],phase:"thinking",lines:[],curLine:-1,curWord:-1,heard:"",heardF:"",last:null,answers:0});hookTTS();render();oralTurn()}
function oralEnd(){oralStopListening(true);oralStopSpeech();ORAL.active=false;ORAL.phase="idle";render()}
function hookTTS(){if(ORAL.ttsHooked||!TTS)return;ORAL.ttsHooked=true;
  try{TTS.onLine(({id})=>{if(!ORAL.active||!id||id[0]!=="L")return;ORAL.curLine=+id.slice(1);ORAL.curWord=0;ORAL.lineStart=Date.now();paintSubs()});
    TTS.onPosition(({ms,id})=>{if(!ORAL.active||!id||id[0]!=="L")return;const li=+id.slice(1);ORAL.curLine=li;oralWordAt(li,ms)})}catch(e){}}
function oralWordAt(li,ms){const l=ORAL.lines[li];if(!l)return;const cps=(l.lang==="fr"?15.5:14)*(ORAL.rate||1);const pos=ms/1000*cps;let acc=0,k=0;
  for(;k<l.words.length;k++){acc+=l.words[k].length+1;if(acc>pos)break}ORAL.curWord=Math.min(k,l.words.length-1);paintSubs()}
function paintSubs(){const box=$("#subs");if(!box)return;box.querySelectorAll(".sw").forEach(el=>{const on=+el.dataset.l===ORAL.curLine&&+el.dataset.w===ORAL.curWord;el.classList.toggle("on",on);
  el.classList.toggle("done",+el.dataset.l<ORAL.curLine||(+el.dataset.l===ORAL.curLine&&+el.dataset.w<ORAL.curWord))})}
async function oralSpeak(say){
  ORAL.lines=(say||[]).filter(x=>x&&x.text).map(x=>({lang:x.lang==="fr"?"fr":"en",text:x.text,words:x.text.split(/\s+/)}));
  ORAL.curLine=-1;ORAL.curWord=-1;ORAL.phase="speaking";render();
  const lines=ORAL.lines;
  if(TTS){try{await TTS.speak(lines.map((l,i)=>({text:l.text,language:l.lang,id:"L"+i,voice:EMMA_VOICE})),{rate:ORAL.rate})}catch(e){if(e&&!["viewer_stopped","stopped","replaced"].includes(e.code)&&!(e.code==="stopped"))await oralBrowserSay(lines)}}
  else await oralBrowserSay(lines);
  if(!ORAL.active)return;
  if(ORAL.phase==="speaking"){ORAL.phase="idle";ORAL.curLine=lines.length;render()}
}
function oralBrowserSay(lines){return new Promise(res=>{if(!("speechSynthesis" in window)){res();return}
  const ss=speechSynthesis;ss.cancel();let i=0;
  const next=()=>{if(i>=lines.length||!ORAL.active||ORAL.phase!=="speaking")return res();const li=i++,l=lines[li];
    const u=new SpeechSynthesisUtterance(l.text);u.lang=l.lang==="fr"?"fr-FR":"en-GB";const v=pickFemaleVoice(u.lang);if(v){u.voice=v;u.lang=v.lang}u.rate=(l.lang==="en"?.95:1.02)*(ORAL.rate||1);
    ORAL.curLine=li;ORAL.curWord=0;paintSubs();let gotB=false;const t0=Date.now();
    u.onboundary=e=>{if(e.name&&e.name!=="word")return;gotB=true;const before=l.text.slice(0,e.charIndex);ORAL.curWord=before.split(/\s+/).filter(Boolean).length;paintSubs()};
    const iv=setInterval(()=>{if(!gotB)oralWordAt(li,(Date.now()-t0)*(.95))},120);
    let fired=false;const go=()=>{if(!fired){fired=true;clearInterval(iv);next()}};u.onend=go;u.onerror=go;setTimeout(go,Math.max(5000,l.text.length*150));ss.speak(u)};
  next()})}
function oralStopSpeech(){try{TTS&&TTS.stop()}catch(e){}try{speechSynthesis.cancel()}catch(e){}}
/* microphone: tap (or space bar) to answer, stops by itself after a silence */
function oralMic(){
  if(ORAL.phase==="listening"){oralFinish();return}
  if(ORAL.phase==="thinking")return;
  if(!DICT){$("#oralType")&&$("#oralType").focus();return}
  if(ORAL.phase==="speaking"){ORAL.phase="idle";oralStopSpeech()}
  initDict();ORAL.heard="";ORAL.heardF="";ORAL.phase="listening";ORAL.lstart=Date.now();
  DICT.start({language:"en"}).catch(e=>{if(ORAL.phase==="listening"){ORAL.phase="idle";toast(e&&e.code==="not_granted"?"Micro refusé":"Micro indisponible");render()}});
  render();
}
function oralHeard(text,final){
  if(ORAL.phase!=="listening")return;
  if(final)ORAL.heardF=((ORAL.heardF||"")+" "+text).trim();
  ORAL.heard=((ORAL.heardF||"")+(final?"":" "+text)).trim();
  const y=$("#youTr");if(y)y.textContent=ORAL.heard;
  clearTimeout(ORAL.lt);ORAL.lt=setTimeout(oralFinish,(final?2800:3600)+(toks(ORAL.heard).length<3?1500:0));
}
function oralStopListening(silent){clearTimeout(ORAL.lt);if(ORAL.phase==="listening"||silent){try{DICT&&DICT.stop().catch(()=>{})}catch(e){}}}
function oralFinish(){
  if(ORAL.phase!=="listening")return;oralStopListening();
  const t=(ORAL.heard||"").trim();
  if(!t){ORAL.phase="idle";toast("Je n'ai rien entendu, réessaie");render();return}
  oralSend(t);
}
function oralSend(t,meta){ORAL.msgs.push({role:"me",text:t,meta});if(!meta){ORAL.answers++;gain(3)}ORAL.phase="thinking";render();oralTurn()}
async function oralTurn(){
  const s=oralScen();
  const sys=`You are Emma, a warm, lively and encouraging English coach having a real SPOKEN conversation with Pierre-Olivier, a French A2 learner, CEO of Ryo (audio-guided city tours, based in Lyon), preparing CES Las Vegas in January 2027.
Everything you write in "say" is read aloud. His answers come from speech-to-text: ignore punctuation and capital letters. When a word in his transcript looks like a mis-hearing of the word he meant, it is probably a PRONUNCIATION problem: add it to "pronunciation" with a short French tip on how to say it (e.g. "build" : se prononce « bild », le u ne s'entend pas), and say the word correctly in your turn.
Topic / his request: ${s.focus}${s.custom?". Build the conversation around exactly this request: alternate short grammar reminders (in French, with one example) and short oral exercises or questions, one at a time, gradually harder; every 5 or 6 answers give a mini memo.":""}
Behave like a real coach in a live conversation: react to what he says, be natural and warm, keep YOUR English simple (A2-B1), max 3 short English sentences per turn, ONE question at a time, using the target grammar. If he made mistakes, first say the corrected sentence briefly (sometimes ask him to repeat it), with a very short French explanation. If he says he did not understand, rephrase more simply and help in French.
Return ONLY JSON: {"say":[{"lang":"en"|"fr","text":"..."}] (your whole spoken turn in order, short segments, French only for explanations/help), "correction": his last sentence corrected (English) or null, "explication": one-line French explanation or null, "pronunciation":[{"word":"","tip":""}], "memo": short French grammar reminder or null, "translation": French translation of your English question}`;
  const msgs=[{role:"user",content:sys+"\n\nStart the conversation now. "+(s.open||"")}];
  ORAL.msgs.forEach(m=>{if(m.role==="me")msgs.push({role:"user",content:m.text});else msgs.push({role:"assistant",content:JSON.stringify(m.data)})});
  try{
    const r=await SAMPLE.json(msgs,{modelTier:"default",cache:false});
    if(!ORAL.active)return;
    if(!Array.isArray(r.say)||!r.say.length)r.say=[{lang:"en",text:r.reply||"Let's continue."}];
    ORAL.msgs.push({role:"ai",data:r});ORAL.last=r;
    if(ORAL.answers>=3){const l=LESSONS.find(x=>x.coach===ORAL.scen);if(l)markFlag("coach-"+l.id);if(!P().coachTalks){setP(p=>{p.coachTalks=true});checkBadges()}}
    await oralSpeak(r.say);
  }catch(e){if(!ORAL.active)return;ORAL.phase="idle";render();toast(e&&e.code==="rate_limited"?"Trop de messages, attends une minute":"Emma n'a pas pu répondre, réessaie")}
}
function vOralStage(app){
  const r=ORAL.last,ph=ORAL.phase,s=oralScen();
  const subs=ORAL.lines.map((l,li)=>`<div class="subl ${l.lang}">${l.words.map((w,wi)=>`<span class="sw" data-l="${li}" data-w="${wi}">${esc(w)}</span>`).join(" ")}</div>`).join("");
  const status={speaking:["speak","Emma parle…"],listening:["mic","Je t'écoute…"],thinking:["spark","Emma réfléchit…"],idle:["mic",DICT?"À toi ! Touche « Parler » ou la barre d'espace":"À toi ! Écris ta réponse"]}[ph]||["mic",""];
  const hist=ORAL.msgs.map(m=>m.role==="me"?`<div class="msg me">${esc(m.text)}</div>`:`<div class="msg ai en">${esc((m.data.say||[]).map(x=>x.text).join(" "))}</div>`).join("");
  app.innerHTML=`<section class="view oral">
   <div class="row"><span class="res neutral">${ICON.chat}<span>${esc(s.label)}</span></span><span class="spacer"></span><button class="btn" id="oEnd">${ICON.x}<span>Terminer</span></button></div>
   <div class="stage">
     <div class="avatar ${ph}">${avatarSVG()}${ph==="thinking"?`<span class="dots"><i></i><i></i><i></i></span>`:""}</div>
     <div class="carstatus ${ph==="listening"?"listening":""}">${ICON[status[0]]}<span>${status[1]}</span></div>
     ${ORAL.subsOn&&ORAL.lines.length?`<div class="subs" id="subs">${subs}</div>`:""}
     ${ORAL.trOn&&r&&r.translation?`<div class="subtr">${esc(r.translation)}</div>`:""}
     ${ph==="listening"||ORAL.heard?`<div class="cartr"><span class="small muted">Tu dis :</span><div id="youTr">${esc(ORAL.heard||"…")}</div></div>`:""}
     ${r&&(r.correction||(r.pronunciation||[]).length||r.memo)?`<div class="carfb">
       ${r.correction?`<div>${resChip("fix",r.correction)}${r.explication?`<div class="row small" style="margin-top:6px"><span>${esc(r.explication)}</span>${memoBtn(memoTopic(r.explication,r.correction))}</div>`:""}</div>`:""}
       ${(r.pronunciation||[]).map(p=>`<div class="row">${dom("pron")}<b class="en">${esc(p.word)}</b><button class="spk" data-sayw="${esc(p.word)}" aria-label="Écouter">${ICON.speak}</button><span>${esc(p.tip||"")}</span></div>`).join("")}
       ${r.memo?`<div class="tip" style="background:var(--cours-s);border-color:var(--cours-l)">${ICON.book}<span><b>Rappel :</b> ${esc(r.memo)}</span></div>`:""}</div>`:""}
   </div>
   <div class="talkbar">
     <button class="carbtn" id="oRep">${ICON.history}<span>Répéter</span></button>
     <button class="carbtn" id="oSlow">${ICON.clock}<span>${ORAL.rate<1?"Vitesse normale":"Plus lentement"}</span></button>
     <button class="carbtn main talk ${ph==="listening"?"on":""}" id="oMic" ${ph==="thinking"?"disabled":""}>${ICON.mic}<span>${ph==="listening"?"J'ai fini":"Parler"}</span></button>
     <button class="carbtn" id="oHelp">${ICON.info}<span>Je n'ai pas compris</span></button>
     <button class="carbtn" id="oSubs">${ICON.note}<span>${ORAL.subsOn?"Masquer le texte":"Afficher le texte"}</span></button>
   </div>
   ${DICT?"":`<div class="composer"><textarea id="oralType" placeholder="Answer in English…" style="min-height:52px;height:52px"></textarea><button class="btn typed t-coach" id="oSend">${ICON.plane}</button></div>`}
   <div class="row" style="justify-content:center"><button class="btn small ${ORAL.trOn?"typed t-coach":""}" id="oTr">Traduction de la question</button></div>
   ${hist?`<details class="hist"><summary>${ICON.history}Toute la conversation</summary><div class="hb chat" style="max-height:none">${hist}</div></details>`:""}
  </section>`;
  paintSubs();
  $("#oEnd").onclick=oralEnd;
  $("#oMic").onclick=oralMic;
  $("#oRep").onclick=()=>{if(ORAL.last&&ph!=="thinking"){oralStopListening(true);oralSpeak(ORAL.last.say)}};
  $("#oSlow").onclick=()=>{ORAL.rate=ORAL.rate<1?1:.8;if(ORAL.last&&ph!=="thinking"&&ph!=="listening")oralSpeak(ORAL.last.say);else render()};
  $("#oHelp").onclick=()=>{if(ph==="thinking")return;oralStopListening(true);oralStopSpeech();ORAL.subsOn=true;ORAL.trOn=true;oralSend("(Je n'ai pas compris. Peux-tu reformuler plus simplement et m'aider en français ?)",{help:true})};
  $("#oSubs").onclick=()=>{ORAL.subsOn=!ORAL.subsOn;render()};
  $("#oTr").onclick=()=>{ORAL.trOn=!ORAL.trOn;render()};
  app.querySelectorAll("[data-sayw]").forEach(b=>b.onclick=()=>{if(TTS)TTS.speak(b.dataset.sayw,{language:"en",rate:.8}).catch(()=>sayBrowser(b.dataset.sayw));else sayBrowser(b.dataset.sayw)});
  if($("#oSend")){const t=$("#oralType");$("#oSend").onclick=()=>{const v=t.value.trim();if(v&&ph!=="thinking")oralSend(v)};t.onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();$("#oSend").click()}}}
}
document.addEventListener("keydown",e=>{if(view!=="coach"||!ORAL.active||e.code!=="Space")return;if(e.target.closest("textarea,input,button"))return;e.preventDefault();oralMic()});


/* ---- Emma's voice choice + pronunciation mode ---- */
const EMMA_VOICES=[["airy","Voix 1"],["glassy","Voix 2"],["rounded","Voix 3"],["buttery","Voix 4"]];
let EMMA_VOICE=lsGet("el-emma-voice")||"airy";
const FEMALE=/female|woman|samantha|karen|serena|kate|moira|tessa|fiona|victoria|susan|hazel|libby|sonia|jenny|aria|emma|amy|joanna|salli|kimberly|ivy|zira|catherine|natasha|clara|denise|amélie|amelie|audrey|marie|julie|léa|lea|celine|céline|hortense|eloise|vivienne|aurelie/i;
const MALE=/\bmale\b|\bman\b|daniel|arthur|oliver|george|ryan|guy|thomas|henri|paul|alex|fred|ralph|aaron|gordon|rishi|jacques|nicolas|claude|remy|antoine/i;
function pickFemaleVoice(lang){try{const vs=speechSynthesis.getVoices();let best=null,bs=-99;vs.forEach(v=>{let sc=voiceScore(v,lang);if(sc<-50)return;const n=v.name+" "+v.voiceURI;if(FEMALE.test(n)&&!/\bmale\b/i.test(n.replace(/female/ig,"")))sc+=6;if(MALE.test(n.replace(/female/ig,"")))sc-=6;if(sc>bs){bs=sc;best=v}});return best}catch(e){return null}}
function emmaSay(text,lang="en",rate=.9){
  if(TTS)return TTS.speak([{text,language:lang,voice:EMMA_VOICE}],{rate}).catch(()=>{});
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=lang==="fr"?"fr-FR":"en-GB";const v=pickFemaleVoice(u.lang);if(v){u.voice=v;u.lang=v.lang}u.rate=rate;speechSynthesis.speak(u)}catch(e){}
  return Promise.resolve();
}
function voicePicker(){
  if(!TTS)return `<p class="small muted">Voix de l'appareil : une voix féminine est choisie automatiquement quand il y en a une.</p>`;
  return `<div class="row">${EMMA_VOICES.map(([v,l])=>`<button class="btn small ${EMMA_VOICE===v?"typed t-coach":""}" data-voice="${v}">${ICON.speak}<span>${l}</span></button>`).join("")}</div>`;
}
function bindVoicePicker(root){root.querySelectorAll("[data-voice]").forEach(b=>b.onclick=()=>{EMMA_VOICE=b.dataset.voice;lsSet("el-emma-voice",EMMA_VOICE);
  root.querySelectorAll("[data-voice]").forEach(x=>{const on=x.dataset.voice===EMMA_VOICE;x.classList.toggle("typed",on);x.classList.toggle("t-coach",on)});
  emmaSay("Hi! I'm Emma, your English coach. Let's practise together.")})}

const PRON={active:false,items:[],i:0,phase:"ready",heard:"",heardF:"",lt:null,res:null,tips:null,score:[]};
function pronStart(){
  const pool=carPool().filter(i=>["repeat","past"].includes(i.kind)).map(i=>{const en=i.ans[0];return{id:"pr-"+i.id,kind:"repeat",ask:en,ans:[en],rule:"Prononciation",l:i.l}});
  const t=todayISO(),score=it=>{const r=ST().car[it.id];let s=Math.random()*3;if(r&&(r.errs||0)>0&&(r.box||0)<3)s+=8;else if(!r)s+=3;else if(r.due<=t)s+=3;else s-=3;return s};
  const seen=new Set();PRON.items=pool.filter(x=>!seen.has(x.ask)&&seen.add(x.ask)).map(it=>({it,s:score(it)})).sort((a,b)=>b.s-a.s).slice(0,15).map(x=>x.it);
  Object.assign(PRON,{active:true,i:0,phase:"ready",heard:"",heardF:"",res:null,tips:null,score:[]});render();
  setTimeout(()=>emmaSay(PRON.items[0].ask,"en",.85),300);
}
function pronAlign(target,heard){
  const words=toks(target).map(w=>({w,parts:norm(w).split(" ").filter(Boolean)}));
  const exp=[];words.forEach((o,k)=>o.parts.forEach(p=>exp.push({p,k})));
  const got=norm(heard).split(" ").filter(Boolean);
  const n=exp.length,m=got.length,L=[...Array(n+1)].map(()=>new Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)L[i][j]=exp[i].p===got[j]?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
  const hit=new Set();let i=0,j=0;while(i<n&&j<m){if(exp[i].p===got[j]){hit.add(i);i++;j++}else if(L[i+1][j]>=L[i][j+1])i++;else j++}
  return words.map((o,k)=>({w:o.w,ok:exp.every((e,x)=>e.k!==k||hit.has(x))}));
}
function pronMic(){
  if(PRON.phase==="listening"){pronFinish();return}
  if(!DICT){toast("Micro indisponible ici");return}
  initDict();PRON.heard="";PRON.heardF="";PRON.res=null;PRON.tips=null;PRON.phase="listening";
  try{speechSynthesis.cancel()}catch(e){}try{TTS&&TTS.stop()}catch(e){}
  DICT.start({language:"en"}).catch(e=>{PRON.phase="ready";toast(e&&e.code==="not_granted"?"Micro refusé":"Micro indisponible");render()});render();
}
function pronHeard(text,final){
  if(PRON.phase!=="listening")return;
  if(final)PRON.heardF=((PRON.heardF||"")+" "+text).trim();
  PRON.heard=((PRON.heardF||"")+(final?"":" "+text)).trim();const y=$("#prTr");if(y)y.textContent=PRON.heard;
  const want=toks(PRON.items[PRON.i].ask).length,short=toks(PRON.heard).length<Math.round(want*.7);
  clearTimeout(PRON.lt);PRON.lt=setTimeout(pronFinish,(final?2400:3200)+(short?1500:0));
}
async function pronFinish(){
  if(PRON.phase!=="listening")return;clearTimeout(PRON.lt);try{DICT.stop().catch(()=>{})}catch(e){}
  const it=PRON.items[PRON.i],heard=(PRON.heard||"").trim();
  if(!heard){PRON.phase="ready";toast("Je n'ai rien entendu, réessaie");render();return}
  const res=pronAlign(it.ask,heard),bad=res.filter(x=>!x.ok).map(x=>x.w);
  PRON.res=res;PRON.phase="result";PRON.score.push(res.filter(x=>x.ok).length/res.length);
  recordItem(it,!bad.length,false,heard);beep(!bad.length);gain(bad.length?1:3);render();
  if(!bad.length){emmaSay(["Perfect!","Great pronunciation!","Very clear!","Excellent!"][Math.random()*4|0]);return}
  if(SAMPLE){
    try{const r=await SAMPLE.json(`A French A2 learner read aloud this English sentence: "${it.ask}". Speech recognition heard: "${heard}". These words were not recognized correctly: ${bad.join(", ")}. For each of these words, give one short tip IN FRENCH on how to pronounce it, for a French speaker (approximate the sound with French spelling, mention the stressed syllable or the silent letters, the "th", the "h", the vowel length...). Reply ONLY with JSON: {"tips":[{"word":"","tip":""}]}`,{modelTier:"quick"});
      if(PRON.phase==="result"&&PRON.items[PRON.i]===it){PRON.tips=r.tips||[];render()}}catch(e){}
  }
}
function vPron(app){
  const it=PRON.items[PRON.i],ph=PRON.phase,res=PRON.res;
  const avg=PRON.score.length?Math.round(100*PRON.score.reduce((a,b)=>a+b,0)/PRON.score.length):null;
  app.innerHTML=`<section class="view oral">
   <div class="row"><span class="res neutral">${ICON.ear}<span>Prononciation · phrase ${PRON.i+1} sur ${PRON.items.length}</span></span>${avg!=null?resChip(avg>=85?"ok":avg>=60?"warn":"ko",avg+" % de mots compris"):""}<span class="spacer"></span><button class="btn" id="prEnd">${ICON.x}<span>Terminer</span></button></div>
   <div class="stage">
     <div class="avatar ${ph==="listening"?"listening":""}" style="width:120px;height:120px">${avatarSVG()}</div>
     <div class="carstatus ${ph==="listening"?"listening":""}">${ICON[ph==="listening"?"mic":ph==="result"?"pen":"speak"]}<span>${ph==="listening"?"Lis la phrase à voix haute…":ph==="result"?(res.every(x=>x.ok)?"Tout est compris !":"Les mots en rouge n'ont pas été compris"):"Écoute, puis lis la phrase à voix haute"}</span></div>
     <div class="subs" style="text-align:center;display:block;font-size:clamp(1.5rem,3.4vw,2.1rem)">${res?res.map(x=>`<span class="pw ${x.ok?"ok":"ko"}" data-pw="${esc(x.w)}">${esc(x.w)}</span>`).join(" "):esc(it.ask).split(" ").map(w=>`<span class="pw" data-pw="${w}">${w}</span>`).join(" ")}</div>
     ${ph==="listening"||PRON.heard?`<div class="cartr"><span class="small muted">Compris :</span><div id="prTr">${esc(PRON.heard||"…")}</div></div>`:""}
     ${res&&res.some(x=>!x.ok)?`<div class="carfb">${PRON.tips?PRON.tips.map(t=>`<div class="row">${dom("pron")}<b class="en">${esc(t.word)}</b><button class="spk" data-sayw="${esc(t.word)}" aria-label="Écouter">${ICON.speak}</button><span>${esc(t.tip)}</span></div>`).join(""):`<span class="muted small">${SAMPLE?"Astuces en préparation…":"Touche un mot pour l'écouter."}</span>`}</div>`:""}
   </div>
   <div class="talkbar" style="grid-template-columns:1fr 1fr 1.6fr 1fr">
     <button class="carbtn" id="prListen">${ICON.speak}<span>Écouter</span></button>
     <button class="carbtn" id="prSlow">${ICON.clock}<span>Lentement</span></button>
     <button class="carbtn main talk ${ph==="listening"?"on":""}" id="prMic">${ICON.mic}<span>${ph==="listening"?"J'ai fini":ph==="result"?"Réessayer":"Lire à voix haute"}</span></button>
     <button class="carbtn" id="prNext">${ICON.zap}<span>Phrase suivante</span></button>
   </div>
  </section>`;
  $("#prEnd").onclick=()=>{PRON.active=false;try{DICT&&DICT.stop().catch(()=>{})}catch(e){}render()};
  $("#prListen").onclick=()=>emmaSay(it.ask,"en",.9);
  $("#prSlow").onclick=()=>emmaSay(it.ask,"en",.65);
  $("#prMic").onclick=pronMic;
  $("#prNext").onclick=()=>{PRON.i=(PRON.i+1)%PRON.items.length;Object.assign(PRON,{phase:"ready",heard:"",heardF:"",res:null,tips:null});render();setTimeout(()=>emmaSay(PRON.items[PRON.i].ask,"en",.85),200)};
  app.querySelectorAll("[data-pw]").forEach(s=>s.onclick=()=>emmaSay(s.dataset.pw.replace(/[.,!?]/g,""),"en",.75));
  app.querySelectorAll("[data-sayw]").forEach(b=>b.onclick=()=>emmaSay(b.dataset.sayw,"en",.75));
}
document.addEventListener("keydown",e=>{if(view!=="coach"||!PRON.active||e.code!=="Space")return;if(e.target.closest("textarea,input,button"))return;e.preventDefault();pronMic()});


/* ============ GRAMMAR MEMOS (opened from any correction) ============ */
const MEMOS={
 pastsimple:{t:"Past simple",tense:"past",quand:["Une action <b>terminée</b>, à un moment <b>terminé</b> du passé.","Une suite d'actions qui se suivent dans une histoire."],
  forme:[["Affirmatif","verbe + <b>-ed</b> (ou forme irrégulière)","We <b>tested</b> the route. I <b>went</b> to Paris."],["Négatif","<b>did not</b> (didn't) + verbe de base","I <b>didn't go</b> to the meeting."],["Question","(Mot WH) + <b>did</b> + sujet + verbe de base","Where <b>did</b> you <b>go</b>?"]],
  indices:"yesterday, last week, last year, ago, in 2020, at ten (heure précise), then",
  pieges:["Après <b>did</b>, le verbe reste à la base : <i>Did you go?</i> (jamais <i>Did you went?</i>).","Avec <b>yesterday</b> ou <b>last…</b>, jamais le present perfect : <i>I sent it yesterday</i>, pas <i>I have sent it yesterday</i>.","Le verbe <b>be</b> n'utilise pas did : <i>Was he happy?</i> / <i>He wasn't there.</i>"],
  irr:"be → was/were · have → had · do → did · go → went · see → saw · send → sent · write → wrote · take → took · make → made · meet → met · buy → bought",
  ex:["Yesterday, we tested a new route.","I didn't see the message.","What did you eat last night?"]},
 pastcont:{t:"Past continuous",tense:"past",quand:["Une action <b>en cours</b> à un moment précis du passé (le décor).","Une action en cours <b>interrompue</b> par une autre (au past simple)."],
  forme:[["Affirmatif","<b>was / were</b> + verbe-<b>ing</b>","I <b>was sleeping</b>. They <b>were working</b>."],["Négatif","<b>wasn't / weren't</b> + verbe-ing","We <b>weren't watching</b> TV."],["Question","(Mot WH) + <b>was / were</b> + sujet + verbe-ing","What <b>were</b> you <b>doing</b> at eight?"]],
  indices:"at eight (o'clock) yesterday, when…, while…, all morning, at that moment",
  pieges:["<b>was</b> avec I / he / she / it, <b>were</b> avec you / we / they.","Dans « I was sleeping <b>when</b> you called », l'action longue = was + -ing, l'action courte qui coupe = past simple.","Pas de <b>did</b> au past continuous : <i>Were you working?</i>"],
  ex:["I was sleeping when you called.","At ten, the guides were waiting.","What were you doing when I called you?"]},
 pastperfect:{t:"Past perfect",tense:"past",quand:["Une action <b>terminée AVANT</b> une autre action passée.","On raconte au passé et on « remonte » plus loin en arrière."],
  forme:[["Affirmatif","<b>had</b> + participe passé","When I arrived, he <b>had left</b>."],["Négatif","<b>had not</b> (hadn't) + participe passé","I <b>hadn't finished</b>."],["Question","(Mot WH) + <b>had</b> + sujet + participe passé","<b>Had</b> you <b>eaten</b> before the meeting?"]],
  indices:"before, already, by the time, when (+ action passée plus récente), never… before",
  pieges:["Méthode : repère l'événement passé le plus récent (au past simple), puis ce qui était <b>déjà fini avant</b> → had + participe.","Participe passé des irréguliers : gone, seen, sent, written, taken, made, eaten, done, been.","Ne mets pas toute l'histoire au past perfect : seulement l'action la plus ancienne."],
  ex:["Before the call, I had sent the address.","When the visit started, we had checked the prices.","She missed the train because she had woken up late."]},
 pressimple:{t:"Present simple",tense:"present",quand:["Une habitude, une routine, un fait général.","Ce que fait une entreprise, un emploi du temps."],
  forme:[["Affirmatif","verbe de base, <b>+ -s</b> à la 3e personne","I work. The app <b>offers</b> tours."],["Négatif","<b>do not / does not</b> + verbe de base","She <b>doesn't work</b> on Sunday."],["Question","(Mot WH) + <b>do / does</b> + sujet + verbe de base","What <b>does</b> the company <b>sell</b>?"]],
  indices:"every day, usually, normally, always, often, on Mondays",
  pieges:["Après <b>does</b>, plus de -s : <i>What does he sell?</i> (pas <i>sells</i>).","Avec <b>be</b>, pas de do : <i>Where is the office?</i>"],
  ex:["Normally, we develop walking tours.","Where do you work?","The app has a map."]},
 prescont:{t:"Present continuous",tense:"present",quand:["Une action <b>en cours maintenant</b>.","Un projet temporaire, cette semaine, en ce moment."],
  forme:[["Affirmatif","<b>am / is / are</b> + verbe-<b>ing</b>","We <b>are testing</b> a new route."],["Négatif","<b>am not / isn't / aren't</b> + verbe-ing","I'm <b>not selling</b> tickets."],["Question","(Mot WH) + <b>am / is / are</b> + sujet + verbe-ing","What <b>is</b> the team <b>checking</b>?"]],
  indices:"now, right now, at the moment, today, this week",
  pieges:["Pas de <b>do / does</b> avec -ing : <i>What is the team checking?</i>","Orthographe : make → making, run → running."],
  ex:["Right now, we are testing a new route.","This week, I am preparing a presentation.","What are you doing today?"]},
 presperfect:{t:"Present perfect",tense:"present",quand:["Une action passée sans moment précis, avec un lien avec maintenant.","Un bilan « jusqu'à présent »."],
  forme:[["Affirmatif","<b>have / has</b> + participe passé","So far, we <b>have tested</b> three routes."],["Négatif","<b>haven't / hasn't</b> + participe passé","I <b>haven't finished</b> yet."],["Question","(Mot WH) + <b>have / has</b> + sujet + participe passé","How many routes <b>has</b> the team <b>tested</b>?"]],
  indices:"so far, already, yet, just, ever, never, since, for",
  pieges:["Jamais avec un moment passé précis (yesterday, last week) : dans ce cas, past simple."],
  ex:["So far, we have tested three routes.","Have you ever taken a guided tour?"]},
 questions:{t:"Les questions (WH)",tense:"mixed",quand:["Pour poser une question : mot interrogatif (what, where, when, why, who, how…) + <b>auxiliaire</b> + sujet + verbe.","C'est l'<b>auxiliaire</b> qui porte le temps ; le verbe prend la forme que cet auxiliaire impose."],
  forme:[["Présent simple","WH + <b>do / does</b> + sujet + verbe de base","What <b>does</b> the company <b>sell</b>?"],["Présent continu","WH + <b>am / is / are</b> + sujet + verbe-ing","What <b>are</b> you <b>doing</b>?"],["Passé simple","WH + <b>did</b> + sujet + verbe de base","Where <b>did</b> you <b>go</b>?"],["Be au passé","WH + <b>was / were</b> + sujet + adjectif / lieu","Why <b>was</b> the route <b>quiet</b>?"],["Past continuous","WH + <b>was / were</b> + sujet + verbe-ing","What <b>were</b> you <b>testing</b>?"],["Past perfect","WH + <b>had</b> + sujet + participe passé","What <b>had</b> you <b>written</b>?"],["Futur","WH + <b>will</b> + sujet + verbe de base","When <b>will</b> you <b>send</b> it?"]],
  indices:"what, where, when, why, who, how, how many, how long",
  pieges:["Ne mets jamais <b>-ing</b> sur un adjectif : <i>quiet, busy, tired, happy</i> restent tels quels après was / were : <i>Why was the route <b>quiet</b>?</i>","Avec <b>be</b> (is, was, were), pas de do / did : <i>Where was he?</i> (pas <i>Where did he was?</i>).","Après do / does / did / will : verbe de base. Après be : -ing (si c'est une action) ou adjectif. Après have / had : participe passé."],
  ex:["Why was the route quiet?","Where did you go last week?","What were you testing at ten?"]},
 bepast:{t:"Be au passé : was / were",tense:"mixed",quand:["Pour décrire un état, une situation, un lieu au passé : <i>I was tired. They were at the office.</i>","Comme auxiliaire du past continuous : was / were + verbe-ing (seulement pour une action)."],
  forme:[["Affirmatif","I / he / she / it <b>was</b> · you / we / they <b>were</b>","The route <b>was</b> quiet."],["Négatif","<b>wasn't / weren't</b>","We <b>weren't</b> at the office."],["Question","(WH) + <b>was / were</b> + sujet + …","Why <b>was</b> the route quiet?"]],
  indices:"yesterday, last week, at that time",
  pieges:["Pas de did avec be : <i>Was he happy?</i>","Un adjectif (quiet, busy, tired) ne prend pas -ing.","-ing seulement pour une action en cours : <i>was waiting</i>, <i>were working</i>."],
  ex:["I was tired.","Was he happy?","The guides were busy at ten."]},
 will:{t:"Future : will",tense:"future",quand:["Une décision prise sur le moment, une promesse, une prédiction."],
  forme:[["Affirmatif","<b>will</b> + verbe de base","I<b>'ll answer</b> it."],["Négatif","<b>won't</b> + verbe de base","We <b>won't contact</b> him."],["Question","(Mot WH) + <b>will</b> + sujet + verbe de base","When <b>will</b> you <b>send</b> it?"]],
  indices:"tomorrow, next week, I think…, probably",pieges:["Après will, verbe de base, sans to."],ex:["The phone is ringing. I'll answer it."]},
 goingto:{t:"Future : be going to",tense:"future",quand:["Une intention, un projet déjà décidé."],
  forme:[["Affirmatif","<b>am / is / are going to</b> + verbe de base","We <b>are going to visit</b> the site."],["Négatif","<b>isn't / aren't going to</b> + verbe","I'm <b>not going to</b> travel."],["Question","(Mot WH) + <b>am / is / are</b> + sujet + <b>going to</b> + verbe","When <b>are</b> you <b>going to</b> send it?"]],
  indices:"next week, on Friday, this summer",pieges:["Ne pas oublier be : <i>We are going to…</i>"],ex:["We are going to visit the site on Friday."]},
 futcont:{t:"Future continuous",tense:"future",quand:["Une action <b>en cours</b> à un moment précis du futur."],
  forme:[["Affirmatif","<b>will be</b> + verbe-ing","At eleven, we <b>will be testing</b> the route."],["Négatif","<b>won't be</b> + verbe-ing","They <b>won't be printing</b>."],["Question","(Mot WH) + <b>will</b> + sujet + <b>be</b> + verbe-ing","What <b>will</b> you <b>be doing</b> at ten?"]],
  indices:"at ten tomorrow, this time next week",pieges:["C'est l'équivalent futur du past continuous."],ex:["At eleven tomorrow, we will be testing the route."]},
 futperfect:{t:"Future perfect",tense:"future",quand:["Une action <b>terminée avant</b> une échéance future."],
  forme:[["Affirmatif","<b>will have</b> + participe passé","By Friday, we <b>will have completed</b> the test."],["Négatif","<b>won't have</b> + participe passé","We <b>won't have confirmed</b> it."],["Question","(Mot WH) + <b>will</b> + sujet + <b>have</b> + participe","What <b>will</b> you <b>have finished</b> by Friday?"]],
  indices:"by Friday, by then, by the end of…",pieges:["C'est l'équivalent futur du past perfect."],ex:["By Friday, we will have completed the test."]},
};
const MEMO_ORDER=[["futperfect",/future perfect|will have (?!been)\w+|by friday/],["futcont",/future continuous|will be \w+ing/],["goingto",/going to/],["will",/\bwill\b|won't|future/],
 ["pastperfect",/past perfect|\bhad \w+(ed|en|t|ne|wn)\b|hadn't|avant|déjà fini|plus ancien|already left|by the time/],["pastcont",/past continuous|\b(was|were|wasn't|weren't) \w+ing\b|en cours|décor|interromp/],
 ["pastsimple",/past simple|\bdid\b|didn't|yesterday|terminé|last week|\bago\b|passé irr/],["presperfect",/present perfect|so far|\b(have|has) \w+(ed|en)\b|\bever\b/],
 ["prescont",/present continuous|présent continu|\b(am|is|are) \w+ing\b|right now|this week/],["questions",/question|^(what|where|when|why|who|how)\b|\b(what|where|when|why|who|how) (do|does|did|was|were|is|are|had|have|has|will)\b/],["bepast",/\b(was|were|wasn't|weren't)\b/],["pressimple",/present simple|présent simple|\bdoes\b|\bdo\b|routine|3e personne|habitude/]];
function memoTopic(...texts){const t=texts.filter(Boolean).join(" ").toLowerCase();for(const [k,re] of MEMO_ORDER)if(re.test(t))return k;return null}
const WHYCACHE={};try{Object.assign(WHYCACHE,JSON.parse(localStorage.getItem("englishlab-why")||"{}"))}catch(e){}
async function explainWrong(el,q,given,right,ctx){
  if(!el)return;const key=norm(q)+"|"+norm(given);
  const show=r=>{el.innerHTML=`<div class="whybox">${ICON.info}<div><b>Pourquoi ?</b> ${esc(r.explication||"")}${r.regle?`<div class="small" style="margin-top:4px"><b>Règle :</b> ${esc(r.regle)}</div>`:""}</div>${memoBtn(MEMOS[r.topic]?r.topic:memoTopic(r.regle,right,ctx))}</div>`};
  if(WHYCACHE[key])return show(WHYCACHE[key]);
  if(!SAMPLE){const t=memoTopic(right,ctx);if(t)el.innerHTML=`<div class="whybox">${ICON.info}<div>Ouvre le mémo pour revoir la règle.</div>${memoBtn(t)}</div>`;return}
  el.innerHTML=`<div class="whybox muted">${ICON.info}<div>Je regarde ton erreur…</div></div>`;
  try{const r=await SAMPLE.json(`A French A2 learner of English did this exercise: "${q}" (${ctx||"exercise"}).
His answer: "${given}". Correct answer: "${right}". Ignore capital letters and punctuation.
Explain IN FRENCH, simply and briefly (1-2 sentences), exactly why his answer is wrong, pointing at his specific mistake. Then give the general rule in one short sentence.
Choose the most relevant grammar memo among: pastsimple, pastcont, pastperfect, bepast, questions, pressimple, prescont, presperfect, will, goingto, futcont, futperfect, prepmove, ininto, intime.
Reply ONLY with JSON: {"explication":"...","regle":"...","topic":"..."}`,{modelTier:"quick"});
    WHYCACHE[key]=r;try{localStorage.setItem("englishlab-why",JSON.stringify(WHYCACHE))}catch(e){}show(r)}
  catch(e){const t=memoTopic(right,ctx);el.innerHTML=t?`<div class="whybox">${ICON.info}<div>Ouvre le mémo pour revoir la règle.</div>${memoBtn(t)}</div>`:""}
}
const memoBtn=key=>key?`<button class="btn small memobtn" data-memo="${key}">${ICON.book}<span>Mémo</span></button>`:"";
function openMemo(key){
  const m=MEMOS[key];if(!m)return;
  const ov=document.createElement("div");ov.className="ov";
  const rel=m.tense==="prep"?["prepmove","ininto","intime"]:m.tense==="past"?["pastsimple","pastcont","pastperfect","bepast"]:m.tense==="present"?["pressimple","prescont","presperfect","questions"]:m.tense==="mixed"?["questions","bepast","pastsimple","pastcont","pastperfect"]:["will","goingto","futcont","futperfect"];
  ov.innerHTML=`<div class="box memo" style="max-width:760px">${panel("cours",esc(m.t),`
    <div class="row">${rel.map(k=>`<button class="btn small ${k===key?"typed t-cours":""}" data-memo="${k}">${esc(MEMOS[k].t)}</button>`).join("")}</div>
    ${typeof MEMO_VIS!=="undefined"&&MEMO_VIS[key]?`<div class="mvis">${MEMO_VIS[key]()}</div>`:""}
    <div><h3>Quand l'utiliser ?</h3><ul>${m.quand.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div class="tblwrap"><table><tr><th></th><th>Construction</th><th>Exemple</th></tr>${m.forme.map(f=>`<tr><td><b>${f[0]}</b></td><td>${f[1]}</td><td class="en say">${f[2]}</td></tr>`).join("")}</table></div>
    <div><h3>Mots-indices</h3><p class="en">${m.indices}</p></div>
    ${m.irr?`<div><h3>Verbes irréguliers fréquents</h3><p class="en">${m.irr}</p></div>`:""}
    <div><h3>Attention</h3><ul>${m.pieges.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div><h3>Exemples</h3>${m.ex.map(x=>`<p class="en say" style="font-size:1.1rem;font-style:italic">${esc(x)}</p>`).join("")}</div>
    ${m.tense==="past"?`<div><h3>Les 3 passés sur une ligne du temps</h3>${pastTimeline().replace(/^[\s\S]*?<div class="tl">/,'<div class="tl">').replace(/<\/div><\/section>\s*$/,"")}</div>`:""}
    <div class="row"><span class="spacer"></span><button class="btn primary" id="memoClose">J'ai compris</button></div>`,{kicker:"Mémo de grammaire",ic:"book",dom:["gram"],right:`<button class="btn ghost" id="memoX" aria-label="Fermer">${ICON.x}</button>`})}</div>`;
  document.querySelectorAll(".ov.memo-ov").forEach(o=>o.remove());ov.classList.add("memo-ov");
  document.body.appendChild(ov);decorate(ov);
  const close=()=>ov.remove();$("#memoClose",ov).onclick=close;$("#memoX",ov).onclick=close;ov.onclick=e=>{if(e.target===ov)close()};
}
document.addEventListener("click",e=>{const c=e.target.closest("[data-chart]");if(c){e.preventDefault();e.stopPropagation();openChart()}},true);
document.addEventListener("click",e=>{const b=e.target.closest("[data-memo]");if(!b)return;e.preventDefault();e.stopPropagation();openMemo(b.dataset.memo)},true);
addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".ov.memo-ov").forEach(o=>o.remove())});

/* ---- Suivi / progress (always the student's data) ---- */
function vProgress(app){
  const st=S,p=st.progress.main||{},done=LESSONS.filter(l=>lessonStatus(l)==="done").length;
  const drilled=Object.entries(st.drills).filter(([id,r])=>DRILLS[id]&&firstOf(r));
  const totalSeries=Object.keys(DRILLS).length;
  const firstErr=drilled.reduce((s,[id,r])=>s+(firstOf(r).total-firstOf(r).score),0), firstTot=drilled.reduce((s,[id,r])=>s+firstOf(r).total,0);
  const hwTotal=Object.keys(HW).length,hwDone=hwDoneCount(st);
  const known=Object.values(st.cards).filter(c=>c.box>=3).length, xp=p.xp||0, lv=levelOf(xp), stk=streakOf(p);
  const days=[...Array(14)].map((_,i)=>addDays(todayISO(),i-13));
  const stat=(t,ic,label,v,sub,bar)=>`<div class="stat t-${t}"><div class="row">${tile(t,{sm:true,ic})}<span class="l">${label}</span></div><span class="v">${v}</span>${bar!=null?`<div class="bar"><i style="width:${Math.min(100,bar)}%"></i></div>`:""}<span class="small muted">${sub}</span></div>`;
  const exRows=drilled.sort((a,b)=>b[1].attempts.slice(-1)[0].at-a[1].attempts.slice(-1)[0].at).map(([id,r])=>{const D=DRILLS[id],l=LESSONS.find(x=>x.drills.includes(id));
    return `<details class="hist t-exo"><summary>${tile("exo",{sm:true})}<span style="flex:1 1 200px">${esc(D.title)} <span class="small muted">· Cours ${l.n} · ${fmtTs(r.attempts.slice(-1)[0].at)}</span></span>${drillChips(r,D)}</summary><div class="hb">${attemptsDetail(D,r)}</div></details>`}).join("");
  const hwRows=Object.keys(HW).filter(id=>st.homework[id]&&(st.homework[id].answer||"").trim()).map(id=>{const h=st.homework[id],l=LESSONS.find(x=>x.id===HW[id].lesson);
    return `<details class="hist t-devoir"><summary>${tile("devoir",{sm:true})}<span style="flex:1 1 200px">${esc(HW[id].title)} <span class="small muted">· Cours ${l.n}</span></span>${hwChips(id,st)}</summary><div class="hb"><div class="answer en">${esc(h.answer)}</div>${h.feedback?corrHTML(h.feedback,{when:(h.history||[]).slice(-1)[0]?.at}):`<p class="muted small">Pas encore corrigé automatiquement.</p>`}${hwHistory(h)}<a class="btn small" href="#homework--${id}">Ouvrir le devoir</a></div></details>`}).join("");
  const notes=LESSONS.filter(l=>(st.notes[l.id]||{}).text).map(l=>`<div><b>Cours ${l.n}</b><div class="answer" style="margin-top:6px">${esc(st.notes[l.id].text)}</div></div>`).join("");
  const words=Object.values(st.mycards).map(c=>`<span class="res neutral"><b class="en">${esc(c.en)}</b>&nbsp;= ${esc(c.fr)}</span>`).join(" ");
  const got=p.badges||{};
  app.innerHTML=`<section class="view"><div class="pagehead t-suivi">${tile("suivi")}<div><span class="k">Suivi</span><h1>${isCoach()?"Suivi de Pierre-Olivier":"Mon suivi"}</h1></div><div class="row">${resChip("neutral","Niveau "+lv.n+" · "+lv.name)}${resChip(stk?"ok":"neutral",plural(stk,"jour")+" d'affilée")}</div></div>
   <div class="stats">
    ${stat("cours","video","Heures de cours",`${done} / ${TOTAL_HOURS} h`,`jusqu'au 31/05/2027`,100*done/TOTAL_HOURS)}
    ${stat("exo","target","Séries d'exercices",`${drilled.length} / ${totalSeries}`,firstTot?`${firstErr} faute(s) au 1er essai sur ${firstTot} réponses (${Math.round(100*(firstTot-firstErr)/firstTot)} % de réussite)`:"aucune série faite",100*drilled.length/totalSeries)}
    ${stat("devoir","pencil","Devoirs rendus",`${hwDone} / ${hwTotal}`,`${hwOpen(st).length} en attente`,100*hwDone/hwTotal)}
    ${stat("rev","layers","Cartes mémorisées",`${known}`,`sur ${allCards(st).length} cartes`,100*known/allCards(st).length)}
    ${stat("suivi","star","Points d'expérience",`${xp} XP`,lv.to?`encore ${lv.to-xp} XP pour « ${LEVELS[lv.n][1]} »`:"niveau maximum",lv.to?100*(xp-lv.from)/(lv.to-lv.from):100)}
   </div>
   <div class="cols"><div class="col">
    ${panel("exo","Exercices faits",exRows||`<p class="empty">Pas encore d'exercice fait.</p>`,{kicker:"Réponses, fautes et essais",right:resChip("neutral",plural(drilled.length,"série"))})}
    ${panel("devoir","Devoirs",hwRows||`<p class="empty">Pas encore de devoir écrit.</p>`,{kicker:"Réponses et corrections"})}
   </div><div class="col">
    ${panel("suivi","Badges",`<div class="legend" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">${BADGES.map(([id,name,desc,ic])=>`<div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;opacity:${got[id]?1:.45}">${got[id]?tile("exo",{solid:true,ic}):`<span class="tile" style="background:var(--sunk);color:var(--faint)">${ICON.lock}</span>`}<b>${esc(name)}</b><span class="small muted">${esc(desc)}</span></div>`).join("")}</div>`,{kicker:Object.keys(got).length+" / "+BADGES.length+" débloqués",ic:"medal"})}
    ${panel("suivi","Régularité",`<div class="days">${days.map(d=>{const n=(p.xpDays||{})[d]||0;return `<span class="${n>=DAILY_GOAL?"l2":n?"l1":""}" title="${fmtDate(d,{day:"numeric",month:"short"})} : ${n} XP"></span>`}).join("")}</div><div class="row small muted"><span>il y a 2 semaines</span><span class="spacer"></span><span>aujourd'hui</span></div><p class="small">Vert foncé : objectif de ${DAILY_GOAL} XP atteint. Vert clair : un peu de travail ce jour-là.</p>`,{kicker:"14 derniers jours",ic:"flame"})}
    ${carSuiviPanel(st)}
    ${panel("cours","Notes et questions",notes||`<p class="empty">Pas encore de notes.</p>`,{kicker:"Notes par cours",ic:"note"})}
    ${panel("rev","Mots ajoutés",words||`<p class="empty">Pas encore de mot ajouté.</p>`,{kicker:"Vocabulaire",dom:["vocab"],ic:"plus"})}
    ${panel("suivi","Objectifs de la formation",`<p>Construire des phrases complètes, gagner en aisance à l'oral, vocabulaire, grammaire et compréhension orale pour les clients, partenaires et voyages. Préparer le CES de Las Vegas.</p><table class="mini"><tr><th>Évaluation</th><th>Date</th><th>Statut</th></tr><tr><td>Test initial</td><td>27/10/2026</td><td>Niveaux non renseignés dans la fiche</td></tr><tr><td>Test final</td><td>avant le 31/05/2027</td><td>À venir</td></tr></table>`,{kicker:"Fiche de suivi",ic:"plane"})}
   </div></div></section>`;
}

/* ---- Upload the updated course log ---- */
function loadScript(src){return new Promise((ok,ko)=>{const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=ko;document.head.appendChild(s)})}
function openUpload(){
  const ups=Object.values(S.uploads).sort((a,b)=>b.at-a.at);
  const ov=document.createElement("div");ov.className="ov";
  ov.innerHTML=`<div class="box">${panel("cours","Mettre à jour la fiche",`
    <p><b>1.</b> Télécharge ta fiche de suivi à jour au format Word (.docx).</p>
    <p><b>2.</b> Dépose-la ici : elle est gardée avec l'application.</p>
    <p><b>3.</b> Dis à Claude : <b>« Mets à jour English Lab avec ma dernière fiche »</b>. Les nouveaux cours, exercices et devoirs apparaîtront ici, et tes réponses sont conservées.</p>
    <label class="btn typed t-cours" for="upf" style="align-self:flex-start">${ICON.cloud}<span>Choisir le fichier .docx</span></label><input type="file" id="upf" accept=".docx" hidden>
    <div id="upst"></div>
    ${ups.length?`<div><b>Fiches déjà envoyées</b><div class="list" style="margin-top:8px">${ups.slice(0,5).map(u=>`<div class="irow">${tile("cours",{sm:true,ic:"note"})}<div class="it"><b>${esc(u.name)}</b><span>${fmtTs(u.at)}</span></div></div>`).join("")}</div></div>`:""}
    <p class="small muted">${mode==="db"?"Tes réponses sont synchronisées : tu les retrouves sur tous tes appareils.":"Synchronisation indisponible dans cette vue : tes réponses restent sur cet appareil."}</p>
    <button class="btn" id="ovx" style="align-self:flex-start">Fermer</button>`,{kicker:"Fiche de suivi",ic:"cloud"})}</div>`;
  document.body.appendChild(ov);
  const close=()=>ov.remove();$("#ovx",ov).onclick=close;ov.onclick=e=>{if(e.target===ov)close()};
  $("#upf",ov).onchange=async e=>{
    const f=e.target.files[0];if(!f)return;const stEl=$("#upst",ov);stEl.innerHTML=resChip("neutral","Lecture du fichier…");
    try{
      if(!window.mammoth)await loadScript("https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js");
      const {value}=await window.mammoth.extractRawText({arrayBuffer:await f.arrayBuffer()});
      let rec={name:f.name,at:Date.now(),chars:value.length};
      if(ASSETS){const up=await ASSETS.upload(new Blob([value],{type:"text/markdown"}),{type:"text/markdown"});rec.assetId=up.id}
      else if(DB&&value.length<400000)rec.text=value;
      else{stEl.innerHTML=resChip("ko","Envoi impossible ici : joins le fichier directement dans ta conversation avec Claude.");return}
      save("uploads","u"+rec.at,rec);
      stEl.innerHTML=resChip("ok","Fiche reçue : "+f.name)+`<p style="margin-top:8px">Maintenant, dis à Claude : <b>« Mets à jour English Lab avec ma dernière fiche »</b>.</p>`;
    }catch(err){console.warn(err);stEl.innerHTML=resChip("ko","Lecture impossible. Vérifie que c'est bien un fichier .docx, ou envoie-le directement à Claude.")}
  };
}

/* ============ COACH COPY: the student's record is embedded in the page itself, so the coach sees it without a Claude account ============ */
let SNAP={};try{SNAP=window.EL_SNAP||JSON.parse((document.getElementById("snap")||{}).textContent||"{}")}catch(e){}
let ART=null,SAMPLE0=null,TTS0=null,DICT0=null,publishing=false;
const SNAPCOLLS=["drills","homework","notes","mycards","cards","progress","car"];
function loadSnap(){COLLS.forEach(c=>{for(const k in S[c])delete S[c][k]});const d=SNAP.data||{};SNAPCOLLS.forEach(c=>Object.assign(S[c],JSON.parse(JSON.stringify(d[c]||{}))))}
function lastWork(){let m=0;const mx=v=>{if(v>m)m=v};
  Object.values(S.drills).forEach(r=>(r.attempts||[]).forEach(a=>mx(a.at||0)));
  ["homework","notes"].forEach(c=>Object.values(S[c]).forEach(h=>mx(h.updatedAt||0)));
  Object.values(S.mycards).forEach(x=>mx(x.createdAt||0));Object.values(S.car).forEach(x=>mx(x.at||0));
  const p=S.progress.main||{};(p.sesLog||[]).forEach(x=>mx(x.at||0));return m}
const PAGE_HEAD='<title>English Lab Pierre-Olivier</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap">';
const PAGE_BODY='<header class="top"><div class="top-inner"><nav class="tabs" id="tabs"></nav><div class="hright" id="hright"></div></div></header>\n<div id="banner"></div>\n<main id="app"></main>';
const RESET=":root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px/1.5 system-ui,-apple-system,sans-serif}img{max-width:100%}[hidden]{display:none!important}";
function buildPage(snap){
  const css=document.getElementById("css").textContent,js=document.getElementById("appsrc").textContent;
  const sj=JSON.stringify(snap).replace(/</g,"\\u003c");
  return '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>'+RESET+'</style></head><body>'+PAGE_HEAD+'\n<style id="css">'+css+'</style>\n'+PAGE_BODY+'\n<script type="application/json" id="snap">'+sj+'<'+'/script>\n<script id="appsrc">'+js+'<'+'/script>\n</body></html>';
}
/* only Pierre-Olivier's own synced view writes the copy, and only when he has worked since the last copy */
async function autoPublish(){
  if(publishing||!ART||!DB||IS_OWNER!==true||isCoach()||CAR.active||(SES&&!SES.done))return;
  const lw=lastWork();if(!lw||lw<=(SNAP.at||0))return;
  if(Object.keys(pending).length)return;
  publishing=true;const data={};SNAPCOLLS.forEach(c=>data[c]=S[c]);
  try{sessionStorage.setItem("el-hash",location.hash)}catch(e){}
  try{await ART.publish(buildPage({at:Date.now(),data}))}catch(e){console.warn("copie coach",e&&e.code);publishing=false}
}
function applyRole(){if(isCoach()){SAMPLE=null;TTS=null;DICT=null}else{SAMPLE=SAMPLE0;TTS=TTS0;DICT=DICT0}}


/* ============ CAR MODE (listening + speaking only) ============ */
/* [id, lesson, French, [accepted English], rule reminder in French] */
const CAR_BANK=[
 ["l5a","L5","Je travaille tous les jours.",["I work every day"],"Habitude (every day) : present simple."],
 ["l5b","L5","Je travaille en ce moment.",["I am working at the moment","I am working right now","I am working now","I'm working at the moment","I'm working now"],"En cours maintenant : present continuous, am + -ing."],
 ["l5c","L5","J'ai beaucoup travaillé cette année.",["I have worked a lot this year","I've worked a lot this year"],"Bilan sur une période pas finie : present perfect."],
 ["l5d","L5","J'ai travaillé hier.",["I worked yesterday"],"Yesterday, moment terminé : past simple."],
 ["l5e","L5","Je travaillais quand tu as appelé.",["I was working when you called"],"En cours + interruption : past continuous, puis past simple."],
 ["l5f","L5","Je travaillerai demain.",["I will work tomorrow","I'll work tomorrow"],"Futur, décision : will + verbe de base."],
 ["l5g","L5","Demain à dix heures, je serai en train de travailler.",["At ten tomorrow I will be working","Tomorrow at ten I will be working","I will be working at ten tomorrow"],"En cours à un moment du futur : will be + -ing."],
 ["l5h","L5","Est-ce que tu appelles tes clients chaque semaine ?",["Do you call your clients every week"],"Habitude, question : do + sujet + verbe de base."],
 ["l5i","L5","Qu'est-ce que tu fais en ce moment ?",["What are you doing at the moment","What are you doing right now","What are you doing now"],"En cours, question : are + sujet + -ing."],
 ["l5j","L5","As-tu déjà appelé le client ?",["Have you already called the client","Have you called the client yet","Have you called the client already"],"Already / yet : present perfect."],
 ["l5k","L5","As-tu appelé le client hier ?",["Did you call the client yesterday"],"Yesterday : past simple, did + verbe de base."],
 ["l5l","L5","Que faisais-tu à huit heures ?",["What were you doing at eight","What were you doing at eight o'clock"],"En cours à 8 h : past continuous."],
 ["l5m","L5","Viendras-tu au CES ?",["Will you come to CES","Will you come to the CES"],"Futur, question : will + sujet + verbe de base."],
 ["l5n","L5","Que feras-tu demain à dix heures ?",["What will you be doing at ten tomorrow","What will you be doing tomorrow at ten"],"En cours à un moment du futur : will you be + -ing."],
 ["l5o","L5","Nous n'avons pas encore fini.",["We haven't finished yet","We have not finished yet"],"Yet en négatif : present perfect."],
 ["l5p","L5","Nous n'avons pas fini hier.",["We didn't finish yesterday","We did not finish yesterday"],"Yesterday en négatif : did not + verbe de base."],
 ["s1","L1","Je dirige une agence de voyage digitale.",["I run a digital travel agency"],"Run = diriger une entreprise."],
 ["s2","L1","Nous créons des visites audio-guidées.",["We create audio-guided tours","We create audio guided tours"],"Présent simple : nous = we + verbe de base."],
 ["s3","L1","L'application propose des visites autoguidées.",["The app offers self-guided visits","The app offers self-guided tours"],"À la 3e personne (the app), on ajoute -s : offers."],
 ["s4","L1","Elle couvre plus de cinq cents villes.",["It covers more than five hundred cities","It covers more than 500 cities"],"It covers : -s à la 3e personne."],
 ["s5","L1","Je veux améliorer mon anglais.",["I want to improve my English"],"Want + to + verbe : I want to improve."],
 ["s6","L1","L'application permet aux voyageurs de découvrir des villes.",["The app allows travellers to discover cities","The app allows travelers to discover cities"],"Allow + quelqu'un + to + verbe."],
 ["s7","L1","Je rencontre des clients et des partenaires.",["I meet clients and partners"],"Meet = rencontrer. Présent simple pour une habitude."],
 ["s8","L2","Normalement, nous développons des visites à pied.",["Normally we develop walking tours","Usually we develop walking tours"],"Présent simple pour la routine."],
 ["s9","L2","En ce moment, nous testons un nouveau parcours.",["Right now we are testing a new route","At the moment we are testing a new route"],"Présent continu : am / is / are + verbe en -ing."],
 ["s10","L2","Que vend l'entreprise ?",["What does the company sell"],"Question : what + does + sujet + verbe de base (sell, pas sells)."],
 ["s11","L2","Où travailles-tu ?",["Where do you work"],"Question : where + do + you + verbe de base."],
 ["s12","L2","Jusqu'à présent, nous avons testé trois parcours.",["So far we have tested three routes"],"Present perfect : have + participe passé, avec so far."],
 ["s13","L2","Cette semaine, je prépare une présentation.",["This week I am preparing a presentation","This week I'm preparing a presentation"],"Présent continu pour une action de cette semaine."],
 ["s14","L2","Nous ne vendons pas de billets d'avion.",["We don't sell flight tickets","We do not sell flight tickets","We are not selling flight tickets"],"Négation : do not + verbe de base."],
 ["s15","L2","Où est le bureau ?",["Where is the office"],"Avec le verbe be, pas de do : where is."],
 ["s16","L3","Hier, nous avons testé un nouveau parcours.",["Yesterday we tested a new route"],"Avec yesterday : past simple (tested), jamais le present perfect."],
 ["s17","L3","Je ne suis pas allé à la réunion.",["I didn't go to the meeting","I did not go to the meeting"],"Négatif au passé : did not + verbe de base (go, pas went)."],
 ["s18","L3","Le guide a vu la nouvelle entrée.",["The guide saw the new entrance"],"See, saw, seen : verbe irrégulier."],
 ["s19","L3","J'ai envoyé le fichier hier.",["I sent the file yesterday"],"Send, sent, sent : past simple avec yesterday."],
 ["s20","L3","Je vérifiais la carte quand le client a appelé.",["I was checking the map when the client called"],"Past continuous (was checking) pour l'action en cours, past simple (called) pour l'interruption."],
 ["s21","L3","À dix heures, les guides attendaient.",["At ten the guides were waiting","At ten o'clock the guides were waiting"],"Past continuous : were + -ing avec they / the guides."],
 ["s22","L3","Quand la visite a commencé, nous avions vérifié les prix.",["When the visit started we had checked the prices"],"Past perfect : had + participe pour ce qui est fini avant."],
 ["s23","L3","Avant la réunion, j'avais écrit le résumé.",["Before the meeting I had written the summary"],"Past perfect : had written (write, wrote, written)."],
 ["s24","L3","Où es-tu allé la semaine dernière ?",["Where did you go last week"],"Question au passé : where + did + you + go."],
 ["s25","L3","Que testiez-vous à dix heures ?",["What were you testing at ten","What were you testing at ten o'clock"],"Question au past continuous : what + were + you + -ing."],
 ["s26","L3","L'hôtel avait envoyé la mauvaise date.",["The hotel had sent the wrong date"],"Past perfect : had sent."],
 ["s27","L4","Le téléphone sonne, je vais répondre.",["The phone is ringing I'll answer it","The phone is ringing I will answer it"],"Will pour une décision prise sur le moment."],
 ["s28","L4","Demain à onze heures, nous serons en train de tester le parcours.",["At eleven tomorrow we will be testing the route","Tomorrow at eleven we will be testing the route"],"Future continuous : will be + -ing."],
 ["s29","L4","D'ici vendredi, nous aurons terminé le test.",["By Friday we will have completed the test","By Friday we will have finished the test"],"Future perfect : will have + participe passé, avec by Friday."],
 ["s30","L4","À midi, cela fera deux heures que nous marchons.",["By noon we will have been walking for two hours"],"Future perfect continuous : will have been + -ing pour une durée."],
 ["s31","L4","Nous allons visiter le site vendredi.",["We are going to visit the site on Friday","We're going to visit the site on Friday"],"Be going to pour une intention déjà décidée."],
 ["s32","L4","Quand vas-tu envoyer le rapport ?",["When are you going to send the report"],"Question : when + are + you + going to + verbe."],
 ["s33","L5","Enchanté, je suis le fondateur de Ryo.",["Nice to meet you I'm the founder of Ryo","Nice to meet you I am the founder of Ryo"],"Nice to meet you pour une première rencontre."],
 ["s34","L5","Que fait votre entreprise ?",["What does your company do"],"What + does + sujet + do."],
 ["s35","L5","Pouvons-nous échanger nos coordonnées ?",["Can we exchange contact details","Could we exchange contact details"],"Contact details = coordonnées."],
 ["s36","L5","Je serai à Las Vegas en janvier pour le CES.",["I will be in Las Vegas in January for CES","I'll be in Las Vegas in January for CES","I will be in Las Vegas in January for the CES"],"Will be pour un fait futur."],
];
/* Open questions per lesson: [question, example answer, grammar target] */
const OPENQ={
 L1:[["Can you introduce yourself in two sentences?","I'm Pierre-Olivier. I run Ryo, a travel app based in Lyon.","Présent simple, verbes d'action"],
     ["What does your company do?","My company creates audio-guided tours for travellers.","3e personne : does / creates"],
     ["Why do you want to improve your English?","I want to improve my English to meet partners at CES.","Want + to + verbe"]],
 L2:[["What do you usually do on Monday mornings?","On Monday mornings, I usually meet my team.","Présent simple pour une habitude"],
     ["What are you working on this week?","This week, I am working on a new partnership.","Présent continu"],
     ["How many cities has Ryo covered so far?","So far, Ryo has covered more than five hundred cities.","Present perfect avec so far"]],
 L3:[["What did you do yesterday evening?","Yesterday evening, I had dinner with my family.","Past simple"],
     ["Where did you go last weekend?","Last weekend, I went to the mountains.","Past simple irrégulier : went"],
     ["What were you doing at nine this morning?","At nine this morning, I was driving to the office.","Past continuous : was + -ing"],
     ["Tell me about a small problem you had last week.","Last week, I was preparing a meeting when the client called. He had sent the wrong file.","Past simple, past continuous et past perfect"]],
 L4:[["What will you be doing at ten tomorrow?","At ten tomorrow, I will be working on the app.","Future continuous"],
     ["What will you have finished by Friday?","By Friday, I will have finished the report.","Future perfect"],
     ["What are you going to do at CES?","I'm going to meet partners and present Ryo.","Be going to"]],
 L5:[["Where did you work last year, and what are you doing now?","Last year, I worked on the app. Now, I am preparing CES.","Mélange des temps"]],
};
const CAR={active:false,queue:[],i:0,phase:"idle",buf:"",partial:"",timer:null,speaking:false,results:[],handsfree:false,paused:false,requeued:{},noAns:0,last:null,summary:null,wake:null,think:6};
const FLU={chart:5,vocab:3,verb:3.5,fill:4,choice:4,past:4.5,repeat:4,fr2en:6,fix:6,order:7,open:8,en2fr:6};
const LANG_LABEL={chart:"Conjugue",past:"Traduis vite en anglais",fr2en:"Traduis en anglais",en2fr:"Traduis en français",vocab:"Comment dit-on en anglais",verb:"Donne le passé et le participe passé de",fill:"Complète la phrase",choice:"Choisis la bonne forme",fix:"Corrige la phrase",order:"Construis la phrase avec ces mots",repeat:"Écoute et répète",open:"Réponds en anglais, en une phrase"};
const KIND_DOM={chart:"gram",past:"gram",fr2en:"gram",en2fr:"compr",vocab:"vocab",verb:"gram",fill:"gram",choice:"gram",fix:"gram",order:"gram",repeat:"pron",open:"oral"};
function carPool(){
  const avail=LESSONS.filter(started).map(l=>l.id), items=corePoolItems(), hf=!!DICT;
  CAR_BANK.filter(b=>avail.includes(b[1])).forEach(([id,l,fr,en,rule])=>{
    items.push({id:"fe-"+id,kind:"fr2en",l,ask:fr,say:[{text:fr,lang:"fr"}],ans:en,ansLang:"en",rule});
    items.push({id:"rp-"+id,kind:"repeat",l,ask:en[0],say:[{text:en[0],lang:"en"}],ans:[en[0]],ansLang:"en",rule:"Prononciation : articule chaque mot."});
    if(!hf)items.push({id:"ef-"+id,kind:"en2fr",l,ask:en[0],say:[{text:en[0],lang:"en"}],ans:[fr],ansLang:"fr",rule})});
  if(avail.includes("L3"))PAST_BANK.forEach(([fr,en,rule],k)=>items.push({id:"pb-"+k,kind:"past",l:"L3",focus:true,ask:fr,say:[{text:fr,lang:"fr"}],ans:en,ansLang:"en",rule}));
  avail.forEach(lid=>{const L=LESSONS.find(x=>x.id===lid);
    L.drills.forEach(did=>{const D=DRILLS[did],rec=S.drills[did],last=rec&&Array.isArray(rec.attempts)?rec.attempts[rec.attempts.length-1]:null;
      const soft=!drillFluent(D,rec),focus=/reflex/.test(did);
      D.items.forEach((it,i)=>{const weak=!!(last&&last.ok[i]===false),id="dr-"+did+"-"+i;
        if(D.type==="fill"){const m=it.q.match(/\(([^)]*)\)\s*$/),sent=it.q.replace(/\s*\([^)]*\)\s*$/,"");if(/^-ing de/.test(it.q))return;
          items.push({id,kind:"fill",l:lid,weak,soft,focus,ask:it.q,say:[{text:sent.replace("___","blank"),lang:"en"}].concat(m?[{text:"Verbe :",lang:"fr"},{text:m[1],lang:"en"}]:[]),ans:it.a,ansLang:"en",rule:it.why||it.hint||D.title})}
        else if(D.type==="choice")items.push({id,kind:"choice",l:lid,weak,soft,focus,ask:it.q+" ("+it.opts.join(" / ")+")",say:[{text:it.q.replace("___","blank"),lang:"en"},{text:"Choix :",lang:"fr"},{text:it.opts.join(", or, "),lang:"en"}],ans:[it.q.replace("___",it.opts[it.a]),it.opts[it.a]],ansLang:"en",rule:it.why||D.title,shortAns:it.opts[it.a]});
        else if(did==="L5-fix")items.push({id,kind:"fix",l:lid,weak,soft,focus,ask:it.q,say:[{text:it.q,lang:"en"}],ans:it.a,ansLang:"en",rule:"Après did : verbe de base. Après have/has : participe passé. Après be : -ing."});
        else items.push({id,kind:"order",l:lid,weak,soft,focus,ask:it.q,say:[{text:it.q.replace(/\(.*?\)/,"").replace(/\s*\/\s*/g,", ").replace("?",""),lang:"en"}].concat((it.q.match(/\(([^)]*)\)/)||[])[1]?[{text:it.q.match(/\(([^)]*)\)/)[1],lang:"fr"}]:[]),ans:it.a,ansLang:"en",rule:"Question : mot interrogatif + auxiliaire + sujet + verbe."})})});
    (OPENQ[lid]||[]).forEach(([q,ex,rule],k)=>{if(SAMPLE||!hf)items.push({id:"op-"+lid+"-"+k,kind:"open",l:lid,ask:q,say:[{text:q,lang:"en"}],ans:[ex],ansLang:"en",rule,example:ex})})});
  allCards(ST()).forEach(c=>{
    if(c.kind==="verb")items.push({id:"cv-"+c.id,card:c.id,kind:"verb",ask:c.en,say:[{text:c.en,lang:"en"}],ans:[c.fr.replace(/\s*·\s*/," ").replace(/\s*\/\s*/," or ")],ansLang:"en",rule:"Verbe irrégulier : "+c.en+", "+c.fr.replace(/·/g,",")});
    else items.push({id:"cf-"+c.id,card:c.id,kind:"vocab",ask:c.fr,say:[{text:c.fr,lang:"fr"}],ans:[c.en],ansLang:"en",rule:c.note||"",weak:(ST().cards[c.id]||{}).box===1})});
  return items;
}
const toRework=()=>Object.entries(ST().car).filter(([id,r])=>((r.errs||0)>0||(r.slow||0)>0)&&(r.box||0)<3);
function curLesson(){const d=LESSONS.filter(started);return d[d.length-1]}
/* the "brain": picks the most useful next question, every time */
function pickNext(pool){
  const t=todayISO(),cur=curLesson(),recent=CAR.queue.slice(-8).map(x=>x.id),kinds=CAR.queue.slice(-5).map(x=>x.kind),lastKind=kinds[kinds.length-1];
  let best=null,bs=-1e9;
  pool.forEach(it=>{if(recent.includes(it.id))return;
    const r=ST().car[it.id];let s=Math.random()*2.5;
    if(r&&((r.errs||0)>0||(r.slow||0)>0)&&(r.box||0)<3)s+=r.due<=t?11:5;
    else if(it.weak)s+=8;
    else if(it.soft&&!r)s+=5;
    else if(!r)s+=cur&&it.l===cur.id?6:(it.l?3.5:2.5);
    else if(r.due<=t)s+=4;
    else s-=4;
    if(cur&&it.l===cur.id)s+=2;
    if(it.focus)s+=2.5;
    if(it.kind===lastKind)s-=it.focus?1.5:5;
    s-=kinds.filter(k=>k===it.kind).length*(it.focus?.5:1.5);
    if(it.kind==="repeat")s-=1;
    if(s>bs){bs=s;best=it}});
  return best||pool[Math.random()*pool.length|0];
}
function sessionPlan(pool){
  const cur=curLesson(),rw=toRework().length,weak=pool.filter(x=>x.weak).length,parts=[];
  if(rw)parts.push(`on corrige ${plural(rw,"erreur")} des sessions précédentes`);
  if(weak)parts.push(`on reprend ${plural(weak,"point")} raté${weak>1?"s":""} dans tes exercices et tes cartes`);
  if(cur)parts.push(`on travaille le cours ${cur.n} : ${cur.topic.toLowerCase()}, en mode réflexe : réponds le plus vite possible`);
  parts.push("on révise les 7 temps de base, le vocabulaire et les verbes irréguliers");
  return parts;
}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
/* the device voice is used while the microphone listens: always pick the most natural one installed */
const VOICE_CACHE={};
function voiceScore(v,lang){const n=(v.name+" "+v.voiceURI).toLowerCase(),l=v.lang.replace("_","-").toLowerCase();let s=0;
  if(l===lang.toLowerCase())s+=3;else if(l.startsWith(lang.slice(0,2)))s+=1;else return -99;
  if(/natural|neural|wavenet|journey|studio/.test(n))s+=8;if(/premium|enhanced|améliorée|amélioré|siri/.test(n))s+=6;
  if(/online|google/.test(n))s+=4;if(/microsoft/.test(n)&&/online/.test(n))s+=2;if(v.localService===false)s+=1;
  if(/compact|espeak|robot|novelty|bad news|whisper|zarvox|trinoids|bells|bubbles|cellos|organ|boing|jester|superstar|wobble|albert|fred|junior|ralph/.test(n))s-=10;
  return s}
function pickVoice(lang){try{if(VOICE_CACHE[lang])return VOICE_CACHE[lang];const vs=speechSynthesis.getVoices();if(!vs.length)return null;
  let best=null,bs=-50;vs.forEach(v=>{const sc=voiceScore(v,lang);if(sc>bs){bs=sc;best=v}});if(best)VOICE_CACHE[lang]=best;return best}catch(e){return null}}
try{speechSynthesis.getVoices();speechSynthesis.addEventListener("voiceschanged",()=>{for(const k in VOICE_CACHE)delete VOICE_CACHE[k]})}catch(e){}
/* ============ CAR MODE v2 : push-to-talk + Claude voice + conversational ============
   The voice (Claude) always speaks with the microphone OFF, so the instruction is heard in full.
   He taps the big button to talk; the answer is closed after a real pause (or a second tap).
   What he says can be an answer, a question ("rappelle-moi la règle…") or a request ("fais-moi des traductions"). */
function splitLines(lines){const out=[];lines.forEach(l=>{if(!l||!l.text)return;const parts=String(l.text).replace(/_{2,}/g,"blank").match(/[^.!?;:]+[.!?;:]*\s*/g)||[l.text];
  let cur="";parts.forEach(p=>{if((cur+p).length>170&&cur){out.push({text:cur.trim(),lang:l.lang});cur=""}cur+=p});if(cur.trim())out.push({text:cur.trim(),lang:l.lang})});return out}
let CUR_UTT=null;
function speakOne(l){return new Promise(res=>{
  const ss=speechSynthesis,u=new SpeechSynthesisUtterance(l.text);CUR_UTT=u;
  const lg=l.lang==="fr"?"fr-FR":"en-GB";u.lang=lg;const v=pickVoice(lg)||pickVoice(l.lang==="fr"?"fr-CA":"en-US");if(v){u.voice=v;u.lang=v.lang}u.rate=l.lang==="en"?.92:1;
  const t0=Date.now(),est=1500+l.text.length*90;let started=false,fin=false,wd;
  const done=ok=>{if(fin)return;fin=true;clearTimeout(wd);res(ok)};
  u.onstart=()=>{started=true;clearTimeout(wd);wd=setTimeout(()=>done(true),est*1.8+3000)};
  u.onend=()=>done(started||Date.now()-t0>400);
  u.onerror=e=>done(!!(e&&e.error==="interrupted"));
  wd=setTimeout(()=>{if(!started){try{ss.resume()}catch(e){}wd=setTimeout(()=>done(true),est+1500)}},2500);
  ss.speak(u)})}
async function browserSeq(lines,tok){
  if(!("speechSynthesis" in window))return;
  const ss=speechSynthesis;if(ss.speaking||ss.pending){ss.cancel();await wait(300)}
  for(const l of splitLines(lines)){if(!CAR.active||tok!==CAR.spTok)return;
    let ok=await speakOne(l);if(!ok&&CAR.active&&tok===CAR.spTok){await wait(300);await speakOne(l)}}}
async function speakSeq(lines){
  lines=(lines||[]).filter(l=>l&&l.text);if(!lines.length)return;
  const tok=++CAR.spTok;CAR.speaking=true;renderCarBits();
  try{
    if(CAR.micState!=="idle")await micOff();
    let ok=false;
    if(TTS){try{await TTS.speak(lines.map(l=>{const o={text:String(l.text).replace(/_{2,}/g,"blank")};if(l.lang)o.language=l.lang;return o}),{rate:.97});ok=true}
      catch(e){if(tok!==CAR.spTok||!CAR.active)return;ok=false}}
    if(!ok&&CAR.active&&tok===CAR.spTok)await browserSeq(lines,tok);
  }finally{if(tok===CAR.spTok){CAR.speaking=false;renderCarBits()}}
}
function carStopSpeech(){CAR.spTok++;CAR.speaking=false;try{speechSynthesis.cancel()}catch(e){}try{TTS&&TTS.stop()}catch(e){}}
async function micOff(){if(!DICT||CAR.micState==="idle"){CAR.micState="idle";return}
  try{await Promise.race([DICT.stop(),wait(2500)])}catch(e){}CAR.micState="idle"}

/* ---- session ---- */
const FOCUS_T={present:"le présent",past:"le passé",future:"le futur",irregular:"les verbes irréguliers",vocab:"le vocabulaire"};
const FOCUS_KIND_T={fr2en:"traduction",past:"traduction",chart:"conjugaison",fill:"phrases à trou",choice:"choix du bon temps",fix:"phrases à corriger",order:"construire des phrases",repeat:"prononciation",verb:"verbes irréguliers",vocab:"vocabulaire",open:"questions ouvertes"};
function itemTense(it){const s=(it.id+" "+(it.rule||"")+" "+(it.ask||"")).toLowerCase();
  if(it.kind==="verb")return "irregular";if(it.kind==="vocab")return "vocab";
  if(/core-(pas|pac)|past|passé|ago|yesterday|hier|l3/.test(s)||it.l==="L3")return "past";
  if(/core-(fs|fc)|future|futur|will|going to|demain|tomorrow/.test(s)||it.l==="L4")return "future";
  return "present"}
function focusPool(){const f=CAR.focus;if(!f)return CAR.pool;
  let p=CAR.pool;if(f.kinds&&f.kinds.length){const q=p.filter(i=>f.kinds.includes(i.kind));if(q.length>=3)p=q}
  if(f.topic&&f.topic!=="all"){const q=p.filter(i=>itemTense(i)===f.topic);if(q.length>=3)p=q}
  return p}
/* short sounds: the driver knows without looking when the mic opens/closes and if he was right */
let EAR=null;
function earcon(type){try{EAR=EAR||new (window.AudioContext||window.webkitAudioContext)();const ctx=EAR;if(ctx.state==="suspended")ctx.resume();
  const seq={open:[[660,.08],[990,.11]],close:[[520,.09]],ok:[[784,.09],[1047,.16]],ko:[[330,.12],[247,.2]]}[type]||[];let t=ctx.currentTime+.02;
  seq.forEach(([f,d])=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type="sine";o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.35,t+.015);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(ctx.destination);o.start(t);o.stop(t+d+.02);t+=d+.03})}catch(e){}}
const carAuto=()=>!!DICT&&(lsGet("el-car-auto")??(window.EL_NATIVE?"1":"0"))==="1";
function carAutoListen(lang){if(!CAR.active||!carAuto())return;clearTimeout(CAR.autoT);CAR.autoT=setTimeout(()=>{if(CAR.active&&["await","repeat"].includes(CAR.phase))carTalk(lang||"en")},250)}
/* called from the click */
function carStart(){
  CAR.pool=carPool();if(!CAR.pool.length){toast("Rien à travailler pour l'instant");return}
  Object.assign(CAR,{queue:[],i:0,results:[],requeued:{},summary:null,paused:false,active:true,handsfree:!!DICT,micState:"idle",focus:null,last:null,buf:"",partial:"",talkMode:"answer",noAns:0});
  earcon("");
  initDict();
  try{const u=new SpeechSynthesisUtterance(" ");u.volume=0;speechSynthesis.speak(u)}catch(e){}
  try{navigator.wakeLock&&navigator.wakeLock.request("screen").then(w=>CAR.wake=w).catch(()=>{})}catch(e){}
  CAR.phase="intro";render();
  const seen=lsGet("el-car-intro");lsSet("el-car-intro","1");
  speakSeq([{text:!DICT?"C'est parti ! Réponds à voix haute, puis touche le bouton pour voir la réponse.":carAuto()?(seen?"C'est parti !":"C'est parti ! Après chaque question, un petit bip : tu réponds. Tu peux aussi me poser une question avec le bouton français, ou dire stop."):(seen?"C'est parti !":"C'est parti ! Après chaque consigne, touche le gros bouton pour répondre."),lang:"fr"}]).then(()=>{if(CAR.active)carNext()});
}
function carStop(silent){
  CAR.active=false;clearTimeout(CAR.timer);clearTimeout(CAR.maxT);carStopSpeech();
  if(DICT&&CAR.micState!=="idle")DICT.stop().catch(()=>{});
  try{CAR.wake&&CAR.wake.release()}catch(e){}CAR.wake=null;
  if(!silent&&CAR.results.length)CAR.summary=CAR.results.slice();
  CAR.phase="idle";if(view==="car")render();
}
async function carNext(){
  if(!CAR.active)return;
  if(CAR.i>=CAR.queue.length)CAR.queue.push(pickNext(focusPool()));
  const it=CAR.queue[CAR.i];CAR.buf="";CAR.partial="";CAR.last=null;CAR.talkMode="answer";CAR.t0=null;CAR.noAns=0;
  CAR.phase="prompt";renderCar();
  await speakSeq([{text:LANG_LABEL[it.kind]+" :",lang:"fr"}].concat(it.say));
  if(!CAR.active||CAR.phase!=="prompt")return;
  CAR.phase="await";CAR.t0=Date.now();renderCar();carAutoListen();
}
/* nothing heard: repeat once, then move on without counting anything */
async function carNoAnswer(){const it=CAR.queue[CAR.i];if(!it||!CAR.active)return;
  if(CAR.talkMode==="repeat"){CAR.i++;carNext();return}
  if(!carAuto()){CAR.phase="await";renderCar();await speakSeq([{text:"Je n'ai rien entendu. Touche le micro quand tu es prêt.",lang:"fr"}]);return}
  if((CAR.noAns=(CAR.noAns||0)+1)<2){CAR.phase="prompt";renderCar();await speakSeq([{text:"Je répète.",lang:"fr"}].concat(it.say));if(CAR.active&&CAR.phase==="prompt"){CAR.phase="await";CAR.t0=Date.now();renderCar();carAutoListen()}return}
  CAR.results.push({it,answer:"",verdict:"skip"});CAR.phase="prompt";renderCar();await speakSeq([{text:"On passe, je te la reposerai.",lang:"fr"}]);if(CAR.active){CAR.i++;carNext()}}
/* the big button: start listening (must run straight from the tap) / finish */
function carTalk(lang){
  if(!CAR.active)return;
  if(!DICT){if(CAR.phase==="await"||CAR.phase==="prompt"){carStopSpeech();carReveal()}return}
  if(CAR.phase==="listening"){carCloseAnswer();return}
  if(["checking","thinking","intro"].includes(CAR.phase))return;
  carStopSpeech();clearTimeout(CAR.timer);clearTimeout(CAR.autoT);CAR.cont=0;
  CAR.talkMode=CAR.phase==="repeat"?"repeat":CAR.phase==="feedback"?"free":CAR.phase==="await"||CAR.phase==="prompt"?"answer":"free";
  CAR.buf="";CAR.partial="";CAR.heardAt=0;CAR.phase="listening";CAR.tStart=Date.now();CAR.micState="starting";renderCar();
  CAR.talkLang=lang||"en";
  const go=()=>{if(CAR.phase!=="listening")return;try{DICT.start({language:CAR.talkLang}).catch(e=>{CAR.micState="idle";if(CAR.phase==="listening"){CAR.phase="await";renderCar();toast(e&&e.code==="not_granted"?"Micro refusé":"Micro indisponible, réessaie")}})}catch(e){CAR.micState="idle";CAR.phase="await";renderCar()}};
  /* a short beep says "your turn"; on the phone the mic opens right after it (so it does not hear the beep) */
  if(window.EL_NATIVE){earcon("open");setTimeout(go,230)}else{go();earcon("open")}
  clearTimeout(CAR.maxT);CAR.maxT=setTimeout(()=>{if(CAR.phase==="listening")carCloseAnswer()},40000);
  CAR.timer=setTimeout(()=>{if(CAR.phase==="listening"&&!CAR.heardAt)carCloseAnswer()},carAuto()?9000:12000);
}
function carHeard(text,final){
  if(!CAR.active||CAR.phase!=="listening")return;
  const n=norm(text);if(!n&&!final)return;
  if(final){if(n)CAR.buf=(CAR.buf+" "+text).trim();CAR.partial=""}else CAR.partial=text;
  CAR.heardAt=Date.now();
  const tr=$("#carTr");if(tr)tr.textContent=(CAR.buf+" "+CAR.partial).trim()||"…";
  if(CAR.closing)return;
  clearTimeout(CAR.timer);
  /* close only after a real pause in his speech */
  CAR.timer=setTimeout(carCloseAnswer,final?(window.EL_NATIVE?1300:2300):3200);
}
async function carCloseAnswer(){
  if(CAR.phase!=="listening"||CAR.closing)return;CAR.closing=true;clearTimeout(CAR.timer);clearTimeout(CAR.maxT);
  CAR.phase="checking";renderCar();
  await micOff();
  const text=(CAR.buf+" "+CAR.partial).trim();CAR.closing=false;
  if(!CAR.active)return;
  if(!norm(text)){carNoAnswer();return}
  earcon("close");
  carProcess(text);
}
const CMD={skip:/^(next|skip|pass|suivant|passe|question suivante|on passe)$/,repeat:/^(repeat|again|r[ée]p[èe]te|encore|tu peux r[ée]p[ée]ter|r[ée]p[èe]te la question)$/,stop:/^(stop|arr[êe]te|on arr[êe]te|termin[ée]|fin|fin de (la )?session|arr[êe]ter la session|stop session)$/,idk:/^(je (ne )?sais pas|i don'?t know|i do not know|aucune id[ée]e|no idea)$/};
async function carProcess(text){
  const it=CAR.queue[CAR.i],n=norm(text);
  if(CMD.stop.test(n)){carEnd();return}
  if(CMD.repeat.test(n)){carRepeat();return}
  if(CMD.skip.test(n)){CAR.results.push({it,answer:"",verdict:"skip"});CAR.i++;carNext();return}
  if(CAR.talkMode==="repeat"&&it){const want=norm(CAR.last&&CAR.last.res&&CAR.last.res.corrected||it.ans[0]).split(" "),got=new Set(n.split(" "));
    if(want.filter(w=>got.has(w)).length/want.length>=.75){CAR.phase="feedback";renderCar();earcon("ok");await speakSeq([{text:"Yes !",lang:"en"}]);if(CAR.active){CAR.i++;carNext()}return}}
  if(CAR.talkMode==="answer"&&it&&localMatch(it,text)){finishAnswer(text,{verdict:"correct",corrected:it.kind==="fill"||it.kind==="choice"?it.ask.replace(/\s*\([^)]*\)\s*$/,"").replace("___",it.shortAns||it.ans[0]):it.ans[0],errors:[],rule:""});return}
  if(CAR.talkMode==="answer"&&it&&CMD.idk.test(n)){finishAnswer(text,{verdict:"wrong",corrected:it.example||it.ans[0],errors:[],rule:it.rule,spoken:"Pas grave, on la retravaillera."});return}
  if(!SAMPLE){if(CAR.talkMode==="answer"&&it){finishAnswer(text,{verdict:"wrong",corrected:it.ans[0],errors:[],rule:it.rule})}else{CAR.phase="await";renderCar()}return}
  CAR.phase="checking";renderCar();
  const r=await carUnderstand(it,text);
  if(!CAR.active)return;
  if(r.intent==="question"||r.intent==="request"){
    if(r.intent==="request"&&r.focus){const f=r.focus;CAR.focus=(f.topic==="all"&&!(f.kinds||[]).length)?null:{kinds:(f.kinds||[]).filter(k=>FOCUS_KIND_T[k]),topic:f.topic&&f.topic!=="all"?f.topic:null}}
    CAR.phase="talk";CAR.reply=r.reply||"";renderCar();
    await speakSeq([{text:r.reply||"D'accord."}]);
    if(!CAR.active)return;
    if(r.intent==="request"&&(r.focus||r.next)){CAR.queue.length=CAR.i;carNext();return}
    if(it){CAR.phase="prompt";renderCar();await speakSeq([{text:"On reprend.",lang:"fr"},{text:LANG_LABEL[it.kind]+" :",lang:"fr"}].concat(it.say));if(CAR.active&&CAR.phase==="prompt"){CAR.phase="await";CAR.t0=Date.now();renderCar();carAutoListen()}}
    return}
  if(CAR.talkMode==="repeat"){CAR.phase="feedback";renderCar();await speakSeq([{text:"Presque, on la retravaillera.",lang:"fr"}]);if(CAR.active){CAR.i++;carNext()}return}
  if(!it){CAR.phase="await";renderCar();return}
  finishAnswer(text,r);
}
async function carUnderstand(it,text){
  const last=CAR.last&&CAR.last.res?`Previous exercise result: he answered "${CAR.last.answer||""}", correct answer "${CAR.last.res.corrected||""}", rule: ${CAR.last.res.rule||it&&it.rule||""}.`:"";
  const task=!it?"(no exercise)":CAR.talkMode==="repeat"?`Repeat this English sentence: "${(CAR.last&&CAR.last.res&&CAR.last.res.corrected)||it.ans[0]}"`:
    it.kind==="open"?`Answer this question in one correct English sentence: "${it.ask}". Target grammar: ${it.rule}. Any true, relevant and grammatically correct answer is "correct".`:`${LANG_LABEL[it.kind]} : "${it.ask}". Expected answer(s): ${it.ans.join(" | ")}.`;
  const prompt=`You are a warm English coach talking (by voice) with Pierre-Olivier, a French A2 learner who is DRIVING. His course covers: present simple / continuous / perfect, past simple / continuous / perfect, future (will, will be -ing, going to), questions, irregular verbs, travel and business vocabulary (he runs Ryo, an audio-guided tour app).
Current exercise: ${task}
${last}
He just said (speech-to-text, may contain French words; ignore punctuation and capital letters): "${text}"

1. Decide the intent:
 - "answer": he is trying to answer the current exercise (even wrongly, partly in French, or with a pronunciation-like error).
 - "question": he asks something (a rule, a word, a translation, why it was wrong, an example…).
 - "request": he asks to change the session (another kind of exercise, a topic, easier, harder, go back to everything…).
2. If "answer": evaluate it. "almost" = meaning right with one small error. Any natural correct alternative is "correct".
3. If "question" or "request": write "reply", spoken by a text-to-speech voice: in French, max 70 words, simple and friendly, may include very short English examples, no lists, no markdown, no symbols. For a request, say what you will do now.
4. For a request, set "focus": "kinds" = a subset of [fr2en, chart, fill, choice, fix, order, repeat, verb, vocab, open] (fr2en = translation French→English, chart = conjugation, choice = choose the right tense, fill = gap-fill, fix = correct the sentence, order = build a sentence, repeat = pronunciation, verb = irregular verbs, vocab = vocabulary, open = free questions), or [] for any; "topic" = present | past | future | irregular | vocab | all | null.
Return ONLY JSON: {"intent":"answer"|"question"|"request","verdict":"correct"|"almost"|"wrong"|null,"corrected":"best correct English answer close to what he said (gap-fill: the whole sentence)","errors":[{"type":"grammaire"|"vocabulaire"|"prononciation"|"sens","detail":"très court, en français"}],"rule":"rappel de la règle en une phrase courte en français, vide si correct","unknown_words":[{"fr":"","en":""}],"spoken":"retour oral très court en français (8 mots max), chaleureux","reply":"","focus":{"kinds":[],"topic":null}}`;
  try{const r=await Promise.race([SAMPLE.json(prompt,{modelTier:"quick",maxTokens:500}),wait(15000).then(()=>{throw {code:"timeout"}})]);return r&&r.intent?r:{...r,intent:"answer"}}
  catch(e){return{intent:"answer",verdict:"wrong",corrected:it?it.ans[0]:"",errors:[],rule:it?it.rule:"",spoken:"Je n'ai pas pu vérifier en détail."}}
}
async function finishAnswer(ans,res){
  const it=CAR.queue[CAR.i];if(!it)return;
  const lat=CAR.tStart&&CAR.t0&&CAR.tStart>CAR.t0?Math.max(0,(CAR.tStart-CAR.t0)/1000-1.5):null;
  CAR.last={answer:ans,res};applyCar(it,ans,res,lat);
  CAR.phase="feedback";renderCar();
  const L=[],corr=res.corrected||it.ans[0];
  earcon(res.verdict==="correct"?"ok":"ko");
  if(res.verdict==="correct"&&res.slow)L.push({text:"Juste, mais un peu lent. Je te la redonnerai.",lang:"fr"});
  else if(res.verdict==="correct"){L.push({text:PRAISE_EN[Math.random()*PRAISE_EN.length|0],lang:"en"});if(["fr2en","fix","order","open","past"].includes(it.kind)&&norm(corr)!==norm(ans||""))L.push({text:corr,lang:"en"})}
  else{L.push({text:res.spoken||(res.verdict==="almost"?"Presque !":"Pas tout à fait."),lang:"fr"},{text:it.kind==="open"?"Tu peux dire :":"La bonne réponse :",lang:"fr"},{text:corr,lang:it.ansLang});
    (res.errors||[]).slice(0,2).forEach(e=>{if(e.detail)L.push({text:e.detail,lang:"fr"})});
    if(res.rule||it.rule)L.push({text:"Règle : "+(res.rule||it.rule),lang:"fr"})}
  await speakSeq(L);
  if(!CAR.active||CAR.phase!=="feedback")return;
  if(res.verdict!=="correct"&&it.ansLang==="en"&&DICT){
    await speakSeq([{text:carAuto()?"Répète :":"Touche le micro et répète la phrase, ou suivant.",lang:"fr"},...(carAuto()?[{text:corr,lang:"en"}]:[])]);
    if(CAR.active&&CAR.phase==="feedback"){CAR.phase="repeat";renderCar();if(carAuto())carAutoListen();else CAR.timer=setTimeout(()=>{if(CAR.phase==="repeat"){CAR.i++;carNext()}},12000)}
    return}
  CAR.i++;carNext();
}
function carReveal(){const it=CAR.queue[CAR.i];if(!it)return;CAR.last={answer:"",res:{verdict:null,corrected:it.example||it.ans[0],errors:[],rule:it.rule}};CAR.phase="self";renderCar();
  speakSeq([{text:"La réponse :",lang:"fr"},{text:it.example||it.ans[0],lang:it.ansLang}])}
const PRAISE_FR=["Parfait !","Bravo !","Excellent !","Très bien !","Super !"];
const PRAISE_EN=["Great!","Perfect!","Yes!","Well done!","Excellent!","Spot on!"];
function localMatch(it,ans){const a=norm(ans);
  if(["chart","past","fr2en","fix","order","repeat"].includes(it.kind))return it.ans.some(x=>norm(x)===a);
  if(it.kind==="fill")return it.ans.some(x=>(" "+a+" ").includes(" "+norm(x)+" "));
  if(it.kind==="choice")return norm(it.ans[0])===a||a===norm(it.shortAns);
  if(it.kind==="vocab")return it.ans.some(x=>a.includes(norm(x).replace(/^(a|an|the) /,"")));
  if(it.kind==="verb"){const forms=norm(it.ans[0]).split(/ or | /).filter(w=>w&&w!=="or");return forms.every(f=>a.split(" ").includes(f))}
  return false}
async function evaluate(it,ans){
  if(localMatch(it,ans))return{verdict:"correct",corrected:it.kind==="fill"||it.kind==="choice"?it.ask.replace(/\s*\([^)]*\)\s*$/,"").replace("___",it.shortAns||it.ans[0]):it.ans[0],errors:[],rule:""};
  if(!SAMPLE)return{verdict:"wrong",corrected:it.ans[0],errors:[],rule:it.rule};
  const task=it.kind==="open"?`Answer this question in one correct English sentence: "${it.ask}". Target grammar: ${it.rule}. Any true, relevant and grammatically correct answer is "correct"; "corrected" must keep his ideas.`
    :it.kind==="repeat"?`Repeat exactly this English sentence: "${it.ask}". Words that differ in the transcript most likely show PRONUNCIATION problems: name those words in errors (type "prononciation") with a short French tip on how to say them.`
    :`${LANG_LABEL[it.kind]} : "${it.ask}". Expected answer(s): ${it.ans.join(" | ")}.`;
  const prompt=`You are an English tutor for a French A2 learner, checking an ORAL answer captured by speech-to-text (ignore punctuation and capitalisation; a wrong but similar-sounding word may be a pronunciation problem).
Exercise: ${task}
Learner said: "${ans}"
The learner may say a French word when he does not know the English one: list each such word in unknown_words with its English translation, and count it as a vocabulary error.
Rule linked to this exercise: ${it.rule||"-"}
Return ONLY JSON: {"verdict":"correct"|"almost"|"wrong","corrected":"the best correct English answer, as close as possible to what he said (for a gap-fill: the whole sentence)","errors":[{"type":"grammaire"|"vocabulaire"|"prononciation"|"sens","detail":"très court, en français"}],"rule":"rappel de la règle en une phrase courte en français, vide si correct","unknown_words":[{"fr":"","en":""}],"spoken":"retour oral très court en français (8 mots max), chaleureux, sans répéter la phrase corrigée"}
Never count capital letters or punctuation as mistakes. Any natural correct alternative is "correct". "almost" means the meaning is right with one small error.`;
  try{return await Promise.race([SAMPLE.json(prompt,{modelTier:"quick"}),wait(15000).then(()=>{throw {code:"timeout"}})])}
  catch(e){return{verdict:"wrong",corrected:it.ans[0],errors:[],rule:it.rule,spoken:"Je n'ai pas pu vérifier en détail."}}
}
function applyCar(it,ans,res,lat){
  const r={...(ST().car[it.id]||{box:0,errs:0,seen:0,ok:0})},t=todayISO();
  r.seen=(r.seen||0)+1;r.at=Date.now();r.kind=it.kind;r.ask=it.ask;r.expected=it.ans[0];
  const slow=res.verdict==="correct"&&lat!=null&&lat>(FLU[it.kind]||6);res.slow=slow;res.lat=lat!=null?Math.round(lat*10)/10:null;if(res.lat!=null)r.lastLat=res.lat;
  if(slow){r.slow=(r.slow||0)+1;r.box=Math.max(1,Math.min(r.box||0,2));r.due=addDays(t,1);r.lastCorrect=res.corrected||it.ans[0];
    if(!CAR.requeued[it.id]){CAR.requeued[it.id]=1;while(CAR.queue.length<CAR.i+7)CAR.queue.push(pickNext(CAR.pool));CAR.queue.splice(CAR.i+7,0,it)}}
  else if(res.verdict==="correct"){r.box=Math.min(5,(r.box||0)+1);r.ok=(r.ok||0)+1;r.due=addDays(t,INTERVALS[r.box]);if((r.errs||r.slow)&&r.box>=3)r.mastered=Date.now()}
  else if(res.verdict){r.box=0;r.errs=(r.errs||0)+1;r.due=t;r.lastAnswer=ans||"";r.lastCorrect=res.corrected||it.ans[0];r.lastErrors=(res.errors||[]).slice(0,3);r.lastRule=res.rule||it.rule||"";
    if(!CAR.requeued[it.id]){CAR.requeued[it.id]=1;while(CAR.queue.length<CAR.i+5)CAR.queue.push(pickNext(CAR.pool));CAR.queue.splice(CAR.i+5,0,it)}}
  save("car",it.id,r);it.weak=false;
  if(it.card&&res.verdict){const c=ST().cards[it.card]||{box:0};const ok=res.verdict==="correct",b=ok?Math.min(5,(c.box||0)+1):1;save("cards",it.card,{box:b,due:addDays(t,ok?INTERVALS[b]:0),seen:(c.seen||0)+1})}
  (res.unknown_words||[]).forEach(w=>{if(!w||!w.en)return;if(allCards().some(c=>c.en.toLowerCase()===w.en.toLowerCase()))return;save("mycards","m"+Date.now()+Math.random().toString(36).slice(2,5),{en:w.en,fr:w.fr||"",note:"Mot demandé en mode voiture",createdAt:Date.now()})});
  CAR.results.push({it,answer:ans,verdict:res.verdict,slow,lat:res.lat,corrected:res.corrected,errors:res.errors||[],rule:res.rule||""});
  if(res.verdict)gain(res.verdict==="correct"?3:1);
}
async function carEnd(){
  if(!CAR.active)return;
  clearTimeout(CAR.timer);clearTimeout(CAR.maxT);carStopSpeech();await micOff();
  const g=CAR.results.filter(r=>r.verdict&&r.verdict!=="skip"),ok=g.filter(r=>r.verdict==="correct").length,bad=g.length-ok;
  CAR.phase="end";renderCar();
  await speakSeq([{text:g.length?`Session terminée. ${ok} bonne${ok>1?"s":""} réponse${ok>1?"s":""} sur ${g.length}.`+(bad?` Je te redemanderai les ${plural(bad,"erreur")}.`:" Aucune faute, bravo !"):"Session terminée.",lang:"fr"}]);
  carStop();
}
function carSkip(){clearTimeout(CAR.timer);carStopSpeech();if(CAR.phase==="listening"){CAR.closing=true;micOff().then(()=>CAR.closing=false)}const it=CAR.queue[CAR.i];if(it&&!["feedback","repeat"].includes(CAR.phase))CAR.results.push({it,answer:"",verdict:"skip"});CAR.i++;carNext()}
function carRepeat(){const it=CAR.queue[CAR.i];if(!it)return;clearTimeout(CAR.timer);carStopSpeech();CAR.phase="prompt";renderCar();
  speakSeq([{text:LANG_LABEL[it.kind]+" :",lang:"fr"}].concat(it.say)).then(()=>{if(CAR.active&&CAR.phase==="prompt"){CAR.phase="await";renderCar()}})}
function carSelf(ok){clearTimeout(CAR.timer);const it=CAR.queue[CAR.i];applyCar(it,"",{verdict:ok?"correct":"wrong",corrected:it.ans[0],errors:[],rule:it.rule},null);CAR.i++;carNext()}
function carDictState(state,reason){
  CAR.micState=state==="listening"?"listening":state==="idle"?"idle":CAR.micState;
  if(state==="idle"&&CAR.active&&CAR.phase==="listening"&&!CAR.closing){
    if(reason==="not_granted"){toast("Micro refusé");CAR.phase="await";renderCar();return}
    const it=CAR.queue[CAR.i],said=toks((CAR.buf+" "+CAR.partial).trim()).length,want=it&&it.ans&&it.ans[0]?toks(it.ans[0]).length:3;
    /* the phone cut him off mid-sentence: keep listening once more, what he said is kept */
    if(reason!=="stopped"&&CAR.heardAt&&CAR.talkMode==="answer"&&said<Math.ceil(want*.6)&&(CAR.cont||0)<1){CAR.cont=1;clearTimeout(CAR.timer);
      try{DICT.start({language:CAR.talkLang||"en"}).catch(()=>carCloseAnswer())}catch(e){carCloseAnswer()}CAR.timer=setTimeout(carCloseAnswer,7000);return}
    carCloseAnswer()}
}
function renderCarBits(){const b=$("#carTalk");if(b)b.classList.toggle("dim",!!CAR.speaking&&CAR.phase!=="listening")}

const ERRDOM={grammaire:"gram",vocabulaire:"vocab",prononciation:"pron",sens:"compr"};
const STATUS={intro:["speak","Je prépare ta session…"],prompt:["speak","Écoute la consigne…"],await:["mic","À toi ! Touche le micro pour répondre"],listening:["mic","Je t'écoute… (touche pour finir)"],checking:["spark","Je réfléchis…"],feedback:["pen","Correction"],repeat:["mic","Touche le micro et répète la phrase"],talk:["speak","Je te réponds…"],self:["check","Tu avais bon ?"],end:["trophy","Session terminée"]};
function renderCar(){if(view==="car")render()}
function vCar(app){
  const head=`<div class="pagehead t-coach">${tile("coach",{ic:"car"})}<div><span class="k">Oral · mains libres</span><h1>Mode voiture</h1></div><div class="row">${dom("oral")}${dom("pron")}${dom("vocab")}${dom("gram")}</div></div>`;
  if(CAR.active){
    const it=CAR.queue[CAR.i],L=CAR.last,res=L&&L.res,auto=carAuto(),ph=CAR.phase;
    const g=CAR.results.filter(r=>r.verdict&&r.verdict!=="skip"),ok=g.filter(r=>r.verdict==="correct").length,ko=g.length-ok;
    const showAnswer=it&&["feedback","repeat","self"].includes(ph)&&res;
    const f=CAR.focus,focusTxt=f?[f.topic?FOCUS_T[f.topic]:"",(f.kinds||[]).map(k=>FOCUS_KIND_T[k]).filter((x,i,a)=>a.indexOf(x)===i).join(", ")].filter(Boolean).join(" · "):"";
    const fr=ph==="listening"&&CAR.talkLang==="fr";
    const ST2={intro:["speak","Je prépare ta session…"],prompt:["speak","Écoute…"],await:["mic",auto?"Bip… à toi":"À toi : touche le micro"],listening:["mic",fr?"Je t'écoute en français…":"Je t'écoute…"],checking:["spark","Je vérifie…"],feedback:["pen","Correction"],repeat:["mic",auto?"Répète la phrase":"Touche et répète"],talk:["speak","Je te réponds…"],self:["check","Tu avais bon ?"],end:["trophy","Session terminée"]}[ph]||["speak","…"];
    const talkLbl=!DICT?"Voir la réponse":ph==="listening"?"J'ai fini":["checking","intro"].includes(ph)?"…":ph==="repeat"?"Répéter":["prompt","talk","feedback"].includes(ph)?"Couper et parler":"Parler";
    app.innerHTML=`<section class="view carv3">
     <div class="ctop"><span class="cq">${ICON.car}<b>${CAR.i+1}</b></span><span class="cok">${ICON.check}${ok}</span><span class="cko">${ICON.x}${ko}</span>
       ${focusTxt?`<button class="cfocus" id="carAll" title="Revenir à tout">${ICON.target}<span>${esc(focusTxt)}</span>${ICON.x}</button>`:""}<span class="spacer"></span>
       <button class="cauto ${auto?"on":""}" id="carAuto" aria-label="Micro automatique">${ICON.mic}<span>${auto?"Auto":"Manuel"}</span></button>
       <button class="cstop" id="carEnd">${ICON.x}<span>Stop</span></button></div>
     <div class="cstage ph-${ph}" id="carStage">
      <div class="cstatus">${ph==="listening"?`<span class="cwave"><i></i><i></i><i></i><i></i></span>`:ICON[ST2[0]]}<span>${ST2[1]}</span></div>
      ${ph==="talk"&&CAR.reply?`<div class="creply">${esc(CAR.reply)}</div>`:""}
      ${it&&ph!=="talk"?`<div class="ckind">${esc(LANG_LABEL[it.kind])}</div><div class="cbig ${["fr2en","vocab"].includes(it.kind)?"":"en"}">${esc(it.ask)}</div>`:""}
      ${ph==="listening"||(L&&L.answer&&["checking","feedback","repeat"].includes(ph))?`<div class="csaid" id="carTr">${esc(ph==="listening"?((CAR.buf+" "+CAR.partial).trim()||"…"):(L&&L.answer)||"")}</div>`:""}
      ${showAnswer?`<div class="cfb ${res.verdict==="correct"?"good":res.verdict?"bad":""}"><div class="cverd">${res.verdict==="correct"&&res.slow?"Juste, mais lent · "+res.lat+" s":res.verdict==="correct"?"Juste !":res.verdict==="almost"?"Presque":res.verdict==="wrong"?"À revoir":"Réponse"}</div>
        <div class="cans ${it.ansLang==="en"?"en":""}">${esc(res.corrected||it.ans[0])}</div>
        ${(res.rule||(res.verdict&&res.verdict!=="correct"?it.rule:""))?`<div class="crule">${esc(res.rule||it.rule)}</div>`:""}</div>`:""}
     </div>
     <div class="cdock">
      ${ph==="self"?`<div class="cside"><button class="cbtn good" id="selfOk">${ICON.check}<span>J'avais bon</span></button><button class="cbtn bad" id="selfKo">${ICON.x}<span>À revoir</span></button></div>`:`
      <button class="ctalk ${ph==="listening"?(fr?"on fr":"on"):""} ${["checking","intro"].includes(ph)?"busy":""}" id="carTalk">${ICON.mic}<span>${talkLbl}</span></button>
      <div class="cside"><button class="cbtn" id="carRep">${ICON.history}<span>Réécouter</span></button>
       ${DICT?`<button class="cbtn fr ${fr?"on":""}" id="carFr">${ICON.chat}<span>Question en français</span></button>`:""}
       <button class="cbtn" id="carSkip">${ICON.zap}<span>Suivant</span></button></div>`}
     </div>
    </section>`;
    $("#carEnd").onclick=()=>carEnd();
    if($("#carAll"))$("#carAll").onclick=()=>{CAR.focus=null;renderCar();toast("On révise tout")};
    $("#carAuto").onclick=()=>{lsSet("el-car-auto",carAuto()?"0":"1");toast(carAuto()?"Micro automatique après chaque question":"Micro manuel : touche pour parler");renderCar();if(carAuto()&&["await","repeat"].includes(CAR.phase))carAutoListen()};
    if($("#carRep"))$("#carRep").onclick=carRepeat;
    if($("#carSkip"))$("#carSkip").onclick=carSkip;
    if($("#carTalk"))$("#carTalk").onclick=()=>carTalk(CAR.phase==="listening"?CAR.talkLang:"en");
    if($("#carFr"))$("#carFr").onclick=()=>carTalk("fr");
    /* the whole question area is a big button too */
    $("#carStage").onclick=e=>{if(e.target.closest("button,a"))return;if(["await","repeat","listening","prompt","feedback","talk"].includes(CAR.phase))carTalk(CAR.phase==="listening"?CAR.talkLang:"en")};
    if($("#selfOk"))$("#selfOk").onclick=()=>carSelf(true);
    if($("#selfKo"))$("#selfKo").onclick=()=>carSelf(false);
    renderCarBits();
    return;
  }
  const pool=carPool(),plan=sessionPlan(pool),auto=carAuto();
  const sum=CAR.summary?panel("suivi","Bilan de la dernière session",`<div class="row">${resChip("ok",CAR.summary.filter(r=>r.verdict==="correct").length+" justes")}${resChip("ko",CAR.summary.filter(r=>r.verdict&&r.verdict!=="correct"&&r.verdict!=="skip").length+" à revoir")}</div>
    <div class="list">${CAR.summary.filter(r=>r.verdict&&r.verdict!=="skip").map(r=>`<div class="irow">${r.verdict==="correct"?resChip("ok","Juste"):resChip("ko","À revoir")}<div class="it"><b class="${["fr2en","vocab"].includes(r.it.kind)?"":"en"}">${esc(r.it.ask)}</b><span>${r.answer?"Tu as dit : « "+esc(r.answer)+" »":""}</span></div>${resChip("fix",r.corrected||r.it.ans[0])}</div>`).join("")}</div>`,{kicker:"Session",ic:"trophy"}):"";
  app.innerHTML=`<section class="view">${head}
   <button class="carstart" id="carGo">${ICON.car}<span>Démarrer</span></button>
   ${DICT?`<div class="mseg carmode"><button data-auto="1" class="${auto?"on":""}">${ICON.mic}<span>Mains libres<small>bip puis micro automatique</small></span></button><button data-auto="0" class="${auto?"":"on"}">${ICON.check}<span>Je touche pour parler<small>gros bouton</small></span></button></div>`:`<div class="row" style="justify-content:center">${resChip("warn","Micro indisponible ici : mode écoute")}</div>`}
   ${sum}
   ${panel("coach","Ce que je te fais travailler maintenant",`<ul style="margin:0;padding-left:22px">${plan.map(x=>`<li>${esc(x.charAt(0).toUpperCase()+x.slice(1))}</li>`).join("")}</ul>`,{kicker:"Session adaptée",ic:"spark"})}
   </section>`;
  $("#carGo").onclick=carStart;
  app.querySelectorAll("[data-auto]").forEach(b=>b.onclick=()=>{lsSet("el-car-auto",b.dataset.auto);render()});
}
function carSuiviPanel(st){
  const all=Object.entries(st.car||{}),rw=all.filter(([id,r])=>((r.errs||0)>0||(r.slow||0)>0)&&(r.box||0)<3),mast=all.filter(([id,r])=>r.mastered);
  const body=all.length?`<div class="row">${resChip("neutral",plural(all.reduce((s,[,r])=>s+(r.seen||0),0),"réponse"))}${resChip(rw.length?"ko":"ok",plural(rw.length,"point")+" à retravailler")}${resChip("ok",plural(mast.length,"erreur")+" corrigée"+(mast.length>1?"s":""))}</div>
    ${rw.length?`<div class="list">${rw.sort((a,b)=>b[1].errs-a[1].errs).slice(0,12).map(([id,r])=>`<div class="irow"><div class="it"><b>${esc(r.ask)}</b><span>${r.lastAnswer?"Dernière réponse : « "+esc(r.lastAnswer)+" »":""}${r.lastRule?" · "+esc(r.lastRule):""}</span></div><div class="chips">${r.errs?resChip("ko",plural(r.errs,"erreur")):""}${r.slow?resChip("warn","lent"+(r.lastLat?" · "+r.lastLat+" s":"")):""}${resChip("fix",r.lastCorrect||r.expected||"")}${(r.lastErrors||[]).map(e=>ERRDOM[e.type]?dom(ERRDOM[e.type]):"").join("")}</div></div>`).join("")}</div>`:""}`
   :`<p class="empty">Pas encore de session en mode voiture.</p>`;
  return panel("coach","Mode voiture",body,{kicker:"Oral mains libres",ic:"car",dom:["oral"]});
}


/* ============ 15 MIN : a custom mini-lesson, different every time ============ */
const THEME_T={L1:"Te présenter et parler de Ryo",L2:"Le présent au travail",L3:"Les 3 passés en réflexe",L4:"Parler du futur",L5:"Gymnastique des 7 temps",rework:"Tes points faibles",vocab:"Vocabulaire et verbes irréguliers"};
const THEME_IC={L1:"hand",L2:"clock",L3:"history",L4:"rocket",L5:"puzzle",rework:"target",vocab:"abc"};
const STEP_META={chart:["Les 7 temps","grid","exo"],irr:["Verbes irréguliers","abc","rev"],memo:["Mémo","book","cours"],qcm:["Choix rapide","target","exo"],reflex:["Réflexe chrono","zap","exo"],fill:["Phrase à trou","pencil","exo"],tiles:["Construis la phrase","puzzle","exo"],listen:["Écoute et écris","ear","rev"],translate:["Traduction","note","devoir"],oral:["À l'oral","mic","coach"],pairs:["Paires","layers","rev"],cards:["Flashcards","layers","rev"],open:["Réponds en anglais","chat","devoir"],fix:["Corrige l'erreur","pen","devoir"]};
const SLOW_S={qcm:6,fill:10,tiles:15,translate:20,listen:20,fix:15,oral:8,open:40};
let SES=null;
const ORAL_ALT={past:"translate",fr2en:"translate",repeat:"listen",open:"open"};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const toks=s=>String(s).replace(/[.,!?;:]/g,"").split(/\s+/).filter(Boolean);
let AC=null;function beep(ok){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain();o.connect(g);g.connect(AC.destination);const t=AC.currentTime;o.type="sine";o.frequency.setValueAtTime(ok?660:200,t);if(ok)o.frequency.setValueAtTime(990,t+.09);g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+.28);o.start(t);o.stop(t+.3)}catch(e){}}
function recordItem(it,ok,slow,given){
  const r={...(ST().car[it.id]||{box:0,errs:0,seen:0,ok:0})},t=todayISO();
  r.seen=(r.seen||0)+1;r.at=Date.now();r.kind=it.kind;r.ask=it.ask;r.expected=it.ans[0];
  if(ok&&!slow){r.box=Math.min(5,(r.box||0)+1);r.ok=(r.ok||0)+1;r.due=addDays(t,INTERVALS[r.box]);if((r.errs||r.slow)&&r.box>=3)r.mastered=Date.now()}
  else if(ok){r.slow=(r.slow||0)+1;r.box=Math.max(1,Math.min(r.box||0,2));r.due=addDays(t,1)}
  else{r.box=0;r.errs=(r.errs||0)+1;r.due=t;r.lastAnswer=given||"";r.lastCorrect=it.ans[0];r.lastRule=it.rule||""}
  save("car",it.id,r);
  if(it.card){const c=ST().cards[it.card]||{box:0},b=ok&&!slow?Math.min(5,(c.box||0)+1):ok?Math.max(1,Math.min(c.box||0,2)):1;save("cards",it.card,{box:b,due:addDays(t,ok&&!slow?INTERVALS[b]:ok?1:0),seen:(c.seen||0)+1})}
}
function buildSession(){
  const pool=carPool().filter(i=>i.kind!=="en2fr"),t=todayISO(),cur=curLesson(),done=LESSONS.filter(started),p=P();
  let recent=[];try{recent=JSON.parse(lsGet("el-recent")||"[]")}catch(e){}
  const rw=new Set(toRework().map(x=>x[0]));
  const cands=[];if(cur)cands.push({key:cur.id,w:4});done.filter(l=>l!==cur).forEach(l=>cands.push({key:l.id,w:1.2}));if(rw.size>=4)cands.push({key:"rework",w:3});cands.push({key:"vocab",w:1.2});
  let from=cands.filter(c=>c.key!==p.lastTheme);if(!from.length)from=cands;
  let x=Math.random()*from.reduce((s,c)=>s+c.w,0),theme=from[0].key;for(const c of from){x-=c.w;if(x<=0){theme=c.key;break}}
  const inTheme=it=>theme==="rework"?rw.has(it.id):theme==="vocab"?["vocab","verb"].includes(it.kind):it.l===theme;
  const score=it=>{const r=ST().car[it.id];let s=Math.random()*3;
    if(r&&((r.errs||0)+(r.slow||0))>0&&(r.box||0)<3)s+=6;else if(it.weak)s+=4;else if(it.soft)s+=2;else if(!r)s+=2;else if(r.due<=t)s+=2;else s-=2;
    if(recent.includes(it.id))s-=6;if(inTheme(it))s+=5;return s};
  const used=new Set();
  const take=(f,n)=>{const c=pool.filter(i=>!used.has(i.id)&&f(i)).map(i=>({i,s:score(i)})).sort((a,b)=>b.s-a.s).slice(0,n).map(y=>y.i);c.forEach(i=>used.add(i.id));return c};
  const K=k=>i=>k.includes(i.kind);
  const mk={
    reflex:()=>{const it=take(K(["choice"]),6);return it.length>=4&&{type:"reflex",items:it}},
    qcm:()=>{const it=take(K(["choice"]),1);return it.length&&{type:"qcm",it:it[0]}},
    fill:()=>{const it=take(K(["fill"]),1);return it.length&&{type:"fill",it:it[0]}},
    tiles:()=>{const it=take(i=>K(["past","fr2en","order"])(i)&&toks(i.ans[0]).length<=12,1);return it.length&&{type:"tiles",it:it[0]}},
    listen:()=>{const it=take(i=>K(["repeat","past"])(i)&&toks(i.ans[0]).length<=10,1);return it.length&&{type:"listen",it:it[0]}},
    translate:()=>{const it=take(K(["past","fr2en"]),1);return it.length&&{type:"translate",it:it[0]}},
    oral:()=>{const it=take(K(SAMPLE?["past","fr2en","repeat","open"]:["past","fr2en","repeat"]),1);return it.length&&{type:"oral",it:it[0]}},
    pairs:()=>{const it=take(K(["vocab"]),5);return it.length>=4&&{type:"pairs",items:it}},
    cards:()=>{const it=take(K(["vocab","verb"]),3);return it.length>=2&&{type:"cards",items:it}},
    open:()=>{if(!SAMPLE)return null;const it=take(K(["open"]),1);return it.length&&{type:"open",it:it[0]}},
    fix:()=>{const it=take(K(["fix"]),1);return it.length&&{type:"fix",it:it[0]}},
    chart:()=>{const it=take(K(["chart"]),4);return it.length>=3&&{type:"chart",items:it}},
    irr:()=>{const it=take(K(["verb"]),5);return it.length>=3&&{type:"irr",items:it}},
    gym:()=>{const it=take(i=>i.kind==="choice"&&/^dr-L5-/.test(i.id),6);return it.length>=4&&{type:"reflex",items:it,gym:true}},
    gymfill:()=>{const it=take(i=>i.kind==="fill"&&/^dr-L5-(gym|fill)-/.test(i.id),1);return it.length&&{type:"fill",it:it[0]}},
  };
  const steps=[],lesson=LESSONS.find(l=>l.id===theme);
  if(lesson&&(!lesson.drills.every(d=>drillFluent(DRILLS[d],S.drills[d]))&&!p["memo-"+theme+"-"+t]||Math.random()<.25))steps.push({type:"memo",lesson});
  const gymOn=done.some(l=>l.id==="L5");
  const req=(gymOn?["gym","gymfill","gymfill"]:[]).concat(["chart","irr","oral","tiles",Math.random()<.6?"reflex":"qcm",Math.random()<.5?"pairs":"cards",Math.random()<.5?"listen":"translate"]);
  let bag=req.concat(shuffle(["reflex","qcm","tiles","fill","listen","translate","oral","pairs","cards","open","fix","qcm","fill","listen","translate"]));
  let guard=0;
  while(steps.filter(s=>s.type!=="memo").length<(gymOn?12:10)&&bag.length&&guard++<60){
    const last=steps.length?steps[steps.length-1].type:null;let k=bag.findIndex(b=>b!==last);if(k<0)k=0;
    const type=bag.splice(k,1)[0],st=mk[type]&&mk[type]();if(st)steps.push(st);
    if(!bag.length&&steps.filter(s=>s.type!=="memo").length<(gymOn?12:10))bag=shuffle(["qcm","tiles","fill","translate","listen","oral"]);
  }
  {const memo=steps.filter(x=>x.type==="memo"),rest=steps.filter(x=>x.type!=="memo");let best=rest;
   for(let k=0;k<30;k++){const c=shuffle(rest);if(c.every((x,j)=>!j||x.type!==c[j-1].type)){best=c;break}}
   steps.length=0;steps.push(...memo,...best)}
  try{lsSet("el-recent",JSON.stringify([...used,...recent].slice(0,90)))}catch(e){}
  return {theme,title:THEME_T[theme]||"Révisions",steps,i:0,xp:0,right:0,wrong:0,slow:0,combo:0,maxCombo:0,t0:Date.now(),noOral:false,state:"ask",fb:null,review:[]};
}
function sesStart(){SES=buildSession();if(SES.steps.length<3){SES=null;toast("Pas assez de contenu pour l'instant");return}sesEnter();render()}
function sesEnter(){const st=SES.steps[SES.i];SES.state="ask";SES.fb=null;SES.st0=Date.now();SES.sel=null;SES.ans=[];SES.sub=0;
  if(st.type==="oral"&&SES.noOral)st.type=ORAL_ALT[st.it.kind]||"translate";
  if(st.type==="memo"&&!isCoach())markFlag("memo-"+st.lesson.id+"-"+todayISO());
  if(st.type==="listen")setTimeout(()=>say(st.it.ans[0]),350);
  if(st.type==="oral"&&["repeat"].includes(st.it.kind))setTimeout(()=>say(st.it.ans[0]),350);}
function sesResult(ok,it,given,o={}){
  const st=SES.steps[SES.i],secs=(Date.now()-SES.st0)/1000,slow=ok&&!o.noSlow&&secs>(SLOW_S[st.type]||12);
  if(it&&o.record!==false)recordItem(it,ok,slow,given);
  if(ok){SES.right++;SES.combo++;SES.maxCombo=Math.max(SES.maxCombo,SES.combo);SES.xp+=slow?2:3+(SES.combo>=3?1:0);if(slow)SES.slow++}
  else{SES.wrong++;SES.combo=0;SES.xp+=1;if(it)SES.review.push({it,given})}
  beep(ok);
  SES.state="fb";SES.fb={ok,slow,secs:Math.round(secs),correct:o.correct||(it&&it.ans[0]),rule:o.rule!=null?o.rule:(it&&it.rule),msg:o.msg,errors:o.errors};
  render();
}
function sesNext(){
  SES.i++;
  if(SES.i>=SES.steps.length){sesFinish();return}
  sesEnter();render();window.scrollTo(0,0);
}
function sesFinish(){
  const mins=Math.max(1,Math.round((Date.now()-SES.t0)/60000)),tot=SES.right+SES.wrong,acc=tot?Math.round(100*SES.right/tot):0;
  SES.done={mins,acc,tot};
  setP(p=>{p.sessions=(p.sessions||0)+1;p.lastTheme=SES.theme;p.sesLog=[...(p.sesLog||[]).slice(-40),{at:Date.now(),theme:SES.theme,acc,xp:SES.xp,mins}]});
  gain(SES.xp+(acc===100?10:0));confetti();render();
}
const sesItemLabel=it=>LANG_LABEL[it.kind]||"";
function vSession(app){
  if(!SES){
    const p=P(),log=(p.sesLog||[]).slice(-5).reverse();
    app.innerHTML=`<section class="view">
      <div class="seshero">${tile("suivi",{solid:true,ic:"zap"})}<div><h1>15 minutes</h1><p>Une mini-leçon sur mesure, différente à chaque fois : mémo si besoin, exercices variés, oral, écrit et révisions.</p></div>
      <button class="carstart" id="sesGo" style="background:var(--suivi);box-shadow:0 6px 0 var(--warm-d)">${ICON.zap}<span>Lancer ma session</span></button></div>
      ${log.length?panel("suivi","Tes dernières sessions",`<div class="list">${log.map(s=>`<div class="irow">${tile("suivi",{sm:true,ic:THEME_IC[s.theme]||"zap"})}<div class="it"><b>${esc(THEME_T[s.theme]||"Révisions")}</b><span>${fmtTs(s.at)} · ${s.mins} min</span></div><div class="chips">${resChip(s.acc>=80?"ok":s.acc>=50?"warn":"ko",s.acc+" %")}${resChip("neutral","+"+s.xp+" XP")}</div></div>`).join("")}</div>`,{kicker:plural(p.sessions||0,"session")+" au total",ic:"history"}):""}
    </section>`;
    $("#sesGo").onclick=sesStart;return;
  }
  if(SES.done){const d=SES.done;
    app.innerHTML=`<section class="view"><div class="sesend">${tile("exo",{solid:true,ic:"trophy"})}<h1>Session terminée !</h1><p class="muted">${esc(SES.title)}</p>
      <div class="stats" style="width:100%">
       <div class="stat t-suivi"><span class="l">XP gagnés</span><span class="v">+${SES.xp+(d.acc===100?10:0)}</span></div>
       <div class="stat t-exo"><span class="l">Précision</span><span class="v">${d.acc} %</span></div>
       <div class="stat t-coach"><span class="l">Meilleur combo</span><span class="v">×${SES.maxCombo}</span></div>
       <div class="stat t-cours"><span class="l">Durée</span><span class="v">${d.mins} min</span></div></div>
      ${SES.review.length?`<div class="panel t-devoir" style="width:100%;text-align:left"><header class="phead">${tile("devoir",{ic:"history"})}<div class="ph"><span class="ptype">Je te les redemanderai</span><h2>À retravailler</h2></div></header><div class="pbody"><div class="list">${SES.review.map(r=>`<div class="irow"><div class="it"><b>${esc(r.it.ask)}</b>${r.given?`<span>Ta réponse : « ${esc(r.given)} »</span>`:""}</div>${resChip("fix",r.it.ans[0])}</div>`).join("")}</div></div></div>`:""}
      <div class="row" style="justify-content:center"><button class="btn primary" id="sesAgain">${ICON.zap}<span>Encore 15 min</span></button><a class="btn" href="#today">Terminer</a></div></div></section>`;
    $("#sesAgain").onclick=()=>{SES=null;sesStart()};return;
  }
  const st=SES.steps[SES.i],meta=STEP_META[st.type],n=SES.steps.length,fb=SES.fb;
  const head=`<div class="seshead"><button class="btn ghost" id="sesQuit" aria-label="Quitter">${ICON.x}</button><div class="sbar"><i style="width:${100*(SES.i+(SES.state==="fb"?1:0))/n}%"></i></div><span class="res ${SES.combo>=3?"warn":"neutral"}">${ICON.flame}<span>×${SES.combo}</span></span><span class="res neutral">${ICON.star}<span>${SES.xp} XP</span></span></div>
    <div class="row"><span class="tile sm t-${meta[2]}">${ICON[meta[1]]}</span><span class="ptype t-${meta[2]}" style="font-size:1.05rem">${meta[0]}</span><span class="small muted">${esc(SES.title)} · étape ${SES.i+1} sur ${n}</span>${st.it?dom(KIND_DOM[st.it.kind]||"gram"):""}</div>`;
  const body=STEPS[st.type].html(st);
  let foot="";
  if(SES.state==="fb"&&fb){
    foot=`<div class="fbar ${fb.ok?(fb.slow?"slow":"ok"):"ko"}"><div class="fbm">${fb.ok?ICON.check:ICON.x}<b>${esc(fb.msg||(fb.ok?(fb.slow?"Juste, mais vise plus vite !":PRAISE[Math.random()*PRAISE.length|0]):"Pas tout à fait"))}</b></div>
      ${fb.correct&&(!fb.ok||st.type==="translate"||st.type==="oral")?`<div class="fbc en say">${esc(fb.correct)}</div>`:""}
      ${(fb.errors||[]).length?`<div class="row">${fb.errors.map(e=>`${ERRDOM[e.type]?dom(ERRDOM[e.type]):""}<span>${esc(e.detail||"")}</span>`).join(" ")}</div>`:""}
      ${!fb.ok&&(fb.rule||memoTopic(fb.correct))?`<div class="row small">${fb.rule?`<span><b>Règle :</b> ${esc(fb.rule)}</span>`:""}${memoBtn(memoTopic(fb.rule,fb.correct))}</div>`:""}
      <button class="btn primary" id="sesCont">Continuer</button></div>`;
  }else if(STEPS[st.type].foot)foot=STEPS[st.type].foot(st);
  app.innerHTML=`<section class="view ses">${head}<div class="sesbody">${body}</div>${foot}</section>`;
  $("#sesQuit").onclick=()=>{SES=null;location.hash="today"};
  if($("#sesCont")){$("#sesCont").onclick=sesNext;$("#sesCont").focus()}
  if(SES.state!=="fb"&&STEPS[st.type].bind)STEPS[st.type].bind(st,app);
}
const checkBtn=(label="Vérifier",extra="")=>`<div class="sesfoot">${extra}<button class="btn primary" id="sesCheck" disabled>${label}</button></div>`;
function typedCheck(st,val,kind){
  const it=st.it,ok=it.ans.some(a=>norm(a)===norm(val));
  if(ok||!SAMPLE||!val.trim()||!["translate","fix","listen"].includes(kind)){sesResult(ok,it,val);return}
  $("#sesCheck").disabled=true;$("#sesCheck").textContent="Je vérifie…";
  evaluate(it,val).then(r=>sesResult(r.verdict==="correct",it,val,{correct:r.corrected||it.ans[0],rule:r.rule||it.rule,errors:r.errors,msg:r.verdict==="almost"?"Presque !":null}));
}
const STEPS={
  chart:{html:st=>{const it=st.items[SES.sub];if(!it)return "";const [tn,rest]=it.ask.split(" · ");
      const isV=it.kind==="verb",card=isV?CARDS.find(c=>c.id===it.card):null;
      return `<div class="sescard"><div class="row"><span class="res neutral">${SES.sub+1} / ${st.items.length}</span>${isV?`<button class="btn small" data-irrlist="1">${ICON.abc}<span>Liste</span></button>`:`<button class="btn small" data-chart="1">${ICON.grid}<span>Tableau</span></button>`}</div><div class="ccname big">${isV?"Passé + participe passé":esc(tn)}</div><div class="sesq en">${isV?esc(it.ask)+(card&&card.frMeaning?` <span class="muted" style="font-size:.7em">(${esc(card.frMeaning)})</span>`:""):esc(rest)}</div><input type="text" class="f" id="chIn" placeholder="Phrase complète" autocomplete="off" autocapitalize="off" spellcheck="false" style="font-size:1.3rem;color:var(--blue)"><div id="chFb"></div></div>`},
    foot:()=>`<div class="sesfoot"><button class="btn primary" id="chGo" disabled>Vérifier</button></div>`,
    bind:st=>{const it=st.items[SES.sub],inp=$("#chIn"),b=$("#chGo");inp.focus();inp.oninput=()=>b.disabled=!inp.value.trim();
      const go=()=>{if(b.dataset.next){SES.sub++;SES.st0=Date.now();if(SES.sub>=st.items.length)sesNext();else render();return}
        const v=inp.value.trim(),ok=it.kind==="verb"?localMatch(it,v):it.ans.some(a=>norm(a)===norm(v)),secs=(Date.now()-SES.st0)/1000,slow=ok&&secs>(it.kind==="verb"?6:8);
        recordItem(it,ok,slow,v);beep(ok);if(ok){SES.right++;SES.combo++;SES.maxCombo=Math.max(SES.maxCombo,SES.combo);SES.xp+=slow?2:3}else{SES.wrong++;SES.combo=0;SES.review.push({it,given:v})}
        $("#chFb").innerHTML=ok?resChip(slow?"warn":"ok",slow?"Juste, mais vise plus vite":"Juste !"):`<div class="row">${resChip("ko",v,{strike:true})}${resChip("fix",it.ans[0])}${it.memoKey?memoBtn(it.memoKey):""}</div><div class="small">${esc(it.rule)}</div>`;
        inp.disabled=true;b.textContent="Continuer";b.dataset.next="1";b.disabled=false;b.focus()};
      b.onclick=go;inp.onkeydown=e=>{if(e.key==="Enter"&&inp.value.trim()){e.preventDefault();go()}}}},
  get irr(){return STEPS.chart},
  memo:{html:st=>`<div class="sescard"><h2>${esc(THEME_T[st.lesson.id])}</h2><p class="muted">Un rappel rapide avant de t'entraîner.</p><div class="cheat">${CHEATS[st.lesson.id]}</div>${LESSON_TENSES[st.lesson.id]?`<div class="tcards">${LESSON_TENSES[st.lesson.id].map(k=>tenseCard(ALL_TENSES.find(t=>t.k===k),{more:false})).join("")}</div>`:""}</div>`,
    foot:()=>`<div class="sesfoot"><button class="btn primary" id="sesMemo">C'est bon, on y va</button></div>`,
    bind:()=>{$("#sesMemo").onclick=sesNext}},
  qcm:{html:st=>{const it=st.it,D=DRILLS[it.id.split("-").slice(1,-1).join("-")],di=D.items[+it.id.split("-").pop()];
      return `<div class="sescard"><div class="sesq en">${esc(di.q)}</div><div class="opts">${shuffle(di.opts.map((o,j)=>({o,j}))).map(x=>`<button class="opt" data-j="${x.j}">${esc(x.o)}</button>`).join("")}</div></div>`},
    bind:st=>{const it=st.it,D=DRILLS[it.id.split("-").slice(1,-1).join("-")],di=D.items[+it.id.split("-").pop()];
      document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const ok=+b.dataset.j===di.a;sesResult(ok,it,di.opts[+b.dataset.j],{correct:di.q.replace("___",di.opts[di.a]),rule:di.why||it.rule})})}},
  reflex:{html:st=>{const k=SES.sub,it=st.items[k];if(!it)return "";const D=DRILLS[it.id.split("-").slice(1,-1).join("-")],di=D.items[+it.id.split("-").pop()];
      return `<div class="sescard"><div class="row"><span class="res neutral">${k+1} / ${st.items.length}</span><span class="spacer"></span><span class="small muted">7 secondes par question</span></div><div class="cdown"><i id="cd"></i></div><div class="sesq en">${esc(di.q)}</div><div class="opts">${shuffle(di.opts.map((o,j)=>({o,j}))).map(x=>`<button class="opt" data-j="${x.j}">${esc(x.o)}</button>`).join("")}</div></div>`},
    bind:st=>{const k=SES.sub,it=st.items[k],D=DRILLS[it.id.split("-").slice(1,-1).join("-")],di=D.items[+it.id.split("-").pop()],t0=Date.now();
      SES.rx=SES.rx||{ok:0,times:[]};const cd=$("#cd");requestAnimationFrame(()=>{cd.style.transition="width 7s linear";cd.style.width="0%"});
      let done=false;const fin=(j)=>{if(done)return;done=true;clearTimeout(tm);const secs=(Date.now()-t0)/1000,ok=j===di.a;
        recordItem(it,ok,ok&&secs>4,j==null?"(temps écoulé)":di.opts[j]);beep(ok);SES.rx.times.push(secs);
        if(ok){SES.rx.ok++;SES.combo++;SES.maxCombo=Math.max(SES.maxCombo,SES.combo);SES.xp+=secs<3?3:2;SES.right++}else{SES.combo=0;SES.wrong++;SES.review.push({it,given:j==null?"":di.opts[j]})}
        document.querySelectorAll(".opt").forEach(b=>{const jj=+b.dataset.j;b.disabled=true;if(jj===di.a)b.classList.add("good");else if(jj===j)b.classList.add("bad")});
        setTimeout(()=>{SES.sub++;if(SES.sub<st.items.length){SES.st0=Date.now();render()}else{const avg=SES.rx.times.reduce((a,b)=>a+b,0)/SES.rx.times.length;
          SES.state="fb";SES.fb={ok:SES.rx.ok>=st.items.length-1,slow:avg>4,msg:`${SES.rx.ok} / ${st.items.length} · ${avg.toFixed(1).replace(".",",")} s en moyenne`+(avg<=3?" : vrai réflexe !":avg<=4?" : bien !":" : encore un peu lent"),correct:null,rule:""};SES.rx=null;render()}},ok?450:1300)};
      const tm=setTimeout(()=>fin(null),7000);
      document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>fin(+b.dataset.j))}},
  fill:{html:st=>{const it=st.it,m=it.ask.match(/^(.*?)___(.*?)(\(([^)]*)\))?\s*$/);
      return `<div class="sescard"><div class="sesq en">${esc(m?m[1]:"")}<input type="text" class="gap" id="gap" autocomplete="off" autocapitalize="off" spellcheck="false">${esc(m?m[2]:"")}</div>${m&&m[4]?`<p class="muted">Verbe : <b class="en">${esc(m[4])}</b></p>`:""}</div>`},
    foot:()=>checkBtn(),
    bind:st=>{const g=$("#gap"),b=$("#sesCheck");g.focus();g.oninput=()=>b.disabled=!g.value.trim();g.onkeydown=e=>{if(e.key==="Enter"&&g.value.trim())b.click()};
      b.onclick=()=>{const v=g.value.trim(),ok=st.it.ans.some(a=>norm(a)===norm(v));sesResult(ok,st.it,v,{correct:st.it.ask.replace(/\s*\([^)]*\)\s*$/,"").replace("___",st.it.ans[0])})}}},
  tiles:{html:st=>{const it=st.it,words=toks(it.ans[0]);
      if(!st.bank){const pool=shuffle(["did","was","were","had","didn't","have","is","went","go","does","do","are"].filter(w=>!words.map(x=>x.toLowerCase()).includes(w))).slice(0,3);st.bank=shuffle(words.concat(pool)).map((w,k)=>({w,k}))}
      const used=new Set(SES.ans.map(a=>a.k));
      return `<div class="sescard"><p class="muted">${it.kind==="order"?"Construis la question (trouve l'auxiliaire et la forme du verbe) :":"Traduis en anglais :"}</p><div class="sesq ${it.kind==="order"?"en":""}">${esc(it.ask)}</div>
        <div class="tans">${SES.ans.map((a,x)=>`<button class="wt on" data-x="${x}">${esc(a.w)}</button>`).join("")||`<span class="muted small">Touche les mots dans l'ordre</span>`}</div>
        <div class="tbank">${st.bank.map(b=>`<button class="wt" data-k="${b.k}" ${used.has(b.k)?"disabled":""}>${esc(b.w)}</button>`).join("")}</div></div>`},
    foot:()=>checkBtn(),
    bind:st=>{document.querySelectorAll(".tbank .wt").forEach(b=>b.onclick=()=>{const t=st.bank.find(x=>x.k===+b.dataset.k);SES.ans.push(t);render()});
      document.querySelectorAll(".tans .wt").forEach(b=>b.onclick=()=>{SES.ans.splice(+b.dataset.x,1);render()});
      const c=$("#sesCheck");c.disabled=!SES.ans.length;c.onclick=()=>{const v=SES.ans.map(a=>a.w).join(" "),ok=st.it.ans.some(a=>norm(a)===norm(v));sesResult(ok,st.it,v)}}},
  listen:{html:st=>`<div class="sescard"><div class="row"><button class="bigspk" id="lsPlay">${ICON.speak}<span>Écouter</span></button><button class="btn" id="lsSlow">Plus lent</button></div><textarea id="lsIn" placeholder="Écris ce que tu entends, en anglais" style="min-height:90px"></textarea></div>`,
    foot:()=>checkBtn(),
    bind:st=>{$("#lsPlay").onclick=()=>say(st.it.ans[0]);$("#lsSlow").onclick=()=>{if(TTS)TTS.speak(st.it.ans[0],{language:"en",rate:.7}).catch(()=>sayBrowser(st.it.ans[0]));else{try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(st.it.ans[0]);u.lang="en-GB";u.rate=.65;const v=pickVoice("en-GB")||pickVoice("en-US");if(v){u.voice=v;u.lang=v.lang}speechSynthesis.speak(u)}catch(e){}}};
      const t=$("#lsIn"),b=$("#sesCheck");t.oninput=()=>b.disabled=!t.value.trim();b.onclick=()=>{const v=t.value.trim(),ok=norm(v)===norm(st.it.ans[0]);sesResult(ok,st.it,v,{rule:ok?"":"Réécoute la phrase et repère les mots que tu n'as pas entendus."})}}},
  translate:{html:st=>`<div class="sescard"><p class="muted">Traduis en anglais :</p><div class="sesq">${esc(st.it.ask)}</div><textarea id="trIn" placeholder="Ta traduction en anglais" style="min-height:90px"></textarea></div>`,
    foot:()=>checkBtn(),
    bind:st=>{const t=$("#trIn"),b=$("#sesCheck");t.focus();t.oninput=()=>b.disabled=!t.value.trim();t.onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey&&t.value.trim()){e.preventDefault();b.click()}};b.onclick=()=>typedCheck(st,t.value.trim(),"translate")}},
  fix:{html:st=>`<div class="sescard"><p class="muted">Cette phrase contient une erreur. Écris-la correctement :</p><div class="sesq en">${esc(st.it.ask)}</div><textarea id="fxIn" style="min-height:80px">${esc(st.it.ask)}</textarea></div>`,
    foot:()=>checkBtn(),
    bind:st=>{const t=$("#fxIn"),b=$("#sesCheck");b.disabled=false;b.onclick=()=>typedCheck(st,t.value.trim(),"fix")}},
  open:{html:st=>`<div class="sescard"><p class="muted">Réponds en une ou deux phrases :</p><div class="sesq en">${esc(st.it.ask)}</div><textarea id="opIn" placeholder="Write your answer…" style="min-height:90px"></textarea></div>`,
    foot:()=>checkBtn(),
    bind:st=>{const t=$("#opIn"),b=$("#sesCheck");t.oninput=()=>b.disabled=!t.value.trim();
      b.onclick=()=>{b.disabled=true;b.textContent="Je vérifie…";evaluate(st.it,t.value.trim()).then(r=>sesResult(r.verdict==="correct",st.it,t.value.trim(),{correct:r.corrected,rule:r.rule,errors:r.errors,noSlow:true,msg:r.verdict==="almost"?"Presque !":null}))}}},
  oral:{html:st=>{const it=st.it,rep=it.kind==="repeat";
      return `<div class="sescard"><p class="muted">${rep?"Écoute puis répète à voix haute :":it.kind==="open"?"Réponds à voix haute :":"Dis-le en anglais, à voix haute :"}</p><div class="sesq ${rep||it.kind==="open"?"en":""}">${esc(it.ask)}</div>
        ${rep?`<button class="btn" id="orPlay">${ICON.speak}<span>Réécouter</span></button>`:""}
        ${DICT?`<button class="bigmic ${SES.listening?"on":""}" id="orMic">${ICON.mic}<span>${SES.listening?"Je t'écoute… (touche pour finir)":"Touche et parle"}</span></button><div class="cartr" id="orTr">${esc(SES.heard||"")}</div>`
          :SES.state==="reveal"?`<div class="fbc en say">${esc(it.example||it.ans[0])}</div>`:""}</div>`},
    foot:st=>`<div class="sesfoot"><button class="btn ghost" id="orSkip">${ICON.x}<span>Je ne peux pas parler maintenant</span></button>${DICT?"":SES.state==="reveal"?`<button class="btn" id="orKo">${ICON.x}<span>À revoir</span></button><button class="btn primary" id="orOk">${ICON.check}<span>J'avais bon</span></button>`:`<button class="btn primary" id="orReveal">Voir la réponse</button>`}</div>`,
    bind:st=>{const it=st.it;
      if($("#orPlay"))$("#orPlay").onclick=()=>say(it.ans[0]);
      $("#orSkip").onclick=()=>{SES.noOral=true;if(SES.listening){SES.listening=false;DICT&&DICT.stop().catch(()=>{})}SES.steps.slice(SES.i+1).forEach(s=>{if(s.type==="oral")s.type=ORAL_ALT[s.it.kind]||"translate"});
        st.type=ORAL_ALT[it.kind]||"translate";SES.state="ask";SES.st0=Date.now();render()};
      if($("#orReveal"))$("#orReveal").onclick=()=>{SES.state="reveal";say(it.example||it.ans[0]);render()};
      if($("#orOk"))$("#orOk").onclick=()=>sesResult(true,it,"",{noSlow:true,correct:it.example||it.ans[0]});
      if($("#orKo"))$("#orKo").onclick=()=>sesResult(false,it,"",{correct:it.example||it.ans[0]});
      const mic=$("#orMic");if(mic)mic.onclick=()=>{
        if(SES.listening){sesOralDone();return}
        initDict();SES.heard="";SES.listening=true;SES.lt0=Date.now();SES.lfirst=null;
        DICT.start({language:"en"}).catch(e=>{SES.listening=false;toast(e&&e.code==="not_granted"?"Micro refusé":"Micro indisponible");render()});render()}}},
  pairs:{html:st=>{if(!st.L){st.L=shuffle(st.items.map(i=>({id:i.id,t:i.ans[0]})));st.R=shuffle(st.items.map(i=>({id:i.id,t:i.ask})));st.m={};st.err={};st.pick=null}
      const btn=(side,x)=>`<button class="pair ${st.m[x.id]?"done":""} ${st.pick&&st.pick.side===side&&st.pick.id===x.id?"sel":""}" data-side="${side}" data-id="${x.id}" ${st.m[x.id]?"disabled":""}>${esc(x.t)}</button>`;
      return `<div class="sescard"><p class="muted">Associe chaque mot anglais à sa traduction.</p><div class="pairs"><div class="pcol en">${st.L.map(x=>btn("L",x)).join("")}</div><div class="pcol">${st.R.map(x=>btn("R",x)).join("")}</div></div></div>`},
    bind:st=>{document.querySelectorAll(".pair").forEach(b=>b.onclick=()=>{const side=b.dataset.side,id=b.dataset.id;
      if(!st.pick||st.pick.side===side){st.pick={side,id};if(side==="L")say(st.L.find(x=>x.id===id).t);render();return}
      if(st.pick.id===id){st.m[id]=1;beep(true);SES.combo++;SES.maxCombo=Math.max(SES.maxCombo,SES.combo)}else{st.err[st.pick.id]=1;st.err[id]=1;beep(false);SES.combo=0;b.classList.add("bad")}
      st.pick=null;
      if(Object.keys(st.m).length===st.items.length){const nerr=Object.keys(st.err).length;st.items.forEach(i=>{const ok=!st.err[i.id];recordItem(i,ok,false,"");if(ok){SES.right++;SES.xp+=2}else{SES.wrong++;SES.review.push({it:i,given:""})}});
        SES.state="fb";SES.fb={ok:nerr===0,msg:nerr?`Terminé avec ${plural(nerr,"erreur")}`:"Toutes les paires du premier coup !",correct:null,rule:""};}
      setTimeout(render,st.err[id]?350:0)})}},
  cards:{html:st=>{const it=st.items[SES.sub];if(!it)return "";const flipped=SES.sel==="flip";
      return `<div class="sescard"><div class="row"><span class="res neutral">${SES.sub+1} / ${st.items.length}</span></div><div class="card ${flipped?"flipped":""}" id="scard"><div class="front">${esc(it.ask)}</div>${flipped?`<div class="back en">${esc(it.ans[0])}</div>`:`<div class="note">Dis-le en anglais, puis touche la carte</div>`}</div></div>`},
    foot:st=>SES.sel==="flip"?`<div class="sesfoot"><button class="btn" id="cdKo">${ICON.x}<span>À revoir</span></button><button class="btn primary" id="cdOk">${ICON.check}<span>Je savais</span></button></div>`:"",
    bind:st=>{const it=st.items[SES.sub];
      if($("#scard"))$("#scard").onclick=()=>{if(SES.sel!=="flip"){SES.sel="flip";SES.ft=(Date.now()-SES.st0)/1000;say(it.ans[0]);render()}};
      const g=ok=>{const slow=ok&&SES.ft>5;recordItem(it,ok,slow,"");beep(ok);if(ok){SES.right++;SES.xp+=slow?1:2;SES.combo++}else{SES.wrong++;SES.combo=0;SES.review.push({it,given:""})}
        SES.sub++;SES.sel=null;SES.st0=Date.now();if(SES.sub>=st.items.length){sesNext()}else render()};
      if($("#cdOk"))$("#cdOk").onclick=()=>g(true);if($("#cdKo"))$("#cdKo").onclick=()=>g(false)}},
};
function sesHeard(text,final){
  if(!SES||!SES.listening)return;
  if(!SES.lfirst)SES.lfirst=Date.now();
  if(final)SES.heardF=((SES.heardF||"")+" "+text).trim();
  SES.heard=((SES.heardF||"")+(final?"":" "+text)).trim();const tr=$("#orTr");if(tr)tr.textContent=SES.heard;
  const st=SES.steps[SES.i],want=st&&st.it&&st.it.ans?toks(st.it.ans[0]).length:4,short=toks(SES.heard).length<Math.max(1,Math.round(want*.6));
  clearTimeout(SES.lt);SES.lt=setTimeout(sesOralDone,(final?2800:3600)+(short?1700:0));
}
async function sesOralDone(){
  if(!SES||!SES.listening)return;clearTimeout(SES.lt);SES.listening=false;DICT&&DICT.stop().catch(()=>{});
  const st=SES.steps[SES.i],it=st.it,ans=(SES.heard||"").trim();SES.heard="";SES.heardF="";
  if(!ans){toast("Je n'ai rien entendu, réessaie");render();return}
  const tr=$("#orTr");if(tr)tr.textContent=ans+" · je vérifie…";
  const lat=SES.lfirst?(SES.lfirst-SES.lt0)/1000:null;
  const r=localMatch(it,ans)?{verdict:"correct",corrected:it.ans[0]}:await evaluate(it,ans);
  const slow=r.verdict==="correct"&&lat!=null&&lat>(FLU[it.kind]||6);
  recordItem(it,r.verdict==="correct",slow,ans);
  if(r.verdict==="correct"){SES.right++;SES.combo++;SES.maxCombo=Math.max(SES.maxCombo,SES.combo);SES.xp+=slow?2:4}else{SES.wrong++;SES.combo=0;SES.xp+=1;SES.review.push({it,given:ans})}
  beep(r.verdict==="correct");
  SES.state="fb";SES.fb={ok:r.verdict==="correct",slow,msg:"Tu as dit : « "+ans+" »"+(r.verdict==="almost"?" · presque !":""),correct:r.corrected||it.example||it.ans[0],rule:r.rule||it.rule,errors:r.errors};
  render();if(r.verdict!=="correct")say(r.corrected||it.ans[0]);
}

/* ============ VOICE + WORD TRANSLATION ============ */
function sayBrowser(text){try{const ss=window.speechSynthesis;ss.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-GB";u.rate=.92;const v=pickVoice("en-GB")||pickVoice("en-US");if(v){u.voice=v;u.lang=v.lang}ss.speak(u)}catch(e){toast("Lecture audio indisponible ici")}}
function say(text){text=String(text).replace(/_{2,}/g,"blank").trim();if(!text)return;if(TTS)TTS.speak(text,{language:"en",rate:.9}).catch(e=>{if(e&&e.code!=="viewer_stopped")sayBrowser(text)});else sayBrowser(text)}
let micOn=false,micTA=null,micBtn=null,micInit=false;
function initDict(){if(micInit||!DICT)return;micInit=true;
  DICT.onPartial(({text})=>{if(CAR.active)carHeard(text,false);else if(SES&&SES.listening)sesHeard(text,false);else if(ORAL.phase==="listening")oralHeard(text,false);else if(PRON.phase==="listening")pronHeard(text,false)});
  DICT.onFinal(({text})=>{if(CAR.active){carHeard(text,true);return}if(SES&&SES.listening){sesHeard(text,true);return}if(ORAL.phase==="listening"){oralHeard(text,true);return}if(PRON.phase==="listening"){pronHeard(text,true);return}if(micTA&&document.body.contains(micTA)){micTA.value=(micTA.value?micTA.value.replace(/\s*$/," "):"")+text;micTA.dispatchEvent(new Event("input"))}});
  DICT.onState(({state,reason})=>{if(CAR.active)carDictState(state,reason);if(ORAL.phase==="listening"&&state==="idle"&&reason!=="stopped")oralFinish();if(PRON.phase==="listening"&&state==="idle"&&reason!=="stopped")pronFinish();micOn=state==="listening"||state==="starting";if(micBtn)micBtn.classList.toggle("primary",micOn)})}
function wireMic(btn,ta){micBtn=btn;btn.classList.toggle("primary",micOn);if(micOn)micTA=ta;
  initDict();
  btn.onclick=()=>{if(micOn){DICT.stop().catch(()=>{});return}micTA=ta;DICT.start({language:"en"}).catch(e=>{if(e.code==="not_granted")btn.hidden=true;else if(e.code!=="stopped")toast("Micro indisponible")})};
}
const DICTCACHE={};try{Object.assign(DICTCACHE,JSON.parse(localStorage.getItem("englishlab-dict")||"{}"))}catch(e){}
function decorate(root){root.querySelectorAll(".say").forEach(el=>{if(el.querySelector(":scope > .spk"))return;const b=document.createElement("button");b.className="spk";b.type="button";b.setAttribute("aria-label","Écouter");b.innerHTML=ICON.speak;
  b.onclick=e=>{e.stopPropagation();const c=el.cloneNode(true);c.querySelectorAll(".spk").forEach(x=>x.remove());say(c.textContent)};el.appendChild(b)})}
function wordAt(x,y,zone){let node,off;
  if(document.caretPositionFromPoint){const p=document.caretPositionFromPoint(x,y);if(!p)return null;node=p.offsetNode;off=p.offset}
  else if(document.caretRangeFromPoint){const r=document.caretRangeFromPoint(x,y);if(!r)return null;node=r.startContainer;off=r.startOffset}
  if(!node||node.nodeType!==3||!zone.contains(node))return null;
  const t=node.textContent,re=/[A-Za-z'’-]/;let a=off,b=off;if(!re.test(t[a]||"")&&re.test(t[a-1]||""))a=b=off-1;
  while(a>0&&re.test(t[a-1]))a--;while(b<t.length&&re.test(t[b]))b++;
  const word=t.slice(a,b).replace(/^['’-]+|['’-]+$/g,"");if(!word||!/[A-Za-z]/.test(word))return null;
  const rg=document.createRange();rg.setStart(node,a);rg.setEnd(node,b);const rect=rg.getBoundingClientRect();
  if(x<rect.left-4||x>rect.right+4||y<rect.top-4||y>rect.bottom+4)return null;return{word,rect}}
function hidePop(){const p=document.getElementById("pop");if(p)p.remove()}
function showPop(word,rect,context){
  hidePop();const pop=document.createElement("div");pop.className="pop";pop.id="pop";pop.setAttribute("role","dialog");const key=word.toLowerCase();
  pop.innerHTML=`<div class="row"><span class="w">${esc(word)}</span><button class="spk" id="popSay" aria-label="Écouter">${ICON.speak}</button><span class="spacer"></span><button class="btn ghost small" id="popX" aria-label="Fermer">${ICON.x}</button></div>
   <div id="popBody"><span class="muted small">Traduction…</span></div>
   <div class="row"><button class="btn small typed t-rev" id="popAdd">${ICON.plus}<span>Flashcard</span></button><a class="small" href="https://translate.google.com/?sl=en&tl=fr&text=${encodeURIComponent(word)}" target="_blank" rel="noopener">Google Traduction</a></div>`;
  document.body.appendChild(pop);
  const pw=pop.offsetWidth,ph=pop.offsetHeight;let left=Math.min(Math.max(16,rect.left+rect.width/2-pw/2),innerWidth-pw-16),top=rect.bottom+10;if(top+ph>innerHeight-16)top=Math.max(16,rect.top-ph-10);
  pop.style.left=left+"px";pop.style.top=top+"px";
  $("#popX").onclick=hidePop;$("#popSay").onclick=()=>say(word);
  let res=null;
  const show=r=>{res=r;const b=$("#popBody");if(b)b.innerHTML=`<div class="tr">${esc(r.fr)}</div>${r.type?`<div class="nt">${esc(r.type)}${r.base&&r.base.toLowerCase()!==key?" · forme de base : <b>"+esc(r.base)+"</b>":""}</div>`:""}${r.note?`<div class="nt">${esc(r.note)}</div>`:""}`};
  $("#popAdd").onclick=()=>{save("mycards","m"+Date.now(),{en:(res&&res.base)||word,fr:res?res.fr:"?",note:(res&&res.note)||"",createdAt:Date.now()});hidePop();gain(2)};
  const known=allCards().find(c=>c.en.toLowerCase()===key),ck=key+"|"+context.slice(0,80);
  if(DICTCACHE[ck])return show(DICTCACHE[ck]);
  if(!SAMPLE){$("#popBody").innerHTML=known?`<div class="tr">${esc(known.fr)}</div>`:`<span class="muted small">Traduction automatique indisponible ici : utilise le lien Google Traduction.</span>`;return}
  SAMPLE.json(`Translate the English word "${word}" into French for a French A2 learner, as used in this sentence: "${context.slice(0,300)}". Reply ONLY with JSON: {"fr": short French translation in this context (1-4 words), "type": nature in French (verbe, nom, adjectif, adverbe, préposition, auxiliaire…) plus tense/form if conjugated (e.g. "verbe, passé simple"), "base": base form if different (e.g. "go" for "went") else "", "note": one very short French tip (pronunciation or usage) or ""}`,{modelTier:"quick"})
   .then(r=>{DICTCACHE[ck]=r;try{localStorage.setItem("englishlab-dict",JSON.stringify(DICTCACHE))}catch(e){}show(r)})
   .catch(()=>{const b=$("#popBody");if(b)b.innerHTML=known?`<div class="tr">${esc(known.fr)}</div>`:`<span class="muted small">Traduction indisponible pour l'instant : utilise le lien Google Traduction.</span>`});
}
document.addEventListener("click",e=>{
  if(e.target.closest(".pop"))return;
  if(e.target.closest("button,a,input,textarea,select,.card,summary")){hidePop();return}
  const zone=e.target.closest(".en");if(!zone){hidePop();return}
  const w=wordAt(e.clientX,e.clientY,zone);if(!w){hidePop();return}
  const c=zone.cloneNode(true);c.querySelectorAll(".spk").forEach(x=>x.remove());showPop(w.word,w.rect,c.textContent.replace(/\s+/g," ").trim());
});
addEventListener("keydown",e=>{if(e.key==="Escape")hidePop()});
addEventListener("scroll",hidePop,{passive:true});

/* ============ BOOT (called by the shell once every script is loaded) ============ */
function ELBOOT(){

try{const h=sessionStorage.getItem("el-hash");if(h){sessionStorage.removeItem("el-hash");if(!location.hash)history.replaceState(null,"",h)}}catch(e){}
if(isCoach())loadSnap();else lsLoad();
route();
(async()=>{
  const cl=window.claude;if(!cl||!cl.use){mode="local";render();return}
  const [db,sample,tts,dict,user,assets,art]=await Promise.all(["db","sample","tts","dictation","user","assets","artifact"].map(n=>cl.use(n).catch(()=>null)));
  SAMPLE0=sample;TTS0=tts;DICT0=dict;USER=user;ASSETS=assets;ART=art;applyRole();
  if(USER){try{IS_OWNER=await USER.isOwner()}catch(e){}}
  if(IS_OWNER===false&&ROLE==="student"){ROLE=null;lsSet("el-role",null)}
  if(!db){mode="local";if(isCoach())loadSnap();render();return}
  DB=db;mode="db";COLLS.forEach(c=>{for(const k in S[c])delete S[c][k]});
  let first=COLLS.length;const timer=setTimeout(()=>{if(first>0){mode="local";DB=null;lsLoad();render()}},10000);
  COLLS.forEach(c=>{db.collection(c).onSnapshot(snap=>{
      const o={};snap.docs.forEach(d=>{o[d.id]=d.data()});
      for(const k in S[c])if(!(k in o)&&!pending[c+k])delete S[c][k];
      Object.keys(o).forEach(k=>{if(!pending[c+k])S[c][k]=JSON.parse(JSON.stringify(o[k]))});
      if(first>0&&--first===0){clearTimeout(timer);irrNewSeries();setTimeout(autoPublish,5000)}
      const a=document.activeElement;if(a&&(a.tagName==="TEXTAREA"||a.tagName==="INPUT"))return;
      if(document.querySelector(".ov"))return;
      if(view==="session"&&SES&&!SES.done)return;
      render();
    },e=>console.warn(c,e))});
  render();
})();
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")autoPublish()});
setInterval(()=>{if(view==="today"&&!document.activeElement?.matches("textarea,input")&&!document.querySelector(".ov"))render()},60000);


}
