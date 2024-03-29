const apiBooks = "https://striveschool-api.herokuapp.com/books";

const container = document.querySelector(".container");

fetch(apiBooks, {
  method: "GET",
})
  .then((response) => response.json()) // Dopo aver ricevuto la response ciclo con .map i libri inserendoli nell'HTML
  .then((dataBooks) => {
    dataBooks.map((book) => {
      container.innerHTML += `
      <div class="card">
      <img
        src="${book.img}"
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-title">${book.category}</h6>
        
      </div>
      <div class="flex__button">
        <button><ion-icon name="cart-outline"></ion-icon>${book.price.toFixed(
          2
        )}</button>
        <button id="hide">Nascondi</button>
        <button><a href="/dettagli.html?id=${book.asin}">Dettagli</a></button>
        </div>
    </div>
  </div>`;
    });
    // Richiamo gli EventListener
    const hideButton = document.querySelectorAll("#hide");
    hideButton.forEach((hide) => {
      hide.addEventListener("click", hideCard);
    });
    const selectCard = document.querySelectorAll(".card");
    selectCard.forEach((selection) => {
      selection.addEventListener("click", select);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// Creo una funzione che mi permette di aggiungere la selezione alle card
// tramite delle classi CSS
const select = (clickEvent) => {
  const selected = document.querySelectorAll(".selected");
  selected.forEach((removeClass) => {
    removeClass.classList.remove("selected");
  });
  clickEvent.target.closest(".card").classList.add("selected");
};
// Creo funzione per nascondere le card tramite click del bottone
const nascondiCard = document.querySelectorAll(".card");
const hideCard = (hideEvent) => {
  hideEvent.target.closest(".card").classList.add("hide");
};

//! SearchBar
