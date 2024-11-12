const btn = document.querySelector("#addBook");
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');
let myLibrary = [];
const submit = document.getElementById('button');
let bookCount = 0;

window.addEventListener('load', function() {
  const form = document.querySelector(".form")
  form.style.display = "none";
});

  class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    };
};

btn.addEventListener("click", () => {
  const form = document.querySelector(".form")
  form.style.display = "flex"
});

submit.addEventListener("click", () => {
  myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
  displayBooks();
  cleanFields();
  const form = document.querySelector(".form")
  form.style.display = "none"
});

function cleanFields() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
}

function displayBooks() {
  const bookShelf = document.querySelector(".bookShelf");
  bookShelf.innerHTML = '';

myLibrary.forEach(book => {
  const newBook = document.createElement("div");
  newBook.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Status: ${book.read}`
  newBook.classList.add('newBook');
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add('delBtn');
  newBook.append(delBtn);
  bookShelf.appendChild(newBook);
  });
}

function bookPosition(position) {
  return position.title === `${title}`
}

function counter(bookCount) {
  if(bookCount > 0) {
  console.log(myLibrary[e].title)
  }
}

const delBtn = document.querySelectorAll(".delBtn");

/* myLibrary.forEach(button => {
  delBtn.addEventListener("click", (e) => {
    console.log(console.log(myLibrary[e].title))
  });
});


/*myLibrary.forEach(button => {
  delBtn.addEventListener("click", function() {
    console.log(myLibrary[].title);
  });
})

  


// <button class="editBtn">Edit</button>
// <button class="delBtn">Delete</button>


      //toDoList.append(toDoListItem);
      // reset input
     // toDoInput.value = '';





/* window.addEventListener("DOMContentLoaded", (event) => {
    
    // Move the event listener code inside the DOMContentLoaded listener
    button.addEventListener('click', function() {
      toDoListItem = document.createElement('li');
      toDoListItem.innerHTML = `
      <span>${inputField.value}</span>
      <button class="editBtn">Edit</button>
      <button class="delBtn">Delete</button>`;
      toDoList.append(toDoListItem);
      // reset input
      toDoInput.value = '';
    
  
      let editBtn = toDoListItem.querySelector(".editBtn");
      let delBtn = toDoListItem.querySelector(".delBtn");
  
      editBtn.addEventListener('click', function() {
      toDoListItem.innerHTML = `
        <span>${inputField.value}</span>
        <button class="editBtn">Edit</button>
        <button class="delBtn">Delete</button>`;
        toDoInput.value = '';
      });
  
      delBtn.addEventListener('click', function() {
        toDoListItem.innerHTML = toDoList.remove;
      });
    });
  });
*/