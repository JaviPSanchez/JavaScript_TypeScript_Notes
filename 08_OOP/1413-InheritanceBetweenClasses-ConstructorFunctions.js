'use strict';

/*
So over the last couple of lectures, we explored how prototypal inheritance works in JavaScript. And we did that using a couple of different techniques. So we used constructor functions, ES6 classes, and object.create. Now all of these techniques basically allow objects to inherit methods from its prototype. So to delegate their behavior to their prototype, right?

But now it's time to turn our attention to more real inheritance. So in the way that we learned in the very first lecture of the section. So what I'm talking about is real inheritance between classes and not just prototypal inheritance between instances and a prototype property like we've been doing so far.

And I'm using class terminology here because this simply makes it easier to understand what we're gonna do. But of course, you already know that real classes
do not exist in JavaScript.

<cmg /images/Picture20.jpg>

But anyway here is what we're gonna do. So we will create a new student class and make it inherit from the person class that we have been using so far. So person will be the parent class and student will be the child class. that's because student is basically a subtype of a person. So a student is also a person, right? But it is a more specific person. And so this is an ideal child class. Now this is really useful because with this inheritance set up, we can have specific methods for the student, but then the student can also use generic person methods, like the calcAge method that we have been using. And that's basically the idea of inheritance that we're gonna implement in this lecture.

Now, just like before we will start by implementing this using constructor functions. So in this lecture, we will inherit between classes using constructor functions, and this is gonna be a bit of work, but it will allow you to understand exactly how we set up the prototype chain in order to allow inheritance between the prototype properties of two different constructor functions. Then in the next lecture, we're gonna do the same thing using ES6 classes, which as you would expect is a lot easier. And finally, of course, we will go back to using object.create as well.

All right, but enough talk, let's put this into practice now. So here I already have the person function constructor that we have been working with in the beginning of the section and also the calcAge method that we set up on the prototype property of person:
*/
const Person = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
/*
So this is just a copy of what we already did. And so now let's continue by building a constructor function for the student
*/
const Student1 = function () {};
/*
Now usually we want a child class to have the same functionality as the parent class, but with some additional functionality. And so usually we pass in the same arguments, but then also some additional ones. So that's gonna be again, first name and birth year, and then we will also pass in the course. And now everything works the same here:
*/
const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};
/*
So first name is gonna be first name this.birth year is birth year and finally this.course is gonna be the course, that gets into the function. So you see that in fact, this student class here has kind of the same data as the person. So it also has the first name and the birth year, but then it has an additional property, which is the course.

So now let's actually create a new student. So I'm calling him Mike here:
*/
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
/*
Born in 2020 and studying Computer Science. And just to make sure let's log in to the console, and here indeed it is:

Student {firstName: "Mike", birthYear: 2020, course: "Computer Science"}

Let's now quickly add a method as well. So we take the prototype property one more time and then let's create a method called introduce:
*/
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
/*
And so here, we're simply gonna log like an introduction phrase to the console. So for the student to introduce himself, so my name is this dot first name and I study, and then the name of the course.

So let's call that here, mike.introduce and all right:
*/
mike.introduce(); //My name is Mike and I study Computer Science
/*
So that works just fine. Great. So far so good.

However, there is one thing that we can and should improve here in our student constructor function. So right now this part of the code here is basically a simple copy of the person function constructor:

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

So of this one that we want to be the parent class, right?

const Person = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
};

And as you know, having duplicate code is never a good idea. First because it violates the "don't repeat yourself" principle, but second and even worse in this case is that imagine that the implementation of person here changes in the future, then that change will not be reflected in the student. So instead of having this duplicate code here, let's simply call the person function. So person, and then we pass in first name and the birth year as well:
*/
const Student = function (firstName, birthYear, course) {
  Person(firstName, birthYear);
  this.course = course;
};
/*
Now, do you think that this is gonna work? No, I'm going to explain you why this doesn't work. So the problem here is that we are now actually calling this person constructor function as a regular function call. So we are not using this new operator to call this person function constructor. And so therefore this function call here is simply a regular function call. And remember that in a regular function call, the this keyword is set to undefined.

And so therefore that's why we get this error here, that it cannot set first name on undefined. So instead of simply calling the person function here, we need to manually set the this keyword as well. So do you remember how we can call a function? And at the same time set the this keywords inside that function?

Well, we can simply use the call method:
*/
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

