var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var dados1 = dados.shift().split(" ")
var dados2 = dados.shift().split(" ")

var codigo1 = parseInt(dados1.shift());
var qtdpecas1 = parseInt(dados1.shift());
var valor1 = parseFloat(dados1.shift());

var codigo2 = parseInt(dados2.shift());
var qtdpecas2 = parseInt(dados2.shift());
var valor2 = parseFloat(dados2.shift());

var valorTotal = (qtdpecas1 * valor1) + (qtdpecas2 * valor2)

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2))