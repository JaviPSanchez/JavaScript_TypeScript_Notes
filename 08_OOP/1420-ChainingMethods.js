'use strict';

/*
Do you remember how we chained array methods one after another, for example filter map and reduce? So by chaining these methods, we could first filter an array, then map the result. And finally reduce the results of the map, all in one line of code.
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
And so let's go do that now. And actually, this is extremely easy to do. So all we have to do is to return the object itself at the end of a method that we want to be chainable. So let's say that we wanted to do this:
*/
acc.deposit(300).deposit(500).withdraw(50).requestLoan(25000).withdraw(2000);
/*
So right now, this is not gonna work. We are trying to call the deposit method on undefined which is the result of all this:

acc.deposit(300)

And therefore we get exactly that error here. So what we need to do is to call deposit actually on an account. And so what we want is for the result of this year to be again the account, right?

And so let's do that.

So all we have to do is return.this:
*/
// deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
/*
Because this is of course, the current object. And now we do the same on all of them.

So let's take a look at our account here:
*/
console.log(acc.getMovements()); //(8) [250, -140, 12000, 300, 500, -50, 25000, -2000]
/*
And so indeed, all the deposits and withdrawals that we just did, are now in this Movements array. Great!.

So with this, you have yet another tool in your toolbox now. I actually showed you all there is to show about Object Oriented Programming in JavaScript. Now, just to really wrap up this section. Next up, I have a nice overview of the entire class syntax and then one final coding challenge.
*/
