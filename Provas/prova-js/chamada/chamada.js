
function chamada() {

    var alunos = [];
    var nome = " ";

    while (nome !== "") {

        nome = prompt("Nome do aluno: \n(deixe vazio para finalizar o sitema)");

        if (nome !== "") {

            alunos.push(nome);

        }

    }

    console.log(alunos);

}

chamada();
