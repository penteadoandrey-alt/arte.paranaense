
/* SISTEMA DE CURTIDAS */

const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach((botao) => {

    let curtidas = 0;
    let jaCurtiu = false;

    botao.innerHTML = `
        <span class="icone-curtir">♡</span>
        <span class="texto-curtir">Curtir</span>
        <span class="contador-curtir">(0)</span>
    `;

    botao.setAttribute("aria-pressed", "false");

    botao.addEventListener("click", () => {

        jaCurtiu = !jaCurtiu;
        curtidas = jaCurtiu ? 1 : 0;

        botao.classList.toggle("curtido", jaCurtiu);

        botao.querySelector(".icone-curtir").textContent =
            jaCurtiu ? "♥" : "♡";

        botao.querySelector(".texto-curtir").textContent =
            jaCurtiu ? "Curtido" : "Curtir";

        botao.querySelector(".contador-curtir").textContent =
            `(${curtidas})`;

        botao.setAttribute("aria-pressed", String(jaCurtiu));

    });

});

/* MODO CLARO E ESCURO */

const botaoTema = document.querySelector(".btn-tema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        botaoTema.textContent = "☀️";
        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

    } else {

        botaoTema.textContent = "🌙";
        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );

    }

});
