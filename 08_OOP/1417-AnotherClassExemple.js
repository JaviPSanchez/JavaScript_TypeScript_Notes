'use strict';

//Nos puede surgir la duda de preuntarnos el porque de la utilidad de OOP: Classes. La respuesta es que podemos obtener una mayor organizacion y mantenibilidad de nuestro codigo, si nos fijamos en el codigo de nuestra APP Bankish podemos observar que todo funciona con ARRAYs:

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

//Pero si quisiesemos hacerlo mas manejable y editable, sobre todo si trabajamos en equipo, podemos servirnos del constructor function:

class Account {
  constructor(
    owner,
    currency,
    pin,
    movements /*No hace falta pasar este argumento, podemos ponerlo directamente como una propertie*/
  ) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    /*
    no tiene mucho sentido pasar los movements en cada account, es mejor poner directamente un array:
    */
    // this.movements = movements;
    this.movements = [];
    this.locale = navigator.language;
    //Podemos ejecutar codigo en este constructor:
    console.log(`Thanks for opening an account, ${owner}`);
  }
}
const acc1 = new Account(
  'Javi',
  'EUR',
  1111,
  [] /*No hace falta poner aqui el ARRAY*/
);
console.log(acc1);
/*
Account {owner: "Jonas", currency: "EUR", pin: 1111, movements: Array(0), locale: "en-GB"}
currency: "EUR"
locale: "en-GB"
movements: []
owner: "Jonas"
pin: 1111
__proto__: Object
*/

//Para los deposits y los withdraws

acc1.movements.push(250);
acc1.movements.push(-150);

//Veremos ahora los movements:
/*
Account {owner: "Javi", currency: "EUR", pin: 1111, movements: Array(0), locale: "en-GB"}
currency: "EUR"
locale: "en-GB"
movements: (2) [250, -150]
owner: "Javi"
pin: 1111
__proto__: Object
*/

//No obstante no es una buena idea crear methods "push" que interactuen con properties "movements" es decir manipular las properties de una forma "manual" fuera del OBJECT, sobre todo si son properties importantes. El objetivo es sobretodo evitar bugs a medida que la APP crece. La solucion es de crear un method para deposit y otro para withdraw:
class Account2 {
  constructor(
    owner,
    currency,
    pin,
    movements /*No hace falta pasar este argumento, podemos ponerlo directamente como una propertie*/
  ) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    /*
      no tiene mucho sentido pasar los movements en cada account, es mejor poner directamente un array:
      */
    // this.movements = movements;
    this.movements = [];
    this.locale = navigator.language;
    //Podemos ejecutar codigo en este constructor:
    console.log(`Thanks for opening an account, ${owner}`);
  }
  //Public interface of our OBJECTS
  deposit(val) {
    this.movements.push(val);
  }
  //Podemos llamar a un method desde otro method pero con el this keyword
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}
const acc2 = new Account2(
  'Javi',
  'EUR',
  1111,
  [] /*No hace falta poner aqui el ARRAY*/
);

/*
Ahora en vez de hacer :
acc1.movements.push(250);
acc1.movements.push(-150);
hacemos:
*/

acc2.deposit(250);
acc2.withdraw(140);
console.log(acc2);

/*
Account2 {owner: "Javi", currency: "EUR", pin: 1111, movements: Array(2), locale: "en-GB"}
currency: "EUR"
locale: "en-GB"
movements: (2) [250, -140]
owner: "Javi"
pin: 1111
__proto__: Object
*/

//Si trabajamos en equipo, cualquier colega podria sin querer acceder a la propertie deposit y withdraw u otro METHOD y hacer cambios no deseados. Incluso podriamos ver la propertie PIN!, podriamos acceder a esta fuera del OBJECT account:

console.log(acc2.pin); //1111

//Lo cual no es muy seguro que digamos.... Para evitar todo esto veremos el concepto de DATA ENCAPSULASION y DATA PRIVECY.

//En la public interface solo queremos ver el metodo de requestLoan y no tener acceso al approveLoan:

acc2.requestLoan(10000); //Loan approved

//Pero tambien podriamos acceder al method approveLoan siendo privado. Es como un internal METHOD que solo requesLoan deberia tener acceso!

acc2.approveLoan();

//Pasemos a ver en el siguiente modulo  DATA ENCAPSULASION y DATA PRIVACY.
