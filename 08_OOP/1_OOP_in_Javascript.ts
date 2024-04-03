import './main.css';

/*
In this lecture, we will learn about OOP specifically in JavaScript. So, how it's different
from the more traditional OOP? We should start by the class Instance model. A class can be
used to create actual objects which are called INSTANCES and which we can then use in our code.

And this process of creating an instance is called INSTANTIATION.

<cmg /images/Picture10.jpg>

Now, anyway, how does OOP actually work in JavaScript? In JavaScript we have something called
prototypes and all objects in JavaScript are linked to a certain prototype object.

So we say that each object has a prototype. And now here comes the magic. So, the prototype object
contains methods and properties that all the objects that are linked to that prototype can access
and use. And this behavior is usually called prototypal inheritance.

<cmg /images/Picture12.jpg>

Objects inherit methods and properties from the prototype which is the reason why this mechanism
is called prototypal inheritance. Just note that this inheritance is actually different from the
inheritance that we talked about in the last lecture. So that was one class inheriting from another
class. But in this case, it's basically an instance inheriting from a class. So that's very different
and so keep that in mind!

<cmg /images/Picture13.jpg>

Now we can also say that objects delegate behavior to the linked prototype object. And behavior
is just another term for methods here. So besides prototypal inheritance, we also call this mechanism,
delegation. Objects delegate their behavior to the prototype. On the other hand, in classical OOP with classes,
the behavior, so the methods, are actually copied from the class to the object and so that is completely different.

For example, each time that we used an array method like map, we are able to use that method because
of prototypal inheritance. So, when you go to MDN to check the documentation for any array method, what
you will see there is that it's actually called array.prototype.map

*/
const nums: any[] = [1, 2, 3, 4, 5, 6];
nums.map(item => console.log(item));
/*
So, what does this mean? Well, array.prototype is the prototype object of all the arrays that we create
in JavaScript. So, just like this example array called "nums" here. Now this prototype object contains all
the array methods, including map. So, in a sense, our array inherits the map method. Or again, we can also
say that the array delegated the behavior of mapping to its prototype.

<cmg /images/Picture15.jpg>

Like, how do we actually create prototypes?

And, how do we link objects to prototypes?

And how can we create new objects without having classes from which we can instantiate objects?

So, in summary, the question is how do we implement Object-Oriented Programming in JavaScript in practice?

Well, in JavaScript there are actually three different ways of doing all this:

1/ The constructor function technique
2/ ES6 classes
3/ The Object.create()

So first, constructor functions are a way of creating objects programmatically, using a function which
will also set the new object's prototype. And this is actually how built-in objects like arrays or maps or
sets are implemented. Also, this is how OOP has been done in JavaScript basically since the beginning.

Next, the ES6 release introduced classes into JavaScript. And so now, ES6 classes are actually the more
modern way of doing OOP in JavaScript. However, keep in mind that these are actually not the kind of classes
that we talked about in the last lecture and in the last slide. They are instead just so called 'synthetic sugar'
over constructor functions. So this means that ES6 classes are basically just a layer of abstraction over
constructor functions. So, it's really just a nicer syntax that makes it easier for newcomers to do OOP in
JavaScript.

But behind the scenes, ES6 classes are actually implemented with constructor functions. And so they also
use prototypal inheritance. Finally, there's also the object.create() which is basically the easiest and
most straightforward way of linking an object to a prototype object. However, it's not as used as the other
two ways.

<cmg /images/Picture30.jpg>
*/
