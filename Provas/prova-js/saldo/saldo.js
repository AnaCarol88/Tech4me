
function agencia() {
    
    do {
        
        const clientes = ["Ana", "Paulo", "Julio", "Gabriel", "Rafael", "Luiza", "Fernanda", "Gustavo"];
        const saldos = [1000.80, 0, -305, 500, 600, 1200, 758.46, -109.65];
        
        var nome = prompt("Qual saldo dos clientes abaixo deseja consultar: \n- Ana;\n- Julio;\n- Luiza;\n- Paulo;\n- Rafael;\n- Gabriel;\n- Gustavo;\n- Fernanda. \n(deixe vazio para finalizar o sitema)").toLowerCase();

        var cliente = nome[0].toUpperCase() + nome.substring(1);

        var busca = clientes.indexOf(cliente);
        
        if (busca !== -1) {
    
            alert(`O saldo de ${cliente} é igual a R$ ${saldos[busca].toFixed(2)}`);

        } else {

            alert("Cliente não encontrado, tente novamente.");
        
        }

    } while (nome !== "");

}

agencia();