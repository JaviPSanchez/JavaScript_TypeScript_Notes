'use strict';

///NOTA ANTES DE COMENZAR ESTA LECCION

/*
En un momento dado de esta leccion vamos a escribir 3 nuevas variables, newBudget1, newBudget2, newBudget3 que van en contra de un mal codigo, puesto que se deberia utilizar una tecnica muy avanzada de JS.

In the real world, we would not create all these new variables when using functional programming. Instead, we would use something called function composition, where we would basically "build" a new function based on all the other functions that we applied individually in this example.

However, this is too big and too complicated of a topic to get into in this course. Real functional programming (FP) is very hard to understand and to learn,  you need to completely change your mindset, and unlearn many things you were used to.

So learning FP only makes sense, IMO, after you have a lot of experience with JS and programming already, which is impossible to have for most students at this point of the course. That's why I took the decision not to include FP in this course, and only talk about some FP fundamentals that can be nicely mixed with more imperative JS approaches (map, filter, reduce, etc.)

I hope this makes sense.
*/

/*
Welcome back to continuing to fix the code that we started to work on a bit earlier.
And so in this lecture, we're gonna focus on some of the, functional and declarative principles that we learned about in the last video.

And we're gonna focus on three big areas of functional JavaScript just as we talked about in the last lecture. So that's first immutability, second, side effects and pure functions, and third making data transformations using pure functions, such as map filter and reduce. And let's actually start with immutability because in JavaScript, there's actually a way to make a data structure or in other words, to make an array or an object immutable.
*/

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
/*
And so what we can do is to call the function, Object.freeze() Then in that function, we pass in the object that we want to make immutable basically.So by doing this spending limits is now immutable, which means that we can no longer put any new properties into it. But actually this works best in strict mode. Object freeze() basically only freezes the first level of the object. So it's not a so-called deep freeze because we can still change objects inside of the object.

Si hacemos:

budget[0].value = 10000;

Veremos que podemos cambiar ese valor. Pero lo que si que no podemos hacer es añadir un elemento nuevo:

budget[9] = 'javi';
*/
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
const getLimit = user => spendingLimits?.[user] ?? 0;
/*
La funcion addExpenses nos esta dando error por el siguiente motivo:

La siguiente funcion addExpenses esta creando un side effect, esta intentando mutar un OBJECT exterior, budget. So remember that a side effect basically means that something outside of a function is manipulated or that the function does something other than simply returning a value. And so a function that has, or that produces side effects is called an impure function.

Como podemos arreglarlo?

Well, first of all, we should always pass all the data that the function depends on into the function, so that it doesn't have to reach into the outer scope. And then of course the function should not change any of other values. So in other words, it should not mutate them. Por ello hemos creado el Object.freeze() en el budget. So remember that the solution to that is to create a copy and then return that copy of the state. So of the data, right?

So the first thing that I'm gonna do is to pass in a variable called state and then also the limits. So this state here will be the budget object and then here the limits is of course going to be the spending limits.

And so I will pass in all of that here in all of the three function calls:

addExpenses(budget, spendingLimits,  10, 'Pizza 🍕');
addExpenses(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpenses(budget, spendingLimits, 200, 'Stuff', 'Jay');

Aqui estamos infringiendo la ley de no pasar mas de tres argumentos en una funcion, pero en este caso esta justificado.
*/
const addExpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  /*
Then next up here we are clearly manipulating the user variable. So the user argument in this case. And so as we learned in the last video, we should avoid these data mutations whenever possible. Por lo que vamos a crear una nueva variable aqui mismo:

(convertimos a lower case para que pueda ser encontrado en el object)
*/
  const cleanUser = user.toLowerCase();

  //Aqui queremos tambien cleanUser
  if (value <= getLimit(cleanUser)) {
    /*
    Ahora la parte principal, we want to replace this manipulating of the object by creating a new object based on the state that we receive.

    Por lo que nos desacemos del codigo:

    budget.push({ value: -value, description, user: cleanUser });

    Lo que queremos es devolver un empty ARRAY y luego usar el SPREAD OPERATOR para poner todos los elementos de state dentro. And so this effectively creates a copy of this state array y luego simplemente añadir un nuevo elemento que sera el OBJECT:

    { value: -value, description, user: cleanUser }
      */
    return [...state, { value: -value, description, user: cleanUser }];
  }
};
/*
So right now, calling the addExpense function will actually no longer mutate the budget object, right?

And so therefore, if we want to then do something with the new budget, we actually need to store that somewhere. Por lo que creamos una variable para guardar esta info.
*/
const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);
/*
[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {value: 250, description: "Sold old TV 📺", user: "jonas"}
1: {value: -45, description: "Groceries 🥑", user: "jonas"}
2: {value: 3500, description: "Monthly salary 👩‍💻", user: "jonas"}
3: {value: 300, description: "Freelancing 👩‍💻", user: "jonas"}
4: {value: -1100, description: "New iPhone 📱", user: "jonas"}
5: {value: -20, description: "Candy 🍭", user: "matilda"}
6: {value: -125, description: "Toys 🚂", user: "matilda", flag: "limit"}
7: {value: -1800, description: "New Laptop 💻", user: "jonas", flag: "limit"}
8: {value: -10, description: "Pizza 🍕", user: "jonas"}  👌👌👌👉👉🤗
length: 9
__proto__: Array(0)

Ahora el problema es que si el valor es muy elevado recibiremos undefined, es decir si (value <= getLimit(cleanUser), es false, entonces el codigo return [...state, { value: -value, description, user: cleanUser }] no va a funcionar, por lo que habra que devolver la funcion de origen state, el budget original. So it either returns the original budget, or it returns the one with the new expense added to it.

Modificamos entonces con el TERNARY OPERATOR:

return value <= getLimit(cleanUser) ?
     [...state, { value: -value, description, user: cleanUser }] : state;

     COTINUAMOS MAS ABAJO CON LA MODIFICACIONES ⏬👌

*/

