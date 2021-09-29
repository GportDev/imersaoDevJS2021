function Converter() {
    //Definir as variáveis que vão capturar e transformar o valor capturado em dolares
    var valorInput = document.getElementById("valor")
    var valorDigitado = valorInput.value
    var valorDigitadoNumerico = parseFloat(valorDigitado)
    //Variável que captura a cotação do dólar
    var cotacaoDolar = document.getElementById("cotacao")
    var cotacaoValor = cotacaoDolar.value
    var cotacaoTransformada = parseFloat(cotacaoValor)
    //Fazer a conversão do valor
    var convertido = valorDigitadoNumerico * cotacaoTransformada
    //Adicionar o valor convertido na página
    var valorConvertido = document.getElementById("valorConvertido")
    var fraseDeResultado = "O valor convertido em Reais é de R$ " + convertido
    valorConvertido.innerHTML = fraseDeResultado
    //Fazer a conversão para BTC
    var valorBtc = convertido / 46500
    var fraseComBtc = "O valor é equivalente a " + (valorBtc).toFixed(5) + " Bitcoins"
    var valorBtcNaTela = document.getElementById("valorEmBtc")
    valorBtcNaTela.innerHTML = fraseComBtc
  }
  