
const botao = document.getElementById("botao");

botao.style.fontFamily = "'Charm', 'Times New Roman'";
botao.style.fontStyle = "normal";
botao.style.fontWeight = "700";
botao.style.fontSize = "170%";
botao.style.color = "rgb(115, 140, 217)";

function voltar(url) {

  window.location.assign(url);

}

function detalhes(id) {

  window.location.href = `/Provas/restaurante-oriental-js/html/detalhes.html?id=${id}`;

}
