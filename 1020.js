var input = require('fs').readFileSync('stdin', 'utf8');
var anosTotais = parseInt(input);

var anos = parseInt(anosTotais/365)
anosTotais = anosTotais%365

var meses = parseInt(anosTotais/30)
anosTotais = anosTotais%30

var dias = parseInt(anosTotais)

console.log(anos + " ano(s)")
console.log(meses + " mes(es)")
console.log(dias + " dia(s)")