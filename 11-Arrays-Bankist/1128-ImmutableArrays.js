import { data } from './assets';

function getBooks() {
  return data;
}

const books = getBooks();

//MAP METHOD

const titles = books.map(item => item.title);
console.log(titles);

const essentialData = books.map(items => ({
  title: items.title,
  author: items.author,
}));

console.log(essentialData);

//FILTER METHOD

const longBooksWithMovie = books
  .filter(book => book.pages > 500)
  .filter(book => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter(books => books.genres.includes('adventure'))
  .map(book => book.title);
console.log(adventureBooks);
