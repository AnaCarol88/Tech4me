/* Faça um algoritmo que peça pro usuário digitar qualquer número positivo.
Ao final do programa deverá exibir quantos desses números entre 100 e 200 foram digitados,
para interromper o programa o usuário deverá digitar 0. */

function numeros() {
    
    var contador = 0

    do {
        var numero = prompt("Digite um número positivo (0 para sair)");

        if (numero > 100 && numero < 200) {
            contador++;
        }
        
    } while (numero != 0);

    alert(`Dos números digitados, ${contador} estão entre 100 e 200.`)
}

numeros()