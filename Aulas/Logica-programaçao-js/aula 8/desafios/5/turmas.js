//5. A turma C é composta de 60 alunos, e a turma D de 20 alunos.
//Escreva um algoritmo que leia o percentual de alunos reprovados na turma C,
//o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.



function turmas() {

    var percentual_c = 10;
    var percentual_d = 20;

    var reprovados_c = 60 * percentual_c / 100;
    var reprovados_d = 20 * percentual_d / 100;

    var total = (reprovados_c + reprovados_d) * 100 / 80;
    
    alert("Percentual de reprovados na Turma C: " + percentual_c + "%" + "\nPercentual de reprovados na Turma D: " + percentual_d + "%" + "\nQuantidade de alunos reprovados na turma C: " + reprovados_c + "\nQuantidade de alunos reprovados na turma D: " + reprovados_d + "\nPercentual do total de alunos reprovados: " + total + "%");

}

turmas();



function turmas1() {

    var percentual_c = parseInt(prompt("Percentual de alunos reprovados na tuma C: "));
    var percentual_d = parseInt(prompt("Percentual de alunos reprovados na tuma D: "));

    var reprovados_c = Math.round(60 * percentual_c / 100);
    var reprovados_d = Math.round(20 * percentual_d / 100);

    var total = ((reprovados_c + reprovados_d) * 100 / 80).toFixed(2);
    
    alert("Percentual de reprovados na Turma C: " + percentual_c + "%" + "\nPercentual de reprovados na Turma D: " + percentual_d + "%" + "\nQuantidade de alunos reprovados na turma C: " + reprovados_c + "\nQuantidade de alunos reprovados na turma D: " + reprovados_d + "\nPercentual do total de alunos reprovados: " + total + "%");

}

turmas1();
