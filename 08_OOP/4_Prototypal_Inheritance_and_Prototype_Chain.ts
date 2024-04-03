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

javi.calcAge(); //37
melissa.calcAge(); //36

console.log(javi);

/*
PROTOTYPE CHAIN -> Series of links between objects, linked through prototypes

Recapitulemos!

Tenemos un Constructor Function que tiene una Prototype property que es un Object.

Dentro de este Object tenemos el Method calcAge. Si hiciesemos Person.prototype.constructor
obtendríamos el contructor con las properties.

Cuando llamamos a javi.calAge() function en el Object javi, sin embargo, Javascript no lo
encontrará directamente en este Object, si un method o una property no se encuentran en un Object,
javascript mirará en su Prototype! Esto es lo que se llama PROTOTYPE INHERITANCE! javi Object
inherits el calcAge method de su prototype.

Esta habilidad de poder ver los methods y properties en un prototype es lo que llamamos
Prototype Chain!

Cabe destacar que Person.prototype tambien es un object y como todos los objects en JS tendrá
su prototype. Su prototype es Object.prototype, el cual está construido con el Build-in
Contructor function.

Object.prototype tendrá __proto__ : null pues es el final de la chain!


El único Object que no tiene prototypes es el Base Object creado por nosotros,
en este caso javi, este object tiene acceso a las properties y los methods que gracias al Property
Chain puede acceder.

<cmg /images/Picture10.jpg>
*/
console.log(Person.prototype.constructor);
