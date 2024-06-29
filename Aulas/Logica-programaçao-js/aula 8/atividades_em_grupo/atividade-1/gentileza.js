//Gentileza do dia: Vamos criar a função gentileza para exibir saudações de bom dia, boa tarde e boa noite de uma única vez, uma em cada linha.



function gentileza() {
    
    var horas = parseInt(prompt('Qual a hora?'));

    horario(horas);
}
 
function horario(horas) {

    if (horas >= 0 && horas < 12 ) {
        alert("Bom dia!!!");
    } else if (horas >= 12 && horas < 18) {
        alert("Boa tarde!!!");
    } else if (horas >= 18 && horas < 24) {
        alert("Boa Noite!!!");
    } else if (horas < 0 || horas > 24) {
        alert("Horário incorreto!!!");
    } else {
        alert("Nenhum horário informado ):");
    }
}

