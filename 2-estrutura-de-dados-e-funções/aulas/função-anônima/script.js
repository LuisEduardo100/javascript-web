/*
No javascript as funções podem ser atribuidas
a variáveis como se elas fosse valores
*/

function somar(a, b) {
  return a + b
}

/* 
Repare que não usamos os () ao lado do nome da função,
porque ao fazer isso estaríamos executando a função
*/

const operacao = somar
console.log(operacao(4, 5))

/*
Para isso, podemos usar as funções anônimas, que
nada mais são do que funções que não possuem um nome
*/

const subtrair = function (a, b) {
    return a - b
  }
console.log(subtrair(36, 13))

/*
Com as funções anônimas podemos, por exemplo,
atribuir uma função a uma chave de objeto
*/

const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))
console.log(calculadora.somar(2,2))
console.log(calculadora.subtrair(3,1))