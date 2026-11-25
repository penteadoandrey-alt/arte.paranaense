
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});

// BOTÕES DE CURTIR

const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function (botao) {
    let curtido = false;

    botao.addEventListener("click", function () {
        curtido = !curtido;

        if (curtido) {
            botao.textContent = "♥ Curtido (1)";
            botao.classList.add("ativo");
        } else {
            botao.textContent = "♡ Curtir (0)";
            botao.classList.remove("ativo");
        }
    });
});
