import { baseUrl } from "./baseUrl.js";
import { displayBooks } from "./displayBooks.js";

let UloginData = JSON.parse(localStorage.getItem("UloginData"));

if (UloginData.Uemail !== "user@empher.com") {
  alert("User Not Logged In");
  window.location.href = "index.html";
}

fetch(`${baseUrl}/books`,{
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    }
}).then((res)=>res.json())
    .then((books)=>displayBooks(books,false,false,true))
    .catch((error)=>console.error('Error:', error));

    let availableBooks = document.getElementById("availableBooks");
    availableBooks.addEventListener("click", (event) => {
      fetch(`${baseUrl}/books`)
       .then((res)=>res.json())
        .then((books)=>{
          let availableBooks = books.filter((el,i)=>
          el.isAvailable == true
          )

          displayBooks(availableBooks,true,false,true)})
    });

      