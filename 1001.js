var input = require('fs').readFileSync('stdin', 'utf8');
var somar = input.split('\n');

var A = Number(somar.shift())
var B = Number(somar.shift())

var X = A + B

console.log("X = " + X)