//4. Desenvolva um algoritmo que receba uma quantidade de um alimento em quilos,
//calcule e mostre quantos dias durará esse alimento
//para uma pessoa que consome 50 gramas desse alimento por dia.


function alimento() {
    
    var kg = parseFloat(prompt("Quantidade de quilos do alimento:"));

    var dias = (kg / 0.05).toFixed(2);

    alert("O alimento durará "+ dias + " dias.");

}

alimento();