
const myLibraryContainer = document.querySelector(".my-library-container"
);

myLibraryContainer.textContent = "";

const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks(myLibrary);
}

const book1 = new Book("lost", "the one", "22", "yes")
addBookToLibrary(book1);



function displayBooks(books) {
  myLibraryContainer.textContent = "";
  books.forEach(book => {
      const bookContainer = document.createElement("div");
      bookContainer.classList.add("book-container");
      const bookInfoContiner = document.createElement('div');
      bookInfoContiner.classList.add("book-info");
      const bookNameContainer = document.createElement('h4');
      const titleContainer = document.createElement('p');
      const authorContainer = document.createElement("p");
      const pagesContainer = document.createElement("p");
      const readContainer = document.createElement("p");
      const deleteButton = document.createElement("button");
      
      bookNameContainer.textContent = `Book Name: ${book.title}`;
      titleContainer.textContent = ` Title: ${book.title}`;
      authorContainer.textContent = ` Author: ${book.author}`;
      pagesContainer.textContent = `Pages: ${book.pages}`;
      readContainer.textContent = `Readed: ${book.read}`;
      deleteButton.textContent = "Delete";
      
      // let list = document.createElement("p");
      // list.textContent = book.title + book.author + book.pages + book.read;
      
      bookInfoContiner.appendChild(titleContainer);
      bookInfoContiner.appendChild(authorContainer);
      bookInfoContiner.appendChild(pagesContainer);
      bookInfoContiner.appendChild(readContainer);
      bookContainer.appendChild(bookNameContainer);
      bookContainer.appendChild(bookInfoContiner);
      bookContainer.appendChild(deleteButton);
      
      myLibraryContainer.appendChild(bookContainer);

    
      deleteButton.addEventListener('click', (e) => {
        myLibraryContainer.removeChild(bookContainer);
        myLibrary.splice(e.target, 1)
      })
    })
  }


const dialog = document.querySelector('dialog')
const addBookButton = document.querySelector('.add-book');
const cancelButton = document.querySelector('.cancel-button');
const form = document.querySelector(".book-details")
const submitButton = document.querySelector(".submit-button")

addBookButton.addEventListener('click', () => {
  dialog.showModal();
})

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const bookTitle = dialog.querySelector("#book-title").value;
  const authorName = dialog.querySelector("#author-name").value;
  const pages = dialog.querySelector("#pages").value;
  const readed = dialog.querySelector('input[name="read"]:checked').value;

  let book = new Book(bookTitle, authorName, pages, readed);

  addBookToLibrary(book);
  form.reset();
  dialog.close();
})

cancelButton.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  dialog.close();
});

