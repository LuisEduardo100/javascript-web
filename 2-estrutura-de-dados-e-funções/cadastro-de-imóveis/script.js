function menu() {
    let opcao = ""
    let listaImóveis = []


    do {
        opcao = prompt(`Imóveis cadastrados: ${listaImóveis.length}\n` +
            `Deseja cadastrar mais um ímóvel?\n` +
            `  1- Salvar imóvel\n` +
            `  2- Mostrar imóveis salvos\n` +
            `  3- Sair`
        )

        switch (opcao) {
            case "1":
                let imóvel = {}

                imóvel.proprietario = prompt(`insira o nome do proprietário: `)
                imóvel.qtdBanheiros = parseInt(prompt(`quantidade de banheiros: `))
                imóvel.qtdQuartos = parseInt(prompt(`quantidade de quartos: `))
                imóvel.possuiGaragem = prompt(`possui garagem? (sim/não)`)

                const confirma = confirm(`Deseja salvar esse imóvel?` +
                    `\nProprietário: ${imóvel.proprietario}` +
                    `\nQuartos: ${imóvel.qtdQuartos}` +
                    `\nBanheiros: ${imóvel.qtdBanheiros}` +
                    `\nPossui garagem? ${imóvel.possuiGaragem}`
                )
                if (confirma) {
                    listaImóveis.push(imóvel)
                    alert(`O imóvel foi salvo com sucesso!`)
                }
                break;
            case "2":
                if (listaImóveis.length == 0) {
                    alert(`Não há imóveis cadastrados`)
                } else {
                    for (let i = 0; i < listaImóveis.length; i++) {
                        alert(`Imóvel ${i + 1} - \n Proprietário: ${listaImóveis[i].proprietario}\n `+
                            `Quantidade de banheiros: ${listaImóveis[i].qtdBanheiros}\n`+
                            `Quantidade de quartos: ${listaImóveis[i].qtdQuartos}\n`+
                            `Possui garagem? ${listaImóveis[i].possuiGaragem}`
                        )
                    }
                }
                break;
            case "3": 
                alert(`Saindo...`)
                break;
            default: 
                alert(`Opção inválida!`)
        }
    } while (opcao != "3")
}

menu()
