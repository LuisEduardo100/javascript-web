/*
Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/ 


function calculoDeDano() {
    const p1 = prompt("Insira o nome do p1: ")
    const pt = parseFloat(prompt("Insira o poder de ataque do p1: "))

    const p2 = prompt("Insira o nome do p2: ")
    const poderEscudo = parseFloat(prompt("Insira a quantidade de escudo: "))
    let vida = parseFloat(prompt("Insira a vida do p2: "))
    const possuiEscudo = prompt("possui escudo? (sim/nao) ")

    if (pt > poderEscudo && (possuiEscudo == "nao")) {
        vida -= pt - poderEscudo
        const resultDiv = document.getElementById("result")
        const output = (`Personagem 1: \n Nome: ${p1} \n Poder de ataque: ${pt}
            Personagem 2 : \n Nome: ${p2} \n Defesa: ${poderEscudo} \n Vida: ${vida} \n Escudo: ${possuiEscudo} 
        `)
        resultDiv.textContent = output
        alert(`Personagem 1: \n Nome: ${p1} \n Poder de ataque: ${pt} \n Personagem 2 : \n Nome: ${p2} \n Defesa: ${poderEscudo} \n Vida: ${vida} \n Escudo: ${possuiEscudo} 
            `)

    } else if (pt > poderEscudo && (possuiEscudo == "sim")) {
        vida -= (pt - poderEscudo)/2
        const resultDiv = document.getElementById("result")
        const output = (`Personagem 1: \n Nome: ${p1} \n Poder de ataque: ${pt}
            Personagem 2 : \n Nome: ${p2} \n Defesa: ${poderEscudo} \n Vida: ${vida} \n Escudo: ${possuiEscudo} 
        `)
        resultDiv.textContent = output
        alert(`Personagem 1: \n Nome: ${p1} \n Poder de ataque: ${pt} \n Personagem 2 : \n Nome: ${p2} \n Defesa: ${poderEscudo} \n Vida: ${vida} \n Escudo: ${possuiEscudo} 
            `)

    } else {
        alert(`O poder de ataque não é suficiente para penetrar a defesa`)

        const resultDiv = document.getElementById("result")
        const output = (`Personagem 1: \n Nome: ${p1} \n Poder de ataque: ${pt}
            Personagem 2 : \n Nome: ${p2} \n Defesa: ${poderEscudo} \n Vida: ${vida} \n Escudo: ${possuiEscudo} 
        `)
        resultDiv.textContent = output
        alert(`Personagem 1: \n Nome: ${p1} \n Poder de ataque: ${pt} \n Personagem 2 : \n Nome: ${p2} \n Defesa: ${poderEscudo} \n Vida: ${vida} \n Escudo: ${possuiEscudo} 
            `)

    }

}

calculoDeDano()