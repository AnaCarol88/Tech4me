//1. Desenvolva um algoritmo que receba o salário de um funcionário,
//calcule e mostre seu novo salário com reajuste de 15%.

function salario() {

    var salario = parseFloat(prompt("Qual é o valor do seu salário?"));

    var reajuste = (salario * 15 / 100 + salario).toFixed(2);

    alert("Seu salário com o reajuste fica: R$ " + reajuste);

}

salario();