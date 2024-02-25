'use strict';

const Person = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jonas, matilda, jack);
console.log(jonas instanceof Person); //true
/*
Ahora vamos a hablar de PROTOTYPES, en lecciones anteriorres hemos visto PROTOTYPAL INHERITANCE y DELEGATION. Pero como funciona todo esto? Bueno, lo primero que debemos saber es que toda FUNCTION en JS, automaticamente, tiene la PROPERTY llamada PROTOTYPE. Incluyendo por supuesto los CONSTRUCTOR FUNCTIONS.

Cada OBJECT que es creado por un CONSTRUCTOR FUNCTION tendrà acceso a todos estos METHODS y PROPERTIES que definimos en el CONSTRUCTORS PROTOTYPE PROPERTY.

Para visualizar este concepto, podemos hacer:
*/
//La prototype propertie del constructor Function Person
Person.prototype;
//Todos los OBJECT que se basen en este constructor tendran acceso a todos los METHODs y PROPERTIES que estan definidos en el PROTOTYPE PROPERTY.

//Añadimos un METHOD a la PROTOTYPE PROPERTIE:
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);
/*
{calcAge: ƒ, constructor: ƒ}
calcAge: ƒ () --> Podemos ver aqui el calcAge METHOD! Antes estaba vacio
constructor: ƒ (firstname, birthYear) //Estos dos otros methods olvidarlos...
__proto__: Object
*/

/*
Ahora seremos capaces de hacer:
jonas --> Object
Person --> Constructor
method --> function () {
  console.log(2037 - this.birthYear);
};
*/
jonas.calcAge(); //46, obtenemos la edad! luego funciona!
matilda.calcAge(); //20
//Luego podemos usar el METHOD en el jonas OBJECT incluso sabiendo que no esta definido realmente en el OBJECT! Podemos comprobarlo:

console.log(jonas, matilda);
/*
Person {firstname: "Jonas", birthYear: 1991}
*/

