// dispoibles ? 
function UsuarioDisponible (){
    return usuarios.find((user) => user?.username === username.value);
}

function mailDisponible (){
    return usuarios.find((user) => user?.mail === mail.value);
}

// al hacer cliick registrar
function registrar(event){
    event.preventDefault();
    examinarDatos();
    crearUser();

    // pasa con el primer submit
    document.querySelectorAll(".escribir").forEach((e)=> {
        e.addEventListener("input", ()=> examinarDatos());
    })
};

function iniciarSesion(event){
    // variables 
    const userFound = UsuarioDisponible();
    let textoErrorUser = username.parentElement.querySelector(".submitError");
    let textoErrorContra = contra.parentElement.querySelector(".submitError");

    event.preventDefault();

    usuarioLogIn(userFound, textoErrorUser)
    contraLogIn(userFound, textoErrorContra)

    document.querySelectorAll(".escribir").forEach((e)=> {
        e.addEventListener("input", ()=> {
            submitNoError(textoErrorUser)
            submitNoError(textoErrorContra)
        });
    })
}

// examinar usuario ingresado en login 
function usuarioLogIn (userFound, textoErrorUser){
    if (!username.value){
        submitError(textoErrorUser, "Ingresar nombre de usuario.")
    }

    else if (!userFound){
        submitError(textoErrorUser, "Nombre de usuario no existe.")
    }
}

// examinar contraseña login 
function contraLogIn (userFound, textoErrorContra){
    if (!contra.value){
        submitError(textoErrorContra, "Ingresar contraseña")
    }

    else if (userFound?.contraseña === contra.value){
        console.log ("ingreso exitoso")
    }

    else {
        submitError(textoErrorContra, "La contraseña no coincide.")
    }
}