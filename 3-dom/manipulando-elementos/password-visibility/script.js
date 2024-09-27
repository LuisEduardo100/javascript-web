function mostrarSenha(){
    const passwordInput = document.getElementById('password')
    const mostrarSenhaBtn = document.getElementById('mostrar-senha')

    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text')
        mostrarSenhaBtn.innerText = "Ocultar senha"
    } else {
        passwordInput.setAttribute('type', 'password')
        mostrarSenhaBtn.innerText = "Mostrar senha"
    }
}