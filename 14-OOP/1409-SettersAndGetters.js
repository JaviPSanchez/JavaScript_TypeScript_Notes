'use strict';

/*
Let's now talk about a feature that is actually common to all objects in JavaScript, and that's getters and setters. So every object in JavaScript can have setter and getter properties. And we call these special properties assessor properties, while the more normal properties are called data properties.

So getters and setters are basically functions that get and set a value so just as the name says, but on the outside they still look like regular properties.

And so let's first take a look at getters and setters in a simple object literal, and for that I'm gonna use the bank account example from the Bankist application:
*/
const account = {
  owner: 'jonas',
  movements: [200, 530, 100, 300],
};
/*
So very simple object literal here.

All right, but now to add a getter to this object. We can start by basically writing a normal method, so let's say that we want a method to get the latest movement and so let's call it latest:
*/
const account2 = {
  owner: 'jonas',
  movements: [200, 530, 100, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
};
/*
And then to transform this into a getter we simply write the keyword get.

All right, and so let's simply return the last movement here so that's this.movements.slice (-1). But this is actually gonna return an array, so an array with the last position so we can simply take that out using the pop method.

And so now we can use this getter like this:
*/
console.log(account2.latest); //300
/*
So account and then latest, we simply use latest as a property, so we don't call the method, but instead we write it as if it was just a property.

So let's see, and indeed that returns 300. So this can be very useful when we want to read something as a property, but still need to do some calculations before.

Okay, and now we can do the same also as a setter. So we say set, latest again and then here we can basically add a new movement to the array:
*/
const account3 = {
  owner: 'jonas',
  movements: [200, 530, 100, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
/*
And any setter method needs to have exactly one parameter. So in this case that's simply a movement (mov). So let's say this.movements.push and then that movement (mov) that we just passed into. Now it is not mandatory to specify a setter when we have a getter for the same property.

And so, how do we use the setter now? So if it was a regular method then we would have to do this. So account.latest and then call it with the movement,

let's say 50:
*/
account3.latest = 50;
/*
But now this is actually like a property and not a method. And so we can simply set it just like we set any other property. So we essentially set it equal to 50.

And so now if we take a look at the movements here, it will then give us the complete array with the 50 there at the end.
*/
console.log(account3.movements); //[200, 530, 100, 300, 50]
/*
And so in a nutshell this is how getters and setters work for any regular object in JavaScript.

Now however, classes do also have getters and setters, and they do indeed work in the exact same way. And so let's try them out now here in our person class PersonCL.
*/
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}
/*
So here we can for example add a getter for the age property. So we can say get age and then we return the age. So this is of course very similar to the calcAge method that we already have here but that doesn't matter because this is really just a demonstration example.

All right, and so like this we will be able to basically read the age of any object using a property.

So let's try that here for example:
*/
const jessica = new PersonCL('Jessica', 1996);
console.log(jessica.age); //41
/*
And you see here we now get the same value. All right, so you see that the getter is indeed just like any other regular method that we set on the prototype.

And in fact we can also check that out here. So if we take a look at the prototype of Jessica, it will be right there.
*/
console.log(jessica);
/*
Now it has these dots here because it's only calculated once we actually click the three dots (...).

PersonCL {firstName: "Jessica", birthYear: 1996}
birthYear: 1996
firstName: "Jessica"
age: (...)
__proto__:
age: (...)
calcAge: ƒ calcAge()
constructor: class PersonCL
greet: ƒ greet()
get age: ƒ age()
__proto__: Object

So that's a very simple use case of a getter, but setters and getters can actually be very useful for data validation and as an example, let's try some validation with the name. So for that I will actually change a firstName here to fullName:
*/
class PersonCL2 {
  constructor(fullName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}
/*
And so now here we expect a full name. So a name which basically contains a space. So let's say Jessica Davis here:
*/
const jessica2 = new PersonCL2('Jessica Davis', 1996);
/*
and so now we can create a setter for the fullName property which will check if this is actually a full name.

All right, so set fullName, and then we need the name itself, and then here we need some logic.
*/
class PersonCL3 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this.fullName = name;
    else alert(`${name} is not a full name!`);
  }
}
/*
So to test if it contains a space, if the name includes a space. So in this case what's really important to understand is that we are creating a setter for a property name that does already exist.

So fullName is already a property that are trying to set here, but then we also have the setter. And so now what's gonna happen is that each time this code here is executed, so whenever we set the fullName on the "this keyword":

this.fullName = fullName;

then actually this method here:

set fullName(name)

so this setter is gonna be executed. And so that name that we pass in as fullName will then become this name.

All right, let's check that out actually.
*/
const jessica3 = new PersonCL3('Jessica Davis', 1996);
/*
And so now as we create Jessica here, you will see and indeed it, we saw Jessica Davis here, but now we got this crazy error here of maximum call stack size exceeded.

Now that's a very crytic error message, but what happens here is that there is a conflict. So right now both the setter function and this constructor function are trying to set the exact same property name. And so that gives origin to this weird error.

So what we need to do instead is to here create a new property name. And the convention for doing that, so when we have a setter which is trying to set a property that does already exist, as a convention we add an underscore _:
*/
class PersonCL4 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
}

const jessica4 = new PersonCL4('Jessica Davis', 1996);
/*
So again, this convention, it's not a JavaScript feature. So it's really just a different variable name to avoid that naming conflict.

However, now when we do this, we are actually creating a new variable, so a fullName variable. So if we try to look at Jessica Davis you see that right now the property that exists is underscore fullName. And so right now we cannot do jessica.fullName because that simply doesn't exist.

And so to fix this we now also need to create a getter for the fullName property.
*/
class PersonCL5 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
const jessica5 = new PersonCL5('Jessica Davis', 1996);
console.log(jessica5);
/*
And so that will simply return the underscore fullName.

So let's see:

PersonCL5 {_fullName: "Jessica Davis", birthYear: 1996}
birthYear: 1996
_fullName: "Jessica Davis"
age: (...)
fullName: (...)
__proto__: Object

So return this._fullName. And of course, the actual property that is here is now still underscore fullName, because well that's what we do here in the setter, right?

So this pattern here is important to understand whenever we try to set a property that already exists.

Now let's try another name here just to see what happens:
*/
const walter = new PersonCL5('Walter', 1965);
console.log(walter);
/*
So let's create a Walter object here. and so right now if we check out Walter, age probably doesn't have any name, and yeah it doesn't.

PersonCL5 {birthYear: 1965}
birthYear: 1965
age: (...)
fullName: (...)
__proto__: Object

So just the birth year now. But if we then put it as a full name,

so Walter White then indeed, Walter like this,

then we get the underscore fullName:
*/
const walter2 = new PersonCL5('Walter White', 1965);
console.log(walter2); //Walter White
/*

PersonCL5 {_fullName: "Walter White", birthYear: 1965}
birthYear: 1965
_fullName: "Walter White"
age: (...)
fullName: (...)
__proto__: Object


Now okay, great, so this is another nice feature of classes that can be very useful sometimes. Now we don't need to use getters or setters, and many people actually don't, but yeah, as I just said sometimes it's just nice to be able to use these features and especially when we need like a validation like this:


set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
}

by the time we are creating a new object.

So that's essentially what this setter here does. Next up, we're gonna take a look at yet another feature of classes, which is static methods.

So let's check that out right now.
*/
