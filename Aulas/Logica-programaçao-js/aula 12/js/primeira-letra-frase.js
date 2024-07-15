
function frase() {
    var frase = "primeira letra da frase";

    var lista = frase.split(" ");

    for (var i = 0; i < lista.length; i++) {
        lista[i] = lista[i].charAt(0).toUpperCase() + lista[i].slice(1);
    }
    
    var pronto = lista.join(" ");

    console.log(pronto);


}

frase()


//professora fez assim:

function frase1() {
    var frase = "qualquer frase aí";

    var lista = frase.split(" ");

    for (var i = 0; i < lista.length; i++) {
        lista[i] = lista[i][0].toUpperCase() + lista[i].substring(1);
    }
    
    var pronto = lista.join(" ");

    console.log(pronto);


}

frase1()