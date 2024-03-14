var botao = document.getElementById("botao")
botao.addEventListener("click", alertar, false);

function alertar(event){
    if(true){
        alert("parabens diva, voce clicou no botão!!" + event);
    }
}