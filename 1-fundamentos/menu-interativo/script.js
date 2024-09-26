function menu() {
    do {
        let opcao = prompt(
            "Seja bem-vindo(a)!\n" +
            "\nEscolha uma das opções abaixo:" +
            "\n1 - Opção Um" +
            "\n2 - Opção Dois" +
            "\n3 - Opção Três" +
            "\n4 - Opção Quatro" +
            "\n5 - Encerar"
        
        )
        switch (opcao) {
            case "1":
                alert(`Opção 1 foi selecionada`)
                break;
            case "2":
                alert(`Opção 2 foi selecionada`)
                break;
            case "3":
                alert(`Opção 3 foi selecionada`)
                break;
            case "4":
                alert(`Opção 4 foi selecionada`)
                break;
            case "5":
                alert(`Programa encerrado!`)
                break;
            default:
                alert(`Opção inválida`)
        }
    }
    while (msg != "5")

}

menu()