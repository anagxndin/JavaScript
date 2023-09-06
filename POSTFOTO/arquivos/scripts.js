let iconeComentar = document.querySelector(".comentar")
let btnComentar = document.querySelector(".formulario #btnComentar")
let formulario = document.querySelector(".postagem .formulario")
let conteudoComentario = document.querySelector("#conteudoComentario")
let txtComentario = document.querySelector("#txtComentario")
let classComentario = document.querySelector(".comentarios")
let foto = document.querySelector(".foto")
let like = document.querySelector(".like")
let icones = document.querySelector(".icones")


iconeComentar.addEventListener("click", apareceFormulario)
btnComentar.addEventListener("click", enviaComentario)
foto.addEventListener("dblclick", curtirFoto)
like.addEventListener("click", curtirFoto)


function apareceFormulario(evento) {
    formulario.style.display = "flex";
}

function curtirFoto(evento) {
    if (like.getAttribute('src') == 'icones/coracao.png') {
        like.setAttribute('src', 'icones/coracao_red.png')
    } else {
        like.setAttribute('src', 'icones/coracao.png')
    }
    // icones.innerHTML = "<img class='dislike' src='icones/coracao_red.png' /> <img class='comentar' src='icones/comente.png' />"

    // let dislike = document.querySelector(".dislike")

    // dislike.addEventListener("click", descurtirFoto)
    
}

function enviaComentario(evento) {
    if (txtComentario.value != ''){
        classComentario.innerHTML +=  "<div class='comentario'><span>Ana Paula</span><p id='conteudoComentario'>" + txtComentario.value + "</p></div>"
    }
    // let txtcomentario = txtComentario.value;
    // let comentario = document.querySelector(".comentario")

    // conteudoComentario.innerHTML += txtcomentario + "<br />";

    txtComentario.value = " "

    classComentario.style.display = "inline"
}
