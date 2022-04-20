const BtnAtras = document.querySelector(".volverAtras")

function volverAtras (){
    currentPag==="index" && window.location.assign ("./../../index.html");
    currentPag==="" && window.location.assign ("./../../index.html");
    currentPag==="footer1" && window.location.assign ("./footer/centro-de-ayuda.html");
    currentPag==="footer2" && window.location.assign ("./footer/politica-priv.html");
    currentPag==="footer3" && window.location.assign ("./footer/tutoriales.html");
}