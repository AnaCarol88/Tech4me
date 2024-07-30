
class Veiculos {
    constructor(marca, modelo, ano, valor_compra, valor_atual, cor, lucro_loja, ipva, licenciamento){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor_compra = valor_compra;
        this.valor_atual = valor_atual;
        this.cor = cor;
        this.lucro_loja = lucro_loja;
        this.ipva = ipva;
        this.licenciamento = licenciamento;
    }
}


const ipva_valor = valor_atual => valor_atual * 0.04;

const lucro = valor_compra => valor_compra * 0.03;

const valor_licenciamento = ano => {

    if (2024 - ano <= 10) {
        return 160;
    }

}


var carro1 = new Veiculos(
    "Toyota",
    "Corolla XEI",
    2019,
    130000,
    115000,
    "prata",
    lucro(130000),
    ipva_valor(115000),
    valor_licenciamento(2019)
);

var carro2 = new Veiculos(
    "Renault",
    "Kwid Life",
    2023,
    55000,
    57000,
    "branco",
    lucro(55000),
    ipva_valor(57000),
    valor_licenciamento(2023)
);

var carro3 = new Veiculos(
    "Chevrolet",
    "Onix LT",
    2020,
    70000,
    65000,
    "preto",
    lucro(70000),
    ipva_valor(65000),
    valor_licenciamento(2020)
);

var carro4 = new Veiculos(
    "Volkswagen",
    "Gol 1.0",
    2023,
    70000,
    74000,
    "vermelho",
    lucro(70000),
    ipva_valor(74000),
    valor_licenciamento(2023)
);

var carro5 = new Veiculos(
    "Hyundai",
    "Creta Attitude",
    2021,
    180000,
    150000,
    "branco",
    lucro(180000),
    ipva_valor(150000),
    valor_licenciamento(2021)
);

console.log(carro1);
console.log(carro2);
console.log(carro3);
console.log(carro4);
console.log(carro5);

var carro6 = new Veiculos(
    "",
    "",
    0,
    0,
    0,
    "",
    0,
    0,
    0
)

function carro(){

    carro6.marca = prompt("Qual é a marca do carro?");

    carro6.modelo = prompt("Qual é o modelo do carro?");

    carro6.ano = parseInt(prompt("Qual é o ano do carro?"));

    carro6.valor_compra = parseFloat(prompt("Qual foi o valor da compra do carro?"));

    carro6.valor_atual = parseFloat(prompt("Qual é o valor atual do carro?"));

    carro6.cor = prompt("Qual é a cor do carro?");

    carro6.lucro_loja = lucro(carro6.valor_compra);
    
    carro6.ipva = ipva_valor(carro6.valor_atual);

    carro6.licenciamento = valor_licenciamento(carro6.ano);


    console.log(carro6);

    alert(
        `
        Marca: ${carro6.marca}\n
        Modelo:  ${carro6.modelo}\n
        Ano:  ${carro6.ano}\n
        Valor de compra: R$ ${carro6.valor_compra}.00\n
        Valor atual: R$ ${carro6.valor_atual}.00\n
        Cor:  ${carro6.cor}\n
        Lucro da loja: R$ ${carro6.lucro_loja}.00\n
        IPVA: R$ ${carro6.ipva}.00\n
        Licenciamento: R$ ${carro6.licenciamento}.00`
    )


}

carro();

