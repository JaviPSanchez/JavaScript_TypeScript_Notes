'use strict';

/*
So we learned how to implement prototypal inheritance with constructor functions and then manually setting methods on the constructor functions, prototype property.

But now it's time to turn our attention to ES6 classes. Which essentially allow us to do the exact same thing, but using a nicer and more modern syntax.

Now, as I mentioned earlier, classes in JavaScript do not work like traditional classes in other languages like Java or C++. So instead classes in JavaScript are just synthetic sugar over what we learned in the last few videos. So they still implement prototypal inheritance behind the scenes, but where they syntax makes more sense to people coming from other programming languages. And so that was basically the goal of adding classes to JavaScript. But anyway, let's now implement person using a class:
*/
class PersonCL {}
/*
So we can write class and then the name of the class, and let's actually call it PersonCL and then curly braces. And so this is actually a class declaration, but just like in functions, we also have class expressions. And so that would work like this:
*/
// So class EXPRESSION:
const PersonCL2 = class {};
// and class DECLARATION:
class PersonCL3 {}
/*
You can pick whichever you like the most. So it would be PersonCL and then class, and then just like a function, but without the arguments, okay. And that is because in fact classes are just a special type of functions, okay.

So although we use the class keyword here behind the scenes classes are still functions and therefore we have class expressions and class declarations. Now, for some reason I prefer the class declaration, and so I'm gonna use that right here.

And so this is how we write a simple class and then inside the class, the first thing that we need to do is to add a constructor method.

So just like this:
*/
// class PersonCL {
//     constructor()
// }
/*
and this constructor actually works in a pretty similar way as a constructor function, so as we studied previously, but this one is actually a method of this class. And in fact it needs to be called constructor, so that is the rule.

But just like in constructor functions, we pass in arguments basically for the properties that we wanted the object to have. So that's again first name and then the birth year:
*/
// class PersonCL {
//     constructor(firstName, birthYear)
// }
/*
Now, the act of creating a new object actually also works in the exact same way as before. So using the new operator, and so therefore, whenever we create a new object, so like a new instance using the new operator, this constructor will automatically be called.

So, let's actually try that right away:
*/
const jessica = new PersonCL('Jessica', 1996);
/*
And this time let's create Jessica here. So as you see everything here looks exactly the same as before. So it looks just like a regular function call. And again, we also use the new keyword here. And so therefore just like before, the "this keyword" here inside of the constructor will also be set to the newly created empty object. We set the properties of the object like this.
*/
class PersonCL4 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}
/*
So this dot first name is equal to first name that we receive and the same for the birth year. Alright. So basically when we create a new instance here, then it is this constructor that is gonna be called and it will return a new object and then that will be stored here into Jessica.

So let's just lock this to the console:
*/
const jessica2 = new PersonCL4('Jessica', 1996);
console.log(jessica2); //PersonCL4 {firstName: "Jessica", birthYear: 1996}
/*
And so, in fact it looks just like before, alright. So here we basically have the properties that will be stored in the new object that we want to create:

this.firstName = firstName;
this.birthYear = birthYear;

So now it's time for the methods. And the methods we simply write like this, so we can simply add them here:
*/
class PersonCL5 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica3 = new PersonCL5('Jessica', 1996);
console.log(jessica3);
/*
And all we have to do is to write their name. So just like a regular function in here. So this is very nice and very convenient. And so let's simply do the same as before. So this.birthYear. Now, what's important to understand here is that all of these methods that we write in the class, so outside of the constructor, will be on the prototype of the objects and not on the objects themselves.

So this is really just like before prototypal inheritance. And in fact, we will be able to confirm that now. So as we open up PersonCL here, and in fact, we're gonna be able to confirm that here. So as we inspect this Jessica object, when we look into it's prototype, then we will once again see the calcAge function here.

PersonCL5 {firstName: "Jessica", birthYear: 1996}
birthYear: 1996
firstName: "Jessica"
__proto__:
calcAge: ƒ calcAge()
constructor: class PersonCL5
__proto__: Object

Alright. And so therefore of course, we're going to be able to do this, and actually we don't even need to log it to the console because the calcAge method already does that on its own.
*/
jessica3.calcAge(); //41
/*
And so indeed we get an age here. And so one more time, let me prove to you that jessica.__proto__ is equal to PersonCL.prototype, and is true.
*/
console.log(jessica.__proto__ === PersonCL.prototype); //true
/*
And so as you see PersonCL here acts just like any other function constructor. Where the only difference that this looks a little bit nicer. So with this syntax, we don't have to manually mess with the prototype property.

All you have to do is to write the methods inside the class, but outside of the constructor, and then they will automatically be added to the prototype property of the class, basically.

And we can take this demonstration even further by also adding a method manually to the prototype. So that's going to work just as fine. So let's create a .greet method here:
*/
PersonCL5.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
/*
then we can call this on Jessica.
*/
jessica3.greet(); //Hey Jessica
/*
And so as you see it, that works just as well, alright. And so this is proof one more time that the class really just hides the true nature of prototypal inheritance in JavaScript.

So of course, we could now do the same like this:
*/
class PersonCL6 {
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
}

