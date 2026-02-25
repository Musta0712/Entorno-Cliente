
document.addEventListener("DOMContentLoaded", () => {
const select = document.getElementById("AnimalSelect");
const btnBuscar = document.getElementById("btnBuscar");
const card = document.getElementById("AnimalCard");

const name = document.getElementById("name");
const diet = document.getElementById("diet");
const type = document.getElementById("type");
const color = document.getElementById("color");


async function obtenerAnimal(nombreAnimal) {
    try {
        const data = await response.json();
        const response = await fetch(
            `https://api.api-ninjas.com/v1/animals?name=${nombreAnimal.toLowerCase()}`,
            {
            headers: {
                "X-Api-Key": "kofk8qwjf8yu6tW4xQTo0NQdsqRGYVOoQZw0wGvA"
                }
            }
        );

        name.textContent = data.name.toUpperCase();
        diet.textContent = "Dieta: " + data.diet;
        type.textContent = "Tipo: " + data.type;
        color.textContent = "color: " + data.color;

    } catch {
        alert("Animal no encontrado");
    }

}

async function cargarLista() {
    try {

        const respuestaInicial = await fetch("https://api.api-ninjas.com/v1/animals?name=");
        const datosIniciales = await respuestaInicial.json();

        const total = datosIniciales.count;
        
        const respuesta = await fetch(`https://api.api-ninjas.com/v1/animals?name=${total}`);
        const data = await respuesta.json();
        
        data.results.forEach(animal => {
            const option = document.createElement("option");
            option.value = animal.name;
            option.textContent = animal.name;
            select.appendChild(option);
        });

    } catch (error) {
    console.error("Error cargando la lista:", error);
    }
}


btnBuscar.addEventListener("click", () => {
    if (animal.valor) {
        obtenerAnimal(animal.valor);
    }
});

cargarLista();
});
