
let Aform = document.getElementById('Aform');

Aform.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let Aemail = Aform.Aemail.value;
    let Apassword = Aform.Apassword.value;
    
    let loginData = { Aemail, Apassword };
    localStorage.setItem("loginData", JSON.stringify(loginData));

    if(Aemail === "admin@empher.com" && Apassword === "empher@123"){
        window.location.href = "admin.html";
        alert("Logged in as Admin.");
    }else{
        alert("Invalid email or password.");
        Aform.reset();
    }
})

let Uform = document.getElementById("Uform");
Uform.addEventListener("submit", function (event) {
  event.preventDefault();

  let Uemail = Uform.Uemail.value;
  let Upassword = Uform.Upassword.value;

  let UloginData = { Uemail, Upassword };
  localStorage.setItem("UloginData", JSON.stringify(UloginData));

  if (Uemail === "user@empher.com" && Upassword === "user@123") {
    window.location.href = "books.html";
    alert("user login success");
  } else {
    alert("Invalid email or password.");
    Uform.reset();
  }
});