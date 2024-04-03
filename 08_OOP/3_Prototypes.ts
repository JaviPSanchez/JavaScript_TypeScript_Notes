import './main.css';

/*
Ahora vamos a hablar de PROTOTYPES, conocemosel  PROTOTYPAL INHERITANCE y DELEGATION.
Pero como funciona todo esto? Bueno, lo primero que debemos saber es que toda FUNCTION en JS,
automaticamente, tiene la property llamada PROTOTYPE. Incluyendo por supuesto los CONSTRUCTOR FUNCTIONS.

Cada OBJECT que es creado por un CONSTRUCTOR FUNCTION tendra acceso a todos los METHODS y PROPERTIES
que definimos en el CONSTRUCTORS PROTOTYPE PROPERTY.
*/
const Person: (firstname: string, birthYear: number) => void = function (
  firstname,
  birthYear
) {
  //Instance properties --> Available in all instances (Inheritance)
  this.firstname = firstname;
  this.birthYear = birthYear;
  //Nunca añadimos Methods aqui en el constructor! para evitar O(n) problems
};
const javi = new Person('Javi', 1987);
const melissa = new Person('Melissa', 1988);
console.log(javi, melissa);

//La prototype propertie del constructor Function Person:
console.log(Person.prototype);

//Añadimos un METHOD calcAge a la prototype propertie:
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(Person.prototype);

javi.calcAge(); //37

/*
the this keyword is set to the object that is calling the method, javi. So, in a nutshell,
this is how we implement very basic prototypal inheritance in JavaScript in practice!

But how and why does this actually work?

Well, it works because any object always has access to the methods and properties from
its prototype. And the prototype of javi and melissa is person.prototype.
*/
Person.prototype;
/*
And we can actually confirm that because each object has a special property called
a __proto__. This comes from the step 3 which links the empty new object to the prototype.
3. {} linked to prototype
*/
console.log(javi.__proto__);
/*
So this looks a bit weird, but, this is just kind of how it works. And so this is the
prototype of javi. It's not the prototype property but it is simply the prototype.

So the prototype of the javi object is essentially the prototype property of the
constructor function. So let's quickly see that as well.
*/
console.log(javi.__proto__ === Person.prototype); //true
/*
So Person.prototype here is actually not the prototype of Person.
But instead, it is what's gonna be used as the prototype of all the objects
that are created with the Person constructor function. So that's a subtle but
important difference that you need to keep in mind.

So we just saw that Jonas's prototype which is this "jonas.__proto__", is the prototype
property of the person constructor function "Person.prototype".

There are actually other built in methods that we can use to prove this. for example,
object.prototype, we can test if this is a prototype of another object.
*/
console.log(Person.prototype.isPrototypeOf(javi)); //true
/*

/*
It is very important understand what this proto property is and what the prototype
of the constructor is and how they are all linked because this is one of the most
important things, and also one of the most difficult things to understand in JavaScript.

So let's say Person.prototype.species:
*/
Person.prototype.species = 'Homo Sapiens';
console.log(javi);
/*
This is something that all of the objects here will have in common, and so
that's Homo Sapiens. And so, if we now take a look at melissa also, then we should
see this property:
*/
console.log(javi.species, melissa.species); //Homo Sapiens Homo Sapiens

/*
Check if javi object has its own method:
*/
console.log(javi.hasOwnProperty('firstName')); //true
console.log(javi.hasOwnProperty('species')); //false
