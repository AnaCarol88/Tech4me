function gasolina() {

    var preço = parseFloat(prompt("Preço da gasolina: R$"));

    var valor = parseFloat(preço.toFixed(2));

    alert ("R$ " + valor);
    
}

gasolina();

