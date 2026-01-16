// 1. Realiza un ejercicio como el del ejemplo, con un div que contenga un div que contenga otro div. 
// Prueba el bubbling creando eventos para cada uno. 
// (Prueba  también con alguno de los eventos que no generan propagación).

/*

const abuelo = document.getElementById('abuelo');
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

abuelo.addEventListener('click', () => {
  alert('Abuelo clicado');
});

padre.addEventListener('click', () => {
  alert('Padre clicado');
});

hijo.addEventListener('click', () => {
  alert('Hijo clicado');
});

// No generan propagación 

/*

hijo.addEventListener('click', (event) => {
  event.stopPropagation();
  alert('Hijo clicado (sin bubbling)');
});

abuelo.addEventListener('mouseenter', () => {
  console.log('Mouse entra en Abuelo');
});

padre.addEventListener('mouseenter', () => {
  console.log('Mouse entra en Padre');
});

hijo.addEventListener('mouseenter', () => {
  console.log('Mouse entra en Hijo');
});

*/

// 2. Duplica el ejercicio anterior y evita el bubbling.

/*

const abuelo = document.getElementById("abuelo");
const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");

abuelo.addEventListener("click", (event) => {
  event.stopPropagation();
  alert('Abuelo clicado');
});

padre.addEventListener("click", (event) => {
  event.stopPropagation();
  alert('Padre clicado');
});

hijo.addEventListener("click", (event) => {
  event.stopPropagation();
  alert('Hijo clicado');
});

*/

// 3. Pon en práctica la cancelación, crea un enlace que dirija a una web y
// suprime la redirección. Puedes probar a cambiar algo de este elemento para
// mostrar que ya no redirige una vez hecho el primer clic.

/*

const enlace = document.getElementById("enlace");

enlace.addEventListener("click", (event) => {
  event.preventDefault(); // Cancela la navegación

  enlace.textContent = "Redirección cancelada";
  enlace.style.color = "gray";
  enlace.style.cursor = "not-allowed";

  alert("Estás en clase, no puedes ir a youtube,la redirección ha sido cancelada. 🖕");
});

*/

// 4. Reutiliza el contador de la otra hoja de ejercicios y haz que se lance un
// evento cuando llegue a 10

/*

const contador = document.getElementById("contar");
const boton = document.getElementById("boton");

let count = 0;

// Evento personalizado
document.addEventListener("llegaADiez", function () {
    alert("El contador ha llegado a 10");
});

boton.addEventListener("click", function () {
    count++;
    contador.textContent = count;

    // Cuando llega a 10, lanzamos el evento
    if (count == 10) {
        document.dispatchEvent(new Event("llegaADiez"));
    }
});

*/