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
//Funcion que carga Dad JOke con método fetch:
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
const button = document.getElementById("siguienteChiste");
button.addEventListener("click", showRandomJoke);
const mostrarData = (response) => {
    //console.log(response);
    document.getElementById("chiste").innerHTML = response.joke; //El simbolo ! de exclamacion es el " non-null Assertion Operator" que nos fuerza a que el valor no sea null o undefined, si no lo ponemos da ERROR"
    //Deberia mostrar los botones de puntuacion 1-2-3 pero no funciona ya que se muestran desde el principio:
    document.getElementById("botones").classList.remove("ocultar");
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
const reportAcudits = [];
const uno = document.getElementById("uno");
uno.addEventListener("click", () => {
    var _a;
    reportAcudits.push({
        joke: (_a = document.getElementById("chiste")) === null || _a === void 0 ? void 0 : _a.innerHTML,
        score: 1,
        date: dateToday,
    });
    console.log(reportAcudits);
});
const dos = document.getElementById("dos");
dos.addEventListener("click", () => {
    var _a;
    reportAcudits.push({
        joke: (_a = document.getElementById("chiste")) === null || _a === void 0 ? void 0 : _a.innerHTML,
        score: 2,
        date: dateToday,
    });
    console.log(reportAcudits);
});
const tres = document.getElementById("tres");
tres.addEventListener("click", () => {
    var _a;
    reportAcudits.push({
        joke: (_a = document.getElementById("chiste")) === null || _a === void 0 ? void 0 : _a.innerHTML,
        score: 3,
        date: dateToday,
    });
    console.log(reportAcudits);
});
