//Dois amigos não tem uma moedinha agora, e por isso solicitaram um programa que fizesse uma jogada de moeda e mostrar seu resultado na tela, para que ele saibam que é quem é vai que vai começar a brincadeira.
//Para jogar moeda, o sistema irá gerar um número aleatório e observar a primeira casa decimal no segundo gerado. Se o número é par, quem ganhará é "cara" e o número ímpar "coroa"



function sorte() {
    var numero_aletorio = parseInt(Math.random() * 10);

    if (numero_aletorio % 2 == 0) {
        alert("Cara")
    } else {
        alert("Coroa")
    }
}