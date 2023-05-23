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

/*
Hemos usado los METHODs MAP, FILTER y REDUCE, pero existen otros METHODs super importantes y que usamos todo el rato, como el protagonista de esta leccion el FIND METHOD

Como su nombre indica, podemos usar este METHOD para recuperar un elemento de un ARRAY basado en una condicion.
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
Como el resto de METHODs este acepta una condicion, una booleana y una CALLBACK FUNCTION que llamara cuando loopeemos el ARRAY.

La diferencia con el find METHOD es que aqui no devuelve un ARRAY sino que devuelve el primer elemento en el ARRAY que satisface la condicion.
*/
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); //-400

//Vamos a trabajar con OBJECTS, con FIND podemos encontrar un objeto en el ARRAY basado en alguna propiedad de este OBJECT.

const accounts = [account1, account2, account3, account4];
//Imaginemos que queremos seleccionar una de las accounts, por ejemplo de Jessica Davis, gracias al FIND METHOD nos encuentra el OBJECT donde se encuentra este STRING, algo muy muy util.
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); //Nos devuelve el OBJECT:
/*
{owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222}
interestRate: 1.5
movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
owner: "Jessica Davis"
pin: 2222
*/

//Por lo que podemos decir aue el objetivo de FIND METHOD es encontrar un ELEMENTO!
