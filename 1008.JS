var input = require('fs').readFileSync('stdin', 'utf8');
var salario = input.split('\n');

var id = parseInt(salario.shift())
var horasTrab = parseInt(salario.shift())
var valorHora = parseFloat(salario.shift())

var SALARY = horasTrab*valorHora

console.log("NUMBER = " + id)
console.log("SALARY = U$ " + SALARY.toFixed(2))