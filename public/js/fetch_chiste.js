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
        return response.json();
    })
        .then((response) => {
        console.log(response);
    });
}

const button = document.getElementById("siguienteChiste");
button.addEventListener("click", fetchChiste);