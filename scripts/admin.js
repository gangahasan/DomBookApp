import { baseUrl } from "./baseUrl.js";
import { displayBooks } from "./displayBooks.js";

let loginData = JSON.parse(localStorage.getItem("loginData"));

if (loginData.Aemail !== "admin@empher.com") {
  alert("Admin not logged in");
  window.location.href = "index.html";
}

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let title = form.name.value;
  let author = form.author.value;
  let category = form.category.value;
  let isAvailable = true;
  let isVerified = false;
  let borrowedDays = null;
  let imageUrl = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

  let book = {
    title,
    author,
    category,
    isAvailable,
    isVerified,
    borrowedDays,
    imageUrl,
  };

  fetch(`${baseUrl}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then(() => {
      alert("Book added successfully!");
      // displayBooks(data,true,true,false)  // refresh the table with the new book
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to add book. Please try again later.");
    });
});
fetch(`${baseUrl}/books`)
  .then((response) => response.json())
  .then((books) => {
    displayBooks(books, true, true, false);
  })
  .catch((err) => {
    console.log(err);
    alert("Failed to fetch books. Please try again later.");
  });
