import './main.css';

/*
We can use constructor functions, to build an object using a function. Now, a constructor
function is actually a completely normal function. The only difference between a regular
function and a constructor function is that we use the new operator.

In OOP there is the convention of starting always with a capital letter. And in fact,
other as-built in constructors like array or map, follow that convention as well.

Function expression and function declaration could be use but arrow functions will
actually not work as a function constructor. And that's because it doesn't have its
own this keyword!

*/
const PersonInitial: (firstname: string, birthYear: number) => void = function (
  firstname,
  birthYear
) {
  console.log(this);
};
/*
And so we specified these two parameters for that here in our constructor function so that
we can then pass in the name and the birth year. And now let's actually call this function.

The only difference between a regular function, and a constructor function is that we call
the constructor using the new keyword.
*/
new PersonInitial('Jonas', 1991);
/*
So this new operator here, is actually a very special operator because what it does is to call
the function. But it does a whole lot more than just that. So behind the scenes, there have
been four steps.

1. So first, a new empty object is created 👉 {}

2. Then afterwards the function is called and in this function call the this keyword will
be set to this newly created object. So, basically in the execution context of the person function,
the "this keyword" will point to this new object that was created in step number one.

3. The new object is linked (__proto__property) to the constructor function´s prototype property
This happens internally by adding the __proto__ property to the new Object.

4. The new object is returned from the constructor function call

So, all we need to do is to now take that first name parameter, so the value that we receive, and
then create a property on the this keyword with the same name and then set it to that value.
And then the same with the birth year, equal to birth year. And so now let's store the result here
in some variable and that's actually it.

*/
const Person2: (firstname: string, birthYear: number) => void = function (
  firstname,
  birthYear
) {
  //Instance properties --> Available in all instances (Inheritance)
  this.firstname = firstname;
  this.birthYear = birthYear;
};
const jonas = new Person2('Jonas', 1991);
console.log(jonas);
/*
And so now of course we can use this constructor function to create as many different objects as we want.
*/
const matilda = new Person2('Matilda', 2017);
const jack = new Person2('Jack', 1975);
console.log(matilda, jack);
/*
Now remember that in classical object oriented programming, an object created from a class is called
an instance, right? Now we didn't technically create a class here because as we discussed before,
JavaScript doesn't really have classes in the sense of traditional OOP. However, we did create three objects
from a constructor function. Constructor functions have been used since the beginning of JavaScript to kind
of simulate classes. And so therefore we can say that jonas, matilda and jack are instances of Person2

There is even an operator that we can use to test for that.
*/
console.log(jonas instanceof Person2); //true
/*
So that's for properties, but now what about methods?, So what if we wanted to add a method to our objects?
Well, just like we added properties, we can of course also add methods. We are gonna use prototypes and
prototype inheritance.

function constructors are not really a feature of the JavaScript language. Instead, they are simply
a pattern that has been developed by other developers.
*/
