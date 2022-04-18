// si esta todo onkeydown, crear user
function crearUser (){
    if (Cuser + Cmail + Ccontra + Cconfirmacion === 4){
        let usuario = new user (mail.value, username.value, contra.value);
        console.log (usuario);

        const a = document.getElementsByClassName("lik--pagina--is");
        a.setAttribute ("href", "iniciar-sesion.html");

        // usuarios.push(usuario.username);
        // mails.push(usuario.mail);
        // contras.push(usuario.contra);

        // localStorage.setItem("usuarios", usuarios);
        // localStorage.setItem("mails", mails);
        // localStorage.setItem("contras", contras);
    }
}