
const myLibraryContainer = document.querySelector(".my-library-container"
);

myLibraryContainer.textContent = "";

const myLibrary = [];

// use class 
class Book {
  constructor(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks(myLibrary);
}

const book1 = new Book("Valhalla", "All Father Odin", "1000", "yes")
addBookToLibrary(book1);



function displayBooks(books) {
  myLibraryContainer.textContent = "";
  books.forEach((book, index) => {

      const bookContainer = document.createElement("div");
      bookContainer.classList.add("book-container");

      const bookInfoContiner = document.createElement('div');
      bookInfoContiner.classList.add("book-info");

      const bookNameContainer = document.createElement('h4');
      const titleContainer = document.createElement('p');
      const authorContainer = document.createElement("p");
      const pagesContainer = document.createElement("p");
      const readContainer = document.createElement("button");
      const deleteButton = document.createElement("button");
      
      bookNameContainer.textContent = `Book Name: ${book.title}`;
      titleContainer.textContent = ` Title: ${book.title}`;
      authorContainer.textContent = ` Author: ${book.author}`;
      pagesContainer.textContent = `Pages: ${book.pages}`;
      readContainer.textContent = book.read ? "Read: Yes" : "Read: No";
      readContainer.classList.add(book.read ? "read" : "not-read");
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

      readContainer.addEventListener('click', () => {
        book.read = !book.read;
        readContainer.textContent = book.read ? "Read: Yes" : "Read: No";
        readContainer.classList.toggle("read");
        readContainer.classList.toggle("not-read");
      })

    
      deleteButton.addEventListener('click', (e) => {
        myLibraryContainer.removeChild(bookContainer);
        myLibrary.splice(index, 1)
        displayBooks(myLibrary);
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
  e.preventDefault(); // Prevent form submission
  const bookTitle = form.querySelector("#book-title").value.trim();
  const authorName = form.querySelector("#author-name").value.trim();
  const pages = form.querySelector("#pages").value.trim();
  const readCheckbox = form.querySelector("#readed");
  const readStatus = readCheckbox.checked;

  if (!bookTitle || !authorName || !pages || isNaN(pages
  )) {
    alert("Please fill out all fields correctyl!")
    return;
  }

  
  let book = new Book(bookTitle, authorName, pages, readStatus);

  console.log(book);
  addBookToLibrary(book);
  form.reset();
  dialog.close();
})

cancelButton.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  dialog.close();
});

