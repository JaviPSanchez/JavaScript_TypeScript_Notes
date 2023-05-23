'use strict';

/*
Casi hemos terminado nuestra aplicacion, pero nos queda un feature importante, que es organizar los movimientos ya sea de mayor a menor o al reves.

En esta leccion aprenderemos a organizar ARRAYS "Sorting ARRAYS"

Organizar es un topic muy discutido en COMPUTER SCIENCE y hay infinitos algorithms y METHODS para organizar valores.

Por el momento utilizaremos JS Build-in SORT METHOD.

Imaginemos que tenemos un ARRAY con diferentes nombres y queremos organizarlo alfabeticamente:
*/
const owners = ['Javi', 'Meli', 'Gabi', 'Dani'];
console.log(owners.sort()); //["Dani", "Gabi", "Javi", "Meli"]

//Hay que tener en cuenta que el METHOD SORT muta el arry de origen, por lo que hay que tener cuidado con este METHOD.
console.log(owners); //["Dani", "Gabi", "Javi", "Meli"]

//Podemos usarlo con NUMBERS tambien:
const money = [1000, 1, 100, 10000, 10];
console.log(money.sort()); //[1, 10, 100, 1000, 10000]

//Lo intentamos con nuestro ARRAY movements:

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

/*
SORPRESA! aqui no ha funcionado, esto es porque el METHOD SORT funciona basado en STRINGS, es decir, lo convierte todo en STRINGS y luego hace el sorting. Si nos fijamos en el resultado, tenemos primero todos los menos que en el alfabeto estan primero y luego el 1, 2, 3, etc. Si fuesen STRINGS tendria sentido, pero son NUMBERS, lo cual es un problema.

Este problema podemos solucionarlo con una COMPARE CALLBACK FUNCTION. La FUNCTION tendra dos argumentos a y b. Que seran el CURRENT VALUE y el NEXT VALUE respectivamente.

Para entender como funciona esta CALLABACK FUNCTION debemos ver los dos argumentos a y b como dos numeros consecutivos en el ARRAY. Por ejemplo, cogemos 450 y -400, vamos a compararlos:

**Si obtenemos un valor negativo, es decir b > a, return < 0 entonces a estara antes que b. (keep order).
**Si obtenemos un valor positivo, a > b, return > 0 entonces b estara antes que a. (switch order).

Aplicamos este algoritmo para ordenar de forma ascendiante de menor a mayor:
*/
const movementsAscending = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementsAscending.sort((a, b) => {
  if (a > b) return 1; //El numero no importa mientras sea mayor que 0.
  if (a < b) return -1;
});
console.log(movementsAscending); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

//Ahora si funciona! recordar que el SORT METHOS loopea el ARRAY aplicando la CALLBACK FUNCTION.

//Tambien podriamos reducir la ecuacion ha:
movements.sort((a, b) => a - b);
console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

//Si quisiesemos orodenar de una forma descendiente, simplemente habria que hacer lo contario:
const movementsDescending = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementsDescending.sort((a, b) => {
  if (a > b) return -1; //El numero no importa mientras sea mayor que 0.
  if (a < b) return 1;
});
console.log(movementsDescending); //[3000, 1300, 450, 200, 70, -130, -400, -650]

//Reducimos la ecuacion ha:
movements.sort((a, b) => b - a);
console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

//Como nota, comentar que si tenemos un ARRAY mezclado con NUMBERS Y STRINGS no funcionara el SORT METHOD.

/*
Pasamos a continuar nuestra APP Bankish, implementaremos nuestra sorting functionality dentro de la funcion que muestra los movimientos, displayMovements.

Lo que haremos es añadir un segundo parametro "sort" y lo definiremos como false por defecto.

Dependiendo de este parametro, si es true o false, ordenaremos nuestros movimientos o no. Cuando esta en false, nada pasa, los movimientos apareceran segun el ordel de su ARRAY correspondiente.

Cuando clickamos el sort button, llamaremos a esta CALLBACK FUNCTION displayMovements con sort definido como false.
*/

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ' ';

  /*
  Creamos una nueva variable llamada movements, perdon, no puede llamarse movements porque ya esta definido el primer parametro con ese nombre, luego sera "movs" y la difiniremos condicionalmente.

  Otro aspecto muy importante es que no podemos utilizar el SORT METHOD en el condicional, porque mutaria el movements ARRAY dentro del OBJECT accounts! OJO con esto! Para solucionarlo cogemos una copia del ARRAY movements, con el METHOD SLICE.

  NO PODEMOS HACER --> const movs = sort ? movements.sort()

  Por otro lado queremos organizar los movements en un orden ascendente a - b:

  Queda llamar a esta funcion con sort establecido como true, cuando el user hace click sobre el boton.
  */

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
      </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Primero hemos escrito la funcion de sorting y despues inplementaremos el clicking en el boton:

const btnSort = document.querySelector('.btn--sort');

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, true);
});

//Ya solo que un pequeño detalle, cuando volvemos a pulasar el boton no pasa nada, para solucionar este problema podemos usar una STATE VARIABLE, que vigilara si estamos ordenando el ARRAY o no.

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  // con esto cada vez que hagamos click, cambiamos de true a false.
  sorted = !sorted;
});
