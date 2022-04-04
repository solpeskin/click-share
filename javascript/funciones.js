// guardar comentarios del footer en variable
function GuardarComentario(){
    let comentarios = document.getElementsByClassName("comentarios").value;

    if (comentarios !== ""){
        console.log (comentarios);
        comentariosFooter.push (comentarios);
    }
}

function CrearPreguntas(pregunta, respuesta){
    elementPreg =  new preguntas (pregunta, respuesta);

    preguntasHechas.push (elementPreg);
}

// son ejemplos random porque todavía no se cuáles van a ser las preguntas 
CrearPreguntas(
    "¿De que color es el cielo?",
    "azul"
)
CrearPreguntas(
    "¿como me llamo?",
    "yo me llamo sol"
)

function Buscar(){
    let preguntaBuscada = document.getElementsByClassName("buscarPregunta").value; /*como no me funciona el .value, para probarlo uso el prompt*/
    preguntaBuscada = prompt ("cuál pregunta");

    preguntasHechas.forEach((pregunta) => {
        if (pregunta.pregunta.indexOf (preguntaBuscada) !==-1){
            console.log (pregunta);

        }
    } )

}

