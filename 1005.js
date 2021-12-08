var input = require('fs').readFileSync('stdin', 'utf8');
var multiplicar = input.split('\n');

var A = parseFloat(multiplicar.shift()) 
var B = parseFloat(multiplicar.shift()) 

var MEDIA = (A * 3.5 + B * 7.5) / 11.0

console.log("MEDIA = " + MEDIA.toFixed(5))