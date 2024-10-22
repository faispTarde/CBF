
let competicoes

competicoes = [
    {
        id: 1,
        descricao: "Campeonato Brasileiro Serie A",
        local_image: "http://conteudo.cbf.com.br/credenciamento/logo_competicoes/42_1.png"
    },
    {
        id: 2,
        descricao: "Campeonato Brasileiro Serie B",
        local_image: "http://conteudo.cbf.com.br/credenciamento/logo_competicoes/42_2.png"
    },
    {
        id: 3,
        descricao: "Amistosos da Seleção Brasileira Feminina",
        local_image: "http://conteudo.cbf.com.br/credenciamento/logo_competicoes/1000_67.png"
    }
]


let div_competicoes = document.getElementById("div_competicoes")

competicoes.forEach(element => {
    div = document.createElement("div")
    div.setAttribute("class", "competicoes")
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