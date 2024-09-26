function robo() {
    let valor = parseInt(prompt("Valor desejado para calcular: "))
    let buffer = ""
    for (let i = 1; i <= 20; i++){
        buffer += `Valores: \n ${i}º1 - `+valor*i+"\n"
    }
    alert(buffer)

}

robo()