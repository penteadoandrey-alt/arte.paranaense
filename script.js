const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.array.forEach (function(botoesCurtir){
    let curtir = false;
    botaoCurtir.addEventListener("click",curtir);
    function curtir(){
     const contador = botaoCurtir.querySelector("span");
     if(curtir === false){
     contador.textContent++;
     curtir = false;
 }

    }
});


  const btnTema = document. querySelector(".btn-tema");
  btntema . addEventListener("click,mudarTema");
  function mudarTema(){
    document.boby.classlist.toggle("tema-escuro");
  }