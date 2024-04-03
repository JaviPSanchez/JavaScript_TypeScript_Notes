import './main.css';

const Person: (firstname: string, birthYear: number) => void = function (
  firstname,
  birthYear
) {
  //Properties
  this.firstname = firstname;
  this.birthYear = birthYear;
};
//Objects
const javi = new Person('Javi', 1987);
const melissa = new Person('Melissa', 1988);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

javi.calcAge(); //37
melissa.calcAge(); //36

console.log(javi);

/*
Let's now check out prototypal inheritance and the prototype chain on built in objects
such as arrays.

*/
console.log(javi.__proto__ === Person.prototype); //true
/*
Move up in the prototype chain and essentially take a look at the prototype of javi's prototype.
*/
console.log(javi.__proto__.__proto__);
/*
And it is indeed the prototype property of object. So that's why you can see
that constructor is the object "constructor: ƒ Object()"

we also see other methods like "hasOwnProperty: ƒ hasOwnProperty()" this works because
of the prototype chain. Let's take this one step further and check out the prototype of the prototype of the prototype.
*/
console.log(javi.__proto__.__proto__.__proto__); // null
/*
That's because object.prototype is usually the top of the scope chain.
*/
const arr: any[] = [3, 6, 4, 6, 6, 9, 6];
console.log(arr.__proto__);
/*
So this is the prototype of array and you see that we have all different methods
that we already know. So we have fill, we have filter, find, find index, etc...

And we can also check out that this prototype has got to be exactly array.prototype
which is the constructor function
*/
console.log(arr.__proto__ === Array.prototype); //true
/*
And so therefore whenever we create an array like this: "const arr = [3, 6, 4, 5, 6, 9, 3]",
it is indeed created by the array constructor. And so that's why all of this works behind
the scenes.
*/
console.log(arr.__proto__.__proto__);
/*
And so now we are back to having object.prototype. So this again now has hasOwnProperty
and all of the methods that are available for objects.

So all of these built-in methods have to exist only once somewhere in the JavaScript
engine and then all the arrays in our code get access to the functions through the
prototype chain and prototypal inheritance.



So let's actually take this one step further.

So we know at this point, that any array inherits all their methods from it's a prototype.
And therefore we can use that knowledge to extend the functionality of arrays even further.

We are going to add a new method to this Array prototype and all the arrays will then
inherit it. So let's say that we wanted to create a method which returns all the unique
elements of an array. So let's add a method called unique:
*/
Array.prototype.unique = function () {
  new Set(this);
};
/*
So we set the unique property to a function and then to get the unique values of an array
all we have to do is to create a new set and pass the array in there. And "this keyboard"
is going to be the array on which this method will be called. And so now we just need to
put this into an array and spread it like this, as we have already done multiple times before:
*/
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
/*
So just to recap, we added a new method to the prototype property of the array constructor.
And so therefore now all arrays will inherit this method. And so we can then call that method
on any array that we want. However, what we just did here. So extending the prototype of a
built-in object is generally not a good idea. I mean if you're working just on a small project
on your own then I guess you could do this, but really don't get into the habit of doing this
for multiple reasons.

The first reason is that the next version of JavaScript might add a method with the same name
that we are adding, for example this one here: "arr.unique()", but it might work in a different way.
And so your code will then use that new method which, works differently. And then that will
probably break your code.

And the second reason why you shouldn't do this is because when you work on a team of developers,
then this is really gonna be a bad idea because if multiple developers implement the same method
with a different name then that's just going to create so many bugs that it's just not worth doing.


So it's just a nice and fun experiment... but in practice, you should probably not do it.

Now for a little bit of fun to finish this video. Let's take a look at some more built-in objects
here in the console. We already know that all the DOM elements are behind the scenes objects.
And so let's take a look at this object.
*/
const h1 = document.querySelector('h1');
console.log(h1);
/*
Well, that doesn't really work. So that just gives us the object. So let's try a console.dir:
*/
console.dir(h1); //tocho....
/*
__proto__: HTMLHeadingElement

__proto__: HTMLElement

And finally, let's just also console.dir some random function. So the function doesn't matter.
I just want to be able to look at the function.
*/
console.dir(x => x + 1);
/*
And so therefore it also has a prototype. And in this case to prototype will then contain
the methods that we have used previously on functions (apply, bind, call, etc...) this is the
reason why we can actually call methods on functions. It's because they are objects and
objects have prototypes.
*/
