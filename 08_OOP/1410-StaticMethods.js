'use strict';

/*
let's quickly gonna talk about statics methods. Now a good example to understand what a static method actually is, is the build in Array.from method.

So remember that we have the Array.from method which converts any array like structure to a real Array. So for example document.querySelector:
*/

console.log(Array.from(document.querySelectorAll('h1')));

/*
So lets try query selector all, and so now indeed we get an Array here.

[h1]
0: h1
length: 1
__proto__: Array(0)

But that's not really the point, what's the point is that this from method here is really a method that is attached to the Array constructor.

So we could not use the from method on an Array. So this is not gonna work:
*/
// [1, 2, 3].from(); //1410-StaticMethods.js:23 Uncaught TypeError: [1,2,3].from is not a function
/*
So from is not a function. And so that is because this from method here is really attached to the entire constructor, so the Array constructor and not to the prototype property of the constructor.

And so therefore all the Arrays do not inherit this method. Again because its not on their prototype. Its simply attached to the constructor itself.

So Array.from here is basically just a simple function, but its a function that's attached to the Array constructor. And the reason for that is simply, so that developers know that it is related to Arrays. We also say that the .from() method is in the Array name space. And we actually used that term before for some methods in the number and in the internationalization name space.

Remember for example numbers.parsefloat:
*/
Number.parseFloat(12);
/*
So this method is another static method and its static on the number constructor.So its not available on numbers, but only on this very constructor. So these are some good examples that we understand what a static method is. And we usually use these kind of "as helpers", that should be related to a certain constructor.

And so maybe you can imagine that it should be pretty easy to implement static methods or selfs. And let's do that for both or constructor function and also for the class.

So here I already have the constructor function that we wrote in a previous section:
*/
const Person = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);
/*
So this person here and to add a static method, all we have to do is write person and let's say I want to create a very simple hey function:
*/
Person.hey = function () {
  console.log(`Hey there 🤗`);
};
/*
So which simply like waves when we call it. So lets just say console.log, hey there.

And so now in order to call this, it is pretty easy. We just have to do person.hey and that's it:
*/
Person.hey(); //Hey there 🤗
/*
Great but of course this one is not inherited. So just like we cannot call the .from() method on an Array. we cannot say Jonas.hey because it is simply not in the prototype of the Jonas object:
*/
// jonas.hey(); //1410-StaticMethods.js:62 Uncaught TypeError: jonas.hey is not a function
/*
So there's noway that the Jonas object could inherit it.

Now just let's just take a look at the disc key word, but this again should be pretty obvious:
*/
Person.hey = function () {
  console.log(`Hey there 🤗`);
  console.log(this);
  /*
ƒ (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;
}
  */
};
Person.hey();
/*
And so that's essentially the entire constructor function here. And the reason for that is because, that is exactly the object that is calling the method. And so as always that is basically the rule. So whatever object is calling the method, will be the "this keyword" inside of that function. And so here the "this keyword", is simply that entire constructor function.



And now let's quickly take this do the same in class, where it is even easier.

So here to create a static method, all we need to do is to add the static keyword:
*/
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //INSTANCES METHODS

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

  get fullName() {
    return this._fullName;
  }

  //STATIC METHOD

  static hey() {
    console.log(`Hey there 🤗`);
    console.log(this);
  }
}
const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);
/*
So static hey and then that's it.

So we have the static method. While the others are called instance methods.

So as we said in the last lecture, instances methods are methods that will be added to the prototype property, so that all instances can have access to them.


And now we can simply do personcl.hey:
*/
PersonCL.hey();
/*
And so again we get hey there and this time, "this keyword" points to the entire class.

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //INSTANCES METHODS

  calcAge() {
    console.log(2037 - this.birthYear)…

All right. So keep in mind that these static methods are not available on the instances, and sometimes they are still useful to implement some kind of helper function about a class or about a constructor function.
*/
