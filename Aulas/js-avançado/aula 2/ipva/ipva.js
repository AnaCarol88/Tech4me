
var valor = parseInt(prompt("Qual o valor atual do carro?"));

var ipva = valor => valor * 0.04;

var valor_ipva = ipva(valor);

alert(`O valor do IPVA é de R$ ${valor_ipva},00 \n\n\n\n\n (feito com arrow function)`);

function ipva1(valor) {
    
    var valor_ipva1 = valor * 0.04;

    alert(`O valor do IPVA é de R$ ${valor_ipva1},00 \n\n\n\n\n (feito com função convencional)`);

}

ipva1(valor);