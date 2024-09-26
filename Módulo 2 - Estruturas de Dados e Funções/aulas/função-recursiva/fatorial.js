// Para construir uma função recursiva, geralmente partimos de um caso de base
// para garantir que nossa função não vai continuar se chamando para sempre
// Obs.: !5 (fatorial de 5) = 5 * 4 * 3 * 2 * 1 = 5 * !4
function fatorial(num){
    console.log("num= "+num)
    if (num === 0){ // caso base
        return 1
    } else if(num === 1){ // caso base
        return 1
    } else {
        console.log(num+" * "+(num-1)+"!")
        return num * fatorial(num-1)
    }
}

// console.log("\n5! = "+fatorial(5))
// console.log("\n0! = "+fatorial(0))
console.log("\n9! = "+fatorial(9))
