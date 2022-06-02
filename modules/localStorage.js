export const getBooks = () => {
  let books;
  if (localStorage.getItem('bookList') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('bookList'));
  }
  return books;
};

export const addBookToLS = (book) => {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('bookList', JSON.stringify(books));
};

export const removeBookLS = (id) => {
  const books = getBooks();
  books.forEach((book, index) => {
    if ((book.id).toString() === id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('bookList', JSON.stringify(books));
};
