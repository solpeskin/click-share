let currentUser = "";

let currentPag = "";
currentPag = document.getElementById("Pindex")?"index" : document.getElementById("Pfooter1")?"footer1" : document.getElementById("Pfooter2")?"footer2" : document.getElementById("Pfooter3")?"footer3" : localStorage.getItem("currentPag")
localStorage.setItem("currentPag", currentPag)