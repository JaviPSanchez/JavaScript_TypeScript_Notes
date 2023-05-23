'use strict';

/*
los timers sirven para dar un margen de tiempo antes de ejecutar una accion.

Existen dos tipos de TIMERS:

1/ SET TIME OUT: Solo se ejecuta una vez despues de definir el tiempo. Basicamente lo usamos para ejecutar un codigo en el futuro.

2/ SET INTERVAL: Sigue funcionando por siempre hasta que lo paremos.
*/

//SET TIME OUT

/*
La FUNCTION setTimeout recibe una CALLBACK FUNCTION (en este ejemplo una ARROW FUNCTION) como lo hacen los DOM EVENT HANDLENER's o como algunos ARRAYS METHODS.
*/
//El primer argumento de nuestra CALLABACK FUNCTION es la ARROW FUNCTION que vemos a continuacion y como segundo argumento especificamos cuando queremos que se ejecute esta FUNCTION en lisegundos!
setTimeout(() => console.log('Here is your Pizza 🍕'), 3000);
// Despues de 3 segundos aparecera: Here is your Pizza 🍕

//Hay algo curioso de saber, podemos pensar que el codigo deja de ejecutarse hasta que no pasan los 3 segundos, pero esto no es asi...

// El codigo sigue funcionando, simplemente se guarda esta funcion en segundo plano y pasa a a siguiente linea... al cabo de 3 segundos se ejecuta la CALLBACK FUNCTION.

//De echo lo podemos comprobar con la siguiente linea de codigo, una vez lanzado el codigo veremos que aparecera el STRING waiting..., y al cabo de tres segundos, tendremos la CALLBACK FUNCTION ejecutandose.
console.log('Waiting...');

//Este mecanismo de funcionamiento se llama ASYNCHRONOUS JS!! un concepto muy importante, veremos como funciona mas adelante en la seccion de ASYNCHRONOUS JS.

// Si quisiesemos pasar argumentos a la funcion setTimeout deberiamos hacerlo despues del timer. em primer argumento ing1 seria el tercer argumento de la Callback function y el segundo seria el cuarto.

setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'spinach'
); //Here is your Pizza 🍕 with olives and spinach

//Si quisiesemos podriamos cancelar el time out una vez pasados los 3s, con la funcion clearTimeout() En el siguiente ejemplo vamos a sacar los ingredientes fuera de la funcion en formato ARRAY y vamos a introducirlos como SPREAD OPERATOR, añadiremos tambien un CONDITIONAL STATEMENT

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients //Esto es lo mismo que podermos con comas
);
console.log('Waiting...');
//Si quitalos la spinach del ARRAY se ejecutara la funcion, como esta incluido no se ejcuta despues de los 3s.
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//Pasamos a nuestra APP BANKISH, queremos implementar un timer que una vez realizada una transferencia o un prestamos pasen unos segundos hasta que se ejecuten:
/*
//Loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  //Condiciones para el interest
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //TIMER de 3 segundos
    setTimeout(function () {
      //Add movement
      currentAccount.movements.push(amount);
      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      //Upadate UI
      updateUI(currentAccount);
    }, 3000);
  }

  inputLoanAmount.value = '';
});
*/
//SET INTERVAL

/*
Ahora pasamos a ver SET INTERVAL, si quisiesemos hacer funcionar una funcion cada 5 segundos por ejemplo...

Comenzamos por definir setInterval() y despues asignarle el tiempo.
*/
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); // 1 segundo
//Cada segundo se ejecutara nuestra callback function.
/*
Thu Apr 15 2021 12:03:07 GMT+0200 (Central European Summer Time)
1210-TimersSetTimeOutAndSetInterval.js:86 Thu Apr 15 2021 12:03:08 GMT+0200 (Central European Summer Time)
1210-TimersSetTimeOutAndSetInterval.js:86 Thu Apr 15 2021 12:03:09 GMT+0200 (Central European Summer Time)
1210-TimersSetTimeOutAndSetInterval.js:86 Thu Apr 15 2021 12:03:10 GMT+0200 (Central European Summer Time)
1210-TimersSetTimeOutAndSetInterval.js:86 Thu Apr 15 2021 12:03:11 GMT+0200 (Central European Summer Time)
1210-TimersSetTimeOutAndSetInterval.js:86 Thu Apr 15 2021 12:03:12 GMT+0200 (Central European Summer Time)
*/

//Podriamos crear un reloj real:

const reloj = setInterval(function () {
  const now = new Date();
  const hour = `${now.getHours()}`;
  const min = `${now.getMinutes()}`;
  const sec = `${now.getSeconds()}`;
  return `${hour}:${min}:${sec}`;
}, 1000);
console.log(reloj);
