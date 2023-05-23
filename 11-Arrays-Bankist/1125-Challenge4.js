'use strict';

/*
**********************CODING CHALLENGE #4******************

Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.

Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.

Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

/*
Hints:

§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉.

§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/
// Test data:

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
/*
Your tasks:

1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array.

Formula --> recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg).
*/
//No queremos crear un nuevo ARRAY, simplemente loop el existente y en cada OBJECT añadir una nueva PROPERTY: dog.recommendedFood!

dogs.forEach(
  (dog, i, arr) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

/*
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose).
*/
//Tenemos que encontrar el OBJECT, en nuestro caso el tercero y luego comparar la comida recomendada con la cantidad actual. Primero buscamos dentro del OBJECT dogs.owners, lo cual es un ARRAY en si "['Sarah', 'John']" luego usaremos el METHOD INCLUDES, dandodos una Booleana. Una vez tenemos esta booleana podemos ver si come mucho o no.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'too much' : 'not enough'
  }`
); //Sarah's dog is eating too much
/*
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
*/
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch); // ["Matilda", "Sarah", "John"]
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
//   .flat();
console.log(ownersEatTooLittle); //["Alice", "Bob", "Michael"]
/*
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!".
*/
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`); //Matilda and Sarah and John's dogs eat too much!
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`); //Alice and Bob and Michael's dogs eat too little!
/*
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false).
*/
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood)); //False
/*
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false).
*/
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
); //true
/*
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.).
*/
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const dogsEatingOk = dogs.map(checkEatingOkay);
console.log(dogsEatingOk); //[false, false, false, true]

const dogsEatingOk2 = dogs.filter(checkEatingOkay).length;
console.log(dogsEatingOk2); //1

/*
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)The Complete JavaScript Course 26.
*/
//Aqui tenemos los numeros en OBJECTS, por lo que a y b son los OBJECTS, por lo que tenemos que sacar los VALUES recommended
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
/*
0: {weight: 8, curFood: 200, owners: Array(1), recommendedFood: 133}
1: {weight: 13, curFood: 275, owners: Array(2), recommendedFood: 191}
2: {weight: 22, curFood: 250, owners: Array(2), recommendedFood: 284}
3: {weight: 32, curFood: 340, owners: Array(1), recommendedFood: 376}
*/
