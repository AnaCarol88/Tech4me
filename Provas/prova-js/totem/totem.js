
const sanduiches = ["frango grelhado", "carne com queijo", "vegetariano", "bacon e ovo", "atum e maionese"];
const precos = [20, 24, 19, 21, 18];
const acompanhamentos = ["batata frita", "onion rings", "salada grega", "chips de legumes", "chips de batata doce", "queijo coalho grelhado", "batata assada com ervas", "hummus com palitos de vegetais"];

function sanduiche() {

    var sanduiche = prompt("Qual é o sanduíche desejado?").toLowerCase();

    var numero = sanduiches.indexOf(sanduiche);

    if (numero !== -1) {

        return numero;

    } else {

        alert("Não possuimos esse sanduíche, tente novamente.");
        return -1;

    }

}


function acompanhamento() {

    var nomes_acompanhamentos = [];

    for (var i = 0; i < 5; i++) {

        var acompanhamento = prompt('Qual acompanhamento deseja adicionar ao seu pedido? \nPoderá pedir até 5 acompanhamentos \n(se não desejar mais acompanhamentos digite "concluir")').toLowerCase();

        var numero1 = acompanhamentos.indexOf(acompanhamento);

        if (acompanhamento !== "concluir") {

            if (numero1 !== -1) {

                nomes_acompanhamentos.push(acompanhamento);

            } else {

                alert("Não possuimos esse sanduíche, tente novamente.");
                i--;

            }

        } else {

            break;

        }

    }

    return nomes_acompanhamentos;

}

function pedido() {

    var sand = sanduiche();

    if (sand === -1) {
        return;
    }

    var acomp = acompanhamento();

    var texto_acomp = acomp.join(", ");
    var precos_acomp = acomp.length * 2;

    if (acomp.length == 0) {

        alert(`Pedido: \n\nSanduíche: \n${sanduiches[sand]}. \n\n Preço: R$ ${precos[sand].toFixed(2)}.`);

    } else {

        alert(`Pedido: \n\nSanduíche: \n${sanduiches[sand]}. \n\nCom os acompnhamentos: \n${texto_acomp}. \n\n Preço: R$ ${(precos[sand] + precos_acomp).toFixed(2)}.`);

    }


}


