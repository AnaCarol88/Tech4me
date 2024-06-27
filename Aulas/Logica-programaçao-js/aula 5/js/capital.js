function uf() {
    
    var estado = prompt("Qual é a UF de onde você mora?")

    switch (estado) {
        case "RJ":
        case "rj":
            alert("Rio de Janeiro");
            break;
            
        case "SP":
        case "sp":
            alert("São Paulo");
            break;
       
        case "MG":
        case "mg":
            alert("Minas Gerais");
            break;
            
        case "ES":
        case "es":
            alert("Espírito Santo");
            break;
    
        default: alert("Não foi informado a UF de um estado do Suldeste.");

            break;
    }

}

uf()