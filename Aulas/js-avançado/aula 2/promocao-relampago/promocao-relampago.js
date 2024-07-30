var min = new Date;
var minutos = parseInt(min.getMinutes());

//const minuto = parseInt(prompt("Qual é número que aparece nos minutos?"));
const valor = parseFloat(prompt("Qual o valor do produto?"));






function par(valor) {
    return (valor - valor * 0.3).toFixed(2);
}

const valor_par = par(valor);


var impar = function (valor) {
    return (valor - valor * 0.25).toFixed(2);
}

const valor_impar = impar(valor);


function desconto(par, impar) {
    
    if (minutos % 2 === 0) {
        
        alert(`O preço com o desconto é R$ ${par}.`);

    } else {
        
        alert(`O preço com o desconto é R$ ${impar}.`);

    }

    /*if (minuto % 2 === 0) {
        
        alert(`O preço com o desconto é R$ ${par}.`);

    } else {
        
        alert(`O preço com o desconto é R$ ${impar}.`);

    }*/

}

desconto(valor_par, valor_impar);