export let getBooks = () => {
  let books;
  if (localStorage.getItem('bookList') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('bookList'));
  }
  return books;
}

export let addBookToLS = (book) => {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('bookList', JSON.stringify(books));
}

export let removeBookLS = (id) => {
  const books = getBooks();
  books.forEach((book, index) => {
    if ((book.id).toString() === id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('bookList', JSON.stringify(books));
}