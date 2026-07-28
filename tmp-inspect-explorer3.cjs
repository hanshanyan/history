const fs = require('fs');
const s = fs.readFileSync('quartz/plugins/explorer-fork/dist/components/index.js', 'utf8');
const m = s.match(/var explorer_inline_default = `(.+?)`;$/ms);
const code = m[1];
const pretty = code.replace(/;/g, ';\n').replace(/{/g, '{\n').replace(/}/g, '}\n');
// Find N function
const i = pretty.indexOf('function N');
console.log(pretty.slice(i, i + 3500));
