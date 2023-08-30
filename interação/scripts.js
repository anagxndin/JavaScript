// scripts.js
// Pegar os elementos HTML que quer interagir
let caixa = document.querySelector("#caixa");
let btnMsgAuto = document.querySelector("#btnMsgAuto")
let txtMsg = document.querySelector("#txtMsg")
let btnEnviaMsg = document.querySelector("#btnEnviaMsg")
let btnVisual = document.querySelector("#btnVisual")

// Ação no botão
// Listeners: ouvinte (vigia)
btnMsgAuto.addEventListener("click", enviarMsgAutomatica)
btnEnviaMsg.addEventListener("click", enviarMsg)
btnVisual.addEventListener("click", mudarVisual)

// Funções

function mudarVisual(evento) {
    caixa.style.backgroundColor = "#ffcc00";
    caixa.style.borderStyle = "dashed";
}

function enviarMsg(evento) {
    let msg = txtMsg.value;
    caixa.innerHTML += msg + "<br />"; 

    // limpa caixa de texto
    txtMsg.value = " ";
}


function enviarMsgAutomatica(evento) {
    
    caixa.innerHTML = "<p>Este <b> texto </b> é automático</p> <img src='eevee.jfif' id='foto'>";
}
