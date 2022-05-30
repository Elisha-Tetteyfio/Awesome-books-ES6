import { addBookToLS, removeBookLS} from "./modules/localStorage.js"
import {BookCollection} from "./modules/bookClass.js"

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Clear form fields
let clearFormFields = () => {
  document.querySelector('#book-name').value = '';
  document.querySelector('#book-author').value = '';
}

// All Events
// Display books on page load
window.addEventListener('DOMContentLoaded', BookCollection.bookDisplay);

// Add Book Event
const formEl = document.querySelector('#book-form');
formEl.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-name').value;
  const author = document.querySelector('#book-author').value;

  if (title !== '' && author !== '') {
    if (e.target.classList.contains('addButton')) {
      const newBook = new Book(title, author);
      newBook.id = BookCollection.bookList.length + 1;
      BookCollection.addBookUI(newBook);
      addBookToLS(newBook); // Add book to booklist in localStorage
      clearFormFields();
      formEl.submit();
    }
  }
});

// Remove Book from UI, localStorage and arrayList
const bookContainer = document.querySelector('.booksContainer');
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const bookId = e.target.parentElement.id; // Card holder ID traversed here
    BookCollection.removeBook(bookId);
    removeBookLS(bookId);
    e.target.parentElement.remove();
  }
});
