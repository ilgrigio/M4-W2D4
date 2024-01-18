const params = new URLSearchParams(location.search);
const bookId = params.get("id");

function details() {
  fetch("https://striveschool-api.herokuapp.com/books/" + bookId)
    .then((res) => res.json())
    .then((data) => {
      const detailsContainer = document.querySelector("#details-container");

      detailsContainer.innerHTML = `<div class="container-card">
         <img class="img-dettagli" src="${data.img}" alt="Book Image">
         <div class="info">
            <h1> ${data.title} </h1>
            <p> Category: ${data.category} </p>
            <button class="button_cart"><ion-icon name="cart-outline"></ion-icon> Price: ${data.price} € </button>
         </div>
        </div>`;
    })
    .catch((error) => console.error("Attenzione! Errore", error));
}

details();
