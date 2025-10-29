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

// 3. Copia el ejercicio del menú de inicio de sesión y convierte los arrays en un mapa.

/*

let usuarios = new Map([
    ["Adrian" , "pokemon"],
    ["Sara", "libros"],
    ["Marques", "perro"]
]);
let option;

do{
    option = Number(prompt(
        "Elije la opcíon que quieras:\n" +  
        "1.Registrarse\n" + 
        "2.Incio de sesión\n" +  
        "3.Ver usuarios\n" +  
        "4.Salir\n"));

    if (option == 1){
        let usuarioValido = false;
        let nombreUsuario = " ";

        // repite el bucle hasta que se introduzca un usuario válido

        while(!usuarioValido){

            nombreUsuario = prompt("Introduce el nombre del usuario:");

            if (usuarios.has(nombreUsuario)){   //verifica si el usuario existe
                alert("Ese nombre de usuario ya existe");
            }else{
                usuarioValido = true;
                let nuevaContraseña = prompt("Introduce la contraseña que quieres utilizar: ");
                usuarios.set(nombreUsuario, nuevaContraseña); // usuarios.set(nombre, contraseña) → agrega un nuevo usuario.
                alert ("El usuario nuevo se ha registrado");
              }
        }
    }else if (option == 2){
        let usuarioIntroducido = prompt("Ingresa tu usuario: ");
        if (usuarios.has(usuarioIntroducido)){
            let contrasenaIntroducida = prompt("Introduce la contraseña:");
            let contrasenaCorrecta = usuarios.get(usuarioIntroducido); // usuarios.get(nombre) → obtiene la contraseña guardada.
            if (contrasenaIntroducida === contrasenaCorrecta){
                alert("Bienvenido!!");
            }else{
                alert ("Contraseña Incorrecta");
            }
        }else{
            alert("El usuario no existe!!!!")
        }
    }else if (option === 3) {
        let ver = usuarios.keys();
        for(let i = 0; i < usuarios.size; i++){ 
            alert(ver.next().value);
        }
    }else if (option === 4) {
        alert("Saliendo del sistema.");
    }else{
        alert("Opción inválida. Por favor, elige una opción del 1 al 4.");
    }
}while(option != 4);

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