const vagas = []
function sistema() {
    let opcao = ""
    do {
        opcao = menu()

        switch (opcao) {
            case "1":
                listarVagas()
                break;
            case "2":
                criarVaga()
                break;
            case "3":
                visualizarVaga()
                break;
            case "4":
                inscreverCandidato()
                break;
            case "5":
                excluirVaga()
                break;
            case "6":
                alert("Saindo...")
                break;
            default:
                alert("Entrada inválida.")
        }
    }
    while (opcao != "6")
}


function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, índice) => {
        textoFinal += `${índice}º - ${vaga.nome} (${vaga.candidatos.length} candidatos)\n`
    }, "")
    alert(vagasEmTexto)
}
function criarVaga() {
    const nome = prompt("Nome para a vaga: ")
    const descricao = prompt("Descrição da vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")

    const confirm = confirm(`Deseja confirmar os seguintes dados?` +
        `Nome: ${nome}` +
        `Descrição: ${descricao}` +
        `dataLimite: ${dataLimite}`
    )

    if (confirm) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert(`Vaga criada.`)
    }
}
function visualizarVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
        `${textoFinal}\n - ${candidato}.`
    }, "")

    alert(`Vaga nº ${indice}\n` +
        `Nome: ${vaga.nome}` +
        `Descrição: ${vaga.descricao}` +
        `Data limite: ${vaga.dataLimite}` +
        `Quantidade de candidatos: ${vaga.candidatos.length}` +
        `Candidatos inscritos: ${candidatosEmTexto}`
    )
}
function inscreverCandidato() {
    const nome = prompt("Nome do candidato: ")
    const indice = prompt("Informe o indice da vaga para qual candidato deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(`Deseja inscrever o candidato ${nome} na vaga ${indice} - ${vaga.nome}?\n` +
        `Descrição: ${vaga.descricao}\n` +
        `Data limite: ${vaga.dataLimite}`
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição concluída")
    }
}
function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(`Tem certeza que deseja excluir a vaga ${indice} - ${vaga.nome}?\n` +
        `Descrição: ${vaga.descricao}\n` +
        `Data limite: ${vaga.dataLimite}`
    )

    if (confirmacao){
        vagas.slice(indice, 1)
        alert("Vaga excluída.")
    }
}

function menu() {
    return prompt("Escolha uma opção abaixo: \n" +
        "1. Listar vagas" +
        "2. Criar uma nova vaga" +
        "3. Visualizar uma vaga" +
        "4. Inscrever um candidato em uma vaga" +
        "5. Excluir uma vaga" +
        "6. Sair"
    )
}

sistema()