/*
So the call method will indeed call this function, but we will be able to specify the this keywords here as the first argument in this function. And so in this case, we want the this Keyword in this function to simply be the this keyword inside this function here, right? Because as you know the this Keyword is gonna be in the beginning, this empty object that is being created by the new operator. And so it is on that new object where we want to set the first name and the birth year property. Right?

So if we check this now, then it is back to working. And so this is a much better and more robust solution. Okay.

So far, this is what we have built:

<cmg /images/Picture21.jpg>

So it's simply the student constructor function and its prototype property. And then the mike object linked to its prototype. And that prototype is of course the constructor functions prototype property. Now this link between instance and prototype has been made automatically by creating the mike object with the new operator. So all of this is what we had already learned. So this is nothing new at this point Right?

Now a student is also a person. And so we want student and person to be connected like this:

<cmg /images/Picture22.jpg>

So we really want the student class to be the child class and inherit from the person class, which will then function as the parent class. So this way, all instances of student could also get access to methods from the person's prototype property, like the calcAge method through the prototype chain:

<cmg /images/Picture23.jpg>

And that's the whole idea of inheritance. Its the child classes can share behavior from their parent classes. So looking at this diagram, basically what we want to do is to make person.prototype, the prototype of student.prototype.

Or in other words, we want to set the underscore __proto__ property of student .prototype to person.prototype. We have to create this connection manually. And to do this, so to link these two prototype objects, we are gonna use object.create() because defining prototypes manually is exactly what object.create does:

<cmg /images/Picture24.jpg>

Great. So let's go do that. So let's do what I just showed you on the slide here in our code.
*/
const Person = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Importante de hacer esta linea de codigo en este lugar exacto, luego veremos porque...

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
/*
So anyway, Student.prototype, should be object.create, person.prototype. And with this, the Student.prototype object is now an object that inherits from Person.prototype.

Now we have to create this connection here before we add any more methods to the prototype object of student. And that's because object.create, will return an empty object. And so at this point, student.prototype is empty. And so then onto that empty object, we can add methods like this one:

Student.prototype.introduce

But if we did it the other way around so if this was after we created this method here, then object.create would basically overwrite these methods that we had already added to the prototype object of student.

Now you might be wondering why we even needed to use object.create. So why didn't we just do this?:

Student.prototype = Person.prototype

right? This many would have seen a little bit more logical to do, but in fact, this doesn't work at all. And let me actually show you why that is:

<cmg /images/Picture25.jpg>

So if we do Student.prototype equal to Person.prototype, then we will not end up with a prototype chain that we need. Instead, we would end up with the image above, which is a completely wrong prototype chain.

And that's because here we're actually saying that the student's prototype property and a person's prototype property should be the exact same object. But in fact that's just not what we want. What we do want is the person's prototype object to be the prototype of Student.prototype. So we want to inherit from it, but it should not be the exact same object. And that's why we actually needed object dot create.

Alright, so let's get rid of this bad code:

Student.prototype = Person.prototype

and here let's just say linking prototypes:
*/
//Linking prototypes
Student.prototype = Object.create(Person.prototype);
/*
And so now with all of this in place, we should be able to do mike.calcAge():
*/
mike.calcAge(); //17
/*
and indeed we get the age of 17. Beautiful. So this worked just fine.

And so let's actually now go analyze what exactly happened here. And we already know that this worked because of the prototype chain, but let's see exactly how.
So when we do mike.calcAge(), we are effectively doing a property or a method lookup. So that is JavaScript trying to find the requested property or method.Now, in this case, as we know, the calcAge method is of course not directly on the mike object. It's also not in mike's prototype. That's where we defined the introduced method, but not calcAge. Right?

<cmg /images/Picture26.jpg>

So just like before, whenever we try to access a method, that's not on the object's prototype, then JavaScript, will look up even further in the prototype chain and see if it can find a method so in the parent prototype. And that's exactly what happens here. So JavaScript will finally find the calcAge in person .prototype, which is exactly where we defined it. And that's the whole reason why we set up the prototype chain like this so that the mike object can inherit whatever methods are in its parent class, basically.

So in summary, we are now able to call a method that is on a person's prototype property, on a student object, and it still works. So that's the power of inheritance. Great.

And since we're already here, let's also quickly complete the prototype chain:

<cmg /images/Picture27.jpg>

So just like before Object.prototype will sit on top of the prototype chain. So of course we could still call a method like this on property method on mike too.
It doesn't matter how far away in the prototype chain a method is. And with this,
we now have the full picture of how inheritance between classes works with function constructors.

And of course, with ES6 classes, it works exactly the same internally. All that changes is the syntax. So when we do the same thing in the next video using ES6 classes, then keep in mind that it's gonna work just like I described here.

And so now just to finish this video, let's quickly inspect all of this also in the console, let's say mike.__proto__.:
*/
console.log(mike.__proto__);
/*
Person {introduce: ƒ}
introduce: ƒ ()
__proto__: Object

And so this is of course gonna to be, this object here, which contains the introduce method, all right? So this is nothing new, but you see here right in the console that this itself has a prototype too.

So let's try this here, and so see the next prototype:
*/
console.log(mike.__proto__.__proto__);
/*
{calcAge: ƒ, constructor: ƒ}
calcAge: ƒ ()
constructor: ƒ (firstname, birthYear)
__proto__: Object

And so now this is indeed the prototype, which contains the calcAge function. And so in fact that is exactly this object here. Right?:
*/
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
/*
And maybe it's even easier to visualize in the console like this. So taking a look at mike itself:

Student {firstname: "Mike", birthYear: 2020, course: "Computer Science"}
birthYear: 2020
course: "Computer Science"
firstname: "Mike"
__proto__: Person --> Should say student...

and then mike's prototype is a person here, which is actually not correct and we will fix that in a second. So, I mean, In the prototype chain, everything is correct, but here it should say student. So you see that right now, it says person, but Mike is actually of the type student.

But anyway, here you see the introduced method that we defined earlier:

Student {firstname: "Mike", birthYear: 2020, course: "Computer Science"}
birthYear: 2020
course: "Computer Science"
firstname: "Mike"
__proto__: Person
introduce: ƒ ()  <--------------------------------THIS METHOD
__proto__: Object

And then if we go even further into this, then you see, of course the calcAge function, which is in the prototype of the prototype basically:

Student {firstname: "Mike", birthYear: 2020, course: "Computer Science"}
birthYear: 2020
course: "Computer Science"
firstname: "Mike"
__proto__: Person
    introduce: ƒ ()
    __proto__:
        calcAge: ƒ () <------------------------ THIS ONE!!
        constructor: ƒ (firstname, birthYear)
        __proto__: Object

Right? So what I said that we need to fix is this. So when we take a look at student.prototype.constructor:
*/
console.log(Student.prototype.constructor);
/*
then remember that ideally this should point back to the student, right? But here it points back, apparently to person:

ƒ (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
}

So actually we should use console.dir:
*/
console.dir(Student.prototype.constructor);
/*

ƒ Person(firstname, birthYear)

And so you see that JavaScript now, thinks that the constructor of student or prototype is person here. And the reason for that is that we set the prototype property of the student using Object.create().

And so this makes it so that the constructor of student.prototype is still person. So we need to fix this because sometimes it's important to rely on this constructor property. And so if we want to rely on that, it should indeed be correct. But that's easy to fix. We can just say student.prototype.constructor
and set it to student
*/
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
/*

ƒ Student(firstName, birthYear, course)

but let me just try out some more things here. So just to make sure everything works so we can again use the instance of, operator here:
*/
console.log(mike instanceof Student); //true
/*
And so this of course is gonna be true because student is of course the constructor function of mike. But if we try to same now with person then that indeed should be also true:
*/
console.log(mike instanceof Person); //true
/*
And so, in fact it is. And so again, it's because we linked the prototypes together. So if we didn't have this:
*/
Student.prototype = Object.create(Person.prototype);
/*
then this should be false.
*/
mike.calcAge(); // TypeError: mike.calcAge not a function
/*
So of course, mike.calcAge is not a function in this case because the prototype chain is now not correctly set up to find this method, but let's quickly take this out.

And of course, mike is also an instance of object because this also in its prototype chain:
*/
console.log(mike instanceof Object); //true
/*
Now, right. So here, we just proved that a prototype chain is in fact set up the way that we intended it to be all right. And that's the end of a very long, and I admit complex lecture. But I hope that I could still consolidate your knowledge
about prototypes and the prototype chain even further because you know how to even manipulate the prototype chain yourself manually.

And actually let's now go test, if you did actually understand right in the next coding challenge.
*/
