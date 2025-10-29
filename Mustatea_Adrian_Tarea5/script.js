// 1. Tenemos un array de números para hacer un sorteo, pero algún@ list@ ha metido su número más de una vez. 
// Asegúrate de que ese array elimina sus duplicados pasándolo a Set.

/*
const numeros = [4, 7, 2, 7, 9, 2, 4, 10];

// filter() recorre el array y solo mantiene el primer elemento cuya posición (indexOf(num)) coincide con su índice actual.
const numerosSinDuplicados = numeros.filter((num, index) => {
  
    return numeros.indexOf(num) === index;

});

console.log(numerosSinDuplicados);

*/

// 2. Dados el setA = new Set([1,2,3,4]) y el setB = new Set([3,4,5,6]) devuelve un set que contenga 
// los elementos comunes en los dos anteriores (usando la función filter que vimos con los arrays).

/*
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const elementosComunes = new Set(

    [...setA].filter(num => setB.has(num))

);

console.log(elementosComunes); // Set { 3, 4 }

*/

// 4. BONUS Pide tres conjuntos al usuario por teclado e indica cuáles no se repiten.

/*

// Pedimos tres conjuntos (listas de números o palabras separadas por comas)
const conjunto1 = prompt("Introduce el primer conjunto (valores separados por comas):").split(",");
const conjunto2 = prompt("Introduce el segundo conjunto (valores separados por comas):").split(",");
const conjunto3 = prompt("Introduce el tercer conjunto (valores separados por comas):").split(",");

// Combinamos todos los valores en un solo array
const todos = [...conjunto1, ...conjunto2, ...conjunto3];

// Contamos cuántas veces aparece cada elemento
const contador = new Map();
for (let valor of todos) {
  valor = valor.trim(); // quitamos espacios
  contador.set(valor, (contador.get(valor) || 0) + 1);
}

// Filtramos los que aparecen solo una vez
const noRepetidos = [...contador.entries()]
  .filter(([_, cantidad]) => cantidad === 1)
  .map(([valor]) => valor);

const conjunto1 = prompt("Introduce el primer conjunto
// Mostramos resultado
alert("Elementos que no se repiten: " + noRepetidos.join(", "));
console.log("No repetidos:", noRepetidos);

*/