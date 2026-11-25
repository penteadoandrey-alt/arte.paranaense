
/* SISTEMA DE CURTIDAS */

const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach((botao) => {
    let curtidas = 0;
    let jaCurtiu = false;

    botao.addEventListener("click", () => {

        if (!jaCurtiu) {
            curtidas++;
            jaCurtiu = true;

            botao.classList.add("curtido");
            botao.innerHTML = `❤️ Curtido (${curtidas})`;

        } else {
            curtidas--;
            jaCurtiu = false;

            botao.classList.remove("curtido");
            botao.innerHTML = `🤍 Curtir (${curtidas})`;
        }

    });
});

/* MODO ESCURO E CLARO */

const botaoTema = document.querySelector(".btn-tema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botaoTema.innerHTML = "☀️";
    } else {
        botaoTema.innerHTML = "🌗";
    }

});
