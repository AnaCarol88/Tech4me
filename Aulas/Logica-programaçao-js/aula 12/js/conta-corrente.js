//pensei de primeira assim:

function agencia() {
    
    do {
        
        const clientes = ["Ana", "Paulo", "Julio", "Gabriel", "Rafael", "Luiza", "Fernanda", "Gustavo"];
        const saldos = [1000.81, 0.00, -305.00, 500.00, 600.00, 1200.00, 758.46, -109.65];

        var tudo = clientes.concat(saldos);

        var nome = prompt("Qual saldo dos clientes abaixo deseja consultar: \nAna\nJulio\nLuiza\nPaulo\nRafael\nGabriel\nGustavo\nFernanda").toLowerCase();

        var cliente = nome[0].toUpperCase() + nome.substring(1);

        var busca = tudo.indexOf(cliente);

        var valor = tudo.slice(busca + 8, busca + 9);

        if (busca !== -1) {

            alert(`O saldo de ${cliente} é igual a R$ ${valor}`);

        } else {
            alert("Cliente não encontrado.");
        }

    } while (nome !== "");

}

//agencia();  






function agencia1() {
    
    do {
        
        const clientes = ["Ana", "Paulo", "Julio", "Gabriel", "Rafael", "Luiza", "Fernanda", "Gustavo"];
        const saldos = [1000.80, 0.00, -305.00, 500.00, 600.00, 1200.00, 758.46, -109.65];

        var nome = prompt("Qual saldo dos clientes abaixo deseja consultar: \nAna\nJulio\nLuiza\nPaulo\nRafael\nGabriel\nGustavo\nFernanda").toLowerCase();

        var cliente = nome[0].toUpperCase() + nome.substring(1);

        var busca = clientes.indexOf(cliente);

        if (busca !== -1) {

            valor = saldos[busca].toFixed(2)

            alert(`O saldo de ${cliente} é igual a R$ ${valor}`);

        } else {
            alert("Cliente não encontrado.");
        }

    } while (nome !== "");

}

agencia1();