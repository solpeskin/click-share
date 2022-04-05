// variables :
let comentariosFooter = [];
let preguntasHechas = [];

let preguntaBuscada = document.querySelector(".pregunta"); 

// clases
class preguntas {

    constructor (pregunta, respuesta){
        this.pregunta = pregunta
        this.respuesta = respuesta
    }
}

// funciones 
function CrearPreguntas(pregunta, respuesta){
    elementPreg =  new preguntas (pregunta, respuesta);

    preguntasHechas.push (elementPreg);
}

function Buscar(){ 
    preguntasHechas.forEach((pregunta) => {
        if (pregunta.pregunta.indexOf (preguntaBuscada.value) !==-1){
            console.log (pregunta);

        }
    } );
}

// ejecución 
// son ejemplos random porque todavía no se cuáles van a ser las preguntas 
CrearPreguntas(
    "¿De que color es el cielo?",
    "azul"
)
CrearPreguntas(
    "¿como me llamo?",
    "yo me llamo sol"
)

