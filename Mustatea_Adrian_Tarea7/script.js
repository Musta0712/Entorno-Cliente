// 1.- Crear un objeto persona con nombre, edad y ciudad. Acceder a sus propiedades con . y con [ ]. Cambiar el valor de edad y agregar una nueva propiedad profesión.

class Person {
    constructor (nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
};

const persona = new Person("Diego", 27, "Madrid");

// 2. Acceder a sus propiedades con . 
console.log(persona.nombre);  // "Diego"
console.log(persona.edad);    // 27

// 3. Acceder a sus propiedades con [ ]
console.log(persona["ciudad"]); // "Madrid"

// 4. Cambiar el valor de edad
persona.edad = 31;

// 5. Agregar una nueva propiedad profesión
persona.profesion = "Ingeniero";

// Mostrar el objeto actualizado
console.log(persona);
