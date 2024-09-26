function procurandoPalindromos() {
    let palavra = prompt("Insira a palavra para saber se é palíndromo: ")
    let palavraInvertida = ""

    for (let i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i]
    }

    if (palavra === palavraInvertida){
        alert(`É um palíndromo!\n`+
            `${palavra} é igual a ${palavraInvertida}`
        )
    } else {
        alert(`Não é um palíndromo!\n`+
            `${palavra} é diferente de ${palavraInvertida}`
        )
    }
}

procurandoPalindromos()