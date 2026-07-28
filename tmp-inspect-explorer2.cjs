const fs = require('fs');
const s = fs.readFileSync('quartz/plugins/explorer-fork/dist/components/index.js', 'utf8');
const m = s.match(/var explorer_inline_default = `(.+?)`;$/ms);
const code = m[1];
// pretty print-ish: replace ; with ;\n and { with {\n
const pretty = code.replace(/;/g, ';\n').replace(/{/g, '{\n').replace(/}/g, '}\n');
// find the L function and the part where it builds tree and applies state
const i = pretty.indexOf('async function L');
console.log(pretty.slice(i, i + 6000));
