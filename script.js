
/* SISTEMA DE CURTIDAS */

const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach((botao) => {

    let curtidas = 0;
    let jaCurtiu = false;

    botao.addEventListener("click", () => {

        if (jaCurtiu === false) {

            curtidas++;
            jaCurtiu = true;

            botao.classList.add("curtido");
            botao.innerHTML = `❤️ Curtido (<span>${curtidas}</span>)`;

        } else {

            curtidas--;
            jaCurtiu = false;

            botao.classList.remove("curtido");
            botao.innerHTML = `🤍 Curtir (<span>${curtidas}</span>)`;

        }

    });

});

/* MODO CLARO E ESCURO */

const botaoTema = document.querySelector(".btn-tema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        botaoTema.textContent = "☀️";
        botaoTema.setAttribute("aria-label", "Ativar modo claro");

    } else {

        botaoTema.textContent = "🌙";
        botaoTema.setAttribute("aria-label", "Ativar modo escuro");

    }

});
