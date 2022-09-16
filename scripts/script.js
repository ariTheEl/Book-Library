let myLibrary = [];

let bookDisplay = document.querySelector('.book-display')
const form = document.querySelector('form');
const btn = document.querySelector('#btn-one');
const btnTwo = document.querySelector('#btn-two');
const submitBtn = document.querySelector('#submit-btn')
let title = document.querySelector('#book-title')
let author = document.querySelector('#book-author');
let numberOfPages = document.querySelector('#number-of-Pages');
let status = document.querySelector('#status');
// all book objects that are created will be stored in the 'myLibrary' array

class Book {
  constructor() {
    this.title = title.value,
      this.author = author.value,
      this.numberOfPages = numberOfPages.value,
      this.status = status.value;
  }
  info() {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.status}`;
  }
};

function storeBook(e){
    e.preventDefault();
   let book = new Book(title.value, author.value, numberOfPages.value, status.value);
   myLibrary.unshift(book);
};

function displayBook() {
  myLibrary.forEach()
};

function addBook(){
    if(form.classList != 'display')
    {form.classList.add('display')}
    else{form.classList.remove('display');}
  }

btn.addEventListener('click', addBook);
btnTwo.addEventListener("click", displayBook)
submitBtn.addEventListener('click', storeBook)
 //add buttons to each book's display to remove the book from the library(You will need to associate your DOM elements with actual book objects by giving them a data attribute that corresponds to the books index in the Library array), and to change the read status of the book(You may create a function that toggles a books read status on the book prototype)
 