//Eliminatórias da copa: Em novembro de 2023 aconteceram vários partidas de futebol na América Latina para definir a classificação dos times para o próximo Mundial ponto crie um programa que irá exibir para o torcedor resultado do último do jogo de futebol do time que ele quiser consultar. Programa deve funcionar da seguinte maneira:O usuário irá digitar uma sigla de três letras maiúscula indicando qual a seleção de interesse, e o sistema imprime a informação sobre a partida exemplo digite a sigla do time arde resultado da última partida da Argentina data do jogo 21/11/2023 placar Argentina 1 Brasil 0




function jogos () {

    const BO = "Última partida da Bolívia: data do jogo - 21/11/2023 placar Bolívia 0 x Uruguai 3.";

    const BRA = "Última partida do Brasil: data do jogo - 21/11/2023 placar Brasil 0 x Argentina 1.";

    const URU = "Última partida do Uruguai: data do jogo - 21/11/2023 placar Uruguai 3 x Bolívia 0.";

    const COL = "Última partida da Colômbia: data do jogo - 21/11/2023 placar Colômbia 1 x Paraguai 0.";

    const PAR = "Última partida do Paraguai: data do jogo - 21/11/2023 placar Paraguai 0 x Colômbia 1.";

    const ARG = "Última partida da Argentina: data do jogo - 21/11/2023 placar Argentina 1 x Brasil 0.";

    const PER = "Última partida do Peru: data do jogo - 21/11/2023 placar Peru 1 x Venezuela 1.";

    const VEN = "Última partida da Venezuela: data do jogo - 21/11/2023 placar Venezuela 1 x Peru 1.";

    const EQU = "Última partida da Equador: data do jogo - 21/11/2023 placar Equador 1 x Chile 0.";

    const CHI = "Última partida do Chile: data do jogo - 21/11/2023 placar Chile 0 x Equador 1.";

    var time = prompt("Escolha uma seleção colocando as três letras iniciais do nome: ").toUpperCase()

    switch (time) {
        case "BOL":
            alert(BOL);
            
            break;
        case "ARG":
            alert(ARG); 
            
            break;
        case "BRA":
            alert(BRA); 
            
            break;
        case "CHI":
            alert(CHI); 
            
            break;
        case "VEN":
            alert(VEN);
            
            break;
        case "PAR":
            alert(PAR); 
            
            break;
        case "EQU":
            alert(EQU); 
            
            break;

        case "PER":
            alert(PER); 
            
            break;

        case "COL":
            alert(COL); 
            
            break;

        case "URU":
            alert(URU); 
            
            break;
    
        default:
            alert("Não foi informado a seleção, tente de novo :(");
            break;
    }
   
}