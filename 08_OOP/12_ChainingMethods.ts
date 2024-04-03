'use strict';

/*
Do you remember how we chained array methods one after another, for example filter map and reduce?
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.18;
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD); //5923.6
/*
And we can actually implement the same ability of chaining methods in the methods of our class.
*/
class Account {
  //PUBLIC FIELDS (instances)
  locale = navigator.language;
  //PRIVATE FIELDS (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //PUBLIC METHODS

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  //PRIVATE METHODS

  _approveLoan(val) {
    return true;
  }
}

const acc = new Account('Javi', 'EUR', 1111);
acc.deposit(250);
acc.withdraw(140);
acc.requestLoan(12000);
console.log(acc.getMovements());

/*
So all we have to do is to return the object itself at the end of a method that we want to be chainable.
*/
acc.deposit(300).deposit(500).withdraw(50).requestLoan(25000).withdraw(2000);
console.log(acc.getMovements()); //(8) [250, -140, 12000, 300, 500, -50, 25000, -2000]
