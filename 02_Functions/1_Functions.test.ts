import './main.css';
import { expect, it } from 'vitest';
/*
Es basicamente pequeños chunks de codigo que podemos reutilizar una y otra vez.
Es como una variable pero con grandes trozos de codigo en ella. Nos permite tener
un codigo mas manejable, pudiendo usar la funcion tantas veces como queramos en vez
de tener que escribir mucho codigo.
*/

// const AddTwoNumbersBad = (a, b) => {
//   return a + b;
// };
const AddTwoNumbersGood = (a: number, b: number) => {
  return a + b;
};

console.log(AddTwoNumbersGood(2, 4));

it('Should add the two numbers together', () => {
  expect(AddTwoNumbersGood(2, 4)).toEqual(6);
  expect(AddTwoNumbersGood(10, 10)).toEqual(20);
});

export default AddTwoNumbersGood;
//Parametros
function logger(input: string) {
  console.log(`My name is ${input}`);
}
//Argumentos
logger('Javi'); // Calling  or running or invoking the function.

/* Typescript nos ayuda a definir de una forma estática la definición de variables
y ademas durante la fase de desarrollo. Por otro lado JS define las variables de
forma dinámica y en la fase de runtime, cuando ya esta compilado el código.
*/

function addNumber(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): any {
  //We can handle errors with JS but TS do for us in a easy way during dev:
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("Not a number!");
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

/*
Type Inference: TS es capaz de saber que tipo de variable tenemos en la constante number1

Si no inicializamos la variable const number1, sie s combieniente definir el tipo, const number1: number
*/
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
addNumber(number1, number2, printResult, resultPhrase);

// Function Types define the parameters and return type of a function

// Void: Basicamente cuando la funcion no devuelve nada, en JS tendremos undefined, que si es un valor

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log('Result:' + num);
}

printResult2(add(5, 8));

// Function type, variable combineValues es una funcion:

let combineValues1; // Type any

let combineValues2: Function; // Type Function

combineValues1 = add;
// combineValues1 = 5;
combineValues2 = add;
// combineValues2 = 5; //Error
combineValues2 = printResult2;

console.log(combineValues1(8, 8)); //16
console.log(combineValues2(8, 8)); //16

// Callback definition that should be a function that may not return anything
function addAndHandle(x: number, y: number, callback: (num: number) => void) {
  const result = x + y;
  callback(result);
}

addAndHandle(10, 20, result => {
  console.log(result);
  // return result :  No deberiamos devolver nada, tal y como hemos definido en addAndHandle()
});

/*
callback functions can return something, even if the argument on which they're
passed does NOT expect a returned value.
*/
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!', requestData: data });
}

sendRequest('Send this!', response => {
  console.log(response);
  return true;
});
