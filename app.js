"use strict";
// const wrapper = document.querySelector(".wrapper");
// const renderButton = document.getElementById("renderButton");
// const cardAmount = document.getElementById("cardsAmount");
// const searchInput = document.getElementById("searchInput");

// function renderCards(items) {
//   if (Array.isArray(items) && items.length > 0) {
//     wrapper.innerHTML = "";
//     wrapper.innerHTML = items
//       .map((item) => `<div class='card'>${item.title}</div>`)
//       .join("");
//   }
// }

// async function getProducts(limit) {
//   const newLimit = limit > 0 ? limit : 30;
//   try {
//     const response = await fetch(
//       `https://dummyjson.com/products?limit=${newLimit}`
//     );
//     const { products } = await response.json();
//     return products;
//   } catch {
//     console.error("Ошыпка");
//   }
// }

// renderButton.addEventListener("click", () =>
//   getProducts(cardAmount.value).then((data) => renderCards(data))
// );

// function searchCards() {
//   let cards = document.querySelectorAll(".card");
//   for (let card of cards) {
//     if (
//       searchInput.value &&
//       card.textContent.toLowerCase().includes(searchInput.value.toLowerCase())
//     ) {
//       card.classList.add("marked");
//     } else if (searchInput.value === "") {
//       card.classList.remove("marked");
//     } else {
//       card.classList.remove("marked");
//     }
//   }
// }

// searchInput.addEventListener("input", searchCards);
let a = 3;

switch (a) {
  case 2: {
    console.log("два");
    break;
  }
  case 1: {
    console.log("один");
    break;
  }
  default: {
    console.log("чето другое");
  }
}
