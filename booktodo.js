

const nameInput = document.querySelector("#name");
const authorInput = document.querySelector("#author");
const publicationInput = document.querySelector("#publication");
const priceInput = document.querySelector("#price");
const button = document.querySelector(".btn");
// const button = document.getElementById(".btn");
const bookList = document.querySelector("#book-list");

button.addEventListener("click", function(){
    if(nameInput.value=="" && authorInput.value =="" && publicationInput.value == "" && priceInput.value == ""){
        alert("Enter correct value");

    }
    else{
        const bookListRow = document.createElement("tr");

        const newName = document.createElement("th");
        newName.innerHTML= nameInput.value;
        bookListRow.appendChild(newName);

        const newAuthor = document.createElement("th");
        newAuthor.innerHTML= authorInput.value;
        bookListRow.appendChild(newAuthor);

        const newPublication = document.createElement("th");
        newPublication.innerHTML= publicationInput.value;
        bookListRow.appendChild(newPublication);

        const newPrice = document.createElement("th");
        newPrice.innerHTML= priceInput.value;
        bookListRow.appendChild(newPrice);

        bookList.appendChild(bookListRow);
    }
});