addExpenses(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpenses(budget, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);

logBigExpenses(10);
logBigExpenses(100);
logBigExpenses(1000);

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
const getLimit = user => spendingLimits?.[user] ?? 0;
//Pure function
const addExpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  //Hemos conseguido nuestra budget de una forma funcional, So right now this function addExpenses, it does no longer produce side effects. Es oficialmente una PURE FUNCTION!
  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');
//Ahora hacemos lo mismo con el resto de addExpenses, pero añadiendo el paso anterior, es decir quitando budget y poniendo el paso anterior! Sino no se irian añadiendo!!
const newBudget2 = addExpenses(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
// console.log(newBudget3); //Este ultimo nose añade porque no esta permitido 'Jay'

/*
let's turn our attention to data transformations here in this case.

So we have this loop here, which loops over all the entries in the budget, and then in this loop, it will update each of the object, to contain the flag attribute basically whenever the value is over the limit.

But of course this function checkExpenses is again, an impure function because it does manipulate the object itself, right?

And therefore let's transform this function here into a pure function as well.

So again, we will want to pass in all the data that the function depends on. And so that's, again, well in this case, it is newBudget3 and also we actually need the getLimit from the outside.

But now let's then finally actually replace this entire loop and instead loop over the state, using one of our data transformation functions. Usaremos

So it makes sense to use the map method here. And map, remember, will create a brand new object. So brand new array. And so that's exactly what we want, right?
So not mutating the state, but instead creating a new state based on the original one.
*/

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};
// Podemos incluso convertir la funcion de arriba en una ARROW:

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

//Y PIN!!! , ya estamos listos, What's really important to note here once more is that we transformed this function here into a pure function, which does not mutate anything because the map method here returns a brand new array!.

//So here now, of course, we need to again, store the results into a variable. Let's call this one final budget because we will not create any new budgets.
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);
/*
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {value: 250, description: "Sold old TV 📺", user: "jonas"}
1: {value: -45, description: "Groceries 🥑", user: "jonas", flag: "limit"}
2: {value: 3500, description: "Monthly salary 👩‍💻", user: "jonas"}
3: {value: 300, description: "Freelancing 👩‍💻", user: "jonas"}
4: {value: -1100, description: "New iPhone 📱", user: "jonas", flag: "limit"}
5: {value: -20, description: "Candy 🍭", user: "matilda", flag: "limit"}
6: {value: -125, description: "Toys 🚂", user: "matilda", flag: "limit"}
7:
description: "New Laptop 💻"
flag: "limit" 👉👌👌
user: "jonas"
value: -1800
__proto__: Object
8: {value: -10, description: "Pizza 🍕", user: "jonas", flag: "limit"}
9: {value: -100, description: "Going to movies 🍿", user: "matilda", flag: "limit"}
length: 10
__proto__: Array(0)

And indeed flag is set to limit. So that worked and you see that we did not actually manipulate any object. All we did here was to create a copy and then add the property onto that copy, right?
*/

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(10);
logBigExpenses(100);
logBigExpenses(1000);

