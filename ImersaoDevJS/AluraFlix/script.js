//Adicionar o filme na lista, no toque no botão, vai listar os filmes na tela
function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito,) //enviar a variável como argumento
    }else {
        alert("Endereço de filme inválido")
    }
    //Limpar o campo, alterando o valor do elemento para "vazio"
    document.getElementById("filme").value = ""    
}

function listarFilmesNaTela(filme, nome) { //recebe a variável enviada, independente do nome
    var elementoFilmeFavorito = "<img src=" + filme + ">"
    var elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML += elementoFilmeFavorito
}
