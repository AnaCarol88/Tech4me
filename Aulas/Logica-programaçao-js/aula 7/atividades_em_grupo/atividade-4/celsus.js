//Celsius para Fahrenheit: Crie um programa Java escrito que irá solicitar que o usuário digite uma temperatura em graus celsius. O sistema fará conversão para graus Fahrenheit e o valor será impresso na tela ponto pesquisa na internet a fórmula de conversão entre essas duas unidades de medida



function conversao() {
    temperatura = parseInt(prompt("Informe uma temperatura em graus Celsius:"));

    var celsius = (temperatura * 9/5) + 32;

    alert( temperatura + " °C em Fahrenheit, é: " + celsius + "°F");
}