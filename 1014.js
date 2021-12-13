var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var x = parseInt(dados.shift())
var y = parseFloat(dados.shift())

var distancia = x/y

console.log(distancia.toFixed(3) + " km/l")