let myLibrary = [];

function Book(title, author, pages) {
  this.title = document.querySelector("#title").value;
  this.author = document.querySelector("#author").value;
  this.pages = document.querySelector("#pages").value;
  // this.info = function () {
  //   return `The ${title} by ${author}, ${pages} pages`;
  // };
  // addBookToLibrary(this);
}

// const book1 = new Book("Harry Potter", "Lazy James", 343, "read it");
// const book2 = new Book("Little garden", "Petter Crazy", 643, "not read it");
// const book3 = new Book("Drum Kingdom", "Lazy Crazy", 233, "not read it");
// const book4 = new Book("Land of Sand", "Lazy James", 391, "read it");
// const book5 = new Book("Sun Peak", "Lazy James", 143, "read it");
// const book1 = new Book("Harry Potter", "Lazy James", 343, "read it");
// const book1 = new Book("Harry Potter", "Lazy James", 343, "read it");
// const book1 = new Book("Harry Potter", "Lazy James", 343, "read it");
// const book1 = new Book("Harry Potter", "Lazy James", 343, "read it");
// const book1 = new Book("Harry Potter", "Lazy James", 343, "read it");
// console.log(book1.info());

// function addBookToLibrary(book) {
//   myLibrary.push(book);
// }

// function readStatus(){
  //  //toggle readStatus
  // }
  
  // console.log(myLibrary);
  // console.log(myLibrary[0].title)
  // console.log(myLibrary[1].title)
  // console.log(myLibrary[2].title)
  // console.log(myLibrary[3].title)
  // console.log(myLibrary[4].title)
  
  const bookAddingBtn = document.querySelector("#book-adding-btn");
  bookAddingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const myBooks  = new Book(title, author, pages);
    if(document.querySelector("#title").value !== "" && document.querySelector("#author").value !== "" && document.querySelector("#pages").value !== ""){
      myLibrary.push(myBooks);
      resetForm();
    }
  console.log(myBook );
  console.log(myLibrary);
  for (let i = 0; i < myLibrary.length; i++) {
     document.querySelector(".book-title").textContent = myLibrary[i].title
     document.querySelector(".book-author").textContent = `By ${myLibrary[i].author}`
     document.querySelector(".book-pages").textContent = `Pages: ${myLibrary[i].pages}`
     document.querySelector(".book-reading-status").textContent = document.querySelector("#flexCheckDefault").checked ? "Reading Completed" : "Not read yet";
  }
});


function resetForm(){
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#flexCheckDefault").checked = false;
}

const bookReadingStatus =  document.querySelector(".book-reading-status");
bookReadingStatus.addEventListener("click",()=>{
 if(bookReadingStatus.textContent === "Not read yet"){
  bookReadingStatus.textContent = "Reading Completed";
  bookReadingStatus.classList.remove("btn-primary");
  bookReadingStatus.classList.add("btn-success");
}
else{
  bookReadingStatus.textContent = "Not read yet";
  bookReadingStatus.classList.remove("btn-success");
  bookReadingStatus.classList.add("btn-primary");
}
})

const bookRemove = document.querySelector(".btn-danger")
bookRemove.addEventListener("click",()=>{
    
});


// let name = "Harry";
// let age = 34;
// let status = "student";
// let gender =  "male";
// console.log({name, age, status, gender})
