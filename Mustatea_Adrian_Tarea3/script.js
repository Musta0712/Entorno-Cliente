// 1. Se le pide al usuario el número de valores a introducir. Posteriormente se le van pidiendo. 
// Se le devuelven ordenados. ¿Cómo?

/*

let count = Number(prompt("¿Cuántos números deseas ingresar?"));
count = Number(count);

if (count > 0) {
  let values = [];

  for (let i = 0; i < count; i++) {
    let value = Number(prompt("Ingresa el número: "));
    values.push(Number(value));
  }

  // Lo que hace esto es ordenarlo manualmente de menor a mayor

  for (let i = 0; i < values.length - 1; i++) {
    for (let j = 0; j < values.length - 1 - i; j++) {
      if (values[j] > values[j + 1]) {

        let z = values[j];
        values[j] = values[j + 1];
        values[j + 1] = z;
      }
    }
  }

  alert("Los valores ordenados de menor a mayor: " + values.join(", "));
} else {
  alert("Debes ingresar un número válido mayor que cero.");
}

*/

// 2. Sistema de inicio de sesión y registro con arrays (menú incluído).