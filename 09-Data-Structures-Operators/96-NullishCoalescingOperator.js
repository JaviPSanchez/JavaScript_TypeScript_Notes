'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); //mushrooms
    console.log(otherIngredients); // ["spinach"]
  },
};

/*
En las dos últimas lecciones hemos visto el LO OR y el problema que podría surgir al definir un valor con 0:
*/
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10 , no nos interesa este valor sino 0!
/*
El NULLISH COALESCING OPERATOR (??) Es un operador introducido en ES2020 y funciona muy parecido al OR OPERATOR,
*/
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0 Real value
/*
Esto es asi porque funciona con la idea de nullish values instead of falsy values, y los NULLISH VALUES solo pueden ser null o undefined. (NOT "0" or ' '). Todos los nullish values will short circuit the evaluation.
*/
