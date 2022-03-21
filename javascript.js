function Calcular() {
    var compra = parseFloat(document.getElementById("valorComprado").value);
    var lucro =  parseFloat(document.getElementById("porcentagemLucro").value);
    var unidades = parseFloat(document.getElementById("quantasUnidades").value);
    var taxas = parseFloat(document.getElementById("taxaProduto").value);

    var calculo = ((((compra * lucro)/100) + compra + taxas)) * unidades;
    calculo = calculo.toFixed(2)
    var calculoUnidade = calculo / unidades;
    calculoUnidade = calculoUnidade.toFixed(2)

    var elementoValorCalculado = document.getElementById("valorCalculado");
    elementoValorCalculado.innerHTML = "Valor total a ser vendido R$ " + calculo;

    var elementoUnidadeCalculado = document.getElementById("valorUnidadeCalculado");
    elementoUnidadeCalculado.innerHTML = "Cada unidade será vendida R$ " + calculoUnidade;

}

function Limpar() {
    location.reload();
}

