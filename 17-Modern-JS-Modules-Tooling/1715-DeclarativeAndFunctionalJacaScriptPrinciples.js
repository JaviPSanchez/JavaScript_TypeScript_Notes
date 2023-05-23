/*
So, we just reviewed and also implemented some clean and modern JavaScript practices. However, there is currently a major trend and shift to something called declarative code and functional programming in JavaScript. And so, let's now take some time to look at what declarative and functional programming actually are.

So, there are two fundamentally different ways of writing code in programming, which we also call paradigms. And these two paradigms, are imperative code and declarative code. Now, whenever we write imperative code, we basically need to explain to the computer how to do a certain things.

<cmg img/Picture18.jpg>

So, basically, we need to explain every single step that the computer needs to follow in order to achieve a certain result. But, this might sound a little bit abstract, so let's try a more real world example. So, let's say that we want someone to bake a cake for us. And so, if we would do that in an imperative way,
we would tell the person exactly the step by step recipe that they would have to follow in order to bake that cake, am I right? So again, it is telling every single step that the person has to follow in order to achieve a result. And now bringing that back into code, here in this code example:
*/
const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) doubled[i] = arr[i] * 2;
console.log(doubled); //[4, 8, 12, 16]
/*
We are trying to double the arr array. And so, this loop that I have here, is a purely imperative way of writing that. So, here we are telling the computer step by step, to create an empty array to create a counter that starts at zero, then to increase that counter until we reach the length of the original array, and then how exactly to store the new result in each new position of the array. So, there's a lot of steps that we really give the computer here, in order for us to achieve the result of doubling that arr array.

Okay, so that's imperative programming, but on the other hand, we also have declarative programming, where the programmer tells the computer only what to do.

<cmg img/Picture19.jpg>

And so, when we write declarative code, we simply describe the way that the computer should achieve a certain result. But the how it should do it, so basically, the step by step instructions, they get abstracted away, so we do not care about them. And going back to our cake example here, the declarative way of instructing someone to bake the cake would be to simply describe that cake to the person, and then the person would have to come up with the step by step recipe on their own. So, simply describing the task, and the result that should be achieved
is the declarative way of doing it, all right? And now coming back to the code example of duplicating the values in an array, this is how we do it in the declarative way:
*/
const arr2 = [2, 4, 6, 8];
const doubled2 = arr2.map(n => n * 2);
console.log(doubled2); // [4, 8, 12, 16]
/*
So, we have arr2 array, and then we simply tell JavaScript, that it should map the values in the arr2 array to a new array, and each of these values should be multiplied by two. And so, if you compare this code example, with the other one then you will really see that in this example, all we are doing is describing the way that the computer should achieve the result that we are looking for. We are simply telling it what to do, which in this case, is to simply map the original array onto a new array and doubling all the elements. But, all these super detailed steps that we have in the imperative way, like creating an empty array and initializing a counter, all of these steps have been abstracted away, because we don't really care about them, all right? And this is pretty important to understand, because more and more this is how modern JavaScript code is actually written.

So, the difference between imperative and declarative is not just some theoretical difference. So, the declarative paradigm is actually a really big and popular programming paradigm, which has even given rise to a sub paradigm called, functional programming:

<cmg img/Picture20.jpg>

And functional programming, is basically a declarative paradigm, which is based on the idea of writing software, simply by combining multiple so called pure functions,
while avoiding side effects and mutating data. And actually, functional programming
and writing declarative code, has now basically become the modern way of writing code in the JavaScript world. So, you will see declarative and functional code everywhere. And, in fact, we have even been using it all along, but without really knowing that this style was called declarative, and functional, all right.

But let's quickly go back to the definition of functional programming, and talk about what side effects and pure functions are.

<cmg img/Picture20.jpg>

So, a side effect is basically simply a modification of any data that's outside of a function. So, for example, mutating any variable that is external to the function is causing a side effect. So basically, any variable that is outside of the scope
of the function, all right? Now, data does not only refer to variables, so for example, logging stuff to the console, or also changing something in the DOM, is also causing side effects.

Now next up, a pure function, is a function without side effects. So, basically a function that does not mutate any external variables, and that does also not depend
on any external variables. So basically, if we give the same inputs to a pure function, it will always return the same output and again, that's because it does not depend on any external variables, and it also does not manipulate them.

And finally, if we look again, at our definition here, we also see that functional programming is about avoiding mutating data, and we do that by using something called immutability. So, in functional programming state, which also means basically data is never modified. So, let's say that we have some application, and we have an object there to keep track of all the data that we need in an application. And so that we usually called state, and so again, in functional programming, that state is never modified. Instead, what we will do is to copy that object, so that state, and then it is that copy that is mutated, and can then be returned, but the original state is never touched, okay? So, that's what it means for the state being immutable, and the big upside of immutability is that, it makes it so much easier to keep track of how the data flows through our entire application. And so ultimately, that will allow us to write better code with less bugs, and code that is also more readable, which overall, is the entire goal of using functional programming in the first place. Now, I'm telling you all of this, not with the goal of turning you into a functional programmer, because that would actually be a very hard task, because this is really just a very high level introduction to what functional programming actually is. But behind the surface,
functional programming is a huge paradigm, which is really difficult to implement in practice. But it is still very important that you know, some of these principles, such as side effects, pure functions, and immutability, because many of the popular libraries, such as React or Redux, are actually built around all of these principles.

So for example, in React, the state is also completely immutable, and so if you ever want to learn something like React, you will need to know about these concepts
in order to use it properly. However, some principles such as pure functions, or side effects, can actually be a bit easier to implement into our own code. So, what I'm trying to say is that, we can actually mix imperative and declarative programming in our own codes, we don't have to go 100% declarative. Or in other words, we don't have to go 100% in the direction of making our code completely functional.

And so again, we can already start using, some of the functional programming techniques in our own code base. So for example, you can try to avoid data mutations
as often as possible. And of course, this will not always be possible, but it's also not really necessary. So these are mainly and are just suggestions, but which will still create more readable and overall better and cleaner code. So, another thing that you can do is to always prefer, built in methods or functions that do not produce side effects over the ones that do, and this is really important for data transformations. So whenever you want to do that, you should use a method such as Map, Filter and Reduce. So, this is the functional and modern way of doing data transformations, and many times, this is actually the first contact that many people have, with functional programming.

So, Map, Filter and Reduce are actually present in all functional programming languages, and they are very important to implement a functional code into more declarative code in our code. And finally, you can also try to avoid side effects
into functions that you write yourself. And again, this is of course, not always possible, and also not always necessary. So, we will never be able to avoid all side effects in applications, because of course, at some point, the application needs to do something. So, it needs to display something on the DOM, or log something to the console, or really create some side effect, okay?

But you can still try to think about this, and to start incorporating side effects
more into your own code. And now to finish, let's come back to declarative syntax,
because functional programming is only a part of using and writing declarative code.

So, in order to write code that is more declarative, you should use array and object destructuring whenever that's possible.You should also use the spread operator, the ternary operator, and also template literals whenever that is possible, because if you think about it, then all of these four ways of writing code, actually makes the code more declarative.

So, these operators are more about telling the code what to do, and not exactly the steps that it should take, right? And that's, again, true for all these four pieces of syntax. All right, so let's now actually continue working on the code example from last lecture and implement, some of these functional programming principles in practice.
*/
