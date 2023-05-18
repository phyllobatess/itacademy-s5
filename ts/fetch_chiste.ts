interface listJoke {
  id: string;
  chiste: string;
  status: number;
}

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
      return response.json();
    })

    .then((response: listJoke) => {
      console.log(response);
    });
}
