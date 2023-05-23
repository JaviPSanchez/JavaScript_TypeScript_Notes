'use strict';

/*
Vamos a ocuparnos del formato de los numeros en los diferentes sistemas de unidades.
*/
//Al iogual que con las fechas llamamos a la API de JS, en este caso simplemente varia el nombre de la funcion:

const num = 565555556.256;
console.log(new Intl.NumberFormat('en-US').format(num)); //565,555,556.256

//En Germany

const num2 = 565555556.256;
console.log(new Intl.NumberFormat('de-DE').format(num2)); //565.555.556,256

//Del propio BROWSER

console.log(new Intl.NumberFormat(navigator.language).format(num2)); //565,555,556.256

//Definimos al igual que antes un OBJECT, la diferencia es que ahora las opciones que podemos cambiar son diferentes:
const num3 = 565;
const options = {
  style: 'unit', //Elegimos que queremos mostrar, si currency o unit.
  unit: 'mile-per-hour', // "celsius", "percent", etc
  currency: 'EUR',
  useGrouping: false, //Para borrar el estilo, se sale del looping.
};

console.log(new Intl.NumberFormat(navigator.language, options).format(num3)); //565 mph

//Pasamos a cambiar las currencies de nuestra aplicacion, empezamos por los movements

//Ahora queremos que la API se ocupe del formateo:

movs.forEach(function (mov, i) {
  const type = mov > 0 ? 'deposit' : 'withdrawal';

  const date = new Date(acc.movementsDates[i]);
  const displayDate = formatMovementDate(date, acc.locale);
  //Creamos la variable fuera y ademas el OBJECT de opciones dentro de la funcion. No olvidar el METHOD format para pasar el valor que queremos formatear:
  const formattedMov = new Intl.NumberFormat(acc.locale, {
    style: acc.currency, //Adaptamos la currency a cada user OBJECT
    currency: 'USD',
  });

  const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
    i + 1
  } ${type}</div>
    <div class="movements__date">${displayDate}</div>
            <div class="movements__value">${formattedMov}</div>
        </div>
        `;
  containerMovements.insertAdjacentHTML('afterbegin', html);
});

//Ahora nos queda formatear los valores en l balance y los statistics

//Creamos una funcion para formatear las currencies.

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// En el balance:

const calcDisplayBalance = function (arr) {
  arr.balance = arr.movements.reduce((acc, mov) => acc + mov, 0);
  //Podriamos haber definido aqui una nueva variable, pero no hace falta lo pegamos directamente al  labelBalance.textContent
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

//En los summaries:

const calcDisplaySummary = function (acc) {
  //Income
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  //Outcome
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(
    Math.abs(outcomes),
    acc.locale,
    acc.currency
  );
  //Interest
  const interest = acc.movements
    .filter((mov, arr) => mov > 0)
    //Aqui necesitaremos un nuevo ARRAY,
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};
