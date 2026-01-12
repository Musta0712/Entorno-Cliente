// Escribe un programa que permita conocer la posición del ratón cada vez que haces clic.

const coordenadasDiv = document.getElementById('coordenadas');

document.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    alert(`Posición del clic: X=${x}, Y=${y}`);
});