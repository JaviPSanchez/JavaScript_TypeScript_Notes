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
Vamos a utilizar el MAP y FOR EACH METHOD para tratar los nombres de usuario en cada cuenta de propietario.

Tenemos 4 cuentas de usuario, de las que por el momento nos interesan solo los username por sus iniciales
*/
const user = 'Steven Thomas Williams'; //stw
//Ahora para evitar el SIDE EFFECT, usamos el METHOD MAP
const userName = user
  .toLowerCase()
  .split(' ') //["steven", "thomas", "williams"]
  //Aqui podriamos usar el .forEach, pero crearia el SIDE EFFECT, es decir crearia cada resultado en una linea diferente
  .map(function (initial) {
    return initial[0];
  });
console.log(userName); //["s", "t", "w"]
//Como tenemos un ARRAY podemos utilizar al join METHOD!
console.log(userName.join('')); // stw

//Podemos ir mas lejos y simplificar la callback funtcion:
const userName2 = user
  .toLowerCase()
  .split(' ')
  .map(initial => initial[0])
  .join('');
console.log(userName2); //stw

//Ya podemos meter todo en una funcion:
const createUserNames = function (user) {
  const userName = user
    .toLowerCase()
    .split(' ')
    .map(initial => initial[0])
    .join('');
  return userName;
};
console.log(createUserNames('Steven Thomas Williams')); // stw
/*
Ahora queremos realizar lo mismo para cada uno de los usuarios, para poder hacerlo, ¿Que usamos? FOR EACH o MAP METHOD?, En este caso no queremos crear un nuevo ARRAY, solo queremos modificar el OBJECT, es decir, los elementos que estan en el ACCOUNTS ARRAY.

const accounts = [account1, account2, account3, account4];

Queremos loopear este ARRAY y hacer algo, por ello usamos FOR EACH

Vamos a modificar nuestra funcion createUserNames y en vez de recibir solo un user vamos a decirle de recibir un ARRAY con multiples users o accounts.

Cabe resaltar que aqui el SIDE EFFECT seria no queremos mutar el ARRAY ORIGINAL: accounts

Una cosa muy importante para evitar confusion, no hace falta llamar al parametro de la callback function accounts, podemos llamarlo como queramos, por ejemplo accs, lo mismo con la callback function del FOR EACH METHOD, podriamos llamarlo acc, de echo lo dejaremos asi en el codigo final de la APP.
*/
const createUserNames2 = function (accounts) {
  //LOOP accounts ARRAY: For each account iteration we want to do ....
  accounts.forEach(function (account) {
    //Ahora queremos crear una nueva PROPERTIE en el ARRAY accounts llamado username:
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(initial => initial[0])
      .join('');
  });
};
createUserNames2(accounts);
console.log(accounts);

//Podemos ver como se ha creado una nueva PROPERTIE en cada user account llamada username:
/*
[{…}, {…}, {…}, {…}]
0:
interestRate: 1.2
movements: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
owner: "Jonas Schmedtmann"
pin: 1111
userName: "js"
1:
interestRate: 1.5
movements: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
owner: "Jessica Davis"
pin: 2222
userName: "jd"
2:
interestRate: 0.7
movements: (8) [200, -200, 340, -300, -20, 50, 400, -460]
owner: "Steven Thomas Williams"
pin: 3333
userName: "stw"
3:
interestRate: 1
movements: (5) [430, 1000, 700, 50, 90]
owner: "Sarah Smith"
pin: 4444
userName: "ss"
*/
