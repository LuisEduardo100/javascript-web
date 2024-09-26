// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
// function calcular(a, b, operacao) {
//     console.log("Realizando uma operação.")
//     const resultado = operacao(a, b)
//     return resultado
// }

// function somar(x, y){
//     console.log("Realizando uma soma")
//     return x+y
// }

// calcular(1, 2, somar)
// console.log(somar) // retorna a própria função
// console.log(somar(1,1)) // chama a função retornando o seu resultado

// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
/*
    calcular(9, 2, function (x, y) {
        console.log("Realizando substração.")
        return x - y
    })
*/

// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
    console.log({
      elemento,
      indice,
      array
    })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
// Forma tradicional
    // for (let i = 0; i < lista.length; i++) {
    //   exibirElemento(lista[i], i, lista)
    // }
// Forma funcional
    // lista.forEach(exibirElemento)
// Também poderia ser feito:
lista.forEach((elemento, indice, array) =>{ //callback function 
    console.log({
      elemento,
      indice,
      array
    })
  })