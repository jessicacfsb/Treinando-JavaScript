var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var tempoDeViagem = parseInt(dados.shift());
var velocidadeMedia = parseInt(dados.shift());
var kmPorLitro = 12;

var gasolinaNecessaria = tempoDeViagem * velocidadeMedia / kmPorLitro;
console.log(gasolinaNecessaria.toFixed(3));