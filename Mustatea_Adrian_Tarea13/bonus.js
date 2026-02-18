async function obtenerLibros() {
  try {
    const response = await fetch("https://stephen-king-api.onrender.com/api/books");

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos");
    }

    const data = await response.json();
    const books = data.data;

    const tableBody = document.getElementById("tabla-libros");

    books.forEach(book => {
      const row = document.createElement("tr");

      // Columna Título
      const titleCell = document.createElement("td");
      titleCell.textContent = book.Title;
      row.appendChild(titleCell);

      // Columna Año
      const yearCell = document.createElement("td");
      yearCell.textContent = book.Year;
      row.appendChild(yearCell);

      // Columna Imagen
      const imagenTd = document.createElement("td");
      const imagen = document.createElement("img");

      // Usar ISBN para obtener la portada
      imagen.src = `https://covers.openlibrary.org/b/isbn/${book.ISBN}-M.jpg`;
      imagen.alt = book.Title;
      imagen.style.width = "80px";

      // Si no hay imagen disponible, mostrar un placeholder
      imagen.onerror = () => {
        imagen.src = "https://via.placeholder.com/80x120?text=Sin+Imagen";
      };

      imagenTd.appendChild(imagen);
      row.appendChild(imagenTd);

      tableBody.appendChild(row);
    });

  } catch (error) {
    const container = document.getElementById("contenedor");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Se produjo un error al obtener los libros.";
    errorMessage.classList.add("error");
    container.appendChild(errorMessage);
  }
}

obtenerLibros();