/*
and notice how there are no commas between the methods. Okay, so we could do this, take out this:

PersonCL5.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

and it would work the exact same way, you see:
*/
jessica3.greet(); // Hey Jessica
/*
So, this is great for people who are coming from another language and have experience with object oriented programming, because it's going to be a bit easier for these developers to start writing object oriented code in JavaScript.

Now, if you're one of these developers, then please make sure that before just starting to use classes, you really truly understand function constructors and to prototype and to hold prototype chain logic.

Now, to finish, I just need to say a couple of more things about classes that are important to keep in mind.

So first, classes are not hoisted.

1. Classes are not hoisted,

and so even if they are class declarations. So function declarations, remember are hoisted, which means we can use them before they are declared in the code. But with classes, that doesn't work.

Second, just like functions,

2. classes are also first-class citizens.

First-class citizens means that we can pass them into functions and also return them from functions. And as I mentioned before, that is because classes are really just a special kind of function behind the scenes.

And third, the body of a class is always executed in strict mode.

3. Classes are executed in strict mode.

And so even if we didn't activate it for our entire script, all the code that is in the class will be executed in strict mode. Am I right?

So keep these points in mind if you want to work with classes.

So, now at the end of this video, you might ask if you should use constructor functions like we have been doing, or if instead it's better to just use classes.

And to first remark I want to do here is that constructor functions are not like old or deprecated syntax. So it's 100% fine to keep using them. So one more time, this is more, a question of personal preference. Now, if you're asking, if you should use classes without understanding prototypal inheritance, well then, the reply is definitely no.

Now, some people actually say that classes are really bad in general and that no one should ever be using them simply because they hide the true nature of JavaScript. But I actually don't agree with that.

And I think it's absolutely okay to use classes in your code, as long as you understand everything that I just showed you previously about the prototype and prototypal inheritance. So you cannot just skip that part because you want to become an expert in JavaScript, right?

And you also want to feel comfortable while writing your code and that essentially means to understand exactly what your code does. So that's super important too. And so if you want to be confident, you need to understand. And so that's also the whole reason why all over the course, I am going into such deep detail into how everything works in JavaScript.

Now, what I personally like about classes is that they visually put all the code that belongs to a certain class.

So like all the data here:

constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

and all the behavior:

calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

all into one nice code blog like this:
*/
class PersonCL6 {
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
}
/*
With function constructors, in my opinion, it all looks just like a big mess.

So like this:
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw);
console.log(mercedes);
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};
/*
I mean, in this case, it's just a little bit of code, but this can get out of hand pretty quick. And in these situations, I think that this actually looks at least a lot better, but of course, that is just my personal opinion.

What matters is that you start thinking about this yourself and take your own decisions based on what I'm explaining in these videos.
*/
