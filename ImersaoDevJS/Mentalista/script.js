//Variável que contém o número escolhido pelo computador
var numeroSecreto = parseInt(Math.random() * 11)
var tentativas = 5

function Chutar() {
  //Capturar o input
  var valorInserido = parseInt(document.getElementById("valor").value)
  //Capturar a div que exibirá a mensagem de resultado
  var resultado = document.getElementById("resultado")
  //Capturar a div que dará a dica em caso de erro
  var dica = document.getElementById("dica")
  //Comparar com o numero escolhido pelo computador limitando a 5 tentativas
  if (tentativas != 0) {
    if (valorInserido == numeroSecreto) {
      resultado.innerHTML = "Você acertou!"
    }
    else if (valorInserido < 0 || valorInserido > 10) {
      resultado.innerHTML = "Digite um valor entre 0 e 10"
    }
    else {
      resultado.innerHTML = "Você errou, você tem mais " + (tentativas - 1) + " tentativas"
      if (valorInserido < numeroSecreto) {
        dica.innerHTML = "O número que você digitou é menor que o número secreto"
      }
      else {
        dica.innerHTML = "O número que você digitou é maior que o número secreto"
      }
      tentativas = tentativas - 1
    }
  }
}