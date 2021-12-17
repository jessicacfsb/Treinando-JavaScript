var input = require('fs').readFileSync('stdin', 'utf8');
var segundosTotais = parseInt(input);

var converterEmHoras = parseInt(segundosTotais/3600)
segundosTotais = segundosTotais %3600

var converterEmMinutos = parseInt(segundosTotais/60)
segundosTotais = segundosTotais % 60

var converterEmSegundos = parseInt(segundosTotais/1)

console.log(converterEmHoras + ":" + converterEmMinutos + ":" + converterEmSegundos)

/*

var converterEmHoras = segundosTotais/3600
console.log(Math.floor(converterEmHoras) + ":")
segundosTotais = segundosTotais%3600

converterEmHoras = segundosTotais/60
console.log(Math.floor(converterEmHoras) + ":")
segundosTotais = segundosTotais%60

converterEmHoras = segundosTotais/1
console.log(Math.floor(converterEmHoras))
*/