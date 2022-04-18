// declaro todas las variables 
const form = document.querySelector("form");
const mail = document.querySelector(".mail");
const username = document.querySelector(".nombre");
const contra = document.querySelector(".contrasena");
const confirmacion = document.querySelector(".confirmacion");
const btnRegistrarse = document.querySelector(".registrarSubmit");

// lista de usuarios 
// let usuarios = [JSON.parse(localStorage.getItem("usuarios"))];
// let mails = [JSON.parse(localStorage.getItem("mails"))];
// let contras = [JSON.parse(localStorage.getItem("contras"))];

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