'use strict';

/*
Ha llegado el momento de implementar el verdadero PRIVATE CLASS FILDS y METHODS.

So private class fields and methods are actually part of a bigger proposal for improving and changing JavaScript classes which is simply called Class fields. Now this Class fields proposal is currently at stage three. And so right now it's actually not yet part of the JavaScript language.

However, being at stage three means that it's very likely that at some point, it will move forward to stage number four. And then it will actually become a part of the JavaScript language. And that's probably gonna happen some point soon in the future.

Some parts of this proposal already work in Google Chrome.

Now for starters, why is this proposal actually called Class fields? Well, in traditional OOP languages like Java and C++, properties are usually called fields. So what this means is that with this new proposal, JavaScript is moving away from the idea that classes are just "syntactic sugar" over constructor functions. Because with this new class features classes actually will have abilities that we didn't previously have with constructor functions.

Now to many developers this is considered to be a big problem but personally, I'm not sure if it is such a big deal for the average JavaScript developer.

So as long as you still understand how prototypal inheritance and function constructors work then I believe that you will be fine. But anyway, no matter if you end up using these new class features, let's now start exploring them.

So in this proposal, there are actually four different kinds of fields and methods, and actually it's even eight. But in this video, I'm just gonna focus on these four:

1/ Public fields
2/ Private fields.
3/ Public methods
4/ Private methods.
5,6,7,8/ There is also the static version

So essentially there is a public and a private version of both fields and methods. And let's now start with public fields:

So we can think of a field as a property that will be on all instances.So that's why we can also call this a public instance field. So basically in our example here, the two fields could be the movements and the locale. Because these are basically two properties that are gonna be on all the objects that we create with this class.

Because we do not pass any of the values here in, so into the constructor. And so this array and this language they will always be set for all the instances right? And so let's now add them as public fields. So that works simply like this:
*/
class Account {
  /*We can say locale equal and then navigator.language. And then here, we actually need to write a semi colon which is kind of weird because between these methods we do not need commas or semi-colons. What's also weird is that this kind of looks like a variable here right? But we don't have to declare it using like const or let, so this is how we simply define a public field.
   */

  //PUBLIC FIELDS (instances)
  locale = navigator.language;
  _movements = [];

  //PRIVATE FIELDS

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

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
const acc = new Account('Javi', 'EUR', 1111);

console.log(acc.getMovements());
/*
So we still have the locale and also the movements but now they are actually public fields, these public fields here  are gonna be present on all the instancesthat we are creating through the class. So they are not on the prototype. So this is important to understand.

So all these methods that we add here: getMovements(), deposit(val), withdraw(val),  _approveLoan(val), requestLoan(val). they will always be added to the prototype, right?

These public fields they're also referenceable by the this keyboard and they are also referenceable via the this keyword. Great, so that's public fields.

Next up, let's talk about private fields. So private fields is the one
that we have actually been waiting for. So with private fields we can now make it so that properties are really truly not accessible from the outside. So just like in the last lecture, let's start by now finally making the movements array private:
*/
class Account {
  //PUBLIC FIELDS (instances)
  locale = navigator.language;
  // And now I will remove the underscore and then I will use the # symbol.
  //PRIVATE FIELDS
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  // RESTO DE CODIGO
}
/*
And so this is the syntax that makes a field private in this new class proposal. So let's try and reload to see what happens now. And indeed we get some error. And the reason for that is that the property is now really called #movements. So we need to change that everywhere.

And so now, we are finally gonna be able to see that this property is indeed protected. So if we try to read account1.movements then we get a syntax error.

The movements are now truly private and no longer accessible from outside. At least not by their property. We do still have of course, the method:

 getMovements() {
    return this.#movements;
  }

in our public API. And so this one we can still use to get the movement.
And that was indeed the whole point of creating this method in the first place, in the last lecture.

Now the next candidate to make private is pin. So in the last lecture we protected it but now just like the movements, we want to convert it
to a truly private field. However, this time the situation is a bit different. Because now we are actually setting the pin based on the input value to the constructor:

constructor(owner, currency, pin)

However, we can not define a field in the constructor. So the fields, they really have to be outside of any method. So what we have to do is to create the field with hash, and then we don't set it to anything. Essentially just like creating an empty variable:
*/
class Account {
  //PUBLIC FIELDS (instances)
  locale = navigator.language;
  // And now I will remove the underscore and then I will use the # symbol.
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

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
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

/*
Later we can access it on the this keyword and set it to the value that we received. And so when we try to access it, we will no longer be able to do that:

console.log(acc1.#pin); //SyntaxError: Private field

Now, some people don't like the way that the Syntax looks with the # symbol and there has been a lot of discussion going on. Now, I don't mind it at all. I just like to focus on the benefits that this new syntax gives us.

But anyway, next up we have public methods. And actually that is nothing new at this point.

So all these methods here that we have been using are indeed public methods:
*/
class Account {
  //PUBLIC FIELDS (instances)
  locale = navigator.language;
  // And now I will remove the underscore and then I will use the # symbol.
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
/*
So in this case, there is not a lot to talk about. All of these methods together are basically the public interface of our class.

And so therefore let's move on to our final point here, which is private methods:
*/
class Account {
  //PUBLIC FIELDS (instances)
  locale = navigator.language;
  // And now I will remove the underscore and then I will use the # symbol.
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
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      // if (this.#approveLoan(val)) { //Not supported yet
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  //PRIVATE METHODS

  _approveLoan(val) {
    //   #approveLoan(val) { //Not supported yet
    return true;
  }
}

/*
And private methods, as we already mentioned earlier are very useful to hide the implementation details from the outside. The syntax is exactly the same as private fields. So just like with the hash.

Google Chrome simply made this method like a private field. So that's why it no longer appears in the prototype, right?

Let's just test if we can access it:
*/
console.log(acc1.#approveLoan(1000)); //SyntaxError: Private fild
/*
And then we get the same error as before. And so, yeah, it's just as I said, so Google Chrome right now basically sees this as a private class field and not as a method. And so that's why I was saying that the methods are not really yet implemented in Google Chrome.

We will leave everything with the underscore convention. So at some point in the future, this will work but for now, let's leave it just as it was before.


Now, besides these four there's also the static version of the same form. And that's why I said in the beginning that actually we have eight new features. So there's also the static version. And actually we already used the static public method before. And so that worked by simply adding the static keyword in front of it:
*/
static helper() {
    console.log();
}
/*
Remember, so just static and then some method name. And so usually we use this for helper functions. Because these static methods will not be available on all the instances, but only on the class itself.

Remember, so the static one here only works like this:
*/
Account.helper();
/*
And so, as I said, there is also a static version for all the other ones. But I'm not gonna show them to you now in this video because they are really less important, and if you want you can, of course easily test them out by yourself. Now, okay. And that's actually it.

So this is how we implement encapsulation and data privacy using the new class fields proposal that hopefully at some point will really become part of the JavaScript language.
*/
