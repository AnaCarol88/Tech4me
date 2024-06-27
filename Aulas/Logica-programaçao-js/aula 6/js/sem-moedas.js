function dinheiro() {

    var valor = parseFloat(prompt("Valor do produto: R$"));

    var pagar = Math.trunc(valor);

    alert("Você pode pagar: R$ " + pagar + ",00");
}

dinheiro();