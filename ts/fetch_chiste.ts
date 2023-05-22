import { listJoke } from "./interface";
const header: any = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};


//Funcion que carga Dad JOke con método fetch:
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
const button: any = document.getElementById("siguienteChiste");
button.addEventListener("click", showRandomJoke);

const mostrarData = (response: listJoke) => {
  //console.log(response);
  document.getElementById("chiste")!.innerHTML = response.joke; //El simbolo ! de exclamacion es el " non-null Assertion Operator" que nos fuerza a que el valor no sea null o undefined, si no lo ponemos da ERROR"

  //Deberia mostrar los botones de puntuacion 1-2-3 pero no funciona ya que se muestran desde el principio:
  document.getElementById("botones")!.classList.remove("ocultar");
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
const reportAcudits: any = [];


const uno: any = document.getElementById("uno")!;
uno.addEventListener("click", () => {
    reportAcudits.push({
      joke: document.getElementById("chiste")?.innerHTML,
      score: 1,
      date: dateToday,
    });
    console.log(reportAcudits)
});

const dos: any = document.getElementById("dos")!;
dos.addEventListener("click", () => {
  reportAcudits.push({
    joke: document.getElementById("chiste")?.innerHTML,
    score: 2,
    date: dateToday,
  });
  console.log(reportAcudits);
});

const tres: any = document.getElementById("tres")!;
tres.addEventListener("click", () => {
  reportAcudits.push({
    joke: document.getElementById("chiste")?.innerHTML,
    score: 3,
    date: dateToday,
  });
  console.log(reportAcudits);
});





