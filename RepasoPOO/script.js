class Vehiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descripcion() {
        return `El vehículo es de la marca ${this.marca}, modelo ${this.modelo} del año (${this.ano})`;
    }

    edad() {
        const yearActual = new Date().getFullYear();
        return yearActual - this.ano;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, ano, puertas) {
        super(marca, modelo, ano);
        this.puertas = puertas;
    }

    descripcion() {
        return `El vehículo es de la marca ${this.marca}, modelo ${this.modelo} del año (${this.ano}) tiene ${this.puertas} puertas`;
    }
}

const auto1 = new Auto("Toyota", "Corolla", 2015, 4);
const auto2 = new Auto("Ford", "Mustang", 2018, 2);

console.log(auto1.descripcion());
console.log(`Edad: ${auto1.edad()} años`);

console.log(auto2.descripcion());
console.log(`Edad: ${auto2.edad()} años`);