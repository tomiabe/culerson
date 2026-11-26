import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'../../website');
const failures=[];let pages=0,refs=0;
function checkLink(file,ref){
 if(/^(?:[a-z]+:|\/\/|#)/i.test(ref)||!ref)return;
 let name=decodeURIComponent(ref.split(/[?#]/)[0]);if(!name)return;
 const target=name.startsWith('/')?path.join(root,name):path.resolve(path.dirname(file),name);
 if(!target.startsWith(root+path.sep)&&target!==root){failures.push('Link outside website: '+ref);return}
 if(!fs.existsSync(target))failures.push(path.relative(root,file)+': missing '+ref);
 refs++;
}
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){
 const file=path.join(dir,item.name);
 if(item.isDirectory()){walk(file);continue}
 if(/\.(?:php|sql|wpress|pem|key)$/.test(item.name))failures.push('Server or private file in website: '+file);
 if(item.name.endsWith('.html')){
  const html=fs.readFileSync(file,'utf8');if(!html.includes('</head>'))continue;pages++;
  if(/(?:127\.0\.0\.1:9407|file:\/\/|\/Users\/tomiabe)/.test(html))failures.push('Local rendering path in '+file);
  if(!html.includes('rel="icon"'))failures.push('Missing favicon in '+file);
  for(const m of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g))checkLink(file,m[1]);
 }
 if(item.name.endsWith('.css'))for(const m of fs.readFileSync(file,'utf8').matchAll(/url\(\s*["']?([^"'\)]+)["']?\s*\)/g))checkLink(file,m[1]);
}}
walk(root);
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`Checked ${pages} pages and ${refs} local asset/page references. All passed.`);
