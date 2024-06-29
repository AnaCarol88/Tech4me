//6. Um motorista de taxi deseja calcular o rendimento de seu carro na praça.
//Sabendo-se que o preço do combustível é de R$ 7,50 por litro, escreva um algoritmo para ler:
//a marcação do odômetro (Km) no início do dia, a marcação (Km) no final do dia,
//o número de litros de combustível gasto e o valor total (R$) recebido dos passageiros.
//Calcular e escrever: a média do consumo em Km/L e o lucro (líquido) do dia.



function taxi() {
    
    const preco_combustivel = 7.50;
    var inicio_km = 20;
    var final_km = 100;
    var litros_consumidos = 40;
    var recebido = 650;

    var consumo = (final_km - inicio_km) / litros_consumidos;
    var lucro = recebido - preco_combustivel * litros_consumidos;

    alert("A media de consumo é: " + consumo + " Km/L" + "\nO lucro do dia é: R$ " + lucro + ".00");

}

taxi();



function taxi1() {
    
    const preco_combustivel = 7.50;
    var inicio_km = parseFloat(prompt("Marcação do odômetro (Km) no início do dia: "));
    var final_km = parseFloat(prompt("Marcação (Km) no final do dia: "));
    var litros_consumidos = parseFloat(prompt("Litros de combustível gastos: "));
    var recebido = parseFloat(prompt("Valor total (R$) recebido dos passageiros: "));

    var consumo = parseFloat(((final_km - inicio_km) / litros_consumidos).toFixed(2));
    var lucro = (recebido - preco_combustivel * litros_consumidos).toFixed(2);

    alert("A media de consumo é: " + consumo + " Km/L" + "\nO lucro do dia é: R$ " + lucro);

}

taxi1();