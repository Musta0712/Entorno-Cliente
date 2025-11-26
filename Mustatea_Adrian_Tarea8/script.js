// 1. Separa un texto en palabras y calcula la palabra más larga.

/*

function separadorDePalabras(text) {

    const palabras = text.split(" ");
    const palabraLarga = palabras.reduce((palabraLarga, palabraActual) => {
        return palabraActual.length > palabraLarga.length ? palabraActual : palabraLarga;
    }, "");

    return palabraLarga;
}

const miTexto = "Hola buenas tengo un problema muscular en el cuello, creo que es el esternocleidomastoideo";
const palabraLarga = separadorDePalabras(miTexto);

console.log(`La palabra más larga es: ${palabraLarga}`);

*/

// 2. Verifica si una palabra comienza con "pre".

/*

function comprobarConPre(palabra) {
    palabra = palabra.toLowerCase();
    return palabra.startsWith("pre");
}

console.log (comprobarConPre("presente"));
console.log (comprobarConPre("cacahuete"));
console.log (comprobarConPre("presupuesto"));
console.log (comprobarConPre("empresario"));

*/

// 3. Reemplaza "perro" por "gato" en una frase.

/*

function perroPorGato (palabra) {
    palabra = palabra.toLowerCase();
    return palabra.replace("perro", "gato");
}

console.log (perroPorGato("El perro me ha mordido"));

*/

// 4. Crea una función que reciba dos números por parámetro y devuelva un número aleatorio entre ellos.

/*

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; // el + min lo necesitas porque si no te dan números negativos
}

console.log (numeroAleatorio(34 , 4));

*/

// 5. Creamos el objeto punto, que tiene como atributos el valor en eje X y el valor en eje Y (valX y valY). 
// Creamos una función que reciba dos objetos de tipo punto como parámetros y calcule la distancia entre ellos. BONUS

/*

class Punto {
  constructor(valX, valY) {
    this.valX = valX;
    this.valY = valY;
  }
}

// Función para calcular la distancia entre dos puntos
function calcularDistancia(punto1, punto2) {

  const cateto1 = punto2.valX - punto1.valX; // la diferencia en la coordenada X entre dos puntos.
  const cateto2 = punto2.valY - punto1.valY; // la diferencia en la coordenada Y entre dos puntos.

  return Math.sqrt(cateto1 ** 2 + cateto2 ** 2); // La formula de pitagoras, la hipotenusa al cuadrado es igual a los catetos al cuadrado al cuadrado sumados

}

const p1 = new Punto(1, 1);
const p2 = new Punto(2, 1);

const distancia = calcularDistancia(p1, p2);
console.log("La distancia entre los puntos es:", distancia);

*/

// 6. Dada una fecha de cumpleaños determina en qué día de la semana nació y la edad a día de hoy.

/*

function cumple(fechaNacimiento) {
  const fecha = new Date(fechaNacimiento);
  const hoy = new Date(); // creamos un objeto con la fecha y hora actual del sistema.

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const diaSemana = diasSemana[fecha.getDay()];

  // Calcular edad
  let edad = hoy.getFullYear() - fecha.getFullYear();
  if (hoy < new Date(hoy.getFullYear(), fecha.getMonth(), fecha.getDate())) {
    edad--; // Si no ha cumplido este año, restar 1
  }

  return { diaSemana, edad };
}

const resultado = cumple("2003-9-27"); // Formato YYYY-MM-DD
console.log(`Naciste un ${resultado.diaSemana}. Tienes ${resultado.edad} años.`);

*/