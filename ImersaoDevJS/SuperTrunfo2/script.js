var carta1 = {
    nome: "Bulbassauro",
    imagem: "https://gartic.com.br/imgs/mural/jh/jhonfs/bulbassauro.png",
    atributos: {
        ataque: 6,
        defesa: 10,
        magia: 7
    }
}
var carta2 = {
    nome: "Charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    atributos: {
        ataque: 10,
        defesa: 4,
        magia: 6
    }
}
var carta3 = {
    nome: "Pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 10
    }
}

var cartaComputador
var cartaUsuario
var cartas = [carta1, carta2, carta3]

function sortearCarta() {
    var indiceCartaComputador = parseInt(Math.random() * 3)
    cartaComputador = cartas[indiceCartaComputador]

    var indiceCartaUsuario = parseInt(Math.random() * 3)
    cartaUsuario = cartas[indiceCartaUsuario]

    while (cartaUsuario == cartaComputador) {
        indiceCartaUsuario = parseInt(Math.random() * 3)
        cartaUsuario = cartas[indiceCartaUsuario]
    }

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirCartaJogador()
}

function exibirCartaJogador() {
    //Recuperar o ID da carta no HTML
    var divCartaJogador = document.getElementById("carta-jogador")
    //A propriedade style pode alterar o estilo CSS diretamente no HTML, com o JSX podemos adicionar HTML através do JS. Escreva em TemplateString -> Duas crases
    divCartaJogador.style.backgroundImage = `url(${cartaUsuario.imagem})` //${} permite adicionar JS diretamente no template string, facilitando a obtenção do parâmetro desejado
    //"url(" + cartaJogador.imagem + ")" -> É a mesma coisa
    //Pegar a moldura
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>" //Abertura da div
    var opcoesTexto = "" //Utilizar as opções já criadas
    for (var atributo in cartaUsuario.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaUsuario.atributos[atributo] + "<br>"
    }
    var nome = `<p class="carta-subtitle">${cartaUsuario.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>" //Fechamento da div

}

function exibirCartaComputador() {
    var divCartaComputador = document.getElementById("carta-maquina")
    divCartaComputador.style.backgroundImage = `url(${cartaComputador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = ""
    for (var atributo in cartaComputador.atributos) {
        opcoesTexto += `<p> ${atributo} ${cartaComputador.atributos[atributo]}</p>`
    }
    var nome = `<p class="carta-subtitle">${cartaComputador.nome}</p>`
    divCartaComputador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function pegaAtributoSelecionado() {
    var elementosRadio = document.getElementsByName("atributo")
    for (var i = 0; i < elementosRadio.length; i++) {
        if (elementosRadio[i].checked == true) {
            return elementosRadio[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = pegaAtributoSelecionado()
    var valorCartaUsuario = cartaUsuario.atributos[atributoSelecionado]
    var valorCartaComputador = cartaComputador.atributos[atributoSelecionado]
    var resultado = document.getElementById("resultado")
    if (valorCartaUsuario > valorCartaComputador) {
        resultado.innerHTML = "Você venceu"
    } else if (valorCartaComputador > valorCartaUsuario) {
        resultado.innerHTML = "Você perdeu"
    } else {
        resultado.innerHTML = "Empate"
    }
    document.getElementById("btnJogar").disabled = true
    exibirCartaComputador()
}

//DESAFIOS
/*
-Adicionar um baralho com várias outras cartas, com um sistema para receber a carta do jogador que perdeu (dois arrays de cartas), o array com as cartas do jogador e um com as cartas da maquina, quando o jogador ganha, a carta da maquina vai para ele, quando ele perde, vai para a maquina. O perdedor será aquele que tiver seu array zerado.
-Parâmetros para fazer uma função executar duas funções */