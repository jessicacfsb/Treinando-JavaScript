var input = require('fs').readFileSync('stdin', 'utf8');
var multiplicar = input.split('\n');

var A = parseFloat(multiplicar.shift()) * 3.5
var B = parseFloat(multiplicar.shift()) * 7.5

var MEDIA = (A + B) / 10

console.log("MEDIA = " + MEDIA)