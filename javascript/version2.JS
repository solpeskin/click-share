// declaro todas las variables 
const form = document.querySelector("form");
const mail = document.querySelector(".mail");
const username = document.querySelector(".nombre");
const contra = document.querySelector("#contrasena1");
const confirmacion = document.querySelector("#contrasena2");

class user {
    constructor(mail,username,contrasena){
        this.mail = mail;
        this.username = username;
        this.contraseña = contrasena;
    }
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    guardarDatos();
});

function guardarDatos (){
    const mailD = mail.value.trim();
    const usernameD = username.value.trim();
    const contraD = contra.value.trim();
    const confirmacionD = confirmacion.value.trim();

    let datos = [mailD, usernameD, contraD,confirmacionD];
    confirmarDatos (datos);

}

function confirmarDatos (array){
    let aviso = ["Ingresa un mail", "Ingresa un nombre de usuario", "Ingresa una contraseña", "Confirma tu contraseña"];
    let i = 0;
    let vacios = 0;

    array.forEach(dato => {
        if (dato == "") {

            ingresaTu(aviso[i],i);
            vacios +=1;
        }

        i++;
    });


    crearUser(vacios, array);
}

function ingresaTu(element, id) {
    const obligatorio = document.getElementsByClassName(`${id}`);
    obligatorio.innerHTML = element;
    console.log (obligatorio);

}

function crearUser (vacios, datos){
    if (vacios == 0 ){

        if (datos[2] === datos[3]){
            new user (datos[0], datos[1], datos[2] );
            console.log (user);
        }

        else {
            document.getElementById("#3").innerHTML = "Contraseña no coincide";
        }
    } 
}