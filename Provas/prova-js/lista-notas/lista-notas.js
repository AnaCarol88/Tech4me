//Média = 7

class Avaliacao {
    constructor(nome, nota_4, nota_6, media) {
        this.nome = nome;
        this.nota_4 = nota_4;
        this.nota_6 = nota_6;
        this.media = media;
    }
}

var aluno1 = new Avaliacao("Sabrina", 0, 0, 0);
var aluno2 = new Avaliacao("Bruno", 0, 0, 0);
var aluno3 = new Avaliacao("Anderson", 0, 0, 0);
var aluno4 = new Avaliacao("Carol", 0, 0, 0);
var aluno5 = new Avaliacao("Victória", 0, 0, 0);

var lista_alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

function calculando_medias() {

    var maior_nota = lista_alunos[0];
    var cont = 0;

    for (var i = 0; i < lista_alunos.length; i++) {


        lista_alunos[i].nota_4 = parseFloat(prompt(`Qual foi a primerira nota do(a) aluno(a) ${lista_alunos[i].nome}? (de 0 a 10)`));
        lista_alunos[i].nota_6 = parseFloat(prompt(`Qual foi a segunda nota do(a) aluno(a) ${lista_alunos[i].nome}? (de 0 a 10)`));

        lista_alunos[i].media = (lista_alunos[i].nota_4 * 0.4 + lista_alunos[i].nota_6 * 0.6);

        var medias = lista_alunos[i].media;

        if (medias >= 7) {

            alert(`O(A) aluno(a) ${lista_alunos[i].nome} tirou ${lista_alunos[i].nota_4} na primeira avaliação,\n ${lista_alunos[i].nota_6} na segunda, teve a média igual a ${lista_alunos[i].media.toFixed(2)} \ne foi APROVADO(A).`);

        } else {

            alert(`O(A) aluno(a) ${lista_alunos[i].nome} tirou ${lista_alunos[i].nota_4} na primeira avaliação,\n ${lista_alunos[i].nota_6} na segunda, teve a média igual a ${lista_alunos[i].media.toFixed(2)} \ne foi REPROVADO(A).`);
            cont++;

        }

        if (i > 0 && medias > maior_nota.media) {

            maior_nota = lista_alunos[i];
        
        }

    }

    alert(`Tivemos ${cont} alunos com média abaixo de 7.`);

    alert(`O(A) aluno(a) com a maior média é o(a) ${maior_nota.nome} com média igual a ${maior_nota.media.toFixed(2)}.`);


}

calculando_medias();