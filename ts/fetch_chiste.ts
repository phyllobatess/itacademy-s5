import { listJoke } from "./interface";
const header: any = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
const reportAcudits: any = [];
const reportAcuditsClean: any = [];

//Funcion que carga Dad Joke con método fetch:
export default function fetchChiste(): void {
  const urlChiste: string = "https://icanhazdadjoke.com/";

  fetch(urlChiste, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      //console.log(response);
      //usamos .json() para convertir los datos de la respuesta de la petición a datos de JavaScript Object Notation (JSON)
      return response.json();
    })

    .then((response: listJoke) => {
      mostrarData(response);
    })
    .catch((error) => console.log(error));
}
//Botón de siguiente chiste:
const button: any = document.getElementById("siguienteChiste");
button.addEventListener("click", showRandomJoke);
button.addEventListener("click", muestraBotones);
button.addEventListener("click", limpiaReportAcudits);

//Funcion que muestra los 3 botones al pulsar "Siguiente chiste"
function muestraBotones() {
  let uno = document.getElementById("uno");
  uno!.classList.remove("ocultar");
  let dos = document.getElementById("dos");
  dos!.classList.remove("ocultar");
  let tres = document.getElementById("tres");
  tres!.classList.remove("ocultar");
}

//Funcion que elimina chistes duplicados que tienen más de una puntuacion, primero comprueba si el chiste está en el array reportAccudits, si no está lo añade a reportAccudistClean, y si está lo sustituye
function limpiaReportAcudits() {
  for (let i = 0; i < reportAcudits.length; i++) {
    const index = reportAcudits.findIndex(
      (chiste: any) => chiste.joke === reportAcudits[i].joke
    );
    if (index == -1) {
      reportAcuditsClean.push({
        joke: document.getElementById("chiste")?.innerHTML,
        score: reportAcudits.score,
        date: dateToday,
      });
    } else {
      reportAcuditsClean[index] = reportAcudits[i];
    }
  }
  console.log(reportAcuditsClean);
}

const mostrarData = (response: listJoke) => {
  //console.log(response);
  document.getElementById("chiste")!.innerHTML = response.joke; //El simbolo ! de exclamacion es el " non-null Assertion Operator" que nos fuerza a que el valor no sea null o undefined, si no lo ponemos da ERROR"
};

//Funcion que carga Chuck Norris Jokes ahora por async/await:
async function chuckJoke() {
  const data = await fetch("https://api.chucknorris.io/jokes/random", header);
  const json = await data.json();
  document.getElementById("chiste")!.innerHTML = json.value;
}

//50% de posibilidades de que sea un chiste de chuck norris o de dad joke:
function showRandomJoke() {
  let option = Math.round(Math.random() * 10);
  if (option > 5) fetchChiste();
  else chuckJoke();
}

//Puntuacion de los chistes:
const d = new Date();
let dateToday = d.toISOString();

const uno: any = document.getElementById("uno")!;
uno.addEventListener("click", () => {
  reportAcudits.push({
    joke: document.getElementById("chiste")?.innerHTML,
    score: 1,
    date: dateToday,
  });
  //console.log(reportAcudits);
});

const dos: any = document.getElementById("dos")!;
dos.addEventListener("click", () => {
  reportAcudits.push({
    joke: document.getElementById("chiste")?.innerHTML,
    score: 2,
    date: dateToday,
  });
  //console.log(reportAcudits);
});

const tres: any = document.getElementById("tres")!;
tres.addEventListener("click", () => {
  reportAcudits.push({
    joke: document.getElementById("chiste")?.innerHTML,
    score: 3,
    date: dateToday,
  });
  //console.log(reportAcudits);
});

//Mostrar informacion del clima:
const appKey = "7abf35113b8a7dc94c53a73fbe5814a0";
let lat = 41.3828939;
let lon = 2.1774322;
const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${appKey}`;
let city = "Barcelona";
let countryCode = "ES";

const url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=${appKey}`;

const mostrarCiudad = async () => {
  const res = await fetch(url2);
  const data2 = await res.json();
  const [{ name }] = data2;
  document.getElementById("ciudad")!.innerHTML = name;
};

const clima: any = document.getElementById("botonClima")!;
clima.addEventListener("click", mostrarCiudad());
