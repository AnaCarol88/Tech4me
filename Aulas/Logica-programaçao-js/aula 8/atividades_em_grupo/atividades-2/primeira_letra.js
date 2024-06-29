//A primeira letra em função: O setor de RH está com muitas entrevistas este mês e 
//solicitou uma função que, ao receber o nome do candidato exibe no console a primeira 
//letra em minúsculas.



function letra() {
    var nome = prompt("Informe seu nome? ");

    return nome;
}
 
function primeira_letra() {
    
    var minusculo = letra().substring(0, 1).toLowerCase();

    alert(minusculo);
}