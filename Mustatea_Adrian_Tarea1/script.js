// 1. Crear una calculadora de IVA.

    /*

    const iva = 0.21;
    var num = Number (prompt("Introduce un número"));
    var resultWithIVA = num * iva + num;
    alert("Tu total es " + resultWithIVA);

    */

// 2. Se le piden al usuario tres números y se devuelve la media.

    /*

    var a = Number (prompt("Introduce tu primer número para la media"));
    var b = Number (prompt("Introduce tu segundo número para la media"));
    var c = Number (prompt("Introduce tu tercer número para la media"));

    var media = a + b + c;
    var result = media / 3;

    alert("La media es " ale+ result);

    */

// 3. El usuario introduce un número y la consola indica si es par o impar.

    /*

    var num = Number (prompt("Introduce un número para ver si es par o impar"));
    if(num % 2 == 0){
        alert("Par")
    } else {
        alert("impar")
    }

    */

// 4. Se le piden al usuario tres nombres y se evalúa si al menos hay dos repetidos.

    /*

    var name1 = prompt("Introduce un primer nombre");
    var name2 = prompt("Introduce un primer nombre");
    var name3 = prompt("Introduce un primer nombre");

    if(name1 == name2 || name2 == name3 || name1 == name3){
        alert("Hay un nombre que se repite")
    } else {
        alert("No hay nombres repetidos")
    }

    */
   
// 5. Se introduce la nota numérica del examen y devuelve categoría (suspenso, aprobado, notable…).

    /*
    var num = Number (prompt("Introduce tu nota del examen"));

    if(num < 5 ){
        alert("Suspenso")
    }else if (num == 5){
        alert("Aprobado")
    } else if (num == 6){
        alert("Bien")
    } else if (num == 7 || num == 8){
        alert("Notable")
    } else if (num == 9 || num == 10){
        alert("Sobresaliente")
    } else {
        alert("No existe ese número como nota")
    }
    */

// 6. Se introduce el año de nacimiento y se indica si es mayor de edad o no.

    /*
    var year = 2025;
    var birth = Number(prompt("Introduce tu año de nacimineto"));

    if (year - birth <= 17){
        alert("Eres menor de edad")
    } else {
        alert("Mayor de edad")
    }
    */

// 7. Se pide el DNI y se calcula la letra. BONUS

    /*

    var dni = Number(prompt("Introduce tu DNI"));
    var letter = (dni % 23);

    switch (letter) {
    case 0: letter = 'T'; 
    break;
    case 1: letter = 'R'; 
    break;
    case 2: letter = 'W'; 
    break;
    case 3: letter = 'A'; 
    break;
    case 4: letter = 'G'; 
    break;
    case 5: letter = 'M'; 
    break;
    case 6: letter = 'Y'; 
    break;
    case 7: letter = 'F'; 
    break;
    case 8: letter = 'P'; 
    break;
    case 9: letter = 'D'; 
    break;
    case 10: letter = 'X'; 
    break;
    case 11: letter = 'B'; 
    break;
    case 12: letter = 'N'; 
    break;
    case 13: letter = 'J'; 
    break;
    case 14: letter = 'Z'; 
    break;
    case 15: letter = 'S'; 
    break;
    case 16: letter = 'Q'; 
    break;
    case 17: letter = 'V'; 
    break;
    case 18: letter = 'H'; 
    break;
    case 19: letter = 'L'; 
    break;
    case 20: letter = 'C'; 
    break;
    case 21: letter = 'K'; 
    break;
    case 22: letter = 'E'; 
    break;
    default:
      letter = 'DNI inválido';
  }
  alert("La letra es " + letter);

  */
