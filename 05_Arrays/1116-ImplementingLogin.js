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

const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const labelWelcome = document.querySelector('.welcome');
const containerApp = document.querySelector('.app');

/*
En esta seccion vamos a aprender a implementar el login feature en nuestra APP.

Lo primero que hacemos es añadir un event listener a nuestro boton de login:
*/

btnLogin.addEventListener('click', function () {
  //   console.log('LOGIN');
});

/*
Si hacemos click ahora mismo sobre la pagina, podemos ver que no aparece nada, o mejor dicho, aparece algo pero la pagina se actualiza tan rapido que no podemos ver nada, esto es porque el elemento donde se encuentra este boton es un FORM ELEMENT, y en HTML el default behavior cuando clickamos el submit buttom es actualizar la pagina. Por ello tenemos que parara este comportamiento.

Para ello debemos dotar a la funcion de un EVENT PARAMETER, al cual simplemente llamaremos event "e":
*/
btnLogin.addEventListener('click', function (e) {
  //En este evento podemos llamar un METHOD llamado preventDefault para evitar el submitting
  e.preventDefault();
  console.log('LOGIN');
});

// Algo bueno del TAG FORM  es que cuando tenemos un input en uno de sus ELEMENTS, ya sea meter el user o la password, cuando presionamos "enter" automaticamente se creara un CLICK EVENT en ese ELEMENTO.

//Lo primero que debemos hacer es encontrar el OBJECT desde el ARRAY accounts para encontrar el user que vaya a usar la APP en ese momento. Este elemento se encuentra en el TAG input del FORM ELEMENT:
/*
<form class="login">
        <input
          type="text"
          placeholder="user"
          class="login__input login__input--user"
        />
*/
/*
Lo siguiente que debemos hacer es obtener el VALUE PROPERTIE, que basicamente lee el VALUE a partir de un input.

Otro aspecto importante es que debemos definir la variable que guarda este valor fuera de la funcion CALLBACK, porque lo necesitaremos utilizar en diferentes ocasiones, como por ejemplo para hacer una transferencia o utilizar las funciones de displayMovements, DisplayBalance, etc...
*/
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(initial => initial[0])
      .join('');
  });
};
createUserNames(accounts);
console.log(accounts);

let currentAccount; //Sacamos la variable!

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  //   let currentAccount;
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
});
//Cuando introducimos nuestro Username ahora si, reconoce donde esta el OBJECT
/*
{owner: "Jonas Schmedtmann", movements: Array(8), interestRate: 1.2, pin: 1111, userName: "js"}
*/

//Ahora lo que nos queda es comprobar si el PIN introducido es correcto

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  //El METHOD value es siempre STRING, lo convertimos a numero, tambien nos ayudamos del OPTIONAL CHAINING ? para que comrpuebe si el user metido existe, y si no existe, directamente no continue.
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    //Queremos que una vez hacemos login la opacidad sea 0, o en otras palabras, sea todo visible. Seleccionamos el CONTAINER .app
    containerApp.style.opacity = 100;
    //Display Movements
    displayMovements(currentAccount.movements);
    //Display Balance
    calcDisplayBalance(currentAccount.movements);
    //Display Summary
    calcDisplaySummary(currentAccount.movements);
  }
});
/*
Si intentasemos meter un user que no existe nos saldria undefined.

Una vez que metemos el user y su PIN correcto, nos hace LOGIN.

si miramos el FLOWCHART:

<cmg /Bankist-flowchart.png>

Podemos, comprobar que ya hemos realizado la parte de Correct credentials, por lo que podemos pasar a "Display UI and welcome message" situados dentro del ELEMENT NAV:

 <nav>
    <p class="welcome">Log in to get started</p>
</nav>
*/

/*
Cabe resaltar algo importante, si miramos nuestro codigo de BankishApp podemos ver que inmediatamente despues de crear las funciones displayMovements, calcDisplayBalance y calcDisplaySummary llamamos en todas a la cuenta account1 del ARRAY movements:

displayMovements(account1.movements);
calcDisplayBalance(account1.movements);
calcDisplaySummary(account1.movements);

El problema con esto es que siempre nos apareceran los datos del primer usuario, Jonas!

Por ello hay que borrar estas "llamadas" y crear una dinamica que se adapte al usuario que haga log-in.

El siguiente paso es una vez logeados, borrar el user name y el pin.
*/
//Aqui funciona este codigo, porque JS lee de derecha hacia la izaquierda! lo que hace es asignar el EMPTY STRING al ELEMENT inputLoginPin y luego el inputLoginUsername sera igual al EMPTY STRING que tendra a su derecha. Por supuesto no olvidar la PROPERTIE value, puesto que sino todo el ELEMENTO estaria vacio!
inputLoginUsername.value = inputLoginPin.value = '';
//Una vez borrados los input, para dar un toque estetico vamos a poner los dos ELEMENTS un poquito borrosos, simplemente un toque estetico, lo podemos conseguir con el METHOD o FUNCTION .blur():
inputLoginPin.blur();

//Un ultimo detalle seria adaptar el interest rate a cada usaurio, porque si nos fijamos hasta ahora es del 1.2%, para todos! sin embargo cada cuenta tiene sus propios privilegios... Por ello deberemos pasar todo el ARRAY entero y no solo los movements, necesitamos toda la informacion para poder luego dentro de la funcion seleccionar las PROPERTIES que nos interesen!
const calcDisplaySummary2 = function (arr) {
  //Income
  const incomes = arr.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  //Outcome
  const outcomes = arr.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  //Interest
  const interest = arr.movements
    .filter((mov, arr) => mov > 0)
    //Aqui necesitaremos un nuevo ARRAY,
    .map(deposit => (deposit * arr.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//Obviamente tendremos que modficar tambien el parametro que metamos a la funcion, en este caso no nos vale con la PROPERTIE de los movimientos, necesitamos todo el OBJECT.
// calcDisplaySummary(currentAccount.movements); NO!!!
calcDisplaySummary(currentAccount);
