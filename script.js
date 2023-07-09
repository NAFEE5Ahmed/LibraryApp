const bookAddingContainer = document.querySelector("#book-adding-container");
const bookAddingBtn = document.querySelector("#book-adding-btn");
const notRead = "Not Read Yet";
const readCompletely = "Read Completely";
let myLibrary = [];

function Book(title, author, pages, readingStatus) {
  this.title = document.querySelector("#title").value;
  this.author = document.querySelector("#author").value;
  this.pages = document.querySelector("#pages").value;
  this.readingStatus = document.querySelector("#flexCheckDefault").checked
    ? readCompletely
    : notRead;
}

bookAddingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const myBooks = new Book(
    title,
    author,
    pages,
    document.querySelector("#flexCheckDefault").checked
      ? readCompletely
      : notRead
  );
  if (
    document.querySelector("#title").value !== "" &&
    document.querySelector("#author").value !== "" &&
    document.querySelector("#pages").value !== ""
  ) {
    myLibrary.push(myBooks);
    resetForm();
    displayBooks();
  }
});

function displayBooks() {
  let bookTitle;
  let bookAuthor;
  let bookPages;
  let bookReadingStatus;
  let btnClass;
  for (let i = 0; i < myLibrary.length; i++) {
    bookTitle = myLibrary[i].title;
    bookAuthor = myLibrary[i].author;
    bookPages = myLibrary[i].pages;
    bookReadingStatus = myLibrary[i].readingStatus;
    if (bookReadingStatus === notRead) {
      btnClass = "btn-primary";
    } else {
      btnClass = "btn-success";
    }
  }

  const newBookDiv = document.createElement("div");
  newBookDiv.classList.add("card");
  newBookDiv.classList.add("m-4");
  newBookDiv.classList.add("col");
  newBookDiv.classList.add("bg-info-subtle");
  const newBookDivInnerHtml = `
  <div class="card-body">
        <h2 class="book-title fs-4 fw-bolder">${bookTitle}</h2>
        <hr>
        <h2 class="book-author fs-5">By ${bookAuthor}</h2>
        <hr>
        <p class="book-pages">Pages: ${bookPages}</p>
        <hr>
        <a href="#" class="btn btn-reading-status ${btnClass}">${bookReadingStatus}</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
  `;
  newBookDiv.innerHTML = newBookDivInnerHtml;
  bookAddingContainer.append(newBookDiv);
}

bookAddingContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("btn-primary")) {
    e.target.classList.remove("btn-primary");
    e.target.textContent = readCompletely;
    e.target.classList.add("btn-success");
  } else if (e.target.classList.contains("btn-success")) {
    e.target.classList.remove("btn-success");
    e.target.textContent = notRead;
    e.target.classList.add("btn-primary");
  } else if (e.target.classList.contains("btn-danger")) {
    const targetedDiv = e.target.parentNode.parentNode;
    targetedDiv.remove();
  }
});

function resetForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#flexCheckDefault").checked = false;
}
