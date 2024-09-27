function alterarCor(){
    const div = document.querySelector('.box')
    const button = document.querySelector('button')

    console.log(button)
    console.log(button.classList)
    // if (div.classList.contains('azul')) {
    //     div.classList.remove('azul')
    //     div.classList.add('verde')
    //     button.style.backgroundColor = 'red'
    // } else {
    //     div.classList.remove('verde')
    //     div.classList.add('azul')
    //     button.classList.remove('red')
    //     button.style.backgroundColor = 'violet'
    // }

    // simplificando o código acima com .toggle

    // div.classList.toggle('azul')
    // div.classList.toggle('verde')

    
    if (div.classList.contains('azul')){
        div.classList.replace('azul', 'verde')
    } else {
        div.classList.replace('verde', 'azul')
    }

    button.classList.toggle('red')
}