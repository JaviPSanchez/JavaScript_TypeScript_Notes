/*

CODING CHALLENGE 2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
BMI(28.3) is higher than John's (23.9)!"
*/
// let massMark = 78;
// let massJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;
let massMark = 95;
let massJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;
let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark >= bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark}), is bigger than John's BMI (${bmiMark}=!`
  );
} else {
  console.log(
    `John's BMI (${bmiJohn}), is bigger than Mark's BMI (${bmiMark})!`
  );
}
