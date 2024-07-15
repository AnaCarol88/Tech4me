function busca() {

    const sapatos = ["NIKE", "ADIDAS", "PUMA", "CONVERSE", "VANS", "OLYMPIKUS", "ASICS"];

    var desejado = prompt("Qual a marca de tênis desejada?").toUpperCase();

    var gaveta = sapatos.indexOf(desejado);

    if (gaveta !== -1) {

        alert(`O tênis ${desejado} está na gaveta ${gaveta + 1}`);

    } else {
        alert("Não temos o tênis desejado");
    }

}

busca()