/*
So that effectively solves this problem that we had before when we added the calcAge method directly to each of the objects, remember that?
*/
/*
const Person = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
*/
/*
So here we would have created a copy of this method here and attached it to every single object. And so that's why we don't do this.

Instead, what we do is this:
*/

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
/*
Because now there exists only one copy of this function:
*/
function n() {
  console.log(2037 - this.birthYear);
}
/*
So only one of them exists, but then all of the objects that are created using this constructor function can basically reuse this function on themselves.

And so, the "this keyword", of course, in each of them is as always set to the object that is calling the method.

And so here that's Jonas and here that's gonna be Matilda.
*/
jonas.calcAge();
matilda.calcAge();
/*
So just like we learned previously, the disc keyword is set to the object that is calling the method.

So, in a nutshell, this is how we implement very basic prototypal inheritance in JavaScript in practice!!.

So we just observed, that the Jonas and the Matilda objects are kind of somehow connected to the person, right? That's why they can have access to these methods or in this case to just this method that is located inside the prototype property of person.

But how and why does this actually work?

Well, it works because any object always has access to the methods and properties from its prototype. And the prototype of Jonas and Matilda is person.prototype.
*/
Person.prototype;
/*
And we can actually confirm that because each object has a special property called a underscore underscore proto. So like this:
*/
console.log(jonas.__proto__);
/*
{calcAge: ƒ, constructor: ƒ}
calcAge: ƒ () --> Podemos ver aqui el calcAge METHOD! Antes estaba vacio
constructor: ƒ (firstname, birthYear) 
__proto__: Object
*/
/*
So this looks a bit weird, but, this is just kind of how it works.

And so this is the prototype of Jonas.

It's not the prototype property but it is simply the prototype, okay? And so here again, we see the calcAge function and that's why Jonas is able to use this.

So the prototype of the Jonas object is essentially the prototype property of the constructor function. So let's quickly see that as well.
*/
console.log(jonas.__proto__ === Person.prototype); //true
/*
But what I just said sounded incredibly confusing, didn't it? So shouldn't person dot prototype be the prototype of person, I mean should this prototype property here not be the prototype of person?

Well, actually, no. So this is the confusing part.

So person dot prototype here is actually not the prototype of person. But instead, it is what's gonna be used as the prototype of all the objects that are created with the person constructor function.

So that's a subtle but important difference that you need to keep in mind.

And, in fact, what I just said that is confirmed by this comparison that we just did here:
*/
console.log(jonas.__proto__ === Person.prototype); //true
/*
So we just saw that Jonas's prototype which is this "jonas.__proto__", is the prototype property of the person constructor function "Person.prototype".

And there are actually other built in methods that we can use to prove this.

So on any object, for example, object.prototype, we can test if this is a prototype of another object.
*/
console.log(Person.prototype.isPrototypeOf(jonas)); //true
/*
And so this should also become true. And indeed it is.

So this confirms one more time that person dot prototype is indeed the prototype of Jonas.

And the same for Matilda, of course as well.

But person dot prototype is not the prototype of person.
*/
Person.prototype;
/*
So, this very common confusion comes from bad naming of this property. So the fact that it's called prototype kind of implies that this is the prototype of person, but as we just learned, it is actually not.

Probably shouldn't be called prototype but instead something like prototype of linked objects or something like this.
*/
Person.prototypeOfLinkedObjects;
/*
Even though of course it's not called like this, but this would be a more honest name.

So take some time to really understand what the prototype of what object actually is here.

Now, anyway, where does this proto, property here, on the Jonas object actually come from?*/
jonas.__proto__;
/*
Well, remember the new operator that we talked about before, well, it contains this step number three which links the empty new object to the prototype.
3. {} linked to prototype
*/
const jonas = new Person('Jonas', 1991);
/*

And so basically, it is this step number three which will create this proto property. So it creates this proto property and it sets its value to the prototype property of the function that is being called. And so that's exactly what is written here, right?
*/
console.log(jonas.__proto__ === Person.prototype);
/*
So again, it sets the proto property on the object "jonas.__proto__" to the prototype property of the constructor function "Person.prototype".

And so this is how JavaScript knows internally that the Jonas object is connected to person dot prototype. And in fact, when we check out the Jonas object here we can indeed also see that property in here.

So it's also right here, and if we open that up, then you see exactly person dot prototype which contains this calcAge function, all right?
/*
Person {firstname: "Jonas", birthYear: 1991}
birthYear: 1991
firstname: "Jonas" 
__proto__: Object
    calcAge: ƒ () --> Podemos ver aqui el calcAge METHOD! Antes estaba vacio
    constructor: ƒ (firstname, birthYear) //Estos dos otros methods olvidarlos.
    __proto__: Object
*/
/*
So I'm spending a lot of time here for you to really understand what this proto property here is and what the prototype of the constructor is and how they are all linked because this is one of the most important things, and also one of the most difficult things to understand in JavaScript.

But I hope that it's becoming increasingly clear and there will also be a couple of diagrams in the next video that will basically bring all this knowledge together in an easier to understand way.

So, by now you're probably sick of hearing the word prototype but I just wanted to quickly show you that we can also set properties on the prototype. And so not just methods.

So let's say person dot prototype dot species,
*/
Person.prototype.species = 'Homo Sapiens';
console.log(jonas);
/*
and so this is something that all of the objects here will have in common, and so that's Homo Sapiens. Now, right?

And so, if we now take a look at Jonas and at Matilda also, then we should see this property, so the species on both of them and actually not directly here but indeed they will be here in this prototype.
/*
Person {firstname: "Jonas", birthYear: 1991}
birthYear: 1991
firstname: "Jonas" 
__proto__: Object
    calcAge: ƒ () 
    species: "Homo Sapiens"
    constructor: ƒ (firstname, birthYear) //Estos dos otros methods olvidarlos.
    __proto__: Object
*/
/*
And so, we will be able to do Jonas dot species and Matilda dot species.
*/
console.log(jonas.species, matilda.species); //Homo Sapiens Homo Sapiens
/*
And both of these objects will then inherit so they will get access to this property from the prototype. So, you see, in both cases, we indeed get Homo Sapiens.

Now however, since when we take a look at these objects, well, as we just saw this property is not really directly in the object, so it's not its own property. So own properties are only the ones that are declared directly on the object itself.
Person {firstname: "Jonas", birthYear: 1991}
birthYear: 1991 --> Own propertie
firstname: "Jonas"  --> Own propertie
__proto__: Object
    calcAge: ƒ () 
    species: "Homo Sapiens"
    constructor: ƒ (firstname, birthYear) //Estos dos otros methods olvidarlos.
    __proto__: Object
*/
/*
So, not including the inherited properties. And actually in JavaScript, there is a way of checking for that.
*/
console.log(jonas.hasOwnProperty('firstName')); //true
/*
And so let's first check for first name, and indeed this object does have its own property with this name but now if we try species, then that is gonna be false.
*/
console.log(jonas.hasOwnProperty('species')); //false
/*
And again, that's because this property is not really inside of the Jonas object. It simply has access to it because of its prototype. So because it's in the prototype property of person.

So right here, right?
*/
Person.prototype.species;
/*
And sometimes, this method here can be quite helpful in certain situations.
*/
object.hasOwnProperty('');
/*
OK, and that is probably enough for one lecture. And as I just mentioned earlier in the next video I'm gonna show you a nice diagram of all of this. So, stay tuned for that one.
*/
