
function lista_carros() {
    
    var lista = [];
    var continuar = true;

    while (continuar) {
        
        var marca = prompt("Qual é a marca do carro? \n(deixe vazio para finalizar o sitema)");

        if (!marca) {
            continuar = false;
            break;
        }

        var modelo = prompt("Qual é o modelo do carro?");
        var cor = prompt("Qual é a cor do carro?");

        var info = {
            marca: marca,
            modelo: modelo,
            cor: cor
        }

        lista.push(info);
        
    }

    console.log(lista);
    
    return lista;
   
}

function cores_iguais(listagem) {
    
    var cor_cont = {};

    for (let i = 0; i < listagem.length; i++) {
        
        var cor = listagem[i].cor;

        if (cor_cont[cor]) {
           
            cor_cont[cor]++;
            
        } else {

            cor_cont[cor] = 1;

        }
        
    }

    console.log(cor_cont);

}

cores_iguais(lista_carros());




