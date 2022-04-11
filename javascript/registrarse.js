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
            // ingresaTu(dato);
            console.log (aviso[i]);
            ingresaTu(aviso[i],i);
            vacios +=1;
        }

        i++;
    });

    
}

function ingresaTu(element, id) {
    const obligatorio = document.getElementsByClassName(`${id}`);
    obligatorio.innerHTML = element;


}