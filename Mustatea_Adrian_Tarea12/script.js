// 1. Crea una función llamada esperarSegundos que reciba un número de segundos, devuelva una Promise que se resuelva con el texto 
// "Han pasado X segundos", debiendo haber esperado realmente esos segundos usando setTimeout.

/*

function esperarSegundos(segundos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Han pasado " + segundos +  " segundos");
    }, segundos * 1000);
  });
}

esperarSegundos(3)
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => {
    console.log("Error:", error);
  });

*/

// 2. Crea una función doblarNumero que reciba un número y devuelva una promesa, 
// de forma que espere un segundo y resuelva con el número multiplicado por dos.

/*

function doblarNumero(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero * 2);
    }, 1000);
  });
}

doblarNumero(5)
  .then(resultado => {
    console.log("Resultado:", resultado);
  });

*/

// 3. Crea una función dividirEntreDos que reciba un número y espere un segundo. 
// Si el número es 0 rechaza con “No se puede dividir”, si no resuelve con el número dividido entre dos.

/*

function dividirEntreDos(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero == 0) {
        reject("No se puede dividir");
      } else {
        resolve(numero / 2);
      }
    }, 1000);
  });
}

dividirEntreDos(2000)
  .then(resultado => console.log("Resultado:", resultado))
  .catch(error => console.log("Error:", error));

dividirEntreDos(0)
  .then(resultado => console.log("Resultado:", resultado))
  .catch(error => console.log("Error:", error));

*/


