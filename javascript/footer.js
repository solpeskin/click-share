// footer 
let comentariosFooter = [""];
document.querySelector(".mandar").addEventListener("click", ()=> mandar() );

function mandar() {
    let comentario = document.querySelector(".comentarios").value.trim();
    let texto = document.getElementById("graciasTexto");

    if (comentario !== "" ){
        console.log (comentario);
        comentariosFooter.push(comentario);

        gracias(texto);
    }
};

function gracias(texto) {
    texto.innerHTML = "¡Gracias por su comentario!";
    texto.setAttribute ("class", "graciasComentario");
}