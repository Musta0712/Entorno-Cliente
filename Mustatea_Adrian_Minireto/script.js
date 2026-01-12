// Añade un <button> en tu HTML y usa algún selector para asociarlo a la variable boton de tu JS.
// Posteriormente crea tu evento
const boton = document.querySelector("#Boton");

boton.addEventListener("click", function() {
    alert("Has hecho click");
});

// Te da información extra
boton.addEventListener("click", (objEvento)=> {
    console.log(objEvento);
});