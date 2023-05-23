'use strict';

/*
So, we actually kind of used object oriented programming before but in a very limited way. Because we had no way of programmatically creating objects. And so all we did was to use some simple object literals for example, in the bankist app, right?

But now that all changes with constructor functions. So, we can use constructor functions, to build an object using a function. Now, a constructor function is actually a completely normal function.

The only difference between a regular function, and a function that we call constructor function, is that we call a constructor function with the new operator.

let's now actually create a constructor function for a person.

In OOP there is this convention that constructor functions always start with a capital letter. And so we should always follow that convention too.

And in fact, other as-built in constructors like array or map, follow that convention as well.
*/
const Person = function () {};
/*
Now here I'm using a function expression but of course a function declaration will also work. Now an arrow function will actually not work as a function constructor. And that's because it doesn't have its own this keyword and we need that.

So only function declarations and function expressions.

Now remember that this function is basically gonna produce an object and in this case for a person. So we want a person to have a name or let's say a first name and a birth here.

*/
const Person = function (firstname, birthYear) {};
/*
And so we specified these two parameters for that here in our constructor function so that we can then pass in the name and the birth year.

And now let's actually call this function.

And so, as I said, previously, the only difference between a regular function,and a constructor function is that we call the constructor using the new keyword.

So we write new, then person and then let's pass in Jonas and 1991, let's say.
*/
new Person('Jonas', 1991);
/*
So this new operator here, is actually a very special operator because what it does is to call this function here. But it does a whole lot more than just that.

So let's see what exactly happens when we call a function with the new operator like this. So behind the scenes, there have been four steps. And let me actually write them here because this is very important.

1. So first, a new empty object {} is created.

2. Then afterwards the function is called and in this function call the this keyword will be set to this newly created object.

All right? So let's write that here. So the "this keyword" is this new empty object. this = {}

So, basically in the execution context of the person function, the "this keyword" will point to this new object here that was created in step number one.And remember all of this happens only because we are calling the function using the new operator here.

3. So step number three is that this newly created object is linked to a prototype. {} So linked to prototype but more about this in the next video. For now, we just care about creating the object itself.

Finally, the last step, is that the object that was created in the beginning is then automatically returned from the constructor function.

4. So the function automatically returns that empty object from the beginning.
return {}. But actually at this point, the object no longer needs to be empty. And this is actually the trick of making the constructor function work.

So let's go here now and lock to the console, the this keyword.
*/
const Person = function (firstname, birthYear) {
  console.log(this); //Empty Object
};
new Person('Jonas', 1991);
/*
And so we already know that it should be this empty object that was just created here in step number one, right? Because the this keyword inside this function will be exactly that empty object.

And again, that's because we are calling it with the new keyword. So let's see.
*/
// Person {}
// __proto__: Object
/*
And indeed we get to this empty object. And the browser console is actually already telling us that it's basically here of the type of person, all right?

And so this is just the name of the constructor function.

And now let's use this knowledge to our advantage. Because we already know that in the end of this function, the this keyword will basically be returned.

And so whatever we add to that empty object, will then be returned from the function. And that returned object, is gonna be the object, that we are trying to build here, actually.

So, all we need to do is to now take that first name parameter, so the value that we receive, and then create a property on the this keyword with the same name and then set it to that value. And then the same with the birth year, equal to birth year. And so now let's store the result here in some variable and that's actually it.


So let's see what Jonas is gonna look like, now and we have to log it to the console here. If we want to take a look at it.
*/
const Person = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);
/*
And indeed here it is, here is the person object with the first name Jonas and the birth year, that we passed here into the constructor function.

//Person {firstname: "Jonas", birthYear: 1991}

So, let's quickly recap what just happened here. So again, we're calling this constructor function with the new keyword or the new operator.

And so therefore a new empty object is created right away. Then the function is called and then the this keyword, is that empty object. And then in the function, we start to set properties to that object. And we give them the exact same name as the parameters that we're passing in here. And of course they could have any other name, so it doesn't have to be the same name as our arguments. So it doesn't have to be the same name as our parameters, but this is kind of a convention.

So if we pass in first name then we should also create a property called first name. So then here by the end of the function or this keyword now has these two new properties.

And then here in step number four, that object that was created in the beginning, is then automatically returned from the function. And so at this point, that is the object with these two properties. And so that's gonna be the result of this function call, and so it will then be stored in Jonas and then that's what we get here.

Great.

So I hope that made sense.

And so now of course we can use this constructor function to create as many different objects as we want.

So let's say we want to create Matilda new person
*/
const matilda = new Person('Matilda', 2017);
// and let's just do another one, why not? Let's call it Jack new person, just so you see that we can create as many objects now based on this constructor function.
const jack = new Person('Jack', 1975);
/*
And so this is a bit like the analogy from before, where this constructor function, is now the blueprint for a house, and then each of these objects that we create through that function.

So through that blueprint will be the actual house in the real world. So in this case, the actual objects with actual data in them.

So Matilda and Jack, and so of course, now each of them is its own new object that we created programmatically, using a function constructor.
*/
console.log(matilda, jack);
//Person {firstname: "Matilda", birthYear: 2017}
//Person {firstname: "Jack", birthYear: 1975}
/*
Now remember from one of the previous lectures, that in classical object oriented programming, an object created from a class is called an instance, right? Now we didn't technically create a class here because as we discussed before, JavaScript doesn't really have classes in the sense of traditional OOP.

However, we did create an object from a constructor function. And actually three objects, right? And constructor functions have been used since the beginning of JavaScript to kind of simulate classes.

And so therefore we can still say that Jonas here is an instance of person and the same goes for Matilda and for Jack here.

And in fact there is even an operator that we can use to test for that.

So that works like this:
*/
console.log(jonas instanceof Person); //true
/*
So Jonas is an instance of, and then person.

And so this will then return either true or false.

Now, if we created something else here:
*/
const jay = 'Jay';
console.log(jay instanceof Person); // false
/*
let's say J, just like this, then if we do this, this would of course be false, right?

Because of course we didn't create this variable here, so this object using any constructor function, all right?
*/
const Person = function (firstname, birthYear) {
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
const Person = function (firstname, birthYear) {
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
const Person = function (firstname, birthYear) {
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
