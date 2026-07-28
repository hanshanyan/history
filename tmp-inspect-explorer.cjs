const fs = require('fs');
const s = fs.readFileSync('quartz/plugins/explorer-fork/dist/components/index.js', 'utf8');
const m = s.match(/var explorer_inline_default = `(.+?)`;$/ms);
if (!m) { console.log('no match'); process.exit(1); }
const code = m[1];
console.log('length:', code.length);
const keywords = ['collapsed','localStorage','savestate','SaveState','aria-expanded','folderDefaultState','dataset.collapsed','getAttribute','data-collapsed'];
keywords.forEach(k => {
  const idx = code.indexOf(k);
  console.log(k, idx >= 0 ? idx : 'NOT FOUND');
});
const i = code.indexOf('collapsed');
if (i>=0) console.log('\n--- collapsed snippet ---\n' + code.slice(Math.max(0,i-300), i+500));
const j = code.indexOf('localStorage');
if (j>=0) console.log('\n--- localStorage snippet ---\n' + code.slice(Math.max(0,j-300), j+500));
