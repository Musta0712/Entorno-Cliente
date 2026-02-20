const select = document.getElementById("pokemonSelect");
const btnBuscar = document.getElementById("btnBuscar");
const btnSonido = document.getElementById("btnSonido");
const card = document.getElementById("pokemonCard");

const nombre = document.getElementById("nombre");
const id = document.getElementById("id");
const tipo = document.getElementById("tipo");
const imagen = document.getElementById("imagen");

let sonidoActual = "";

async function cargarLista() {
  try {
    const respuestaInicial = await fetch("https://pokeapi.co/api/v2/pokemon");
    const datosIniciales = await respuestaInicial.json();

    const total = datosIniciales.count;

    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${total}`);
    const data = await respuesta.json();

    data.results.forEach(pokemon => {
      const option = document.createElement("option");
      option.value = pokemon.name;
      option.textContent = pokemon.name;
      select.appendChild(option);
    });

  } catch (error) {
    console.error("Error cargando la lista:", error);
  }
}

async function obtenerPokemon(nombrePokemon) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);
    const data = await response.json();

    card.classList.remove("oculto");

    nombre.textContent = data.name.toUpperCase();
    id.textContent = "ID: " + data.id;
    tipo.textContent = "Tipo: " + data.types.map(t => t.type.name).join(", ");
    imagen.src = data.sprites.other["official-artwork"].front_default;

    sonidoActual = data.cries.latest;

    if (sonidoActual) {
      new Audio(sonidoActual).play();
    }

  } catch {
    alert("Pokémon no encontrado");
  }
}

btnBuscar.addEventListener("click", () => {
  const valor = document.getElementById("searchInput").value;
  if (valor) obtenerPokemon(valor);
});

select.addEventListener("change", () => {
  if (select.value) obtenerPokemon(select.value);
});

btnSonido.addEventListener("click", () => {
  if (sonidoActual) {
    new Audio(sonidoActual).play();
  }
});

cargarLista();