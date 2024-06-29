//2. Desenvolva um algoritmo que receba o valor de um depósito em poupança,
//calcule e mostre o valor após um determinado número de meses de aplicação
//na poupança, sabendo que a poupança rende 5% de juros simples ao mês.

function poupanca() {
    
    var deposito = parseFloat(prompt("Valor que deseja depositar na poupança: R$ "));
    var tempo = parseFloat(prompt("Quantos meses deseja deixar o dinheiro rendendo?"));

    var rendeu = deposito * 0.05 * tempo;
    
    var valor_final = (rendeu + deposito).toFixed(2);

    alert("Valor disponível para ser retirado depois do tempo determinado: \n R$ " + valor_final);
}

poupanca();