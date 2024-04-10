import { restaurant, data } from "./assets";

/*
NOTA IMPORTANTE!!! desde ES2018 SPREAD OPERATOR funciona también con OBJECTS
a pesar de que no sean ITERABLES. Vamos a crear un nuevo OBJECT utilizando la
info dentro de restaurant y añadiéndole información adicional
*/

const newRestaurant = { ...restaurant, founder: "Javier", foundedIn: 2021 };
newRestaurant;
console.log(newRestaurant.founder);
console.log(newRestaurant.foundedIn);

// creando un OBJECT con nuevos METHODS.

function getBooks(id) {
  return data.find((book) => book.id === id);
}

const book = getBooks(2);
book;

const { id, title, author, genres } = book;
id;
title;
author;
genres;
