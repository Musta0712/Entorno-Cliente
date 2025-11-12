// 1. Crea una función que calcule el cuadrado de un número.

/*

function calculateSquare(number) {
    return number * number;
}

variable = calculateSquare(14);
console.log(variable);

*/

// 2. Función calculadora de número factorial.



function calculateFactorial(number) {
    if (number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

variable = calculateFactorial(5);
console.log(variable);



// 3.Función que convierta grados Celsius a Fahrenheit.

/*

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Fórmula de conversión
}

variable = celsiusToFahrenheit(30);
console.log(variable);

*/

// 4. Función esPrimo() que devuelva booleano.

/*

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

variable = esPrimo(3);
console.log(variable);

*/

// 5. Función que cuente el número de vocales de una palabra.

/*

function countVowels(word) {
  const vowels = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ";
  let count = 0;

  for (let letter of word) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("pingüino"));

*/

// 6. Función que reciba tres parámetros (a,b,c) y devuelva un array con las soluciones de una ecuación de segundo grado. (-b+-sqrt(b**2-4*a*c)/2*a)

/*

function solveQuadraticEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return []; // No hay soluciones reales

    } else if (discriminant === 0) {
        const solution = -b / (2 * a);
        return [solution]; // Una solución real

    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const solution1 = (-b + sqrtDiscriminant) / (2 * a);
        const solution2 = (-b - sqrtDiscriminant) / (2 * a);
        return [solution1, solution2]; // Dos soluciones reales
    }
}

const solutions = solveQuadraticEquation(1, -3, 2);
console.log(solutions); 

*/

// 7. Crea una función que reciba un número y un callback. Si el número es mayor a 10, ejecuta el callback.

/*

function executeIfGreaterThanTen(number, callback) {
    if (number > 10) {
        callback();
    }
}

executeIfGreaterThanTen(15, () => {
    console.log("El número es mayor que 10, EL CALLBACK SE HA EJECUTADO.");
});

*/

// 8. Función que sume todos los elementos introducidos como parámetros, sin preestablecer el número de parámetros.

/*

function addElements(...numbers) {
    return numbers.reduce((accumulator, number) => accumulator + number, 0);
}

const sum = addElements(1, 2, 3, 4, 5);
console.log(sum);

*/

// 9. Función que reciba un array de palabras y devuelva solo las que son palíndromos.

/*

function getPalindromes(words) {
    return words.filter(word => {
        const lower = word.toLowerCase(); 
        const reversed = lower.split('').reverse().join(''); // convierte la cadena en un array de caracteres y junta los caracteres
        return lower === reversed;
    });
}

const words = ["ana", "ojo", "javascript", "html", "radar", "nivel", "LaRutaNatural"];
const palindromes = getPalindromes(words);

console.log(palindromes);

*/