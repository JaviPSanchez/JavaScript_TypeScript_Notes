'use strict';

/*
Esta leccion va a ser un overview muy general de este PROGRAMMING PARADIGM.

Vamos a ver que es OOP como funciona y sus 4 principios fundamentales.

Comencemos por ver que es OOP:

Object-oriented programming is a programming paradigm based on the concep of objects, cuando hablamos de PARADIGM es simplemente un estilo de codigo, como escribimos y organizamos el codigo.

Usamos OBJECTS para modelizar o describir aspectos del mundo real como por ejemplo, un user or a to-do list item, incluso conceptos mas abstractos. Como un component HTML o algun tipo de DATA STRUCTURE.

Como sabemos los OBJECTS pueden contener informacion que llamamos PROPERTIES y tambien codigo que llamamos METHODs. Usando OBJECTS podemos de alguna forma organizar esta informacion y hacerla comportarse de una forma especifica diseñada por nosotros creando un BEHAVIOUR almacenado en un BLOCK. Esta forma de actuar facilita la vida para manipular la informacion.

En OOP, OBJECTS son bloques o cajas con codigo en su interior, como si fueses mini aplicaciones en si. Usamos estos OBJECTS para construir nuestras aplicaciones y para hacer interactuar unos OBJECTS con otros.

Estas interacciones suceden a traves de lo que se conoce como PUBLIC INTERFACE (API). An Application Program Interface (API in short) refers to a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.

OOP fue desarrollado con el objetivo de organizar el codigo, hacerlo mas flexible y facil de entender!

<cmg /images/Picture1.jpg>

OOP no es la unica forma de organizar y mantener el codigo, existen otros PARADIGMS que han comenzado a ser muy populares como es el caso de FUNCTIONAL PROGRAMMING, veremos este segundo paradigma mas adelante en el curso, comparandolo con OOP.

Hasta ahora el concepto de OBJECT no es nada nuevo para nosotros, los hemos estado usando todo el tiempo en este curso, pero hemos estado usando estos OBJECTS individualemente sin interacciones de unos con otros.

Tampoco sabemos como generar OBJECTS de una forma automatica, todo lo que hemos hecho es usar simples OBJECT LITERALS.

Pero en OOP necesitamos generar nuevos OBJECTS desde nuestro codigo. Para hacer esto in traditional OOP we use something called CLASSES. We can think of a class as a blueprint (o plano), which can then be used to create new objects based on the rules described in the class.

So it's just like an architecture where the architect develops a plan2D to exactly plan and describe a house. But the blueprint is really just an abstract plan, like a set of rules, but nothing tangible that you can actually touch.

However, from that blueprint, many real houses can then be built in the real world. And with classes it's just the same.

So let's take a look at this fictional user class as an example.

<cmg /images/Picture2.jpg>

And I say fictional because this is not actual JavaScript syntax. Because JavaScript does not actually support real classes like I'm explaining here.

We do have a class syntax in JavaScript too, but it still works a bit differently from what I'm gonna show you here.

However, the idea of creating objects from a kind of blueprint is still a very useful mental model to have. Because in general terms, this is still how OOP works across all languages and that includes JavaScript.

But anyway, back to our fictional class here, we can see that it kind of describes a user who has a username, a password, and an email. So it's a description of data about a user, but it's not the data itself yet.

Because remember, the class is really just a plan and a plan doesn't contain the real world data just yet.

On the other hand, we then have the behavior that is associated with the data.

And in this case, that's just a login method and a method to send messages.

So just like we learned in the last slide, this class has everything related to a user. So data and behavior all packed into one nice, self-contained block.

But now let's use this class and actually create a new object from this class.

<cmg /images/Picture3.jpg>

And you see that now we actually have real data about the user and the object
and not just a description of the data like we have in the class, so in the plan. Now we call all objects created through a class INSTANCES of that class.

So again, an instance is a real object that we can use in our code, which was created from a class, and a class itself is not an object.


So back to the blueprint analogy from earlier, this instance is like a real house, which was created from the abstract blueprint created by the architect.

And the beauty of this is that now we can use this class to create as many instances as we need in our application.

<cmg /images/Picture4.jpg>

And all of these instances, so these objects, of course can have different data in them, but they all share the same functionality, which is to login and to send messages.


So now we know that we can create classes to generate objects from these classes. So we know how classes work, but the next logical question is, how do we actually design a class?



So these questions are just like an architecture student asking, well, how do we actually plan and design a house? And that's of course a very good question.

Now the answer is, as you can imagine, not straightforward. So there is not a single correct way of designing classes. There are, however, four fundamental principles that can guide us toward a good class implementation:

And these principles are:

1/ Abstraction.
2/ Encapsulation.
3/ Inheritance.
4/ Polymorphism.



And these are actually techniques that can also be used outside of OOP, but they are especially relevant in this context. So let's now take a more detailed look at each of them.

And the first one is abstraction.

// ABSTRACTION

And abstraction basically means to ignore or to hide details that don't matter.

This allows us to get an overview perspective of whatever it is that we're implementing instead of messing with details that don't really matter to our implementation.

So let's say that we're implementing a phone for a user to use.

<cmg /images/Picture5.jpg>

And even though this doesn't make much sense in code, it's still a great example and analogy. So without abstraction we could design our class to include everything that there is about the phone, including all the internal stuff like verifying the phone's temperature and voltage, turning on the vibration motor or the speaker, and other low-level details.

But as a user interacting with a phone, do we really need all of this detail?

Well, I guess not.

So in reality, when we interact with a real phone, all of these details have been abstracted away from us as the user. And all that we're left with is a simple phone that we basically only interact with using the home button, volume buttons and the screen. Everything else is gone because we simply don't need it as a user.

So the phone then operates kind of as a black box, without us seeing what is happening inside. Now, of course, internally the phone still needs to vibrate
and to measure the voltage or to turn on the speaker, but we can hide these details from the user. And that is exactly what abstraction means.

Now, going back to the example of a user from the last slide, we could implement a user's phone number, mailing address, hair color, shoe size, and tons of other stuff that we might not need in our application. So we simply ignore these details.

Now, abstraction is really important, not just in OOP, but in programming in general. In fact, we create and use abstractions all the time.

For example, take the add event listener function that we use all the time.

Do we actually know how exactly it works behind the scenes? Well, we don't. And do we care? No, not really. And we don't have to because once more, the low-level details of how exactly it works has been obstructed away from us. We are simply the user. And so we can simply use that function without completely understanding it and without having to implement it ourselves. So that's abstraction, which actually blends in with the next principle, which is encapsulation.

//ENCAPSULATING

<cmg /images/Picture6.jpg>

Encapsulation basically means to keep some properties and methods private inside the class so that they're not accessible from outside the class.

However, some methods can, of course, be exposed as a public interface, which we call API. And this is exactly what I meant at the beginning of the lecture when I said that interactions between objects happen through a public interface.

And going back to our example of a user from before, this is what private properties might look like conceptually.

And again, I'm talking hypothetical here because this private keyword here actually does not exist in JavaScript. But anyway, as we already know, outside code now can't access these properties. However, inside the class, they are still accessible.

For example, the password is, of course, necessary in the login method, right?

And so there we can use it. And by having these critical properties nicely encapsulated like this, we prevent external code from accidentally manipulating this internal state. And by the way, the term state simply refers to an object's data.

Anyway, this is really important because allowing external code to manipulate internal state directly can cause many kinds of bugs, especially in large code bases and developer teams. Now, as you see, there's also a private method here, the check spam method.

<cmg /images/Picture6.jpg>

Again, it's not accessible from outside a class, but it's used internally to check if a comment is spam or not. So we want no one else outside of the class to be able to use this method, and so basically we don't make it part of the public interface. So the public interface is essentially all the methods that are not private, so that are not encapsulated.

So making methods private makes it easier for us to change our code without breaking code from the outside, which might rely on some of these methods.

For example, if the check spam method was public, then it could be used anywhere in our code. And if we then changed the implementation of the method, it might break that code that is relying on it.

So again, this helps avoiding bugs and also spaghetti code. And really this is not just some theory, this is a real practical scenario.

So there is a real reason why encapsulation and private methods and properties exist. So in summary, we should always have the goal to nicely encapsulate most of our state and methods and only leaving essential methods public for the reasons that I just explained.


//INHERITANCE

Next up, we have inheritance.

<cmg /images/Picture7.jpg>

So let's say we have these two classes, user and admin, which stands for administrator. And as we can see, they have actually a lot in common. In fact, admin has all the properties and methods that user has.

And that actually makes sense because if you think about it, an admin is also a user. So an admin also needs a password and an email, and he also needs to log in, for example. However, if we design our classes like this, so as two separate identities, we will end up with a lot of duplicate code and we already know that that's bad.

But well, that's where inheritance comes into play. So in OOP, when we have two classes that are closely related, like user and admin here, we can have one class inherit from the other. So we will have one parent class and one child class, and the child class then extends the parent class.

But what does all of that actually mean?

Well, it's actually quite intuitive, I think. So just like you as a child probably inherited some features of your parents, a child class inherits all the properties and methods from its parent class.

Now, in more formal terms, inheritance makes all properties and methods of a certain class available to a child class, which of course then forms a hierarchy between these two classes. And the goal of this is to reuse logic that is common to both of the classes.

In this case, both the admin and the user need to log in. And so instead of writing that logic twice, it makes sense to inherit the login method from the more global class, which is the parent class user, to the more specific class, which is the child class admin.

Now of course a child class can then also have its own methods and properties.

So at the end of the day, the child class ends up with some methods and properties from its parent and some of its own. So we can say that the admin is also a user, but basically an extended user, so with some added functionality.



4) POLYMORPHISM




And finally, the last principle is polymorphism.

<cmg /images/Picture8.jpg>

And polymorphism sounds a bit weird, which is because it comes from Greek, where it literally means "many shapes".
Now, in the context of OOP, in simple terms, polymorphism means that a child class can overwrite a method that it inherited
from a parent class.

And here are our user and admin classes again. But now we also have a third class, which is the author.
Now admin and author are both really just special kinds of users, and so it makes sense that they both inherit from the user class,
just like we studied in the last slide. Therefore, they inherit all the properties and methods from the user class,
but we're gonna focus on the login method now. Now let's say that an admin requires a different kind of login method.
For example, a more secure one, which has two-factor authentication. And let's say that we also need a special login method for authors.

So how do we give them different login methods?

<cmg /images/Picture9.jpg>

Well, it's actually quite simple. In each class we simply just write a new method, which is also called login. And then, according to polymorphism, that login method will overwrite the login method that has been inherited from the user class. And that's actually it.

That's all you need to know about polymorphism.

And actually that wraps up this introduction to object-oriented programming.

Now, next up, we're gonna talk about how object-oriented programming actually looks like in JavaScript. Because, as I said in the beginning, it is implemented in a bit different way from what I explained here in the beginning with classes and instances.

It's still crucial to understand that, but again, in the next video, we will see how JavaScript does it.
*/
