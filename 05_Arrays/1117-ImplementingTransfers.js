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
Vamos a crear el siguiente feature de nuestra APP, las transferencias entre cuentas!

Mirando el codigo HTML necesitaremos llamar a los ELEMENTS:
*/
const btnTransfer = document.querySelector('.form__btn--transfer');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
//Elegimos el ELEMENT btnTransfer y le pasamos la CALLBACK FUNCTION y aligual que antes necesitamos evitar el event, porque es tambien un FORM y se actualiza solo...es un revelde. Si no lo hiciesemos al hacer CLICK sobre el boton de jecutar la tranferencia actualizaria la pagina entera. Cuando se trabaja con FORMS es muy comun utilizar el METHOD prevent.
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  //Creamos una variable llamada amount y otra para la cantidad.
  //Para encontrar el OBJECT donde se ecuentra el usuario a quien transferimos necesitamos del METHOD FIND
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  //Aqui la cantidad
  const amount = Number(inputTransferAmount.value);
  console.log(receiverAccount, amount); //Aqui veremos el OBJECT donde este el owner y la cantidad introducida.
  /*
  {owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222, userName: "jd"}
  500
  */
});

/*
Siguiendo el FlowChart toca quitar el dinero al current user, es decir, hacer un withdrawal y añadirselo al receptor, deposit.

Antes de enviar el dinero, tenemos que comprobar que la cantidad es positiva y que ademas el usuario actual tienen suficiente dinero en su balance! como tercera condicuion debemos evitar hacerse una transferencia a uno mismo! No seria incluso tonteria, mirar si existe la receiverAccount, le ponemos un OPTIONAL CHAINING ?.
*/

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  if (
    amount > 0 &&
    receiverAccount && //User existe
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName ////User diferente al actual
  ) {
    console.log('transfer valid');
  }
});

/*
Aqui hay un problema, la funcion calcDisplayBalance, solo obtiene los movements, pero nosotros le vamos a pasar el ARRAY accounts o sea toda el OBJECT.

Luego pasamos de esto:
*/
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

// a esto :

const calcDisplayBalance = function (arr) {
  arr.balance = arr.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${arr.balance} €`;
};

// Al igual que antes, ya no nos vale con llamar a los currentAccount.movements, hay que incluir todo el OBJECT
//calcDisplayBalance(currentAccount.movements);
calcDisplayBalance(currentAccount);

//Pasamos este ARRAY de currentAccount a la FUNCION con su parametro arr (podria ser otro nombre...)

////Una vez que hemos comprobado que todos las condicieones se cumplen podemos enviar el dinero y retirarlo del user actual.

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  if (
    amount > 0 &&
    receiverAccount && //User existe
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName ////User diferente al actual
  ) {
    //quitamos la cantidad del ARRAY del usuario activo con el METHOD .push:
    currentAccount.movements.push(-amount);
    //agregamos la cantidad al ARRAY del receptor con el METHOD .push:
    receiverAccount.movements.push(amount);
  }
});
/*
Una vez hecho habria que actualizar el account Balance de todo el mundo!

Podriamos copiar todo el codigo que llama a las funciones:

//Display Movements
displayMovements(currentAccount.movements);
//Display Balance
calcDisplayBalance(currentAccount);
//Display Summary
calcDisplaySummary(currentAccount);

Pero seria repetirse y saltarse la regla de DRY CODE, luego vamis a refactorizar:
*/
const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc.movements);
  //Display Balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};

updateUI(currentAccount);

//Ahora podemos llamar a esta funcion updateUI cuando queramos y actualizaremos la APP.

//Por ultimo simplemente quedaria limpiar los campos de la tranferencia una vez hecha, lo podemos poner fuera del statement de condiciones puesto que no afecta.

inputTransferAmount.value = inputTransferTo.value = '';
