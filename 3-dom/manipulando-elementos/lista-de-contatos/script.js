function addContact(){
    const h3 = document.createElement('h3')
    h3.innerHTML = "Contato"


    const section = document.querySelector('.contact-list')
    
    const ul = document.createElement('ul')

    // name
    const nameLi = document.createElement('li')
    nameLi.innerText = "nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)

    // phone 
    const phoneLi = document.createElement('li')
    phoneLi.innerText = "telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)

    // address
    const addressLi = document.createElement('li')
    addressLi.innerHTML = "<label for='address'>endereço: </label>"
    const addressInput = document.createElement('input')
    addressInput.id = 'address'
    addressInput.type = 'text'
    addressLi.appendChild(addressInput)

    // appending 
    ul.append(nameLi, phoneLi, addressLi)
    section.append(h3, ul)
}

function removeContact(){
    const section = document.querySelector('.contact-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    console.log("TITLE : ", titles)
    console.log("UL : ", contacts)
    section.removeChild(titles[titles.length-1])
    section.removeChild(contacts[contacts.length-1])

}