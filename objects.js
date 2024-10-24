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
    myLibrary.push(user);
    return myLibrary;
};

for(let i = 0; i < images.length; i++) {

}


for(i = 0; i < myLibrary.length; i++) {
   let display = myLibrary[i];
   
}
console.log(mylibrary);


/* const content = document.createElement("div");
content.classList.add("content");
content.textContent = "this is the glorious text-content!");

container.appendChild(content);
*/