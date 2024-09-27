const input = document.getElementById('input');
const section = document.getElementById('list');

input.addEventListener('keyup', function (e) {
    const ul = document.createElement('ul')
    console.log(e.key)

    if (e.key === 'Enter' && input.value != '') {
        const newLi = document.createElement('li')
        newLi.innerHTML = input.value
        ul.appendChild(newLi)

        // em termos de perfomance esse código abaixo é ruim
        // ul.innerHTML = `<li>${input.value}</li>`

        input.value = ''
    }
    section.append(ul)
});

