
const doces = ["bricadeiro", "casadinho", "chocolate", "bolo", "torta", "biscoito"];
console.log(doces);
var a = doces;

a[2] = "pipoca doce";

console.log(a);

function lala(e) {
    e[5] = "beijinho";
    console.log(e);

    a[1] = "nutella";
    console.log(a);
}

console.log(a);

lala(doces);
