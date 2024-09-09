
const container = document.getElementById("rel");
const botao = document.getElementById("botao");

const relogio = document.createElement("h1");
container.appendChild(relogio);

const texto = document.createElement("h3");
texto.innerText = "As ofertas exclusivas\nterminam em:";
container.appendChild(texto);


container.style.fontFamily = "Courier New, monospace";
container.style.textAlign = "center";
container.style.color = "rgb(165, 25, 49)";
container.style.backgroundColor = "rgb(36, 29, 82)";
container.style.paddingLeft = "5%";
container.style.paddingRight = "5%";
container.style.borderRadius = "10px";
container.style.boxShadow = "1px 1px 10px 2px rgb(2, 25, 94)";

texto.style.fontSize = "1.5em";
relogio.style.marginBottom = "0.5%";
relogio.style.fontSize = "4em";
relogio.style.marginTop = "2%";

botao.style.width = "180%";
botao.style.height = "100%";
botao.style.backgroundColor = "rgb(165, 25, 49)";
botao.style.borderRadius = "10px";
botao.style.padding = "10px";
botao.style.marginTop = "5%";
botao.style.fontFamily = "'Charm', 'Times New Roman'";
botao.style.fontWeight = "700";
botao.style.fontStyle = "normal";
botao.style.fontSize = "200%";
botao.style.textAlign = "center";
botao.style.color = "rgb(6, 35, 121)";
botao.style.borderColor = "rgb(145, 25, 49)";


function time() {

    const agora = new Date().getTime();

    const meia_noite = new Date();
    meia_noite.setHours(24, 0, 0, 0);

    const falta = meia_noite.getTime() - agora;

    const hora = Math.floor(falta / (1000 * 60 * 60));
    const minuto = Math.floor((falta % (1000 * 60 * 60)) / (1000 * 60));
    const segundo = Math.floor((falta % (1000 * 60)) / 1000);


    const hr = String(hora).padStart(2, '0');
    const min = String(minuto).padStart(2, '0');
    const s = String(segundo).padStart(2, '0');

    relogio.innerText = `${hr}:${min}:${s}`;

}

time();

const intrevalo = setInterval(time, 1000);


function cardapio(url) {
    window.location.assign(url);
}