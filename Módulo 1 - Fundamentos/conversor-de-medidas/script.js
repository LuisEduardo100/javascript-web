function conversor() {
    const metros = prompt("Insira um valor em metros: ")
    const mm = metros * 1000
    const cm = metros * 100
    const dm = metros * 10
    const dam = metros / 10
    const hm = metros / 100
    const km = metros / 1000

    alert(`${metros} metros corresponde à: \n${mm} milímetros\n${cm} centímetros\n${dm} decímetros\n${dam} decâmetros\n${hm} hectômetros\n${km} quilômetros`)
}

conversor()