var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var distanciaY = parseInt(dados.shift())
var minutos = distanciaY * 2

console.log(minutos + " minutos")