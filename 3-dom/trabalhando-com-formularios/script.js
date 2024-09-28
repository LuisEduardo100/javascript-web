const orderForm = document.getElementById('orderForm')

orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault()
    console.log(ev)

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach((item)=>{
        salad += `${item.value}, `
    })

    console.log(
        name,
        address,
        breadType,
        main,
        observations,
        salad.toLowerCase()
    )

    alert(
        "Pedido realizado!"+
        "\nNome do cliente: "+ name +
        "\nEndereço: " + address + 
        "\nTipo de pão: " + breadType +
        "\nRecheio: " + main +" com " + salad.toLowerCase() + 
        "\nObservações: " + observations
    )
})