
let Aform = document.getElementById('Aform');

Aform.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let Aemail = Aform.Aemail.value;
    let Apassword = Aform.Apassword.value;
    console.log(Aemail, Apassword);

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
  console.log(Uemail, Upassword);

  if (Uemail === "user@empher.com" && Upassword === "user@123") {
    window.location.href = "admin.html";
    alert("user login success");
  } else {
    alert("Invalid email or password.");
    Uform.reset();
  }
});