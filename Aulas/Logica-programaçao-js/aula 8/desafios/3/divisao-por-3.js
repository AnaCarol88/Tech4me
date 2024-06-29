//3. Desenvolva um algoritmo que receba um valor numérico inteiro,
//calcule e mostre qual o quociente e o resto da divisão desse número por 3.


function divisao() {
    
    var dividendo = parseInt(prompt("Um número para ser dividido por 3:"));

    var quociente = parseInt(dividendo / 3);
    var resto = dividendo % 3;

    alert("O resultado da divisão foi " + quociente + "\n Com o resto igual a " + resto);

}

divisao();