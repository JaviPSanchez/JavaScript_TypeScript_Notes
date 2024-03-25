import './main.css';

/*
Antes de empezar esta unidad conviene repasar que es JS: 

Javascript es un lenguaje HIGH LEVEL, OBJECT ORIENTED, MULTI-PARADIGM:

 HIGH LEVEL --> We do not have to worry about complex stuff, like memory management
 where there is a ton  of code to write.
 OBJECT-ORIENTED --> Based on objects, for storing most kinds of data.
 MULTI-PARADIGM --> It is flexible and versatile, we can use imperative and declarative language.

Como hemos comentado en MODERN JS hay dos grandes PARADIGMS:

1/ FUNCTIONAL PROGRAMMING (FP) --> DECLARATIVE PROGRAMMING.
2/ OBJECT ORIENTED PROGRAMMING (OOP) --> IMPERATIVE PROGRAMMING.

Esta leccion va a ser un overview muy general de este PROGRAMMING PARADIGM.

Vamos a ver que es OOP como funciona y sus 4 principios fundamentales.

Comencemos por ver ¿que es OOP?

Object-oriented programming is a programming paradigm based on the concep of objects,
cuando hablamos de PARADIGM es simplemente un estilo de codigo, como escribimos y
organizamos el codigo.

Usamos OBJECTS para modelizar o describir aspectos del mundo real como por ejemplo,
un user or a to-do list item, incluso conceptos mas abstractos. Como un component HTML
o algun tipo de DATA STRUCTURE.

Como sabemos los OBJECTS pueden contener informacion que llamamos PROPERTIES y tambien
codigo que llamamos METHODS. Usando OBJECTS podemos de alguna forma organizar esta
informacion y hacerla comportarse de una forma especifica diseñada por nosotros creando
un BEHAVIOUR almacenado en un BLOCK. Esta forma de actuar facilita la vida para manipular
la informacion.

OOP fue desarrollado con el objetivo de organizar el codigo, hacerlo mas flexible y facil
de entender!

<cmg /images/Picture1.jpg>

Hasta ahora el concepto de OBJECT no es nada nuevo para nosotros, los hemos estado usando
todo el tiempo en este curso, pero hemos estado usando estos OBJECTS individualemente sin
interacciones de unos con otros. Tampoco sabemos como generar OBJECTS de una forma automatica,
todo lo que hemos hecho es usar simples OBJECT LITERALS.

Pero en OOP necesitamos generar nuevos OBJECTS desde nuestro codigo. Para hacer esto in
traditional OOP we use something called CLASSES. We can think of a class as a blueprint,
which can then be used to create new objects based on the rules described in the class.

There are four fundamental principles that can guide us toward a good class implementation:

1/ Abstraction.
2/ Encapsulation.
3/ Inheritance.
4/ Polymorphism.

1) ABSTRACTION

And abstraction basically means to ignore or to hide details that don't matter. This allows
us to get an overview perspective of whatever it is that we're implementing instead of
messing with details that don't really matter to our implementation. So all of these details
have been abstracted away from us as the user.  Now, abstraction is really important, not just
in OOP, but in programming in general. In fact, we create and use abstractions all the time.

For example, take the add event listener function that we use all the time. Do we actually know
how exactly it works behind the scenes? Not really. And do we care? No, not really. And we don't
have to because once more, the low-level details of how exactly it works has been abstracted away
from us. So that's abstraction, which actually blends in with the next principle, which is encapsulation.

2) ENCAPSULATING

<cmg /images/Picture6.jpg>

Encapsulation basically means to keep some properties and methods private inside the class so
that they're not accessible from outside the class. However, some methods can, of course, be exposed
as a public interface, which we call API, interactions between objects happen through a public interface.

Anyway, this is really important because allowing external code to manipulate internal state directly
can cause many kinds of bugs, especially in large code bases and developer teams.

So the public interface is essentially all the methods that are not private, so that are not encapsulated.

3) INHERITANCE

Next up, we have inheritance.

<cmg /images/Picture7.jpg>

So let's say we have these two classes, user and admin, which stands for administrator.
And as we can see, they have actually a lot in common. In fact, admin has all the properties
and methods that user has. So in OOP, when we have two classes that are closely related, like user
and admin, we can have one class inherit from the other. So we will have one parent class and one
child class, and the child class then extends the parent class. a child class inherits all the
properties and methods from its parent class.

4) POLYMORPHISM


And finally, the last principle is polymorphism.

<cmg /images/Picture8.jpg>

And polymorphism sounds a bit weird, which is because it comes from Greek, where it literally means "many shapes".
Now, in the context of OOP, in simple terms, polymorphism means that a child class can overwrite a method
that it inherited from a parent class. Now let's say that an admin requires a different kind of login method.
And let's say that we also need a special login method for authors. So how do we give them different login methods?

<cmg /images/Picture9.jpg>

Well, it's actually quite simple. In each class we simply just write a new method, which is also called login.
And then, according to polymorphism, that login method will overwrite the login method that has been inherited 
from the user class. And that's actually it.
*/
