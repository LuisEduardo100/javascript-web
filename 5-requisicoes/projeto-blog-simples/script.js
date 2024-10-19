async function showPosts() {
    let posts = document.querySelector('.posts')
    posts.innerHTML = 'Carregando...'

    const req = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (req.status !== 200) return console.error('Deu problema na requisição!')

    const res = await req.json()

    if (res.length > 0) {
        posts.innerHTML = ''

        for (let i in res) {
            let postDiv = document.createElement('div')
            let postTitle = document.createElement('h1')
            let postComment = document.createElement('h3')

            postComment.style.color = '#5c5c5e'

            postTitle.innerText = res[i].title
            postComment.innerText = res[i].body
            postDiv.innerHTML += '<hr/>'

            postDiv.append(postTitle, postComment)
            posts.append(postDiv)
        }
    } else {
        posts.innerHTML = 'Não há conteúdo por agora.'
    }
}

async function addNewPost(title, comment) {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title,
            body: comment,
            userId: parseInt(Math.random() * 10)
        })
    })

    if (!req.ok) return console.error("Houve um problema na hora de postar")

    title = document.getElementById('title').value = ''
    comment = document.getElementById('comment').value = ''

    showPosts()

}

document.querySelector('#insertPost').addEventListener('click', () => {
    let title = document.getElementById('title').value
    let comment = document.getElementById('comment').value

    if (title && comment) {
        addNewPost(title, comment)
    } else {
        alert("Preencha os campos corretamente")
    }
})

showPosts()
