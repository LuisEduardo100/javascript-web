function soltou(){
    console.log("soltou")
}
function segurou(){
    console.log("segurou")
}
function apertou(){
    console.log("apertou")
}

const input = document.getElementById('input')
input.addEventListener('keyup', soltou)
input.addEventListener('keydown', apertou)
input.addEventListener('keypress', segurou)
