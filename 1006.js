var input = require('fs').readFileSync('stdin', 'utf8');
var multiplicar = input.split('\n');

var A = parseFloat(multiplicar.shift())
var B = parseFloat(multiplicar.shift())
var C = parseFloat(multiplicar.shift())

var MEDIA = (A*2 + B*3 + C*5) / 10

console.log("MEDIA = " + MEDIA.toFixed(1))