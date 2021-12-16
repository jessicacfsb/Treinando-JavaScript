var input = require('fs').readFileSync('stdin', 'utf8');
var valor = parseInt(input.split('\n'));

var quantidadeDeNotas = parseInt(valor/100)
console.log(`${quantidadeDeNotas} nota(s) de R$ 100,00`)
valor = valor % 100

quantidadeDeNotas = parseInt(valor/50)
console.log(`${quantidadeDeNotas} nota(s) de R$ 50,00`)
valor = valor % 50

quantidadeDeNotas = parseInt(valor/20)
console.log(`${quantidadeDeNotas} nota(s) de R$ 20,00`)
valor = valor % 20

quantidadeDeNotas = parseInt(valor/10)
console.log(`${quantidadeDeNotas} nota(s) de R$ 10,00`)
valor = valor % 10

quantidadeDeNotas = parseInt(valor/5)
console.log(`${quantidadeDeNotas} nota(s) de R$ 5,00`)
valor = valor % 5

quantidadeDeNotas = parseInt(valor/2)
console.log(`${quantidadeDeNotas} nota(s) de R$ 2,00`)
valor = valor % 2

quantidadeDeNotas = parseInt(valor/1)
console.log(`${quantidadeDeNotas} nota(s) de R$ 1,00`)


 
