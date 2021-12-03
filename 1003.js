var input = require('fs').readFileSync('stdin', 'utf8');
var somar = input.split('\n');

var A = parseInt(somar.shift())
var B = parseInt(somar.shift())

var SOMA = A+B

console.log("SOMA = " + SOMA)