let xp = 0;
let salud = 100;
let dinero = 50;
let tieneDracofagia = false;

const texto = document.querySelector("#texto");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const lugares = [
    {
        nombre: "pueblo",
        texto: "Eres un aventurero, llegas a un pueblo a descansar pero el cielo se vuelve de color rojizo y sientes la mirada del Dragón del que todos hablan desde la montaña. ¿Qué quieres hacer?",
        botones: ["Ir a la tienda", "Entrenar", "Luchar contra el dragón"],
        acciones: [irTienda, irEntrenar, lucharDragon]
    },
    {
        nombre: "tienda",
        texto: "El orco tiembla: 'Ese monstruo no es lo que parece si necesitas algo avisame pero te saldrá caro, prepárate bien y suerte la vas a necesitar'.",
        botones: ["Comprar salud (10 oro)", "La Dracofagia (300 oro)", "Volver al pueblo"],
        acciones: [comprarSalud, comprarArma, irPueblo]
    }
];

function actualizar(lugar) {
    texto.innerText = lugar.texto;
    btn1.innerText = lugar.botones[0];
    btn2.innerText = lugar.botones[1];
    btn3.innerText = lugar.botones[2];
    btn1.onclick = lugar.acciones[0];
    btn2.onclick = lugar.acciones[1];
    btn3.onclick = lugar.acciones[2];
}

function irPueblo() { actualizar(lugares[0]); }
function irTienda() { actualizar(lugares[1]); }

function irEntrenar() {
    xp += 10;
    dinero += 20;0
    actualizarStats();
    texto.innerText = "Entrenas bajo la lluvia. Escuchas un susurro en el viento: 'Sigue intentándolo, pequeño mortal asi podrás salvarnos a todos de la catástrofe que está apunto de pasar...' (+10 XP)";
}

function lucharDragon() {
    if (xp >= 30 && tieneDracofagia) {
        texto.innerText = "Voz del dragón: '¿Cómo... cómo has obtenido esa espada? ¡Es imposible! Me las pagarás heredero del trono...' ¡GANASTE EL JUEGO!";
        btn1.innerText = "Reiniciar";
        btn1.onclick = () => location.reload();
        btn2.style.display = "none";
        btn3.style.display = "none";
    } else if (xp >= 30 && !tieneDracofagia) {
        salud -= 20;
        actualizarStats();
        texto.innerText = "Voz del Dragón: 'Eres fuerte, humano, pero ninguna espada común puede herir mi escama. Necesitas algo más antiguo...'";
    } else {
        salud -= 40;
        actualizarStats();
        texto.innerText = "Voz del Dragón: 'Tu acero ni siquiera roza mi sombra. Eres demasiado débil.'";
        if (salud <= 0) {
            texto.innerText = "Has muerto. Reiniciando...";
            setTimeout(() => location.reload(), 2000);
        }
    }
}

function comprarSalud() {
    if (dinero >= 10) {
        dinero -= 10;
        salud += 20;
        actualizarStats();
        texto.innerText = "Bebes una poción. Tu salud se recupera.";
    } else {
        texto.innerText = "No tienes suficiente dinero.";
    }
}

function comprarArma() {
    if (tieneDracofagia) {
        texto.innerText = "Ya posees La Dracofagia. No hay arma más poderosa.";
        return;
    }

    if (dinero >= 300) {
        dinero -= 300;
        tieneDracofagia = true;
        xp += 50; 
        actualizarStats();
        texto.innerText = "El orco te entrega un arma envuelta en paños negros: 'Aquí está... La Dracofagia'. Sientes un poder inmenso.";
    } else {
        texto.innerText = "El orco gruñe: 'Esa arma cuesta 300 de oro. No acepto promesas'.";
    }
}

function actualizarStats() {
    document.querySelector("#xp").innerText = xp;
    document.querySelector("#salud").innerText = salud;
    document.querySelector("#dinero").innerText = dinero;
}

irPueblo();