function tabuada() {
    
    var numero = parseInt(prompt("Digite um número: "));
    var contador = 0;
    
    while (contador < 11) {
        var multiplicacao = contador * numero
        contador = contador + 1   
        console.log(multiplicacao);
    }

}

tabuada();
