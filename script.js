let myLibrary = [];
const bookAddingContainer = document.querySelector("#book-adding-container");
const bookAddingBtn = document.querySelector("#book-adding-btn");

// let title = document.querySelector("#title").value;
// let author = document.querySelector("#author").value
// let pages = document.querySelector("#pages").value

function Book(title, author, pages,readingStatus) {
  this.title = document.querySelector("#title").value;
  this.author = document.querySelector("#author").value;
  this.pages = document.querySelector("#pages").value;
  this.readingStatus = document.querySelector("#flexCheckDefault").checked ? "Reading Completed" : "Not Read Yet"
  // this.info = function () {
  //   return `The ${title} by ${author}, ${pages} pages`;
  // };
  // addBookToLibrary(this);
}


  
  bookAddingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const myBooks  = new Book(title, author, pages, document.querySelector("#flexCheckDefault").checked ? "Reading Completed" : "Not Read Yet");
    if(document.querySelector("#title").value !== "" && document.querySelector("#author").value !== "" && document.querySelector("#pages").value !== ""){
      myLibrary.push(myBooks);
      resetForm();
      displayBooks()
    }
  console.log(myLibrary);
    });
    
    
function displayBooks(){
  let bookTitle;
  let bookAuthor;
  let bookPages;
  let bookReadingStatus;
  let btnClass;
  for (let i = 0; i < myLibrary.length; i++) {
   bookTitle = myLibrary[i].title;
   bookAuthor = myLibrary[i].author;
   bookPages= myLibrary[i].pages;
   bookReadingStatus = myLibrary[i].readingStatus
   if(bookReadingStatus==="Not Read Yet"){
     btnClass = "btn-primary"
    }else{
      btnClass = "btn-success"
   }
  }
  const newBookDiv = document.createElement("div")
  newBookDiv.classList.add("card")
  newBookDiv.classList.add("col")
  newBookDiv.classList.add("bg-info-subtle")
 const newBookDivInnerHtml = `
  <div class="card-body">
        <h2 class="book-title fs-4 fw-bolder">${bookTitle}</h2>
        <hr>
        <h2 class="book-author fs-5">By ${bookAuthor}</h2>
        <hr>
        <p class="book-pages">Pages: ${bookPages}</p>
        <hr>
        <a href="#" class="btn ${btnClass} book-reading-status">${bookReadingStatus}</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
  `;
  newBookDiv.innerHTML = newBookDivInnerHtml;
  bookAddingContainer.append(newBookDiv);
}




const bookReadingStatus =  document.querySelector(".book-reading-status");
bookReadingStatus.addEventListener("click",()=>{
  if(bookReadingStatus.textContent === "Not Read Yet"){
    bookReadingStatus.textContent = "Reading Completed";
    bookReadingStatus.classList.remove("btn-primary");
    bookReadingStatus.classList.add("btn-success");
}
else{
  bookReadingStatus.textContent = "Not Read Yet";
  bookReadingStatus.classList.remove("btn-success");
  bookReadingStatus.classList.add("btn-primary");
}
})

const bookRemove = document.querySelector(".btn-danger")
bookRemove.addEventListener("click",()=>{
  
});

function resetForm(){
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#flexCheckDefault").checked = false;
}
