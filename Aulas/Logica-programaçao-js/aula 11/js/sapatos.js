
function sapateira(){

    var sapatos = prompt("Qual a posição de 1 a 5 está o sapato que você deseja?");

    switch (sapatos) {
        case "1":
            alert("Sapato roxo");
            break;

        case "2":
            alert("Sapato vinho");
            break;

        case "3":
            alert("Sapato azul");
            break;

        case "4":
            alert("Sapato preto");
            break;

        case "5":
            alert("Sapato verde");
            break;
    
        default: alert("Não foi informado uma posição possível");
            break;
    }

}

sapateira();


function sapateira1(){

    var cores = ["roxo", "vinho", "azul", "preto", "verde"];
    
    var sapatos = parseInt(prompt("Qual a posição de 1 a 5 está o sapato que você deseja?"));

    switch (sapatos) {
        case 1 :
            alert("Sapato " + cores[sapatos - 1]);
            break;

        case 2 :
            alert("Sapato " + cores[sapatos - 1]);
            break;

        case 3 :
            alert("Sapato " + cores[sapatos - 1]);
            break;

        case 4 :
            alert("Sapato " + cores[sapatos - 1]);
            break;

        case 5 :
            alert("Sapato " + cores[sapatos - 1]);
            break;
    
        default: alert("Não foi informado uma posição possível");
            break;
    }

}

sapateira1();