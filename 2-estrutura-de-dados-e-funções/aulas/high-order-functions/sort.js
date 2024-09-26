const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// o sort altera o array original reordenando como você o definiu
    // personagens.sort((a,b)=>{
    //     return a.nivel - b.nivel
    // })

    // console.log(personagens)
// caso queira preservar o array original, faça uso do slice()

const personagensOrdenados = personagens.slice().sort(function(personagemA, personagemB){
    return personagemA.nivel - personagemB.nivel
})

console.log("Array preservado\n")
console.log(personagens)
console.log("\n\nArray reordenado\n")
console.log(personagensOrdenados)
