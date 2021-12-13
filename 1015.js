var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var dados1 = dados.shift().split(" ")
var dados2 = dados.shift().split(" ")

var x1 = parseFloat(dados1.shift())
var x2 = parseFloat(dados2.shift())
var y1 = parseFloat(dados1.shift())
var y2 = parseFloat(dados2.shift())

var distancia = Math.pow(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2), 0.5)
console.log(distancia.toFixed(4))