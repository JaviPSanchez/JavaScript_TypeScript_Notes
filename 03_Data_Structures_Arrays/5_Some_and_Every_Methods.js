'use strict';

/*
Nos quedan un par de ARRAY METHODS por aprender, como son el SOME y el EVERY.

Antes de comenzar a hablar de estos METHODs, volveremos a utilizar un METHOD que conocemos, el .includes:
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
//Simplemente nos dice si existe un valor dado en el ARRAY
console.log(movements.includes(-130)); //true
//El problema que solo podemos probar igualdades, es decir, si algo es igual a algo, en nuestro caso -130. Pero y si quisiesemos probar una condicion? Es aqui donde el SOME METHOD entra en accion:

//Imaginemos que queremos saber si ha habido depositos en una cuenta, movimientos positivos en un ARRAY

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); //True
const anyDeposits2 = movements.some(mov => mov > 5000);
console.log(anyDeposits2); //false
const anyDeposits3 = movements.some(mov => mov === -130);
console.log(anyDeposits3); //true

//Luego los dos METHODs son parecidos, pero uno solo compara y el otro permite comprobar si se cumple una condicion.

/*
Ahora usaremos este METHOD pata implementar una funcionalidad en nuestra APP

Que es basicamente pedir un prestamo al banco

Buscamos todos los elementos HTML
*/
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const btnLoan = document.querySelector('.form__btn--loan');

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  //Las condiciones es que sea un valor positivo, y que la cantidad maxima que puedo pedir no debe superar el 10% del prestamo siendo el 10% el valor maximo de uno de mis valores en mi cuenta de resultados. En nuestro caso 3000€.
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
  //limpiamos los inputs
  inputLoanAmount.value = '';
});

//Ahora le toca la turno al primo del SOME METHOD, el EVERY METHOD. Este METHOD lo que hace es basicamente devolver el valor si todos los elementos cumplen con la funcion, no solo uno en el ARRAY!

const anyDeposits4 = movements.every(mov => mov > 0);
console.log(anyDeposits4); //False

movements2 = [430, 1000, 700, 50, 90];
const anyDeposits5 = movements2.every(mov => mov > 0);
console.log(anyDeposits5); //true

/*
Hasta ahora hemos escrito la CALLBACK FUNCTION directamente como un argumento de nuestro ARRAY METHODS, pero podriamos escribir esta FUNCTION por separado, permitiendonos hacer el DRY CODE.
*/
//FUNCTION COMO ARGUMENTO
const anyDeposits4 = movements.every(mov => mov > 0);
//MISMA FUNCION SEPARADA
const deposit = mov => mov > 0;
const anyDeposits5 = movements.every(deposit);
const anyDeposits5 = movements.some(deposit);
const anyDeposits5 = movements.filter(deposit);
