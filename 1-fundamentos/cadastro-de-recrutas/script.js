function cadastroRecruta(){
    const currentDate = new Date();

    const nome = prompt("Insira seu nome: ");
    const sobrenome = prompt("Insira seu sobrenome: ");
    const campoEstudo = prompt("Insira seu campo de estudo: ");
    const anoDeNascimento = parseInt(prompt("Ano de nascimento: "));
    const idade = currentDate.getFullYear() - anoDeNascimento;

    const result = ("Nome: "+nome+" "+sobrenome+"\nCampo de Estudo: "+campoEstudo+"\nAno de nascimento: "+idade)
    const confirm = window.confirm("Você tem certeza desses dados?\n"+result)

    if (confirm) {
        const resultDiv = document.getElementById("result")
        return resultDiv.textContent = result
    } else {
        cadastroRecruta()
    }
}

cadastroRecruta()