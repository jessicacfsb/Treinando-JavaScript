var input = require('fs').readFileSync('stdin', 'utf8');
var multiplicar = input.split('\n');

var A = parseInt(multiplicar.shift())
var B = parseInt(multiplicar.shift())
var C = parseInt(multiplicar.shift())
var D = parseInt(multiplicar.shift())

var DIFERENCA = (A*B-C*D)

console.log("DIFERENCA = " + DIFERENCA)