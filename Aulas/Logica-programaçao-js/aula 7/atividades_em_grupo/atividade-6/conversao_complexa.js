//Multi temperaturas: O programa "Celsius para Fahrenheit" será adaptado para que, além de informar a temperatura, o usuário também irá digitar se a medida Fahrenheit ou Celsius. O sistema fará então a conversão apropriada: Celso para Fahrenheit ou Fahrenheit para Celsius



function conversao() {
    
    escala = prompt("Informe a escala de temperatura para a conversão (F ou C):").toUpperCase();

    temperatura = parseInt(prompt("Informe a temperatura:"));

    if (escala == "C") {
        var celsius = (temperatura * 9/5) + 32
        alert( temperatura + " °C em Fahrenheit, é: " + celsius + " °F");
    } else {
        var Fahrenheit = (temperatura - 32 ) *  5/9
        alert( temperatura + " °F em celsius, é: " + Fahrenheit + " °C");
    }
}
