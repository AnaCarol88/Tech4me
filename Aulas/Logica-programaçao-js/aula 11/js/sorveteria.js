function sorveteria() {
    
    const sorvetes = ["morango", 4, "uva", 6, "limão", 10, "chocolate", 8, "maracujá", 5];

    var pergunta = parseInt(prompt("Dos sorvetes 1, 3, 5, 7 e 9, qual você escolhe?"));

    var escolhido = sorvetes[pergunta - 1];

    var quantidade = sorvetes [pergunta];

    alert(`O Sabor escolhido foi ${escolhido} e temos ${quantidade} em estoque.`);

}

sorveteria();





function sorveteria1() {
    
    const sorvetes = ["morango", 4, "uva", 6, "limão", 10, "chocolate", 8, "maracujá", 5];

    var pergunta = parseInt(prompt("Qual a posição so sorvete que deseja?"));


    if (pergunta % 2 == 0) {

        var escolhido = sorvetes[pergunta - 2];
        var quantidade = sorvetes [pergunta - 1];
        
    } else {

        var escolhido = sorvetes[pergunta - 1];
        var quantidade = sorvetes [pergunta];
        
    }

    
    alert(`O Sabor escolhido foi ${escolhido} e temos ${quantidade} em estoque.`);   

}

sorveteria1();