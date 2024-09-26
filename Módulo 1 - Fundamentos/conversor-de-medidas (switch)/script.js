function conversor() {
    const metros = prompt("Insira um valor em metros: ")
    const mm = metros * 1000
    const cm = metros * 100
    const dm = metros * 10
    const dam = metros / 10
    const hm = metros / 100
    const km = metros / 1000

    const opcao = prompt("Para qual medida quer converter? \n1- mm \n 2- cm \n 3- dm \n 4- dam \n 5- hm \n 6- km")

    switch (opcao) {
        case "1":
            alert(`${metros} metros corresponde à ${mm} milímetros`)
            break;
        case "2":
            alert(`${metros} metros corresponde à ${cm} centímetros`)
            break;
        case "3":
            alert(`${metros} metros corresponde à ${dm} decímetros`)
            break;
        case "4":
            alert(`${metros} metros corresponde à ${dam} decâmetros`)
            break;
        case "5":
            alert(`${metros} metros corresponde à ${hm} hectômetros`)
            break;
        case "6":
            alert(`${metros} metros corresponde à ${km} quilômetros`)
            break;
        default: 
            alert("Opção inválida")
            break;
    }
}

conversor()