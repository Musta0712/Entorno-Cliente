const addImageBtn = document.getElementById("addImageBtn");
const gallery = document.getElementById("gallery");

addImageBtn.addEventListener("click", function() {
    const imageUrl = document.getElementById("imageUrl").value;
    const imageCaption = document.getElementById("imageCaption").value;

    if (imageUrl === "" || imageCaption === "") {
        alert("Por favor, completa ambos campos");
    return;
    }

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = imageCaption;

    const caption = document.createElement("p");
    caption.textContent = imageCaption;

    card.appendChild(img);
    card.appendChild(caption);

    gallery.appendChild(card);

    document.getElementById("imageUrl").value = "";
    document.getElementById("imageCaption").value = "";
});