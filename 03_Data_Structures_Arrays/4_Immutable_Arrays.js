import { data } from './assets';

//🔍 Enumerate the benefits and drawbacks of immutability and explain how you can achieve it in your code.

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

//REDUCE METHOD

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

//SORT METHOD

const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);

console.log(arr); //Mutado!
console.log(sorted);

const arrUnmmuted = [6, 2, 3, 4, 7];
const sortedUnmmuted = arrUnmmuted.slice().sort((a, b) => a - b); //With slice we take a copy and make a new ones

console.log(arrUnmmuted);
console.log(sortedUnmmuted);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

//En React en numerosas ocasiones necesitamos trabajar con Arrays Inmmutables

const newBook = {
  id: 6,
  title: 'La gran Historia de Javier',
  author: 'Javier Palomino Sanchez',
  genres: ['fantasy', 'non-fiction', 'literature', 'humor'],
  hasMovieAdaptation: false,
  pages: 459,
  translations: {
    spanish: 'La Gran Historia de Javier',
    french: 'La Grand Histoire de Javier',
  },
  reviews: {
    goodreads: {
      rating: 3.59,
      ratingsCount: 2500,
      reviewsCount: 5600,
    },
    librarything: {
      rating: 4.0,
      ratingsCount: 47006,
      reviewsCount: 952,
    },
  },
};

//Add new Book

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// Delete Book

const booksAfterDelete = booksAfterAdd.filter(item => item.id !== 6);
console.log(booksAfterDelete);

// Update Book

const bookAfterUpdate = booksAfterDelete.map(item =>
  item.id === 1 ? { ...item, pages: 1210 } : item
);
console.log(bookAfterUpdate);
