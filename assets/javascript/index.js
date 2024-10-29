
//funções

function mudar_pagina(id_competicao){

    const url = 'http://127.0.0.1:5500/views/competicao.html?id_competicao='+id_competicao+

    console.log (id.competicao)
    window.location.href = url

}
//execução do arquivo
let competicoes

competicoes = [
    {
        id: 1,
        descricao: "Campeonato Brasileiro Série A",
        local_imagem: "./assets/img/serie_A.png",
        visivel: true
    },
    {
        id: 2,
        descricao: "Campeonato Brasileiro Série B",
        local_imagem: "assets/img/serie_B.png",
        visivel: true
    },
       { id: 3,
        descricao: "Amistoso seleção brasileira feminina",
        local_imagem: "assets/img/1000_67.png",
        visivel: false
    },
    {
        id: 4,
        descricao: "copa do Brasil profissional",
        local_imagem:"assets/img/copa.png"
    }
]

let div_competicoes = document.getElementById("div-competicoes")

competicoes.forEach(element => {


if(element.visisvel == false) {
    return
}

    div = document.createElement("div")
    div.setAttribute("class", "competicoes")
    div.setAttribute("onclik", "mudar_pagina("+element.id+")")
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

