

// 1. Calculadora de áreas y perímetros de un cuadrado.

/*

let side;
let area;
let perimeter;

side = Number(prompt("Introduce un número para el lado del cuadrado en cm: "));

area = side * side;
perimeter = 4 * side;

alert("El área del cuadrado es de " + area + " cm y el perímetro es de " + perimeter + " cm ");

*/

// 2. Detector de números mágicos. Número 4 dígitos
/*
let number = Number(prompt("Introduce un número"));
let last = number % 10;
let mid = number % 1000;
mid = (mid - last) / 10;
let first = (number - (number % 1000)) / 1000;

alert(first);
alert(mid);
alert(last);

if (first + last == mid){
    alert("Es mágico");
} else {
    alert("No es mágico");
}
    
*/

// 3. Crea un programa que "cuente" la cantidad de dígitos de un número(sin funciones)

/*

cont = 1;
control = 10;
let num;

num = Number(prompt("Introduce un número"));

while (control <= num){
    cont++;
    control *= 10;
}

alert("La longitud del número es " + cont);

*/

// 4. Mostrar los números pares del 1 al 100.

/*

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

*/

// 5. Se le pide al usuario el número de elementos que va a introducir para calcular su media.

/*

let num = Number(prompt("Introduce la longitud de dígitos para el número"));
let sum = 0;
for(let i = 0; i < num; i++){
    sum = sum + Number(prompt("Ingresa los números"));
}
console.log("La media de los números es: " + (sum/num));

*/
// 6. El adivinador: Crear un código que adivine un número del 1 al 100.

/*
const secretnum = Math.floor(Math.random()* 100) + 1;
var attempt;

do{
    attempt = Number(prompt("Tienes que adivinar el número en el que estoy pensando del 1 al 100:"));

    if (attempt < 0){
        alert("Te he dicho un número entre 1 y 100, a ver si leemos de vez en cuando, prueba otro");
    } else if (attempt > 100){
        alert("Te he dicho un número entre 1 y 100, a ver si leemos de vez en cuando, prueba otro");
    } else if (attempt > secretnum) {
        alert("El número en el que estoy pensando es más bajo, sigue intentando");
    } else if (attempt < secretnum) {
        alert("El número en el que estoy pensando es más alto, sigue intentando");
    } else {
        alert("Al fin acertaste, ysum += num % 10;a estás rozando el nivel de excelencia suprema");
    }
    
} while (attempt != secretnum);

*/

// 7. Aventura conversacional/juego de preguntas y respuestas.

/*

alert("Hola muy buenas, te vamos a hacer un interrogatorio rápido");
   var question1 = prompt("¿Me darías tu nombre? 1.Si  2.No");


   if (question1 == "1"){
       var question2 = prompt("Pues me da igual te llamaré prisionero.");

   }else if(question1 == "2"){
       var question3 = prompt("Mejor, porque te iba a llamar de todas formas prisionero. ¿Has matado a alguien? 1.Si 2.No");


       if (question3 == "1"){
           var question4 = prompt("De la risa lo habrás matado porque de otra cosa no se yo jajaja. ¿Y con que arma fue? 1.pistola 2.cuchillo 3.con las manos");
       }else{
            alert("No me mientas, que por algo estás aqui")
       }
   }else if (question4 == "1"){
            alert("Qué cobarde eres, te confiscaré el arma y tu sentencia sería de 20 años de carcel");
       if (question4 == "2"){
            alert("Pues que inútil eres porque la víctima a sobrevido, te confiscaré el arma y tu sentencia sería de 5 años de cárcel");
       }else{
            alert("Con las manos eh, que fuerte")
       }

   }else{
       alert("La opción seleccionada es inválida");
   }
*/

// 8. Crear un menú contextual. Se repite hasta que el usuario elige la opción “Salir”.

/*

var option;
do{
   option = Number(prompt("Elija una opción: " +  "1.Sumar " + "2.restar " + "3.multiplicar " + "4.division " + "5.salir "));
  
}
while (option != 5);

*/

// 9. Crear el juego de piedra papel o tijera. (Podemos investigar math.random()).

/*
const options = ["piedra", "papel", "tijera"];

const meChoice = prompt("Elige: piedra, papel o tijera");

    const yourChoice = options[(Math.random() * options.length)];
    
    if (meChoice === yourChoice) {
        alert ("Hemos empatado, juguemos otra");
    } else if ((meChoice === "piedra" && yourChoice === "tijera") || (meChoice === "papel" && yourChoice === "piedra") || (meChoice === "tijera" && yourChoice === "papel")) {
        alert ("Has ganado con mucha suerte");
    } else { // hacer que no pueda poner cualquier cosa
        alert ("Has perdido, que malo eres en este juego");
    }

    */

// 10. Primeros 100 numeros primos

/*

let notPrime = false;
let numberCounter = 0;   
let number = 0;


do{
   number++;
   for(let i=2; i < number && notPrime == false; i++){
       if (number % i == 0){
           notPrime = true;
       }
   }
   if (!notPrime){
       console.log(number);
       numberCounter++;
   }
   notPrime = false;
}while (numberCounter < 100);

*/

// 11. NAVASESH

/*
num = Number(prompt("Introduce un número"));

    while (num >= 10) {
    var sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
        num = sum;
    }
    alert("El Navasesh es: "+ num);

*/









 



