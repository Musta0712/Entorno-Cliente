// 1. Convertir de decimal a hexadecimal

/*

function decimalAHexadecimal(decimal) {
    return decimal.toString(16).toUpperCase(); 
    // decimal.toString(16) -> convierte el número decimal a base 16 (hexadecimal) 
    // .to UpperCase() -> convierte "ff" en "FF"
}

const numeroDecimal = 230;
const numeroHexadecimal = decimalAHexadecimal(numeroDecimal);
console.log(`El número decimal ${numeroDecimal} en hexadecimal es ${numeroHexadecimal}`);

*/

// 1.1 Otra forma de convertir de decimal a hexadecimal

/*

function decimalAHexadecimal(decimal) {
    if (typeof decimal !== "number" || !Number.isFinite(decimal)) {
        return "Entrada no válida"; // Validación de entrada

        // typeof decimal !== "number" → comprueba que lo que pasaste sea un número.
        // !Number.isFinite(decimal) → se asegura de que no sea Infinity ni NaN.
        // Si no es un número válido, devolvemos un mensaje de error.
    }

    // Convertir a hexadecimal
    const hexadecimal = decimal.toString(16).toUpperCase();

    // Agregar un signo negativo si es necesario
    return decimal < 0 ? `-${hexadecimal.slice(1)}` : hexadecimal;
}

const numeros = [255, 0, 16, -42, 6000];

numeros.forEach(num => {
    console.log("El número decimal " + num + " en hexadecimal es " + decimalAHexadecimal(num));
    // forEach recorre cada número y muestra su equivalente hexadecimal en la consola.
});

*/

// 3. Calculadora de numeros perfectos que salga true o false.


function esNumeroPerfecto(numero) {
    if (numero <= 1) {
        return false; // Los números menores o iguales a 1 no son perfectos.
    }
    
    let sumaDivisores = 0;

    // Encontrar divisores propios y sumarlos
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i == 0) {
            sumaDivisores += i;
        }
    }

    // Un número es perfecto si la suma de sus divisores propios es igual al número
    return sumaDivisores == numero;
}

console.log(esNumeroPerfecto(6));   
console.log(esNumeroPerfecto(28));  
console.log(esNumeroPerfecto(12));  
console.log(esNumeroPerfecto(496)); 
console.log(esNumeroPerfecto(14));  
