// Ejercicio 2



let numbers = [];
let number;
let array = [];
let sum;

while(number != 0) {
    number = Number(prompt("Pon un número para sumar sus pares: "));

    if (number > 0) {
        numbers.push(number);
    }
}

console.log(number);

array = numbers.filter(n => n % 2 == 0);

sum = array.reduce((acc, x) => acc + x, 0)

console.log("El sumatorio de los pares es " + sum)



// Ejercicio 1 

/*

arrayRep = [1,2,2,3,3,3,4,5];
newArray = [];

for(let i = 0; i < arrayRep.length; i++){

    if (!newArray.includes(arrayRep[i])){

        newArray.push(arrayRep[i]);
    }
}
console.log("Array sin reps " + newArray);

*/

// Ejercicio 3

/*

let arrayTable;
arrayTable = [];

num = Number(prompt("Diego, introduce un número: "));

for(i = 0; i <= 10; i++){
    base = num
    arrayTable.push(base*i);
}

console.log(arrayTable);

*/

// Ejercicio 4

/*

let n;
let factorial = 1;

n = Number(prompt("Diego, pon un número para ver su factorial: "));

for(let i = 1; i <= n; i++){
    factorial *= i;
}
console.log("El factorial de " + n + " es " + factorial);

*/

// Ejercicio 5

/*

let number;
let count = 1;
let control = 10;

number = parseInt(prompt("Diego, introduzca un NÚMERO entero para ver su tamaño: "))
while (number >= control) {
    count++;
    control*=10;
}
console.log("El número de la parte entera que es " + number + " tiene " + count + " dígito"); // Si pones decimales, no te los cuenta

*/

