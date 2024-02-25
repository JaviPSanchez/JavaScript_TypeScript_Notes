'use strict';

/*
In this lecture, we will learn about OOP specifically in JavaScript.

So, how it's different from the more traditional OOP and also different ways of implementing this paradigm in JavaScript.

In the last lecture, we talked about the classical Object-Oriented Programming model with classes and instances created from these classes.

And remember, a class is like a blueprint which is a theoretical plan and that we use to build many houses in the real world with. And in the same way, the theoretical class can be used to create actual objects which are called INSTANCES and which we can then use in our code.

<cmg /images/Picture10.jpg>

And this process of creating an instance is called INSTANTIATION.

Now earlier, I said that in JavaScript things work a bit differently. So why did I first tell you about classes and instances?

Well, it's because we do have similar concepts in JavaScript and so it's very useful to first understand the class instance model. Plus, many people also just use this terminology in the context of JavaScript.

And finally, JavaScript syntax itself uses also some of these terms for example, instances. And so, you really need to know what a class is and what an instance is.

Now, anyway, how does OOP actually work in JavaScript?

Well, in JavaScript we have something called prototypes and all objects in JavaScript are linked to a certain prototype object.

<cmg /images/Picture11.jpg>

So we say that each object has a prototype. And now here comes the magic. So, the prototype object contains methods and properties that all the objects that are linked to that prototype can access and use.

And this behavior is usually called prototypal inheritance.

<cmg /images/Picture12.jpg>

So, again, prototypal inheritance means that all objects that are linked to a certain prototype object can use the methods and properties that are defined on that prototype.

So basically, objects inherit methods and properties from the prototype which is the reason why this mechanism is called prototypal inheritance. Just note that this inheritance is actually different from the inheritance that we talked about in the last lecture.

So that was one class inheriting from another class. But in this case, it's basically an instance inheriting from a class. So that's very different and so keep that in mind or maybe in your notes.

<cmg /images/Picture13.jpg>

Now we can also say that objects delegate behavior to the linked prototype object. And behavior is just another term for methods here. So besides prototypal inheritance, we also call this mechanism, delegation.

And that's also the reason why this arrow is pointing upwards because technically, objects delegate their behavior to the prototype.

On the other hand, in classical OOP with classes, the behavior, so the methods, are actually copied from the class to the object and so that is completely different.

Now, I don't want you to stress out about the exact terminology here, okay? So I know that this is a lot of new stuff to take in, so a lot of new words and new concepts. But this is just to paint a very clear picture and to give you the complete overview.

What matters to me is that you understand how does prototypal inheritance actually works. Because, when we actually start using this in practice in the next lecture, it won't really matter if it's called inheritance or delegation
as long as it just works as intended, right?

But since you came to this course to learn how things actually work in JavaScript, I'm giving you all that information here.

Even though for now it looks a little bit too much, but I'am sure you will find it useful eventually. So actually, we will come back to this diagram
and fill it with some more detail after we have actually implemented prototypes in JavaScript.

So after you have actually see how they work in practice. And by then, am sure that all this will make 100% sense to you.

But anyway, we have actually already seen this mechanism in action many times before but without knowing that it was happening.

<cmg /images/Picture14.jpg>

For example, each time that we used an array method like map, we are able to use that method because of prototypal inheritance. So, when you go to MDN to check the documentation for any array method, what you will see there is that it's actually called array.prototype.map.

But why is that relevant?

So, what does this mean?

Well, array.prototype is the prototype object of all the arrays that we create in JavaScript. So, just like this example array called "num" here. Now this prototype object contains all the array methods, including map.

<cmg /images/Picture15.jpg>

So, this is where they are actually defined. So, since array.prototype is the prototype of the num array, it means that num is linked to that prototype.

And therefore, it has access to all the methods that are defined on the array.prototype object, just like the map method.

So, in a sense, our array inherits the map method. Or again, we can also say that the array delegated the behavior of mapping to its prototype. So, you can choose whatever makes more sense in your mind. But what matters, is that the map method is actually not defined on the num array itself but on its prototype.

And of course, we're gonna check out this behavior also in our cout and practice.

Right now, you might have a ton of questions in your head.

Like, how do we actually create prototypes?

And, how do we link objects to prototypes?

And how can we create new objects without having classes from which we can instantiate objects?

So, in summary, the question is how do we implement Object-Oriented Programming in JavaScript in practice?

Well, in JavaScript there are actually three different ways of doing all this: 1/ The constructor function technique
2/ ES6 classes
3/ The Object.create().

So first, constructor functions are a way of creating objects programmatically, using a function which will also set the new object's prototype. And this is actually how built-in objects like arrays or maps or sets are implemented.

Also, this is how OOP has been done in JavaScript basically since the beginning.

<cmg /images/Picture16.jpg>

Next, the ES6 release introduced classes into JavaScript. And so now, ES6 classes are actually the more modern way of doing OOP in JavaScript.

<cmg /images/Picture17.jpg>

However, keep in mind that these are actually not the kind of classes that we talked about in the last lecture and in the last slide. They are instead just so called 'synthetic sugar' over constructor functions.

So this means that ES6 classes are basically just a layer of obstruction over constructor functions. So, it's really just a nicer syntax that makes it easier for newcomers to do OOP in JavaScript.

But behind the scenes, ES6 classes are actually implemented with constructor functions. And so they also use prototypal inheritance just like we learnt in the last slide.

Finally, there's also the object.create() which is basically the easiest and most straightforward way of linking an object to a prototype object.

<cmg /images/Picture18.jpg>

However, it's not as used as the other two methods as we will see over the next couple of lectures. 

Now, to finish, one important thing to keep in mind is that the four principles of Object-Oriented Programming that we learnt in the last lecture so that's obstruction, encapsulation, inheritance and polymorphism are still valid and important with prototypal inheritance.

And throughout this section, we will of course learn how to use and implement these principles.
*/
