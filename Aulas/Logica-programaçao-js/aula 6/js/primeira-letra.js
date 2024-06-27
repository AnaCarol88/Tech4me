function candidatos() {

    var nome = prompt("Nome do candidato:");

    var primeira_letra = nome.toUpperCase().substring(0,1);  
    
    if (primeira_letra === "A" || primeira_letra === "E" || primeira_letra === "I" || primeira_letra === "O" || primeira_letra === "U") {

        alert("Sua entrevista será na segunda-feira.");
        
    } else {
        
        alert("Sua entrevista será na terça-feira.");

    }

}

candidatos();
