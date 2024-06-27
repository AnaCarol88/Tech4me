function voto() {

    var idade = prompt ("Digite a sua idade");

    var voto = idade > 70 || idade < 18;

    alert("Seu voto é facultativo?");
    alert(voto);

}

voto();