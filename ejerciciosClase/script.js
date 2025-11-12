// 1. Sumar todos los elementos de un array con recursividad.

/*

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}

const numbers = [20, 22, 23, 24, 25];
console.log(sumArray(numbers));

*/

// 2. Funcion que devuelve el string recibido en orden invreso con recursividad.

function Reverse(word, index = 0) {
  if (index >= word.length) return " ";
  return word[word.length - 1 - index] + Reverse(word, index + 1);
}

console.log(Reverse("El pokemon zekrom es el mejor"));