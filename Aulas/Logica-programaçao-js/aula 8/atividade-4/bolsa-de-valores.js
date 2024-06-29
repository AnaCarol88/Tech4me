//Comprando ações na Bolsa de valores:

//Crie uma função que recebe por parâmetro o código da ação, o valor de uma ação, 
//a quantidade de ações que se deseja comprar e retorna o valor da compra.

//✅ Use literais - O programa não precisa de entradas
//✅ Faça a chamada da função pelo menos 3 vezes



function acao() {

    var codigo = "HATS34";
    var preco = parseFloat(19);
    var quantidade = parseFloat(100);
    
    return valor (preco, quantidade);
}

function valor(numero1, numero2) {
    
    var pagar = numero1 * numero2;

    return pagar;
}

function compra() {
    
    var valor_da_compra = acao();

    console.log("valor da compra: R$ " + valor_da_compra + ".00");
}

compra();