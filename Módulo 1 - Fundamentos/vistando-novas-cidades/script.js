
function novaCidade() {
    let nome = prompt("Qual o seu nome?")
    let cidade = prompt("Você já visitou alguma cidade? (sim/não)")
    let cidadesVisitadas = ""
    let soma = 0;

    while (cidade == "sim") {
        cidade = prompt("Qual nome da cidade que visitaste?")
        cidadesVisitadas += cidade+", "
        cidade = prompt("Você já visitou alguma outra cidade? (sim/não)")
        soma ++ 
        if (cidade == "não"){
            alert(`${nome} já visitou ${soma} cidade(s). \nSendo elas: ${cidadesVisitadas}`)
            break;
        }
    }
    
}
novaCidade()