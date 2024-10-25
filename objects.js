const btn = document.querySelector("#addBook");

btn.onclick = () => addBookToLibrary();


function Book(title, author, pages, read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function info(){
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    };
}

//const book1 = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read");
//console.log(book1.info());

const myLibrary = [];

function addBookToLibrary() {
    let user = prompt("Give me a title for the book");
    const newBook = document.createElement("div");
    newBook.textContent = user;

    myLibrary.push(newBook);
    return myLibrary;
};
