const btn = document.querySelector("#addBook");
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');
let myLibrary = [];
btn.onclick = () => addBookToLibrary();


function Book(title, author, pages, read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function info(){
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    };
    //console.log(this.info());
    myLibrary.push(this.info());
   /* Testing if push logic working correctly
   */
};

myLibrary.forEach(element => {
    console.log(element);
});

function addBookToLibrary() {
   
    let sTitle = title.value;
    let sAuthor = author.value;
    let sPages = pages.value;
    let sRead = read.value;
    Book(sTitle, sAuthor, sPages, sRead);
    
    //return myLibrary;
};


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