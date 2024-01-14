const apiBooks =
  "https://www.google.com/url?q=https://striveschool-api.herokuapp.com/books&sa=D&source=editors&ust=1705153895981925&usg=AOvVaw0U-B60xRUWfdRJp3Jl1rjV";

const container = document.querySelector(".container");

fetch(apiBooks, {
  method: "GET",
})
  .then((response) => {
    if (response.ok) {
      console.log(response);
      return response.json();
    } else {
      throw response.status;
      // console.log(response);
    }
  })
  .then((dataBooks) => {
    console.log(dataBooks);

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
        <div class="flex__button">
        <button onclick="select(event)"><ion-icon name="cart-outline"></ion-icon>${book.price.toFixed(
          2
        )}</button>
        <button onclick="hideCard(event)">Nascondi</button>
        </div>
      </div>
    </div>
  </div>`;
    });
    // container.innerHTML += data.books;
  });
const select = (clickEvent) => {
  const selected = document.querySelectorAll(".selected");
  selected.forEach((removeClass) => {
    removeClass.classList.remove("selected");
  });
  clickEvent.target.closest(".card").classList.add("selected");
};

const nascondiCard = document.querySelectorAll(".hide");
const hideCard = (hideEvent) => {
  nascondiCard.forEach((displayNone) => {
    displayNone.classList.remove("hide");
  });
  hideEvent.target.closest(".card").classList.add("hide");
};
