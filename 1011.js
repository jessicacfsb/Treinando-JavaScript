var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var pi = 3.14159;
var r = Number(dados.shift());

var volume = (4.0/3) * pi * Math.pow(r, 3);

console.log("VOLUME = " + volume.toFixed(3))
