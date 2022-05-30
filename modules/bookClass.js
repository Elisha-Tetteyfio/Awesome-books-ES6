import { getBooks } from "./localStorage.js";

export class BookCollection {
  static bookList = getBooks();

  static bookCard({ title, author, id }) {
    const cardHolder = document.createElement('div');
    cardHolder.classList.add('book-card');
    cardHolder.id = id; // Each book card holder assigned book id

    const displayEl = document.createElement('div');
    displayEl.textContent = `"${title}" by ${author}`;

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'remove';
    removeBtn.classList.add('remove-btn');

    cardHolder.append(displayEl, removeBtn);
    return cardHolder;
  }

  static addBookUI(book) {
    const bookContainer = document.querySelector('.booksContainer');
    bookContainer.appendChild(BookCollection.bookCard(book));
    // Add Book to bookList. Alternative to bookList.push(book)
    BookCollection.bookList = [...BookCollection.bookList, book];
  }

  // Display books in Booklist on page load
  static bookDisplay() {
    const bookContainer = document.querySelector('.booksContainer');
    BookCollection.bookList.forEach((book) => {
      bookContainer.appendChild(BookCollection.bookCard(book));
    });
  }

  // Remove book
  static removeBook(id) {
    BookCollection.bookList = BookCollection.bookList.filter((item) => (item.id).toString() !== id);
  }
}