'use strict';

/*
Este es un principio muy importante en OOP, para empezar combiene recordar que ENCAPSULATION es guardar los METHODS y PROPERTIES de un modo privado de tal modo que no son accesibles fuera de la CLASS. Dejan do el resto de METHODS expuestos como public interface o API.

Hay dos razones por las que necesitamos ENCAPSULATION y DATA PRIVACY. La primera es para prevenir manipular ciertas properties y conviene encapsularlas. La segunda razon es que cuando estamos exponiendo una API pequeña con pocos METHODS entonces podemos cambiar los otros METHODs internos con mas seguridad y confianza sabiendo que el codigo externo no se basa en estos METHODS privados.

Actualmente JS no soporta real DATA PRIVACY y ENCAPSULATION, hay una puesta en marcha para añadir verdaderas PRIVATE CLASS FIELDS y METHODS al lenguaje pero no esta listo aun.

En la proxima leccion veremos verdaderamente PROTECTED FIELDS.

En este temario haremos una especie de "fake" ENCAPSULATION simplemente usando una convenccion.

EL primer PROPERTIE que queremos proteger es el de movements de tal forma que nadie puede manipularlo. para ello añadiremos el underscore "_" en frente de la property

this._movements = [];

*/

class Account2 {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this._pin = pin;
    this._movements = [];
    //Protected Property
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
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

//Debemos saber que este caracter no hace verdaderamente na propiedad privada, siendo solamente una convencion. El objetivo aqui, es que todo el mundo en tu equipo sepa que esta property no deberia ser modificada desde el exterior

acc2._movements.push(250);
acc2._movements.push(-150);

//Si queremos tener acceso al movements ARRAY desde el exterior, es mejor implementar un public METHOD (es muy normal tener un METHOD que se llama get.. o set... en vez de crear un verdadero gettter o setter, que podriamos haberlo hecho perfectamente...)
//Este METHOD lo escribimos dentro de la class:

getMovements() {
return this._movements;
}

//siendo ahora la forma correcta de acceder sin sobreescribir nada:

console.log(acc2.getMovements());

// Quedando todo finalmente:

class Account3 {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this._pin = pin;
    this._movements = [];
    //Protected Property
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}
const acc3 = new Account3(
  'Javi',
  'EUR',
  1111,
  [] /*No hace falta poner aqui el ARRAY*/
);

console.log(acc3.getMovements());

//Ahora nuestra public API son los 4 METHODS restantes: getMovements(), deposit(val), withdraw(val), requestLoan(val).


