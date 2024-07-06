function aposta() {
  
    var contador = 0
    var resultado = 0
    
    while (contador < 4) {

        var aposta = parseInt(prompt("Qual vai ser o valor da sua aposta?"));
        contador = contador + 1;

        resultado += aposta;
       
    }

    alert(`O valor do prêmio da aposta é de R$ ${resultado},00.`)
    
}
