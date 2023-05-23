'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
/*

Antes de empezar conviene saber que .find() y .findIndex() METHODS se implementaron a partir de ES6, por lo que en BROWSERS viejos no funcionan....

Ahora que conocemos un poco mejor el FIND METHOD, vamos a introducir a un primo de este METHOD.

Se llama FIND INDEX METHOD, funciona casi de la misma forma que el FIND METHOD pero este devuelve el index del elemento encontrado.

Util para nuestra APP BANKISH, si quisiesemos eliminar un usuario, es decir eliminar un ACCOUNT OBJECT del ARRAY ACCOUNTS.

Si Sarah decide dejar este banco, el account4 deberia eliminarse.

Para eliminar un elemento dentro de un ARRAY usamos el .splice METHOD, que necesita a su vez del index, este index lo podemos proporcionar gracias al FIND METHOD.

Como venimos haciendo en episodios anteriores, vamos a seleccionar los elementos que nos interesan del codigo HTML:
*/
/*
<!-- OPERATION: CLOSE -->
<div class="operation operation--close">
  <h2>Close account</h2>
  <form class="form form--close">
    <input type="text" class="form__input form__input--user" />
    <input
      type="password"
      maxlength="6"
      class="form__input form__input--pin"
    />
    <button class="form__btn form__btn--close">&rarr;</button>
    <label class="form__label">Confirm user</label>
    <label class="form__label">Confirm PIN</label>
  </form>
</div>
*/
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const btnClose = document.querySelector('.form__btn--close');

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  //Debemos comprobar primero si el user y el PIN son correctos.
  1;
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //Aplicamos el SPLICE METHOD a un cierto index que calculamos y borraremos un elemento. Este metodo muta el ARRAY por lo que no hay necesidad de guardar el resultado.
    //Calculamos el index, para encontrar el user que queremos borrar, nos apoyamos en el find index method. Loopearemos el ARRAY con la CALLBACK FUNCTION
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index); //0 Nos da el index donde se encuentra el user, en este caso account1, cabe señalar que si no podemos nada en los campos Confirm User y Confirm PIN no vamos a satisfacer las condiciones planteadas y no pasaria nada al hacer click sobre el botonClose.
    accounts.splice(index, 1);
  }
});
/*
Si miramos en la consola del navegador y miramosel ARRAY accounts veremos que efectivamente ahora solo hay tres PROPERTIES:

(3) [{…}, {…}, {…}]

Podemos pensar que el METHOD FIND INDEX es parecido al estudiado .indexOf(23), pero la gran diferencia es que con indexOf solo podemos buscar un VALUE existente en el ARRAY (el numero 23 por ejemplo), mientras que con .findIndex podemos crear complicadas condiciones, podemos adaptarlo a nuestras necesidades.

Seguimos nuestro FLOCHART y le toca el turno a hacer LOG OUT de la APP, esconder la UI.

La volvemos a configurar en 0
*/
// containerApp.style.opacity = 0;

// Finalmente queda como hemos hecho en las transferencias eliminar los inputs.
inputCloseUsername.value = inputClosePin.value = '';

//Si volvemos intentar loggear con el usuario borrado, recibirimos un mensaje de undefined..
