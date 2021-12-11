var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var dadosInput = dados.shift().split(" ")

var a = parseInt(dadosInput.shift())
var b = parseInt(dadosInput.shift())
var c = parseInt(dadosInput.shift())

var maiorAB = (a+b+Math.abs(a-b))/2
var maiorABC = (maiorAB+c+Math.abs(maiorAB-c))/2 

console.log(maiorABC + " eh o maior")