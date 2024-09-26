function calculadoraGeometrica() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        
        switch (opcao) {
            case "1":
                const baseTriangulo = parseFloat(prompt(`Digite a base do triângulo: `))
                const alturaTriangulo = parseFloat(prompt(`Digite altura do triângulo: `))
                const resultadoTriangulo = calcularTriangulo(baseTriangulo, alturaTriangulo)
                alert(`O valor da área do triângulo é de ${resultadoTriangulo.toFixed(2)}`)
                break;
            case "2":
                const baseRetangulo = parseFloat(prompt(`Digite a base do retângulo: `))
                const alturaRetangulo = parseFloat(prompt(`Digite altura do retângulo: `))
                const resultadoRetangulo = calcularRetângulo(baseRetangulo, alturaRetangulo)
                alert(`O valor da área do retângulo é de ${resultadoRetangulo.toFixed(2)}`)
                break;
            case "3":
                const ladoQuadrado = parseFloat(prompt(`Digite o lado do quadrado: `))
                const resultadoQuadrado = calcularQuadrado(ladoQuadrado)
                alert(`O valor da área do quadrado é de ${resultadoQuadrado.toFixed(2)}`)
                break;
            case "4":
                const baseMaior = parseFloat(prompt(`Digite a base maior do trapézio: `))
                const baseMenor = parseFloat(prompt(`Digite a base menor do quadrado: `))
                const alturaTrapezio = parseFloat(prompt(`Digite a altura do trapézio: `))
                const resultadoTrapezio = calcularTrapezio(baseMaior, baseMenor, alturaTrapezio)
                alert(`O valor da área do trapézio é de ${resultadoTrapezio.toFixed(2)}`)
                break;
            case "5":
                const raio = parseFloat(prompt(`Digite o valor do raio do círculo: `))
                const resultadoCírculo = calcularCírculo(raio)
                alert(`O valor da área do círculo é de ${resultadoCírculo.toFixed(2)}`)
                break;
            case "6":
                `Encerrando...`
                break;
            default:
                `Opção inválida.`
                break;
        }
    }
    while (opcao != "6")
}

calculadoraGeometrica()

function exibirMenu(){
    return prompt(`Escolha uma opção abaixo para calcular: \n` +
        `1. Área do triângulo\n` +
        `2. Áre do retângulo\n` +
        `3. Área do quadrado\n` +
        `4. Área do trapézio\n` +
        `5. Área do círculo\n` +
        `6. Sair`
    )
}
function calcularTriangulo(base, altura){
    return base*altura/2.0
}
function calcularRetângulo(base, altura){
    return base*altura
}
function calcularQuadrado(lado){
    return lado*lado
}
function calcularTrapezio(baseMaior, baseMenor, altura){
    return (baseMaior+baseMenor)*altura/2.0
}
function calcularCírculo(raio){
    return Math.pow(raio, 2)*3.14
}