//Quiosque de sorvetes: O quiosque que está localizado dentro do estacionamento do supermercado atacado precisa de um programa para controlar o valor para pagar na sobremesa. O cliente poderá escolher um sabor de sorvete entre quatro opções. O preço do sorvete é fixo em r$ 5,90. O cliente pode também dizer se deseja ou não incluir até dois adicionais, por mais de r$ 2 cada sendo farofa doce, paçoca, cauda de caramelo, bolacha de chocolate. Ao finalizar o pedido o sistema irá exibir o valor e pagar pela sobremesa.




function escolha() {
    var sorvete = 5.90;

    var sabor_sorvete = prompt("qual sabor você deseja de sorvete: morango, chocolate, creme ou maracujá?").toLowerCase();

    var pedido_adicional = prompt("Deseja adicinar algum adicional?").toLowerCase();

    if (pedido_adicional === "sim") {
        var opções = prompt("Farofa doce, paçoca, cauda de caramelo ou biscoito de chocolate?");

        var sorvete = sorvete + 2;

        var mais_adicionais = prompt("Deseja adicionar mais um adicinal?").toLowerCase();

            if(mais_adicionais == "sim") {
                opções = prompt("Farofa doce, paçoca, cauda de caramelo ou biscoito de chocolate?");

                var sorvete = sorvete + 2;

                alert("O sorvete de " + sabor_sorvete + " com os adicionais, é: " + sorvete.toFixed(2));  

            } else {
                alert("O sorvete de " + sabor_sorvete + " com os adicionais, é: " + sorvete.toFixed(2));
            }
        
    } else {
        alert("O sorvete de " + sabor_sorvete + " é: " + sorvete.toFixed(2));
    }
}