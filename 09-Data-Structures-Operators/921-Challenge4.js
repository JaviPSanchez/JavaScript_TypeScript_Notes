'use strict';
/*
CODING CHALLENGE #4

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):

underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Hints:

§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  //Get value out of the text area
  const text = document.querySelector('textarea').value;
  //Transformamos en un ARRAY con el character \n
  const textClean = text.split('\n');
  //["underscore_case", " first_name", "Some_Variable ", "  calculate_AGE", "delayed_departure"]

  //   const finalString = []; //METODO 1

  for (const [i, n] of textClean.entries()) {
    //Dividimos y suprimimos espacios
    let [firstWord, secondWord] = n.toLowerCase().trim().split('_');
    /*
    Creamos Mayuscula METODO 1
    const secondWordRight = secondWord[0].toUpperCase() + secondWord.slice(1);

    //Juntamos
    finalString.push([firstWord, secondWordRight].join(''));
    */
    //Creamos Mayuscula METODO 2
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
  }
});
