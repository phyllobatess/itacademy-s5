var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const header = {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
};
const reportAcudits = [];
const reportAcuditsClean = [];
//Funcion que carga Dad Joke con método fetch:
export default function fetchChiste() {
    const urlChiste = "https://icanhazdadjoke.com/";
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
        .then((response) => {
        mostrarData(response);
    })
        .catch((error) => console.log(error));
}
//Botón de siguiente chiste:
const button = document.getElementById("siguienteChiste");
button.addEventListener("click", showRandomJoke);
button.addEventListener("click", muestraBotones);
button.addEventListener("click", limpiaReportAcudits);
//Funcion que muestra los 3 botones al pulsar "Siguiente chiste"
function muestraBotones() {
    let uno = document.getElementById("uno");
    uno.classList.remove("ocultar");
    let dos = document.getElementById("dos");
    dos.classList.remove("ocultar");
    let tres = document.getElementById("tres");
    tres.classList.remove("ocultar");
}
//Funcion que elimina chistes duplicados que tienen más de una puntuacion, primero comprueba si el chiste está en el array reportAccudits, si no está lo añade a reportAccudistClean, y si está lo sustituye
function limpiaReportAcudits() {
    var _a;
    for (let i = 0; i < reportAcudits.length; i++) {
        const index = reportAcudits.findIndex((chiste) => chiste.joke === reportAcudits[i].joke);
        if (index == -1) {
            reportAcuditsClean.push({
                joke: (_a = document.getElementById("chiste")) === null || _a === void 0 ? void 0 : _a.innerHTML,
                score: reportAcudits.score,
                date: dateToday,
            });
        }
        else {
            reportAcuditsClean[index] = reportAcudits[i];
        }
    }
    console.log(reportAcuditsClean);
}
const mostrarData = (response) => {
    //console.log(response);
    document.getElementById("chiste").innerHTML = response.joke; //El simbolo ! de exclamacion es el " non-null Assertion Operator" que nos fuerza a que el valor no sea null o undefined, si no lo ponemos da ERROR"
};
//Funcion que carga Chuck Norris Jokes ahora por async/await:
function chuckJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("https://api.chucknorris.io/jokes/random", header);
        const json = yield data.json();
        document.getElementById("chiste").innerHTML = json.value;
    });
}
//50% de posibilidades de que sea un chiste de chuck norris o de dad joke:
function showRandomJoke() {
    let option = Math.round(Math.random() * 10);
    if (option > 5)
        fetchChiste();
    else
        chuckJoke();
}
//Puntuacion de los chistes:
const d = new Date();
let dateToday = d.toISOString();
const uno = document.getElementById("uno");
uno.addEventListener("click", () => {
    var _a;
    reportAcudits.push({
        joke: (_a = document.getElementById("chiste")) === null || _a === void 0 ? void 0 : _a.innerHTML,
        score: 1,
        date: dateToday,
    });
    //console.log(reportAcudits);
});
const dos = document.getElementById("dos");
dos.addEventListener("click", () => {
    var _a;
    reportAcudits.push({
        joke: (_a = document.getElementById("chiste")) === null || _a === void 0 ? void 0 : _a.innerHTML,
        score: 2,
        date: dateToday,
    });
    //console.log(reportAcudits);
});
const tres = document.getElementById("tres");
tres.addEventListener("click", () => {
    var _a;
    reportAcudits.push({
        joke: (_a = document.getElementById("chiste")) === null || _a === void 0 ? void 0 : _a.innerHTML,
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
const mostrarCiudad = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(url2);
    const data2 = yield res.json();
    const [{ name }] = data2;
    document.getElementById("ciudad").innerHTML = name;
});
const clima = document.getElementById("botonClima");
clima.addEventListener("click", mostrarCiudad());
