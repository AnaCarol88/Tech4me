//Calculadora: Vamos criar uma calculadora onde o usuário digita dois valores e todas as operações aritméticas são impressas na tela: soma, subtração, multiplicação, divisão inteira e divisão real



function calcula () {
    var primeiro_numero = parseFloat(prompt("Digite um número: "));
    var segundo_numero = parseFloat(prompt("Digite outro numero: "));

    var soma = primeiro_numero + segundo_numero;
    var subtraçao = primeiro_numero - segundo_numero;
    var multiplicacao = primeiro_numero * segundo_numero;
    var divisao_real = primeiro_numero / segundo_numero;
    var divisao_inteira = Math.floor(primeiro_numero / segundo_numero);

    alert("soma = " + soma + "\nSubtração = " + subtraçao + "\nmultiplicação = " + multiplicacao + "\ndivisão real = " + divisao_real + "\ndivisão inteira = " + divisao_inteira  
    )
        
}