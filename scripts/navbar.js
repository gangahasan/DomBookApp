const navbar = () => {
  let card = `<style>
#nav{
    display:flex;
  justify-content: space-around;
  align-items: center;
  background-color: teal;
  color: white;
  padding: 10px;
  text-align: center;
  font-size:20px
}
  a{
    text-decoration: none;
    color: White;
    padding: 10px;
  }
</style>

<nav id="nav">
<a href="./index.html">Home</a>
<a href="./admin.html">Admin</a>
<a href="./books.html">Books</a>
</nav>`;

  let nav = document.getElementById("navbar");
  nav.innerHTML = card;
}
navbar();
