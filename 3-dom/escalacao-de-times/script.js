const playerName = document.getElementById('name')
const position = document.getElementById('position')
const shirt = document.getElementById('shirt')
const shirtToRemove = document.getElementById('shirt-to-remove')
const buttonToRemove = document.getElementById('button-to-remove')
const buttonEscalar = document.getElementById('button-escalar')

const ul = document.createElement('ul')
const lista = document.getElementById('lista')

function escalar() {
    const newLi = document.createElement('li')
    newLi.id = `camisa=${shirt.value}`
    newLi.innerText = `Jogador camisa ${shirt.value} - ${playerName.value} - ${position.value}`
    ul.appendChild(newLi)

    console.log(newLi.id)
    const confirmacao = confirm(
        `Tem certeza que deseja salvar o jogador camisa ${shirt.value} - ${playerName.value} (${position.value})?`
    )

    if (confirmacao) {
        lista.append(ul)
    }
}

function removePlayer() {
    const li = document.getElementById(`camisa=${shirtToRemove.value}`)

    console.log(li)
    const confirmacao = confirm(
        `Tem certeza que deseja remover o ${li.innerText}?`
    )

    if (confirmacao) {
        ul.removeChild(li)
    }
}
buttonEscalar.addEventListener('click', escalar)
buttonToRemove.addEventListener('click', removePlayer)