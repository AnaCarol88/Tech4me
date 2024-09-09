import { enviando } from "./formulario.js";

document.getElementById("formulario").addEventListener("submit", function (enviar) {
    enviando(enviar);
});


const botao = document.getElementById("botao");

botao.style.fontFamily = "'Charm', 'Times New Roman'";
botao.style.fontStyle = "normal";
botao.style.fontWeight = "700";
botao.style.fontSize = "170%";
botao.style.color = "rgb(115, 140, 217)";

window.voltar = function (url) {
    window.location.assign(url);
};




const apiUrl = 'https://tech4japa.fly.dev/produtos';


function getProdutosInfo(produtoId) {

    const url = `${apiUrl}/${produtoId}`;

    fetch(url)

        .then(resposta => {

            if (!resposta.ok) {
                throw new Error('A resposta da rede não foi bem-sucedida.');
            }

            return resposta.json();
        })

        .then(info => {

            const prato = {
                nome: info.nome,
                restaurante: info.restaurante,
                imagem: info.imagem,
                produto: info.produto,
                descricao: info.descricao
            };

            document.getElementById('nome').textContent = prato.nome;
            document.getElementById('descricao').textContent = prato.descricao;
            document.getElementById('preco').textContent = prato.produto;
            document.getElementById('imagem').src = prato.imagem;
            document.getElementById('imagem').alt = prato.nome;

        })

        .catch(erro => {

            console.error('Houve um problema com a operação fetch:', erro);

        });

}


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');

    if (produtoId) {
        getProdutosInfo(produtoId);
    }
});
