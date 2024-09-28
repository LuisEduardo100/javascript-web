function register(e){

    const username = e.children.name.value
    const password = e.children.password.value
    const passwordConfirmation = e.children.confirmPassword.value
    
    if(password === '') return alert("Insira um password válido!")

    if (password === passwordConfirmation){
        alert(`Usuário ${username} registrado!`)
    } else {
        alert("As senhas não conferem")
    }

}