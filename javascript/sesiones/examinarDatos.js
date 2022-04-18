// funciones
// examinar datos
function examinarDatos (){
    datoUsuario()
    datoMail()
    datoContra()
    confirmarContra()
}

// examinar datos del usuario
function datoUsuario(){
    let textoErrorUser = username.parentElement.querySelector(".submitError");
    submitNoError(textoErrorUser);

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

// examinar datos mail
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

// examinar datos contraseña
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
    if (!contra.value){
        submitError(textoErrorContra, "Ingrese una contraseña.");
        Ccontra = 0;
    }    
}

// examinar que la confirmación sea iagual a la contra
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



// al hacer cliick
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    examinarDatos();
    crearUser();

    // pasa con el primer submit
    document.querySelectorAll(".escribir").forEach((e)=> {
        e.addEventListener("input", ()=> examinarDatos());
    })
});