
export function enviando(enviar) {

    enviar.preventDefault();

    const emailPattern = /^[^\s@]{3,}@([^\s@]+)\.([^\s@]+)$/;
    const email = document.getElementById("email");
    const emailValue = email.value.trim();


    if (!email.value.trim()) {


        let tentativa2 = prompt("Você não preencheu o campo do email. \n Por favor, digite seu email:");
        const emailValue2 = tentativa2.trim();

        if (!tentativa2) {

            alert("\n ERRO \n O campo do email não foi preenchido!");

            return;

        } else {

            if (emailValue2.length < 10 || !emailPattern.test(emailValue2)) {

                alert('Por favor, preencha um e-mail válido com pelo menos 10 caracteres, contendo uma "@" e pelo menos um ponto "." após o "@".');

                return;

            }

        }


    } else {

        if (emailValue.length < 10 || !emailPattern.test(emailValue)) {

            alert('Por favor, preencha um e-mail válido com pelo menos 10 caracteres, contendo uma "@" e pelo menos um ponto "." após o "@".');

            return;

        }
    }



    const marcar = document.getElementById("checkbox1");
    const container = document.getElementById("checkbox-container");

    if (!marcar.checked) {


        marcar.style.appearance = "none";
        marcar.style.backgroundColor = "rgb(250, 0, 0)";
        marcar.style.height = "0.93em";
        marcar.style.width = "0.93em";
        marcar.style.border = "1.34px solid rgb(118,118,118)";
        marcar.style.borderRadius = "0.15em";
        container.style.textAlign = "center";


        container.addEventListener("click", function () {

            if (marcar.checked) {

                marcar.style.appearance = "auto";

            } else {

                marcar.style.appearance = "none";

            }

        });


        if (!container.querySelector("p")) {

            const frase = document.createElement("p");
            frase.innerText = "Você precisa aceitar os termos de uso";
            container.appendChild(frase);

            frase.style.marginTop = "3%";
            frase.style.fontSize = "100%";
            frase.style.fontWeight = "600";
            frase.style.color = "rgb(36,29,82)";
            frase.style.textShadow = "0.5px 0.5px 0.5px rgb(16,29,82)";

        }

        return;


    } else {

        const frase = container.querySelector("p");

        if (frase) {

            container.removeChild(frase);

        }

    }


    alert(`E-mail “${email.value}” cadastrado com sucesso!`);

}