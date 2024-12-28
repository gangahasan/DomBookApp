import { baseUrl } from "./baseUrl.js";
export function displayBooks(data, isverified,isdelete){
    let cont = document.getElementById('books');
    cont.innerHTML = '';

    data.map((el,i) => {
        let div = document.createElement('div');
        div.className = 'book';

        let title = document.createElement('h3');
        let author = document.createElement('h4');
        let category = document.createElement('h4');
        let isAvailable = document.createElement('h4');
        let isVerified = document.createElement('h4');
        let borrowedDays = document.createElement('h4');

        title.textContent = `Title: ${el.title}`;
        author.textContent = `Author: ${el.title}`;
        category.textContent = `Category: ${el.title}`;
        isVerified.textContent =  "isVerified: false";
        isAvailable.textContent = "isAvailable: true ";
        borrowedDays.textContent = "BorrowDays : null";

        div.append(title,author,category,isAvailable,borrowedDays);

        if(isverified == true) {
            let verifyBtn = document.createElement('button');
            verifyBtn.textContent = "Verify Button"
            verifyBtn.addEventListener('click', function() {
                alert("Are you sure to Verify..?");
                fetch(`${baseUrl}/books/${el.id}`,{
                        method: "PATCH",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(isVerified = false)
                    }).then(()=>{
                        alert("Book verified successfully!");
                        button.disabled = true;
                        displayBooks(data, isverified,isdelete);
                    }).catch((err)=>{
                        console.error(err);
                        alert("Failed to verified. Please try again later.");
                    })
            });
            div.append(verifyBtn);
        }

        if(isdelete == true) {
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete Button";
            deleteBtn.addEventListener('click', function() {
                alert("Are you sure to Delete..?");
                fetch(`${baseUrl}/books/${el.id}`,{
                        method: "DELETE"
                    }).then(()=>{
                        alert("Book deleted successfully!");
                        displayBooks(data, isverified,isdelete);
                    }).catch((err)=>{
                        console.error(err);
                        alert("Failed to delete book. Please try again later.");
                    })
            });
            div.append(deleteBtn);
        }
        cont.append(div);

});

}