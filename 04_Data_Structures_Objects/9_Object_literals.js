"use strict";
/*
Seguimos trabajando con nuestro OBJECT restaurant, podemos decir que es un OBJECT LITERAL
porque basicamente escribo este OBJECT en nuestro codigo usando los curly braces syntax {}.
Todo el OBJECT ha sido escrito usando el OBJECT LITERAL SYNTAX.
*/
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
};
/*
ES6 ha introducido tres formas de escribir OBJECT LITERALS de una forma mas sencilla.
*/
/*
1/ Imaginemos que tenemos el OBJECT openingHours fuera de nuestro OBJECT restaurant,
y queremos seguir teniendolo dentro, antes de ES6 bastaba con escribir dentro del OBJECT
restaurant (openingHours: openingHours), el problema es que tenemos el mismo nombre para
la PROPERTIE y la VARIABLE, pudiendo crear confusion.
*/
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant2 = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: openingHours, //PROPERTIE: VARIABLE,
};

/*
Con ENHANCED LITERALS despues de ES6 ya no hace falta hacer esto, basta con escribir la PROPERTIE:
*/
const restaurant3 = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours, //PROPERTIE,
};
/*
2/ El segundo ENHANCEMENT TO OBJECTS LITERALS is about writting METHODS, en ES6 no tenemos
que seguir creando propiedades y despues asignarla a una FUNCTION EXPRESSION. 
*/
const restaurant4 = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    //bla bla bla.
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, // PROPERTIE: FUNCTION EXPRESSION
};
/*
Ahora ya no hace falta escribir function, podemos simplificarlo haciendo:
*/
const restaurant5 = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    //bla bla bla.
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, // PROPERTIE NAME(ARGUMENTS)
};
/*
3/ El tercer y ultimo ENHANCEMENT is that we can now actually compute (calculate) property names
instead of having to write them out manually and literally into the OBJECT:
*/
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours2 = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`Day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};
console.log(openingHours2);
