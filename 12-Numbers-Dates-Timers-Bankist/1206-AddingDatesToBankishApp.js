'use strict';

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

/*
Vamos a introducir la fecha en nuestra APP en varios sitios diferentes. 

Antes de nada vamos a hackear nuestra APP, he decirle que estamos siempre loggeados para evitar el tener que meter todo el rato el user y el PIN
*/
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Crearemos la fecha dentro del CONTAINER a la class date

<div class="balance">
  <div>
    <p class="balance__label">Current balance</p>
    <p class="balance__date">
      As of <span class="date">05/03/2037</span>
    </p>
  </div>
  <p class="balance__value">0000€</p>
</div>;

//Comenzamos creando la fecha actual:

const now = new Date();
labelDate.textContent = now; //As of Tue Apr 13 2021 12:16:44 GMT+0200 (Central European Summer Time)

//Pero no queremos este formato, quremos day/month/year, luego creamos variables por cada uno de ellos:
const day = now.getDate();
const month = now.getMonth() + 1; //Acordarse que Enero es 0...
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();

//Solo queda crear un STRING con todas las variables:

labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;

//Queremos poner un 0 delante del mes y del dia, nos ayudamos de los METHODs .padStart:

const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getDate() + 1}`.padStart(2, 0);

//Hay algo muy importante que debemos comentra, ha medida que el tiempo avanza, no se actualiza nuestro contador! es estatico, si queremos que sea dinamico, necesitaremos algo llamado TIMER, que veremos mas adelante...

//Ahora queremos implementar las DATEs en los movements, pero aqui tenemos un problema, y es que estamos pasando solamente el ARRAY movements, como podemos ver en el argumento de la funcion "movements". Queremos pasar tambien el ARRAY movementsDates, por lo que lo mejor que podemos hacer es pasar el OBJECT ACCOUNT entero.

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ' ';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov.toFixed(2)}</div>
      </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Luego modificamos:

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = ' ';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = acc.mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__value">${mov.toFixed(2)}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Lamaremos al OBJECT entero:

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc);
  //Display Balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};

// Y calbiaremos tambien el sort boton:

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount /*.movements*/, !sorted);
  sorted = !sorted;
});

//Queremos añadir un elemento mas al codigo HTML, que es la fecha basicamente..

<div class="movements__date">3 days ago</div>;

//Cogeremos este trozo de codigo HTML, y lo pondremos dentro de:

const html = `
<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__date">${displayDate}</div>;
    <div class="movements__value">${mov.toFixed(2)}</div>
</div>
`;
containerMovements.insertAdjacentHTML('afterbegin', html);

//Si intentasemos hacer una transferencia o una loan veremos que la fecha aoparece como NaN, esto es porque tambien debemos .push el nuevo valor dentro del ARRAY movements sino que tambien los movements DATES. Veremos que tenemos 9 o 10 movimientos o los que hagmos, pero solo 8 fechas!

//Add transfer date
currentAccount.movements.push(new Date());
receiverAcc.movements.push(new Date());
