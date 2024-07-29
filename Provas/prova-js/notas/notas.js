//Média = 7

class Avaliacao {
    constructor(nome, modulo, nota_4, nota_6){
        this.nome = nome;
        this.modulo = modulo;
        this.nota_4 = nota_4;
        this.nota_6 = nota_6;
    }
}

var aluno1 = new Avaliacao("Sabrina", "JS", 0, 0);
var aluno2 = new Avaliacao("Bruno", "CSS", 0, 0);
var aluno3 = new Avaliacao("Anderson", "JS", 0, 0);
var aluno4 = new Avaliacao("Carol", "HTML", 0, 0);
var aluno5 = new Avaliacao("Victória", "JS", 0, 0);

var lista_alunos = [];

lista_alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5);


function calculando_medias() {
    
    for (var i = 0; i < lista_alunos.length; i++) {

       lista_alunos[i].nota_4 = parseFloat(prompt(`Qual foi a primerira nota do(a) aluno(a) ${lista_alunos[i].nome}? (de 0 a 10)`));
       lista_alunos[i].nota_6 = parseFloat(prompt(`Qual foi a segunda nota do(a) aluno(a) ${lista_alunos[i].nome}? (de 0 a 10)`));

        var media = (lista_alunos[i].nota_4 * 0.4 + lista_alunos[i].nota_6 * 0.6).toFixed(2);

       if (media >= 7) {
        
           alert(`O(A) aluno(a) ${lista_alunos[i].nome} teve a média igual a ${media} e foi APROVADO(A)`);

       } else {
        
           alert(`O(A) aluno(a) ${lista_alunos[i].nome} teve a média igual a ${media} e foi REPROVADO(A)`);

       }
        

    }


}

calculando_medias();