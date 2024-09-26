function menu() {
    let baralho = ['valete', 'dama', 'rei', 'coringa']
    let opcao = ""
    let carta = ""

    do {
        opcao = prompt(`Quantidade de cartas no baralho ${baralho.length}\n` +
            `1- adicionar carta\n` +
            `2- remover carta\n` +
            `3- sair`
        )

        switch (opcao) {
            case "1":
                carta = prompt("Digite o nome da carta para adicionar: ")
                baralho.unshift(carta)
                alert(`Carta adicionada! Quantidade de cartas no baralho ${baralho.length}\n` +
                    `Carta adicionada:  ${baralho[0]}`
                )
                break;
            case "2":
                let cartaRetirada = baralho.shift()
                if (!cartaRetirada) {
                    alert(`Não há carta no baralho!`)
                } else {
                    alert(`Carta retirada! Quantidade de cartas no baralho ${baralho.length}\n` +
                        `Carta removida ${cartaRetirada}`
                    )
                }
                break;
            case "3":
                alert(`Encerrado...`)
                break;
            default:
                alert("Opção inválida.")
        }
    } while (opcao != "3")
}

menu()
