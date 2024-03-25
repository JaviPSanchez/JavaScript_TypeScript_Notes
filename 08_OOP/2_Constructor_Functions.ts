import './main.css';

/*
We can use constructor functions, to build an object using a function. Now, a constructor
function is actually a completely normal function. The only difference between a regular
function, and a function that we call constructor function, is that we call a constructor
function with the new operator.

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

1. So first, a new empty object {} is created.

2. Then afterwards the function is called and in this function call the this keyword will
be set to this newly created object. So, basically in the execution context of the person function,
the "this keyword" will point to this new object here that was created in step number one.
And remember all of this happens only because we are calling the function using the new operator here.

3. So step number three is that this newly created object is linked to a prototype. {} So linked to
prototype. For now, we just care about creating the object itself.

Finally, the last step, is that the object that was created in the beginning is then automatically
returned from the constructor function.

4. So the function automatically returns that empty object from the beginning.
return {}. But actually at this point, the object no longer needs to be empty. And this is actually
the trick of making the constructor function work.

So, all we need to do is to now take that first name parameter, so the value that we receive, and
then create a property on the this keyword with the same name and then set it to that value.
And then the same with the birth year, equal to birth year. And so now let's store the result here
in some variable and that's actually it.

*/
const Person2: (firstname: string, birthYear: number) => void = function (
  firstname,
  birthYear
) {
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
JavaScript doesn't really have classes in the sense of traditional OOP. However, we did create an object
from a constructor function. And actually three objects, right? And constructor functions have been used
since the beginning of JavaScript to kind of simulate classes.

And so therefore we can still say that Jonas here is an instance of person and the same goes for Matilda and for Jack here.

And in fact there is even an operator that we can use to test for that.

So that works like this:
*/
console.log(jonas instanceof PersonFourth); //true
/*
So Jonas is an instance of, and then person.

And so this will then return either true or false.

Now, if we created something else here:
*/
const jay = 'Jay';
console.log(jay instanceof PersonFourth); // false
/*
let's say J, just like this, then if we do this, this would of course be false, right?

Because of course we didn't create this variable here, so this object using any constructor function, all right?
*/
const Person5 = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;
};
/*
And since we're talking about instances here, we can also say that these properties here will be the instance properties.

And that's because the properties' first name and birth year will be available
on all the instances that are created through this constructor function.

So that's for properties, but now what about methods, So what if we wanted to add a method to our objects? Well, just like we added properties, we can of course also add methods.

So let's again, use our old friend calcage here:
*/
const Person6 = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
/*
And so here we are going to create a function and assign it to this property. And so this will then basically become a method, right?

Simply log to the console 2037, which is the year we've always been using, and minus this.birthYear here.

And so this method is exactly the same that we've been using all the time, right? So, this would work just fine here but this is actually a really bad practice.

So you should never do this.
*/
const Person7 = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;
  //NEVER TO THIS!!!
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
/*
You should never create a method inside of a constructor function.

That's because imagine we were gonna create a hundred or thousands or even tens of thousands of person objects using this constructor function. Then what would happen, is that each of these objects would carry around this function here.
*/
this.calcAge = function () {
  console.log(2037 - this.birthYear);
};
/*
So if we had a thousand objects, we would essentially create a thousand copies of this function.

And so that would be terrible for the performance of our code.

Again, don't do this.

But instead to solve this problem, we are gonna use prototypes and prototype inheritance just like we discussed in the last video.

So this is the basics of constructor functions.

Just note that function constructors are not really a feature of the JavaScript language. Instead, they are simply a pattern that has been developed
by other developers.

And now everyone simply uses this.

And this now includes you as a new developer.

So the real magic really here is this new operator.
*/
new Operator();
/*
And so the most important thing to understand from this video, is really these four steps. So make sure that you understand them, and then in the next video we will work with prototypes and finally see the magic of prototypal inheritance in action.
*/
