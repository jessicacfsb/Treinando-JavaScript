var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

let dadosInput = dados.shift().split(" ")

var a = Number(dadosInput.shift())
var b = Number(dadosInput.shift())
var c = Number(dadosInput.shift())
const pi = 3.14159

var triangulo = a*c /2
var circulo = pi * Math.pow(c, 2)
var trapezio = (a+b)*c /2
var quadrado = Math.pow(b, 2)
var retangulo = a * b

console.log("TRIANGULO: " + triangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))