// 📝 Ejercicio 1: Gestión de Empleados (POO y Herencia)

// El objetivo es modelar un sistema simple de gestión de personal que calcule su salario anual y un bono especial.
// Requisitos

//     Clase Persona:

//        Propiedades: nombre, edad.

//         Método: saludar(). Debe devolver un texto simple de saludo.

//     Clase Empleado (extiende de Persona):

//         Propiedades Adicionales: salarioMensual, antiguedad (años).

//         Método: calcularSalarioAnual(). Debe devolver el salario mensual multiplicado por 12.

//         Método: calcularBono(). Debe devolver un bono que es el 10% del salario anual si la antigüedad es mayor o igual a 5 años. En caso contrario, devuelve 0.

// Tareas de Implementación

//     Crea ambas clases.

//     Crea una instancia de Empleado de "Juan Pérez" con un salario de 2500 y 6 años de antigüedad.

//     Muestra por consola: su saludo, su salario anual y el valor de su bono.

/*

// 1. Clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método: saludar()
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// 2. Clase Empleado (extiende de Persona)
class Empleado extends Persona {
    constructor(nombre, edad, salarioMensual, antiguedad) {
        // Llama al constructor de la clase padre (Persona)
        super(nombre, edad);
        // Propiedades adicionales
        this.salarioMensual = salarioMensual;
        this.antiguedad = antiguedad; // Años de antigüedad
    }

    // Método: calcularSalarioAnual()
    calcularSalarioAnual() {
        // Salario mensual * 12 meses
        return this.salarioMensual * 12;
    }

    // Método: calcularBono()
    calcularBono() {
        // Bono es el 10% del salario anual si la antigüedad es >= 5 años
        if (this.antiguedad >= 5) {
            const salarioAnual = this.calcularSalarioAnual();
            return salarioAnual * 0.10; // 10% del salario anual
        } else {
            return 0;
        }
    }
}

// Tareas de Implementación
// 1. Crea una instancia de Empleado
const juanPerez = new Empleado("Juan Pérez", 35, 2500, 6); // 6 años de antigüedad

// 2. Mostrar resultados por consola
console.log("--- Información del Empleado ---");
console.log(`Nombre: ${juanPerez.nombre}`);

// Muestra su saludo (método heredado de Persona)
console.log(`Saludo: ${juanPerez.saludar()}`);

// Muestra su salario anual
const salarioAnual = juanPerez.calcularSalarioAnual();
console.log(`Salario Anual: ${salarioAnual} €`);

// Muestra el valor de su bono
const bono = juanPerez.calcularBono();
console.log(`Bono por Antigüedad: ${bono} €`);

*/

// 🔢 Ejercicio 2: Análisis de Arrays (Funciones de Orden Superior)

// El objetivo es manipular y analizar un array de números utilizando exclusivamente los métodos de array (map, filter, reduce).
// Requisitos

//     Función transformar(lista, operacion):

//         Debe aplicar la función operacion a cada elemento de la lista y devolver un nuevo array. (Usa map).

//     Función contarMayores(lista, limite):

//         Debe devolver el número total de elementos en la lista que sean estrictamente mayores que el limite. (Usa filter y luego .length).

//     Función producto(lista):

//         Debe devolver el producto total de todos los números en la lista. (Usa reduce).

// Tareas de Implementación

//     Declara el array de ejemplo: const datos = [10, 2, 7, 5, 12, 1];.

//     Muestra el resultado de:

//         transformar(datos, x => x / 2) (dividir cada número por 2).

//         contarMayores(datos, 6).

//         producto(datos).

/*

// Funciones de Orden Superior

// 1. transformar(lista, operacion)
function transformar(lista, operacion) {
    // El método .map() aplica la función 'operacion' a cada elemento
    // y siempre devuelve un nuevo array con la misma longitud.
    return lista.map(operacion);
}

// 2. contarMayores(lista, limite)
function contarMayores(lista, limite) {
    // Primero, .filter() crea un nuevo array que contiene solo los elementos
    // que cumplen la condición (ser > limite).
    const mayores = lista.filter(numero => numero > limite);
    // Luego, se devuelve la longitud de ese array filtrado.
    return mayores.length;
}

// 3. producto(lista)
function producto(lista) {
    // El método .reduce() ejecuta una función reductora en todos los elementos.
    // El '1' al final es el valor inicial del acumulador (necesario para la multiplicación).
    return lista.reduce((acumulador, actual) => acumulador * actual, 1);
}


// --- Aplicación Práctica ---
const datos = [10, 2, 7, 5, 12, 1];

console.log("--- Array Original ---");
console.log(datos);

// 1. Transformar: dividir cada número por 2
const arrayDividido = transformar(datos, x => x / 2);
console.log("\n--- Transformar (x / 2) ---");
console.log("Resultado:", arrayDividido);

// 2. Contar Mayores: contar elementos mayores que 6
// Los números mayores que 6 son: 10, 7, 12 (3 elementos)
const numMayores = contarMayores(datos, 6);
console.log("\n--- Contar Mayores que 6 ---");
console.log(`Resultado: ${numMayores}`); 

// 3. Producto: producto total de todos los números
const productoTotal = producto(datos);
console.log("\n--- Producto Total ---");
console.log(`Resultado: ${productoTotal}`); // 10 * 2 * 7 * 5 * 12 * 1 = 8400

*/

// 🗄️ Ejercicio 3: Clases y Funciones Anidadas (Combinado)

// El objetivo es combinar POO y funciones de orden superior dentro de un contexto de clase.
// Requisitos

//     Clase EstadisticasNotas:

//         Propiedad: notas (un array de números).

//         Método: constructor(notas).

//         Método: obtenerAprobados().

//             Debe usar el método de array filter para devolver un nuevo array con solo las notas mayores o iguales a 5.

//         Método: calcularMedia().

//             Debe usar el método de array reduce para calcular la suma total de las notas y luego dividirla por el número de notas.

// Tareas de Implementación

//     Crea la clase EstadisticasNotas.

//     Crea una instancia con las notas: [4.5, 7.0, 8.5, 3.0, 6.0, 9.5].

//     Muestra por consola:

//         El array de notas aprobado.

//         La nota media de todas las notas.

/*

// Clase EstadisticasNotas
class EstadisticasNotas {
    // Propiedad: notas (un array de números)
    constructor(notas) {
        this.notas = notas;
    }

    // Método: obtenerAprobados()
    // Devuelve un nuevo array con notas mayores o iguales a 5
    obtenerAprobados() {
        // Uso de filter
        return this.notas.filter(nota => nota >= 5.0);
    }

    // Método: calcularMedia()
    // Calcula la media (suma total / cantidad de notas)
    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }

        // 1. Calcular la suma total usando reduce
        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);

        // 2. Dividir la suma por la cantidad total de notas
        return suma / this.notas.length;
    }
}

// Tareas de Implementación
// 1. Crear una instancia con las notas
const notasClase = [4.5, 7.0, 8.5, 3.0, 6.0, 9.5];
const estadisticas = new EstadisticasNotas(notasClase);

console.log("--- Análisis de Notas ---");

// 2. Mostrar el array de notas aprobado
const aprobados = estadisticas.obtenerAprobados();
console.log("Notas Aprobadas (>= 5.0):", aprobados);

// 3. Mostrar la nota media de todas las notas
const media = estadisticas.calcularMedia();
console.log(`Nota Media de la Clase: ${media.toFixed(2)}`); // Usamos toFixed(2) para mejor presentación

*/