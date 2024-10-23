function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function info(){
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    };
}

const book1 = new book("The Hobbit", "J.R.R Tolkien", 295, "not read");
console.log(book1.info());