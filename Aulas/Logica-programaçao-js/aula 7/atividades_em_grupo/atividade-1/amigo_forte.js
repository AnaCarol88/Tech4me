//Amigo mais forte: Em um parque de diversões existe um jogo onde os colegas pegam uma marreta de borracha e acerta com força em uma alavanca, fazendo um pino se mover em uma régua com valores numéricos. O amigo que começar a maior altura é o vencedor. Escreva o programa que irá receber o nome da altura alcançado por três amigos. O sistema irá exibir a resposta o nome do amigo que arremessou mais alta



function pontuacao() {

    var nome_amigo_1 = prompt("Qual o nome do primeiro a jogar?");
    var altura_alcancada_amigo_1 = parseFloat(prompt("Qual a pontuação do primeiro a jogar?"));

    var nome_amigo_2 = prompt("Qual o nome do segundo a jogar?");
    var altura_alcancada_amigo_2 = parseFloat(prompt("Qual a pontuação do segundo a jogar?"));

    var nome_amigo_3 = prompt("Qual o nome do terceiro a jogar??");
    var altura_alcancada_amigo_3 = parseFloat(prompt("Qual a pontuação do terceiro a jogar?"));
      
    if (altura_alcancada_amigo_1 > altura_alcancada_amigo_2 &&altura_alcancada_amigo_1 > altura_alcancada_amigo_3) {
        var maior_altura = nome_amigo_1
    } else if ( altura_alcancada_amigo_2 > altura_alcancada_amigo_1 && altura_alcancada_amigo_2 > altura_alcancada_amigo_3 )  {
        var maior_altura = nome_amigo_2
    } else if ( altura_alcancada_amigo_3 > altura_alcancada_amigo_1 &&  altura_alcancada_amigo_3 > altura_alcancada_amigo_2) { 
        var maior_altura = nome_amigo_3
    } 
    

    if (altura_alcancada_amigo_1 == altura_alcancada_amigo_2 && altura_alcancada_amigo_1 == altura_alcancada_amigo_3) {
        var maior_altura = nome_amigo_3 + ", " + nome_amigo_2 + " e " + nome_amigo_1
    } else if ( altura_alcancada_amigo_2 == altura_alcancada_amigo_3) {
        var maior_altura = nome_amigo_2 + " e " + nome_amigo_3
    } else if ( altura_alcancada_amigo_1 == altura_alcancada_amigo_3) { 
        var maior_altura = nome_amigo_3 + " e " + nome_amigo_1
    } else if (altura_alcancada_amigo_1 == altura_alcancada_amigo_2) {
        var maior_altura = nome_amigo_1 +  " e "  + nome_amigo_2
    } else {
        alert("Nenhum valor foi informado!!!")
    }
       
   alert("O amigo com a maior pontuação foi: " + maior_altura)

}