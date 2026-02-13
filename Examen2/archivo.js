// Ejercicio 1

const input = document.querySelector("nameTask");
const button = document.querySelector("button");
const list = document.querySelector("miLista");

button.addEventListener("click", function(event) {

    const valueInput = input.value;

    if(valueInput) {
        
        const li = document.createElement("li");
        li.textContent = valueInput;
        li.setAttribute("id", "task");
        list.appendChild(li);

        const p = document.getElementById("task");
        
        p.addEventListener("click", (event) => {
            event.target.style.background = "red";
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        list.appendChild(deleteButton);


        deleteButton.addEventListener("click", function() {
            list.remove();
        });

    } else {
        alert("No se puede añadir una tarea vacia");
    }
});



// Ejercicio 2
/*

const button = document.querySelector("button");
const parrafa = document.querySelector("parrafa");

button.addEventListener("click", function() {
    button.textContent = "Activado";

    if (button.textContent = "Activado") {
        parrafa.addEventListener("mouseover", function(){
            parrafa.classList.add("parrafo");
        });

        parrafa.addEventListener("mouseleave", function(){
            parrafa.classList.remove("parrafo");
        });
    }

    button.addEventListener("click", function() {
        button.textContent = "Desactivado";
        parrafa.classList.remove("parrafo");
    });
});

*/