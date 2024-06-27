function emancipado() {

    var sexo = prompt("Qual é o seu sexo?");
    var idade = prompt("Qual é a sua idade?");


    if (sexo === "Feminino" || sexo === "feminino" && idade >= 21) {

        alert("Você é emancipada!!");

    } else if (sexo === "Masculino" || sexo === "masculino" && idade >= 18) {

        alert("Você é emancipado!!");

    } else {

        alert("Você não é emancipado(a)!!");

    }

}

emancipado();

