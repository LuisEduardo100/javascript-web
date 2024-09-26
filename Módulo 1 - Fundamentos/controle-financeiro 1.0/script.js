
let qtd = parseFloat(prompt("Valor inicial disponível: "))
function controle() {
    do {
        let opcao = prompt(`Valor disponível: ${qtd}\n1- Adicionar mais\n2- Remover dinheiro\n3- Sair`)
        switch (opcao) {
            case "1":
                let add = parseFloat(prompt(`Valor para adicionar: `))
                qtd += add
                controle()
            case "2":
                let remove = parseFloat(prompt("Valor a remover: "))
                qtd -= remove
                controle()
            case "3":
                alert(`programa encerrado`)
                break;
            default:
                alert(`Opção inválida`)
                controle()
        }
    }
    while (opcao != "3")
}

controle()