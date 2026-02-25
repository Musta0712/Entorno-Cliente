// 1. Crear una función llamada hacerTarea que devuelva una promesa, espere un segundo y se resuelva con el mensaje “Tarea completada”. 
// Crea una función run() marcada como async que llame a hacerTarea usando await e imprima por consola el mensaje que devuelve.

/*

function hacerTarea() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tarea completada");
    }, 1000); // espera 1 segundo
  });
}

async function run() {
  try {
    const mensaje = await hacerTarea();
    console.log(mensaje);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();

*/

// 2. Crea una función llamada doblar que reciba un número como parámetro, devuelva una promesa y espere un segundo, 
// resolviendo con el número mutiplicado por dos si el número es positivo y rechazando con “Utiliza solo números positivos” si no. Crea una función run() marcada como async que llame a doblar(5) usando await, y vuelve a doblar el resultado volviendo a llamar a la función doblar para luego imprimir en consola “Resultado: X”

/*

function doblar(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero > 0) {
        resolve(numero * 2);
      } else {
        reject("Utiliza solo números positivos");
      }
    }, 1000); // espera 1 segundo
  });
}

async function run() {
  try {
    const resultado1 = await doblar(5);
    const resultado2 = await doblar(resultado1);
    console.log(`Resultado: ${resultado2}`);
  } catch (error) {
    console.log(error);
  }
}

run();

*/