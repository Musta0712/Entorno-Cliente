async function showBooks() {
  try {
    const response = await fetch("https://stephen-king-api.onrender.com/api/books");
    const data = await response.json();
    const books = data.data;

    books.forEach(book => {
      console.log(`Title: ${book.Title}, Year: ${book.Year}`);
    });

  } catch (error) {
    console.error("Se produjo un error al obtener los libros:", error);
  }
}

showBooks();

