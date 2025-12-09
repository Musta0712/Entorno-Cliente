/*

class Vehiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descripcion() {
        return `El vehículo es de la marca ${this.marca}, modelo ${this.modelo} del año (${this.ano})`;
    }

    edad() {
        const yearActual = new Date().getFullYear();
        return yearActual - this.ano;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, ano, puertas) {
        // Llama al constructor de la clase padre (Vehiculo)
        super(marca, modelo, ano);
        // Propiedad adicional
        this.puertas = puertas;
    }

    // Sobrescritura del método descripcion()
    descripcion() {
        return `El vehículo es de la marca ${this.marca}, modelo ${this.modelo} del año (${this.ano}) tiene ${this.puertas} puertas`;
    }
}

// Creación de objetos Auto
const auto1 = new Auto("Toyota", "Corolla", 2015, 4);
const auto2 = new Auto("Ford", "Mustang", 2018, 2);

// Mostrar la descripción y edad del Auto 1
console.log(auto1.descripcion());
console.log(`Edad: ${auto1.edad()} años`);

// Separador visual
console.log("---"); 

// Mostrar la descripción y edad del Auto 2
console.log(auto2.descripcion());
console.log(`Edad: ${auto2.edad()} años`);

*/

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*

function sumar(lista) {
    return lista.reduce((acumulador, actual) => acumulador + actual, 0);
}


function filtrarPares(lista) {
    return lista.filter(numero => numero % 2 === 0);
}

function aplicarOperacion(lista, operacion) {
    return lista.map(operacion);
}


// Declaración del array de ejemplo
const numerosEjemplo = [2, 9, 15, 6, 22, 11, 4];

console.log("--- Array Original ---");
console.log(numerosEjemplo);

// 1. Llamada a sumar(lista)
const sumaTotal = sumar(numerosEjemplo);
console.log("\n--- Suma Total ---");
console.log(`Resultado de sumar(lista): ${sumaTotal}`);

// 2. Llamada a filtrarPares(lista)
const soloPares = filtrarPares(numerosEjemplo);
console.log("\n--- Números Pares ---");
console.log("Resultado de filtrarPares(lista):", soloPares);

// 3. Llamada a aplicarOperacion(lista, x => x * 2)
const duplicar = x => x * 2;
const arrayDuplicado = aplicarOperacion(numerosEjemplo, duplicar);

console.log("\n--- Array Duplicado (x * 2) ---");
console.log("Resultado de aplicarOperacion(lista, x => x * 2):", arrayDuplicado);

*/
