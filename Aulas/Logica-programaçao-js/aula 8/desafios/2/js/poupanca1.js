//2.1. Desenvolva um algoritmo que receba o valor de um depósito em poupança,
//calcule e mostre o valor após um determinado número de meses de aplicação
//na poupança, sabendo que a poupança rende 5% de juros compostos ao mês.

function poupanca1() {
    
    var deposito = parseFloat(prompt("Valor que deseja depositar na poupança: R$ "));
    var tempo = parseFloat(prompt("Quantos meses deseja deixar o dinheiro rendendo?"));
    
    var valor_final = (deposito * (1 + 0.05) ** tempo).toFixed(2);
    

    alert("Valor disponível para ser retirado depois do tempo determinado: \n R$ " + valor_final);
}

poupanca1();