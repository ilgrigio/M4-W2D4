// const apiBooks = "https://striveschool-api.herokuapp.com/books";

// const container = document.querySelector(".container");

// fetch(apiBooks, {
//   method: "GET",
// })
//   .then((response) => {
//     return response.json();
//   }) // Dopo aver ricevuto la response ciclo con .map i libri inserendoli nell'HTML
//   .then((dataBooks) => {
//     dataBooks.map((book) => {
//       container.innerHTML += `
//       <div class="card" onclick="select(event)">
//       <img
//         src="${book.img}"
//         class="card-img-top"
//         alt=""
//       />
//       <div class="card-body">
//         <h5 class="card-title">${book.title}</h5>
//         <h6 class="card-title">${book.category}</h6>
//         <div class="flex__button">
//         <button onclick=""><ion-icon name="cart-outline"></ion-icon>${book.price.toFixed(
//           2
//         )}</button>
//         <button onclick="hideCard(event)">Nascondi</button>
//         </div>
//       </div>
//     </div>
//   </div>`;
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// // Creo una funzione che mi permette di aggiungere e togliere la selezione alle card
// // tramite delle classi CSS
// const select = (clickEvent) => {
//   const selected = document.querySelectorAll(".selected");
//   selected.forEach((removeClass) => {
//     removeClass.classList.remove("selected");
//   });
//   clickEvent.target.closest(".card").classList.add("selected");
// };
// // Creo funzione per nascondere le card tramite click del bottone
// const nascondiCard = document.querySelectorAll(".hide");
// const hideCard = (hideEvent) => {
//   nascondiCard.forEach((displayNone) => {
//     displayNone.classList.remove("hide");
//   });
//   hideEvent.target.closest(".card").classList.add("hide");
// };

// SearchBar
// Funzione event per poter ricercare nella Searchbar
//! Inserire la condizione per mostrare il risultato di ricerca dopo almeno 3 lettere
// const showTarget = (keyupEvent) => {
//   const inputs = document.querySelectorAll(".i_text");
//   for (let input of inputs) {
//     if (input.value > 3) {
//       console.log(input.value);
//     }
//     // console.log(keyupEvent.target.value);
//     else {
//       console.log("Add letter");
//     }
//   }
// };
const search = () => {
  const book = document.getElementById("searchField");
  console.log("book", book);
  fetch("https://striveschool-api.herokuapp.com/books?q=" + book.value)
    .then((resp) => resp.json())
    .then((json) => console.log(json));
  let htmlResults = "";
  // https://striveschool-api.herokuapp.com/api/deezer/search?q=
};
