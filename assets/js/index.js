//funções


function mudar_pagina(id_competicao) {
    
    const url = 'http://127.0.0.1:5500/views/competicao.html?id_competicao='+id_competicao

    console.log(id_competicao)
    window.location.href = url
}

//Execução do Arquivo

let competicoes

competicoes = [
    {
        id: 1,
        descricao: "Campeonato Brasileiro Serie A",
        local_image: "./assets/img/brasileiro.png",
        visivel: true
    },
    {
        id: 2,
        descricao: "Campeonato Brasileiro Serie B",
        local_image: "./assets/img/brasileiroB.png",
        visivel: true
    },
    {
        id: 3,
        descricao: "Seleção Brasileira Feminina",
        local_image: "./assets/img/fem.png",
        visivel: true
    },
    {
        id: 4,
        descricao: "Copa do Brasil",
        local_image: "./assets/img/copabr.png",
        visivel: false
    }
]


let div_competicoes = document.getElementById("div_competicoes")


competicoes.forEach(element => {


   if(element.visivel == false) {
        return
   } 


    div = document.createElement("div")
    div.setAttribute("class", "competicoes")
    div.setAttribute("onclick", "mudar_pagina("+element.id+")")
    div_competicoes.appendChild(div)

    

    div_imagem = document.createElement("div")
    div_imagem.setAttribute("class", "div-imagem")

    imagem = document.createElement("img")
    imagem.setAttribute("src", element["local_image"])
    imagem.setAttribute("class", "competicao-imagem")
    div_imagem.appendChild(imagem)
    div.appendChild(div_imagem)


    div_texto = document.createElement("div")
    texto = document.createElement("span")
    texto.innerHTML = element['descricao']
    div_texto.appendChild(texto)
    div.appendChild(div_texto)
});