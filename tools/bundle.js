/* Builds web/version.json (list of files the app downloads) and copies the web app into www/bundle
   so the Android app also works offline on its very first launch. */
const fs=require("fs"),path=require("path"),cp=require("child_process");
const root=path.join(__dirname,".."),web=path.join(root,"web");
const files=["base.css","mobile.css","config.js","adapters.js","app.js","memovis.js","mobile.js"];
let v=process.env.GITHUB_SHA||"";try{if(!v)v=cp.execSync("git rev-parse HEAD",{cwd:root}).toString().trim()}catch(e){}
if(!v)v="dev-"+Date.now();
const nativeVer=JSON.parse(fs.readFileSync(path.join(root,"package.json"))).version;
const repo=process.env.GITHUB_REPOSITORY||"";
const man={v:v.slice(0,12),files,native:nativeVer,apk:repo?`https://github.com/${repo}/releases/latest/download/english-lab.apk`:"",at:new Date().toISOString()};
fs.writeFileSync(path.join(web,"version.json"),JSON.stringify(man,null,1));
const out=path.join(root,"www","bundle");fs.mkdirSync(out,{recursive:true});
[...files,"version.json"].forEach(f=>fs.copyFileSync(path.join(web,f),path.join(out,f)));
const owner=(repo.split("/")[0]||process.env.EL_OWNER||"OWNER").toLowerCase(),name=repo.split("/")[1]||"english-lab";
fs.writeFileSync(path.join(root,"www","base-url.js"),`window.EL_BASE="https://${owner}.github.io/${name}/";\n`);
console.log("version",man.v,"files",files.length);
