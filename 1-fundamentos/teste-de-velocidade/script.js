function testeVelocidade() {
    const n1 = prompt("Nome do carro 1: ");
    const v1 = parseFloat(prompt("Insira o valor da velocidade do carro 1: "));
    const n2 = prompt("Nome do carro 2: ");
    const v2 = parseFloat(prompt("Insira o valor da velocidade do carro 2: "));

    const resultDiv = document.getElementById("result")
    let maiorValor;
    if (v1 < v2) {
        maiorValor = v2;
        return  resultDiv.textContent = "A maior velocidade é = "+maiorValor
    } else if(v1 > v2) {
        maiorValor = v1;
        return  resultDiv.textContent = "A maior velocidade é = "+maiorValor
    }  
    return resultDiv.textContent = "As duas velocidades são iguais = "+v1
}

testeVelocidade()