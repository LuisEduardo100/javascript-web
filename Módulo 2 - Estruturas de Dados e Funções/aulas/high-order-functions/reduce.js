// Array usado nos exemplos 
const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// sem reduce
    // let nivelTotal = 0
    // for (let i = 0; i < personagens.length; i++) {
    //   nivelTotal += personagens[i].nivel
    // }
    // console.log(nivelTotal)

// reduce: serve para reduzir um array existente a um valor final qualquer,
    // passando um valor entre cada iteração sobre esse array e retornando ele no final
    // const nivelTotal = personagens.reduce((acumulador, personagem)=>{
    //     return acumulador + personagem.nivel
    // }, 0)
    // console.log(nivelTotal)

const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
        acumulador[personagem.raca].push(personagem)
    } else {
        acumulador[personagem.raca] = [personagem]
    }
    return acumulador
}, {})
console.log(racas)