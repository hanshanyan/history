const fs = require('fs');
const path = 'quartz/plugins/explorer-fork/dist/components/index.js';
let s = fs.readFileSync(path, 'utf8');

const before = `let r={};for(let t of F){try{JSON.parse(localStorage.getItem("fileTree")||"[]").forEach(n=>{r[n.path]=n.collapsed})}catch(t){console.error("[Explorer] Error loading saved state:",t)}}`;
const after = `let r={};for(let t of F){if(t.dataset.savestate!=="false"){try{JSON.parse(localStorage.getItem("fileTree")||"[]").forEach(n=>{r[n.path]=n.collapsed})}catch(t){console.error("[Explorer] Error loading saved state:",t)}}}`;

if (!s.includes(before)) {
  console.error('BEFORE string not found');
  process.exit(1);
}
s = s.replace(before, after);

const before2 = `for(let t of document.getElementsByClassName("explorer")){let n=t.querySelector(".mobile-explorer");n&&(n.classList.remove("hide-until-loaded"),n.checkVisibility&&n.checkVisibility()&&(t.classList.add("collapsed"),t.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll")))}`;
const after2 = `for(let t of document.getElementsByClassName("explorer")){let n=t.querySelector(".mobile-explorer");n&&n.classList.remove("hide-until-loaded");if(t.dataset.collapsed==="collapsed"){t.classList.add("collapsed");t.setAttribute("aria-expanded","false");document.documentElement.classList.remove("mobile-no-scroll")}}`;

if (!s.includes(before2)) {
  console.error('BEFORE2 string not found');
  process.exit(1);
}
s = s.replace(before2, after2);

fs.writeFileSync(path, s);
console.log('patched', path);
