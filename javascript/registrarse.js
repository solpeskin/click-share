// declaro todas las variables 
const form = document.querySelector("form");
const mail = document.querySelector(".mail");
const username = document.querySelector(".nombre");
const contra = document.querySelector(".contrasena");
const confirmacion = document.querySelector(".confirmacion");

let correcciones = "";
let Cuser = 1;
let Cmail = 1;
let Ccontra = 1;
let Cconfirmacion = 1;

class user {
    constructor(mail,username,contrasena){
        this.mail = mail;
        this.username = username;
        this.contraseña = contrasena;
    }
}

function submitError (input, message) {
    input.innerHTML = message;
    input.addEventListener("input", ()=> examinarDatos())
}

function submitNoError (input) {
    input.innerHTML = "";
}

function examinarDatos (){
    datoUsuario()
    datoMail()
    datoContra()
    confirmarContra()
}

function datoUsuario(){
    let textoErrorUser = username.parentElement.querySelector(".submitError");
    submitNoError(textoErrorUser)

    // si es mas grande que 10
    if (username.value.length >10 || username.value.length <4) {
        submitError(textoErrorUser, "Tu nombre de usuario debe ser de entre 4 y 10 caracteres.")
        Cuser = 0;
    }

    else {
        Cuser = 1;
    }

    // si esta vacío
    if (username.value == ""){
        submitError(textoErrorUser, "Ingrese un nombre de usuario.")
        Cuser = 0;
    }
}

function datoMail(){
    let textoErrorMail = mail.parentElement.querySelector(".submitError");
    submitNoError(textoErrorMail);

    // tendría que verificar que el mail exista pero todavía no se hacer eso

    // si esta vacío
    if (mail.value == ""){
        submitError(textoErrorMail, "Ingrese un correo electrónico.");
        Cmail = 0;
    }

    else {
        Cmail = 1;
    }
}

function datoContra(){
    let textoErrorContra = contra.parentElement.querySelector(".submitError");
    submitNoError(textoErrorContra);

    // si es mas chico que 6
    if (contra.value.length <6){
        submitError(textoErrorContra, "Tu contraseña debe ser de al menos 6 caracteres.")
        Ccontra = 0;
    }

    else {
        Ccontra = 1;
    }

    // si esta vacío
    if (contra.value == ""){
        submitError(textoErrorContra, "Ingrese una contraseña.");
        Ccontra = 0;
    }    
}

function confirmarContra(){
    let textoErrorConfirmacion = confirmacion.parentElement.querySelector(".submitError");
    submitNoError(textoErrorConfirmacion);

    // si no son iguales 
    if (confirmacion.value !== contra.value){
        submitError(textoErrorConfirmacion, "La contraseña no coincide.");
        Cconfirmacion = 0;
    }  

    else {
        Cconfirmacion = 1;
    }

    // si esta vacío
    if (confirmacion.value == ""){
        submitError(textoErrorConfirmacion, "Debe confirmar su contraseña.");
        Cconfirmacion = 0;
    }  
}

function crearUser (){
    if (Cuser + Cmail + Ccontra + Cconfirmacion === 4){
        let usuario = new user (mail.value, username.value, contra.value);
        console.log (usuario);
    }
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    examinarDatos();
    crearUser();

    // pasa con el primer submit
    document.querySelectorAll(".escribir").forEach((e)=> {
        e.addEventListener("input", ()=> examinarDatos());
    })
});