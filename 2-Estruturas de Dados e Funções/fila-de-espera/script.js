function fila() {
    let fila = []
    let opcao = ""
    do {
        opcao = prompt(`Pacientes na fila: ${fila.join(", ")}\n`+
            `1- Novo paciente\n`+
            `2- Consultar paciente\n`+
            `3- Sair`
        )

        switch (opcao) {
            case "1":
                const paciente = prompt(`nome do paciente para adicionar na fila?`)
                fila.push(paciente)
                break;
            case "2":
                const pacienteAtendido = fila.shift()
                if (!pacienteAtendido) {
                    alert(`Não há pacientes na fila!`)
                } else {
                    alert(`Paciente ${pacienteAtendido} se dirija ao consultório. `)
                }
                break;
            case "3":
                alert(`Encerrando...`)
                break;
        }
    }
    while (opcao != "3")
}

fila()
