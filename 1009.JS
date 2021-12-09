var input = require('fs').readFileSync('stdin', 'utf8');
var dados = input.split('\n');

var nome = dados.shift()
var salario = Number(dados.shift())
var vendidos = Number(dados.shift())

var salarioBruto = salario + (vendidos*0.15)

console.log("TOTAL = R$ " + salarioBruto.toFixed(2))