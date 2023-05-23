'use strict';

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
/*
And now finally lets look at how we can use Object.create in order to implement a complex prototype chain. So similar to what we implemented before with classes and constructor functions.

And so here I already copied this object here which will serve as the prototype to create a new person object using Object.create. And so of course, this will basically be our parent class, and we already know that Object.create it's a bit easier to use and to understand. And so it shouldn't be too hard to implement a similar hierarchy between a person and student.

So here, PersonProto. So this object up here used to be the prototype of all the new person objects. But now we basically want to add another prototype in the middle of the chain. So between PersonProto and the object. And so what we're going to do is to make student inherit directly from person.

So we're going to create now an object that will be the prototype of students. So StudentProto, and this will be, for now an empty object:
*/
const StudentProto = Object.create(PersonProto);
/*
So Object.create and to prototype will be, PersonProto. And that's it. And so now we can use this StudentProto to create new students.

So let's create jay:
*/
const jay = Object.create(StudentProto);
/*
and Object.create, create, and it will inherit from StudentProto. And so now the StudentProto object that we just created earlier, is now the prototype off the jay object. So again, the StudentProto object is now the prototype of jay, and the PersonProto object is in turn the prototype of StudentProto. And so therefore, PersonProto is a parent prototype of jay, which means that it's in its prototype chain. Whoa!!, but that once again sounded a bit confusing.

And so let's make sure that we really understand this by looking at a nice diagram again:

<cmg /images/Picture28.jpg>

So it all starts with the PersonProto object, which used to be the prototype of all person objects, but now using Object.create, we make it so that PersonProto will actually become the prototype of StudentProto. And what this does is that now basically student inherits from person.

And so it is, we already established the parent child relationship that we were looking for. Now to finish, all we need to do is to use Object.create again, but this time to create a new actual student object. And of course we make the student.

So jay in this course inherit from StudentProto, which is now jay's prototype.

<cmg /images/Picture29.jpg>

And like this, we created a nice and simple prototype chain. So jay inherits from StudentProto, which in turn inherits from PersonProto, and therefore the jay object will be able to use all the methods that are contained in StudentProto and PersonProto.

Now with the scope chain correctly established, let's also add an init method to StudentProto. So just like we did here with PersonProto, so that we don't have to manually specify the properties on any new student object.

So let's add that here to StudentProto.init:
*/
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {};

const jay = Object.create(StudentProto);
/*
So this is gonna be receiving the first name, then, the birth year, and again, the course. And so now we can actually use the same trick that we used before, where we use constructor functions.

So what I mean is to take advantage basically of this init method:

init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

so that we don't have to write the same code again. So basically the child prototype can reuse this init method here from the person prototype, which is the parent prototype, right?

So that is PersonProto.init.call:
*/
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);

/*
because once again, we want to set the this keywords to the this keyword in this method here. So this and then first name and the birth year. And then of course we set the course property here, which is unique to the student. So let's now use that method jay.init:
*/
jay.init('Jay', 2010, 'Computer Science');
/*
So Jay born in, let's say 2010, and again, computer science. Alright. So let's take a look, and yeah, that works. That's nice. And let's now add again, the introduced method here:
*/
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
/*
Just so that it is similar to the other two techniques that we used earlier. So introduce, is gonna be a function. And now let's call jay.introduce:
*/
jay.introduce(); // My name is Jay and I study Computer Science
/*
and indeed that works. And now, as you would expect, we should also be able to call jay.calcAge, because that method is up here in the prototype chain:

 calcAge() {
    console.log(2037 - this.birthYear);
  },

And so that has got to work as well:
*/
jay.calcAge(); //27
/*
And yeah. So 27 and one more time, just to take a look here at the prototype chain, we see that indeed, it has a prototype, which contains the init and the introduce methods.

Now, okay. And that's actually it. So in this version, we don't even worry about constructors anymore, and also not about prototype properties, and not about the new operator. So it's really just objects linked to other objects. And it's all really simple and beautiful, if you ask me.

And in fact, some people think that this pattern is a lot better than basically trying to fake classes in JavaScript, because faking classes in the way that they exist in other languages like Java or C++ is exactly what we do by using constructor functions, and even ES6 classes.

But here, in this technique that I just showed you with Object.create, we are, in fact, not faking classes. All we are doing is simply linking objects together, where some objects then serve as the prototype of other objects. And personally, I wouldn't mind if this was the only way of doing OOP in JavaScript, but as I mentioned earlier, ES6 classes and constructor functions are actually way more used in the real world.

But in any case, it's still super important and valuable that you learned all of these three techniques now, because you will see them all in the real world still.

And this also allows you to think about this on your own and choose the style that you like the best, but again, in the real world, and especially in modern JavaScript, you will mostly see ES6 classes being used now. And so, since I want to prepare you for the real world, I will start using classes from this point on.
*/
