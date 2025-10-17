//1. Creamos un programa que pida números hasta que insertemos un 0, entonces nos indica la longitud del array.

/*

let numbers = [];
let number;

while (!numbers.includes(0)) {
    number = parseInt(prompt("Introduce un número (pulsa 0 para terminar):"));
    numbers.push(number);
}

alert("La longitud del array es: " + numbers.length);

//2. Comprobar posteriormente si en el array existe al menos algún 5.

    if (numbers.includes(5)) {
        alert("El array contiene al menos un 5.");
    } else {
        alert("El array no contiene ningún 5.");
    }

//3. Pedir un número al usuario e indicar cuántas veces aparece en el array anterior.

let userNumber = Number(prompt("Introduce un número para contar cuántas veces aparece en el array: "));
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == userNumber) {
        count++;
    }
}

alert("El número " + userNumber + " aparece " + count + " veces en el array.");

*/

//4. En un programa con un array predefinido con varios nombres, pedirle uno al usuario y comprobar si está o no.

/*

let names = ["Ana", "Adrian", "Javi", "Sara", "Manuela"];
let userName = prompt("Introduce un nombre para comprobar si está en el array: ");

if (names.includes(userName)) {
    alert("El nombre " + userName + " está en el array.");
}
else {
    alert("El nombre " + userName + " no está en el array.");
}

*/

//5. Crea un menú que controle los datos de un array (como una lista de la compra), que permita añadir al final o al principio, 
// eliminar alguno si existe o borrar todos, y a cada paso actualice (o vuelva a mostrar) la lista completa.

/*

let shoppingList = [];
let option;

do {
    option = prompt("Menú:\n1. Añadir al final\n2. Añadir al principio\n3. Eliminar un elemento\n4. Borrar todos\n5. Mostrar lista\n6. Salir\nElige una opción:");
    switch (option) {

        case '1':
            let itemEnd = prompt("Introduce el elemento para añadir al final:");
            shoppingList.push(itemEnd);
            break;

        case '2':
            let itemStart = prompt("Introduce el elemento para añadir al principio:");
            shoppingList.unshift(itemStart);
            break;

        case '3':
            let itemRemove = prompt("Introduce el elemento para eliminar:");
            let index = shoppingList.indexOf(itemRemove);
            if (index !== -1) {
                shoppingList.splice(index, 1);
                alert("Elemento eliminado.");
            } else {
                alert("El elemento no existe en la lista.");
            }
            break;

        case '4':
            shoppingList = [];
            alert("Todos los elementos han sido borrados.");
            break;

        case '5':
            alert("Lista de la compra: " + shoppingList.join(", "));
            break;

        case '6':
            alert("Saliendo del menú.");
            break;

        default:
            alert("Opción no válida. Inténtalo de nuevo.");
    }
} while (option !== '6');

*/

7. // Dado un array con precios, aplicar a todos un descuento indicado por prompt.

/*

let prices = [100, 200, 300, 400, 500];
let discount = parseFloat(prompt("Introduce el porcentaje de descuento a aplicar (por ejemplo, 20 para un 20%):"));

for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] - (prices[i] * (discount / 100));
}

alert("Precios con descuento aplicado: " + prices.join(", "));

*/

// BONUS: Reutiliza el ejercicio 1 y posteriormente devuelve el array ordenado.

/*

let numbers = [];
let number;

while (!numbers.includes(0)) {
    number = parseInt(prompt("Introduce un número (pulsa 0 para terminar):"));
    numbers.push(number);
}

alert("La longitud del array es: " + numbers.length);

numbers.sort(function(a, b) {
    return a - b;
});

alert("Array ordenado: " + numbers.join(", "));

*/