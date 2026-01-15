// 1. Crea un html con varias etiquetas de muestra. La página pedirá que se introduzca una etiqueta 
// y saldrá por consola todo el contenido de las etiquetas señaladas.

/*

function mostrarContenido() {

    const etiqueta = document.getElementById("tagInput").value.trim();
    if (etiqueta === "") {
        console.warn("No se ha introducido ninguna etiqueta");
        return;
    }
    const elementos = document.getElementsByTagName(etiqueta);
    if (elementos.length === 0) {
        console.warn(`No se encontraron etiquetas <${etiqueta}>`);
        return;
    }
        console.log(`Contenido de las etiquetas <${etiqueta}>:`);
    for (let i = 0; i < elementos.length; i++) {
        console.log(`Elemento ${i + 1}:`, elementos[i].textContent);
    }
}

*/

// 2. Añade a una página un h1 que no existiera en HTML con un título.

/*

const h1 = document.createElement("h1");
h1.textContent = "Este h1 ha sido creado con JavaScript";
document.body.appendChild(h1);

*/

// 3. Crea un contador en tu página que vaya cambiando el número cada 3 segundos.

/*

let numero = 0;
const contador = document.getElementById("contador");
setInterval(() => {
    numero++;
    contador.textContent = numero;
}, 3000);

*/

//4. Dada una lista de la compra (ol), pide por prompt elementos para ir añadiéndolos (li). 
// El usuario debe indicar si añadirlos al inicio o al final de la lista.

/*

while (true) {

    const producto = prompt("Introduce un producto (Cancelar para salir)");

    if (producto === null || producto.trim() === "") {
        break;
    }

    let posicion = prompt(
        "¿Dónde quieres añadirlo?\nEscribe 'inicio' o 'final'"
    );

    if (posicion === null) {
        break;
    }

    posicion = posicion.toLowerCase().trim();

    const li = document.createElement("li");
    li.textContent = producto;

    const lista = document.getElementById("listaCompra");

    if (posicion === "inicio") {
        lista.prepend(li);
    } else if (posicion === "final") {
        lista.appendChild(li);
    } else {
        alert("Opción no válida. El producto no se añadió.");
    }
}

*/

//5. Crea una lista con tres elementos, selecciona el elemento del medio 
// y muestra por consola el hermano anterior y el hermano siguiente.

/*

const elementoMedio = document.getElementById("medio"); 

const hermanoAnterior = elementoMedio.previousElementSibling;
const hermanoSiguiente = elementoMedio.nextElementSibling;

console.log("Hermano anterior:", hermanoAnterior.textContent);
console.log("Hermano siguiente:", hermanoSiguiente.textContent);

*/