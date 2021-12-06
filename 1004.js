var input = require('fs').readFileSync('stdin', 'utf8');
var multiplicar = input.split('\n');

var a = parseInt(multiplicar.shift())
var b = parseInt(multiplicar.shift())

PROD = a * b

console.log("PROD = " + PROD)

