
const myLibraryContainer = document.querySelector(".my-library-container"
);

const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
}

addBookToLibrary('name', "author", "33 pages", "readed");

addBookToLibrary('secondbook', "author", "33 pages", "readed");

addBookToLibrary('thirdBool', "author", "33 pages", "readed");


addBookToLibrary('thirdBodfsdfsdfdsssdffffffffffffffssssdfol', "authsdfdsfsdfsdfsdfsdfsdsdffsdsfor", "33 pages", "readed");

addBookToLibrary('thirdBool', "author", "33 pages", "readed");

addBookToLibrary('thirdBool', "author", "33 pages", "readed");


console.table(myLibrary);

// const book = new Book("titasdasle","df","jdfjd","dfdf")


function displayBooks(books) {
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

    bookNameContainer.textContent = `Book Name: ${book.title}`;
    titleContainer.textContent = ` Title: ${book.title}`;
    authorContainer.textContent = ` Author: ${book.author}`;
    pagesContainer.textContent = `Pages: ${book.pages}`;
    readContainer.textContent = `Readed: ${book.read}`;

    // let list = document.createElement("p");
    // list.textContent = book.title + book.author + book.pages + book.read;

    bookInfoContiner.appendChild(titleContainer);
    bookInfoContiner.appendChild(authorContainer);
    bookInfoContiner.appendChild(pagesContainer);
    bookInfoContiner.appendChild(readContainer);
    bookContainer.appendChild(bookNameContainer);
    bookContainer.appendChild(bookInfoContiner);
    
    
    myLibraryContainer.appendChild(bookContainer);
  })

}


displayBooks(myLibrary);