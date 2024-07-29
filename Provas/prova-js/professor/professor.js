
function chamada() {

    var nome = " ";
    var texto = "";

    while (nome !== "") {

        nome = prompt("Nome do aluno: \n(deixe vazio para finalizar o sitema)");

        if (nome !== "") {

            if (texto !== "") {

                texto += ", ";

            }

            texto += nome;

        } else {

            texto += ".";

        }

    }

    console.log(texto);

}



function chamada1() {

    var texto = "";

    do {

        var nome = prompt("Nome do aluno: \n(deixe vazio para finalizar o sitema)");

        if (nome !== "") {

            if (texto !== "") {

                texto += ", ";

            }

            texto += nome;

        } else {

            texto += ".";

        }

    } while (nome !== "");

    console.log(texto);

}