// 1. Crea un elemento p que cuando situes el ratón por encima cambie el color.

/*
const parrafo = document.getElementById("texto");

parrafo.addEventListener("mouseover", function () {
    parrafo.style.color = "red";
});
*/

// 2. Clona el elemento anterior para que en este caso otro p haga lo mismo pero recupere el color origanl al sacar el ratón de encima.

/*
const parrafo = document.getElementById("texto");

parrafo.addEventListener("mouseover", function () {
    parrafo.style.color = "red";
});

parrafo.addEventListener("mouseout", function () {
    parrafo.style.color = "black";
});

*/

// 3. Crea un elemento h1 contador y un botón que le vaya añadiendo uno cada vez que se pulse.

/*
const contador = document.getElementById("contar");
const boton = document.getElementById("boton");

let count = 0;

boton.addEventListener("click", function() {
    count ++;
    contador.textContent = count; // actualiza el h1
});

*/

// 4. Crea varios botones con el mismo evento que muestren su texto en consola.

/*

const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", function() {
      console.log(boton.innerHTML); // muestra el texto del botón en consola
    });
});

*/

// 5. Muestra un mensaje diferente al hacer doble clic en uno de ellos.

/*

const botones = document.querySelectorAll(".boton");

// Seleccionamos el botón especial
const botonEspecial = document.querySelectorAll(".boton")[1];

botones.forEach(boton => {
    // Solo agregamos el click si NO es el botón especial
    if (boton !== botonEspecial) {
        boton.addEventListener("click", function() {
            console.log(boton.innerHTML); // muestra el texto del botón en consola
        });
    }
});

// Evento dblclick solo para el botón especial
botonEspecial.addEventListener("dblclick", function() {
    console.log("No me pises porfa");
});

*/

// 6. Crea un botón que añada o quite una clase CSS a un elemento.

/*

const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("botonClase");

boton.addEventListener("click", function() {
// toggle añade o quita la clase
parrafo.classList.toggle("style");
});

*/
