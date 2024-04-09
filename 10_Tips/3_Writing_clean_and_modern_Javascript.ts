/*


So in this section, we have talked about modern JavaScript development practices,
such as tooling and modules. Now since this is the section about how to write modern JavaScript, let's actually finish the section by reviewing clean and modern JavaScript coding style, and also take a brief look at some functional JavaScript principles, in the next video.

And this lecture is actually mostly going to be a review lecture. So, a lecture where I'm gonna bring together all the clean and modern JavaScript techniques and practices that I've been showing you throughout the course. And so with this, you will then have all this information in one place. Then, in the next lecture,
we will actually bring some of these topics to practice by fixing a bad coding example that does not follow these practices.

But anyway, let's now get started.

<cmg img/Picture16.jpg>

👉 Write code so that others can understand it!
👉 Write code so that you can understand it in 1 year!
👉 Avoid too "clever" and overcomplicated solutions.


So, one of the most important things when you code, is that you should write readable code, which basically means that you should write code so that others can understand it, and also, so that you can understand it yourself in the future.
Also you should try to avoid writing too clever and maybe over complicated solutions that might make you feel really smart as a developer, but which also might make your code very confusing and unreadable. And so in many situations it's best to simply write the most straightforward solutions.

👉Use descripttive variable names: what they contain
👉Use descriptive functions names: what they do.

Another thing that's very important for readable code is to give functions and variables, very descriptive names. So for variables, you should name them according to what they contain, and for functions you should name them according to what they do. And so by doing this, you will make it really clear and obvious
to everyone what each variable is, and what each function does.

👉 Use DRY principle (refactor your code).

Next, there are some more general rules that you should follow in order to write
modern and clean code, which are to use the DRY principle. So don't repeat yourself, which means that you should essentially refactor your code whenever you can.

👉Don't pollute global namespace, encapsulate instead.

Also, you should not pollute the global namespace, and instead, encapsulate your data into functions or classes or modules.

👉 Don't use VAR 

Also, you shouldn't use var for declaring variables. So I've mentioned this one many times in the course. And so by now you already know that you should always use const and only if you want to change any variable, then use let, but never var.

👉 Use strong type checks ( === and !==)

And finally, you should always use strong type checks. So always use the triple equals over the simple double equals, which do not perform type checks.

👉 Generally, functions should do only one thing.

Now about writing functions, which is one of the most important things that we do as JavaScript developers, and the main rule that we should follow by writing functions is that each function should usually only do one thing.

👉Don't use more than 3 functions parameters.

Now many times of course we will want to break that rule, but in general it's good to keep this rule in mind, so that you always write like small functions
which only do one thing, but do it really well.

👉Use default parameters whenever possible.

Next, you shouldn't use more than three parameters in a function. And this actually goes in line with the previous guideline because of course, if a function only does one thing, then probably it doesn't need so many parameters
in the first place.

👉Use default parameters whenever possible.
👉 Generally, return same data type as received.

Also use default parameters in your functions whenever that's possible, and in general return the same data type as you received. So for example, if you receive two or three numbers as an input to a function, then probably you will want to return a number as well. So that then makes more sense for when you consume, so for when you use the function later. And again, this is a rule that you can of course break, but it's again good to keep this one in mind.

👉 Use ARROW functions when they make code more readable.

Finally, you can and should use arrow functions whenever they make the code more readable. And here, many people actually have different opinions. So some people started to use arrow functions everywhere, and some people don't like them at all,
because they think that they completely make code unreadable no matter when they're used. But personally, I like to kind of follow a middle ground. So I still use the more regular functions in many situations. But if arrow functions make the code more readable, then I will totally use arrow functions. And one great use case in my opinion is in the callback functions of array methods.

And now after functions our next topic is object-oriented programming.

👉 Use ES6 Classes.

And in my opinion in order to implement OOP in JavaScript, you should now use ES6 classes. And so that's also what I did after OOP section.

👉 Encapsulate data and don't mutate it from outside the class.

Now when designing your classes, make sure that you encapsulate any data that shouldn't be accessible from the outside, so that you don't mutate that data from outside the class.

👉 Implement method chaining.

Now probably you will still need to at least manipulate some data that's in the class, but for that you should then implement a public API. So basically a couple of methods that can then manipulate that data exactly as you want that to happen.
And again we talked about all of this already before. So this is really just a review of all these big topics that we have been handling throughout all of this course. Now as you implement your methods in your classes, make sure that you implement chaining in all the methods where it'll actually makes sense. Because this can make your methods way easier to use, not only for you, but maybe also for other developers on your team. So this is yet another great practice when you're writing your classes.

👉 Do not use arrow functions as methods (in regular objects).

Finally, one important thing to also mention here is that in regular objects when you're writing methods, then please don't use the arrow functions there. Because by doing that, you will not get access to the disk keywords of that object.  Remember, and so always avoid arrow functions, even if you're not even using the disk keyword in a method. Because simply by getting into the habit of avoiding arrow functions as methods in this situation, you'll then not commit any mistakes ever.

<cmg img/Picture17.jpg>

👉 Use early return (GUARD CLOUSES).

Next up, let's talk about avoiding nested code. So writing nested code, which basically means writing code inside of blocks inside of other blocks is really really bad for readable code. And so we should avoid nested code at all costs.
And one great way of avoiding nested code is to use guard clauses, as we have been doing over the last couple of sections, right. So guard clauses basically simply means to use an early return, in case some condition is not met.

👉 Use ternary (conditional) or logical operators instead of if.
👉 Use multiple if instead of if/else-if.

Also you can use the ternary operator, or even logical operators instead of an if statement. Because the ternary operator of course does not create a new code block, while the if statement does. Now if you really do need an if statement,
then instead of an if else statement, you should use multiple ifs instead. Because again, this will make code a lot more readable than having to go through all these if and else if, and else blocks. So that's also another modern practice
that we start to see more and more in modern JavaScript code basis.

👉Avoid for loops, use ARRAYS METHODS instead.

You should completely avoid any kind of loops. And with that I mean any for loops. So the for, and also the for of loops, should be avoided if you want to avoid nested code. And so instead, you can use array methods like a map, filter and reduce.

👉 Avoid callback-based asynchronous API's


And finally, you should avoid callback-based asynchronous API's whenever you can.
And so that actually brings us to our next topic, which is asynchronous code.



👉Consume Promises with async/await for best readability
👉Whenever possible, run promises in parallel (Promise.all)


So for best readability, always consume Promises using async/await and not using the den and the catch methods. Because these methods actually require callback functions,which will then introduce even more nested code. And so that's again,
something that we really want to avoid, all alright. So these two go kind of together. So avoiding callback based asynchronous API's, and instead opting for using Promises and then consume these Promises with async/await.

Now, something that's very important is that whenever you can, you should run Promises in parallel using the Promise.all combinator function. So when you have two Promises that can run at the same time, so Promises that do not depend on each other, then please run them in parallel to make the application a little bit faster for your users.

👉Handle error and promises rejections.

And finally, always handle errors and Promise rejections. So this is simply a best practice for clean code.

So these are the main best practices for writing modern and clean JavaScript code that I can think of. And so let's now put some of these guidelines that I gave you for clean and modern code in practice.
*/
