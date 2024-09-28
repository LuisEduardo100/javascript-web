function register(e){
    // console.log(e.target.parentNode.children.username.value)

    const sectionElement =  e.currentTarget.parentNode.children
    const username = sectionElement.username.value
    const password = sectionElement.password.value
    const confirmPassword = sectionElement.confirmPassword.value

    console.log(
        `username: ${username}\npassword: ${password}\nconfirmPassword: ${confirmPassword}`
    )

    if (password === confirmPassword) {
        alert(`Usuário ${username} cadastrado!`)
        return
    }
    alert('password incorreto.')
}

const registerButton = document.getElementById('register-button')
registerButton.addEventListener('click', register)

function removeEvent() {
    registerButton.removeEventListener("click", register)
    alert("Event Removed")
}

registerButton.addEventListener("mouseover", function(ev) {
    console.log(ev)
})