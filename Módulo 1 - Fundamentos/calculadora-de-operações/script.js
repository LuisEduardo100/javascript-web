function confirmacaoDoUsuario() {
    alert("Calculadora de operações! Insira dois valores para calcularmos os resultados")

    const a = parseFloat(prompt("Insira o primeiro valor"));
    const b = parseFloat(prompt("Insira o segundo valor"))
    const confirm = window.confirm("Você tem certeza dos valores?")

    if (confirm) {
        const soma = a + b;
        const subtracao = a - b;
        const multiplicacao = a * b;
        const divisao = a / b;
        const resultDiv = document.getElementById("result")

        const result = ("Os valores são: \nSoma= " + soma + "\nSubtração= " + subtracao +
            "\nMultiplicação= " + multiplicacao + "\nDivisão= " + divisao)

        return resultDiv.textContent = result
    } else {
        confirmacaoDoUsuario()
    }
}

confirmacaoDoUsuario()
