// Crea una página web que cuente cuántas veces ha visitado el usuario la página, usando cookies para guardar el número de visitas.
// Cada vez que el usuario abra o recargue la página, muestra un mensaje como: 
// --->"Bienvenid@, esta es tu visita núm. X"
// Se debe utilizar métodos que permitan que existan otras cookies almacenadas sin que esto influya.


// Obtiene una cookie por su nombre sin afectar a las demás
const getCookie = (nombre) => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(`${nombre}=`)) {
      return cookie.substring(nombre.length + 1);
    }
  }
  return null;
};

// Crea o actualiza una cookie permitiendo otras cookies
const setCookie = (name, value, options = {}) => {
  options = {
    path: '/',
    ...options
  };

  if (options.expires === undefined) {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    options.expires = date;
  }

  if (options.expires.toUTCString) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (const key in options) {
    updatedCookie += "; " + key;
    const optionValue = options[key];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
};

let visitas = getCookie("visitas");

if (visitas) {
  visitas = parseInt(visitas) + 1;
} else {
  visitas = 1;
}

setCookie("visitas", visitas, { expires: 365 });

document.getElementById("mensaje").textContent =
  `Bienvenid@, esta es tu visita núm. ${visitas}`;
