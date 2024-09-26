// É fundamental que essa função  tenha formas de parar de chamar novas funções
function dobrar(num) {
    console.log(num)
    dobrar(num * 2)
}

dobrar(1) // infinity => RangeError: Maximum call stack size exceeded (estouro da pilha de chamadas)