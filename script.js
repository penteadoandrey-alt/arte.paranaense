
const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach((botao) => {
    botao.addEventListener("click", () => {
        const contador = botao.querySelector("span");
        let curtidas = Number(contador.textContent);

        curtidas++;
        contador.textContent = curtidas;
    });
});

const botaoTema = document.querySelector(".btn-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("escuro");
});