/*
And maybe you're actually noticing that throughout, most of the course, we actually kind of followed these principles already, but without calling it functional. And I remember, especially the bankers project. So in a section about arrays. So in there, I told you a lot of times that we should always pass all the data that we need for a certain function to work right into that function. So that, again, it does not depend on any outside data because really you will see in practice that this makes it a lot easier to reason about the function itself. And so if you do that for all of your functions, then in the end that will make your code a lot easier to understand and a lot more readable. Okay. But with that being said,
let's now move on here to our final function.
*/

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
const getLimit = user => spendingLimits?.[user] ?? 0;
//Pure function
const addExpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpenses(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

/*
And here again, we have this for loop and inside of that loop, we are actually constantly manipulating or mutating this output variable here. And that of course, goes against the spirit of immutability.

So immutability is of course not just for objects and arrays. This also goes for more regular variables. And so in functional code, you will probably never see the let variable. So we're always trying to compute a variable, for example, based on methods like .map()

And so here we will actually be able to achieve something similar.

*/
//Podemos state para que esta funcion no dependa de nada del exterior.
const logBigExpenses = function (state, bigLimit) {
  /*
   Este codigo de abajo es claramente IMPERATIVE!

    Creamos una variable vacia:

    let output = '';

    Luego deciamos de una forma manual que debe loopear todos los entries en el budget ARRAY:

    for (const entry of budget)

    Y aqui deciamos que cuando el gasto sea muy alto, entonces debe devolver un emoji a la variable output:

      output +=
        entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

    //Esto es para borrra el ultimo /.
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
    */
  /*
    But if we really think about this, there is a better way to doing this. So what we really want to do here is not all of this imperative stuff. So what we want to do is actually just filter our array! And then basically for each of the results, all we want to do is to create a nice string containing only the emoji.
    */

  //   const bigExpenses = state.filter(entry => entry.value <= -bigLimit);

  //  And here we say that the state is not defined and that's simply because I didn't pass it in yet.
  //   console.log(bigExpenses);
  /*
    Aqui podemos ver los grandes gastos:

    (2) [{…}, {…}]
    0: {value: -1100, description: "New iPhone 📱", user: "jonas", flag: "limit"}
    1: {value: -1800, description: "New Laptop 💻", user: "jonas", flag: "limit"}
    length: 2
    __proto__: Array(0)

//     And so now all we need to do is to get these emojis here out and then create a nice string based on the result.

    const bigExpenses = state.filter(entry => entry.value <= -bigLimit).map(entry => entry.descripcion.slice(-2));
  */
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
  /*
    Y por fin hemos terminado, So we transformed our initial code, which looked pretty bad first by applying some general guidelines for a modern and clean code. We made our code functional and took out all of the impure functions and side effects and data mutations. So a lot cleaner, a lot nicer. And also if you ask me a lot more professional looking code.
  */
};

logBigExpenses(finalBudget, 10);
logBigExpenses(finalBudget, 100);
logBigExpenses(finalBudget, 1000);
/*
🥑 / 📱 / 🍭 / 🚂 / 💻 / 🍕 / 🍿
📱 / 🚂 / 💻 / 🍿
📱 / 💻
*/

///////////PRODUCTO FINAL///////////////

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpenses(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 10);
logBigExpenses(finalBudget, 100);
logBigExpenses(finalBudget, 1000);

/*
Now, actually this function here is not pure:

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
};

So it's an impure function because it creates a side effect by doing this console.log(bigExpenses). Okay? So in fact, all console.logs, are of course impure because they do something. So they create something in the console in this case. So they create input output. But of course, any program needs to have some side-effects
because otherwise, what is the point of the program in the first place?

If we didn't have all of these console.logs, how would we even know that the program
is running in the first place? All right? It would not be useful at all. And so, as I said, we always need some side effects, but in functional programming, we try to push these side effects as far to the edge. So as far to the end of our program as possible. So without having them all over the place, polluting our application.

Now this, kind of mini project here is of course, very far from being complete. And if you wish you can of course develop this a lot further. For example, you can add a function for adding the income, or you can also create functions for calculating the total expenses and incomes, the overall budget, how much the expenses are in percentage of the income and so on and so forth.

But I will leave it like this here, because again, this is enough for us now. And our code looks pretty professional as it is. Just keep in mind again, that these are more like guidelines and not really hard rules. So large applications, they are very hard to make 100% functional. And that's absolutely okay.

So actually right in the next project, we will already break many of these rules. And again, that's okay. It's not a big problem. As long as we try to still keep some of these principles in some of the places we're already making our code a lot better and a lot more professional.

And with that being said, you're now ready to go build the biggest and kind of the final project of this course in the next section. And so I really hope to see you there soon.
*/
