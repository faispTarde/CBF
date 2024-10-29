
// funções

function mudar_pagina(id_competicao) {


    const url = 'file:///C:/Users/Usuario/Documents/CBF/views/competicao.html?id_competicao='+id_competicao

    console.log(id_competicao)
    window.location.href = url

}







let competicoes 

competicoes = [
    {
        id: 1,
        descricao: "Campeonato Brasileiro série A",
        local_imagem: "./assets/img/br1.png",
        visivel: true

    },
    {
        id: 2,
        descricao: "Campeonato Brasileiro série b",
        local_imagem: "./assets/img/br2.png",
        visivel: true

    },
    {
        id: 3,
        descricao: "Campeonato Brasileiro série c",
        local_imagem: "./assets/img/fem.png",
        visivel: true
        
    },
    {
        id: 4,
        descricao: "Copa do Brasil Profissional",
        local_imagem: "./assets/img/br4.png",
        visivel: false

    }

]
let div_competicoes = document.getElementById("div_competicoes")

competicoes.forEach(element => {

    if(element.visivel == false){
        return

    }

    









     div = document.createElement("div")
     div.setAttribute("class", "competicoes")
     div.setAttribute("onclick", "mudar_pagina("+element.id+")")
     div_competicoes.appendChild(div)

    div_imagem = document.createElement("div")
    div_imagem.setAttribute("class", "div-imagem")

    imagem = document.createElement("img")
    imagem.setAttribute("src", element["local_imagem"])
    imagem.setAttribute("class", "competicao-imagem")
    div_imagem.appendChild(imagem)
    div.appendChild(div_imagem)


    div_texto = document.createElement("div")
    texto = document.createElement("span")
    texto.innerHTML = element['descricao']
    div_texto.appendChild(texto)
    div.appendChild(div_texto)



});



