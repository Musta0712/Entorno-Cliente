// 1. Muestra en consola datos sobre la URL actual: location.href, location.protocol, location.host, location.pathname

/*

console.log("URL completa:", location.href);
console.log("Protocolo:", location.protocol);
console.log("Host:", location.host);
console.log("Pathname:", location.pathname);

*/

// 2. Crea una página que pasados 5 segundos te redirija a otra. (Cambia el href)

/*

setTimeout(() => {
    location.href = "https://www.playstation.com/es-es/the-last-of-us/";
}, 5000);

*/

// 3. Un prompt que pregunte si cambiar de página para llevarte a otro .html

/*

const answer = prompt("¿Quieres ir a la página de PlayStation? (si/no)");

if (answer.toLowerCase() === "si") {
    location.href = "https://www.playstation.com";
} else {
    console.log("Te has quedado en la misma página.");
}

*/

// 4. Mostrar en consola cuántas páginas hay en el historial del navegador

/*

console.log("Número de páginas en el historial del navegador:", history.length);

*/

// 5. Utilizar un confirm para preguntar al usuario si quiere ir a la página anterior (reutiliza un ejercicio anterior)

/*

const goBack = confirm("¿Quieres ir a la página anterior?");

if (goBack) {
    history.back();
} else {
    console.log("Has decidido quedarte en esta página.");
}

*/