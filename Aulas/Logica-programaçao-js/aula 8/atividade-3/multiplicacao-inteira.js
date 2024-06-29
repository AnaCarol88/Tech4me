//Multiplicação inteira: A função multiplicar irá receber dois parâmetros inteiros 
//e retornar o resultado do cálculo.


function numeros() {
    
    var numero1 = parseInt(prompt("Primeiro número para a multiplicação: "));
    var numero2 = parseInt(prompt("Segundo número para a multiplicação: "));

    return multiplicacao(numero1, numero2);
}

function multiplicacao(valor1, valor2) {
    
    var multiplicar = valor1 * valor2;

    return multiplicar;
}

function resultado() {

    var produto = numeros();
   
    alert("O resultado da multiplicação é: " + produto);

}


resultado();



