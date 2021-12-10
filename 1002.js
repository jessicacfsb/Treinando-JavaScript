var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var n = 3.14159;
var raio = parseFloat(dados.shift());

var area = n * Math.pow(raio, 2);

console.log("A =" + area.toFixed(4));