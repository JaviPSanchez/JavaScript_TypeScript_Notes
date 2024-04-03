import './main.css';

/*
So we learned about constructor functions and ES6 classes. But there is actually
a third way of implementing prototypal inheritance. And that third way is to use
a function called Object.create

We create a simple object literal

Este es el método que menos se utiliza en prototype inheritance
*/

// Define an interface for Person with the properties and methods you expect
interface Person {
  name?: string; // Optional property
  birthYear: number;
  calcAge(this: Person): void;
}

const PersonProto = {
  calcAge: function (this: Person) {
    console.log(2024 - this.birthYear);
  },
} as Person; // Cast to Person to satisfy the interface requirements fully

const javier: Person = Object.create(PersonProto);

/*
Javier will be link to PersonProto Object which will be its prototype
Creating an instance of PersonProto with Object.create
Note: TypeScript does not allow direct assignment to a function type,
thus the workaround
*/

javier.name = 'Javier';
javier.birthYear = 1987;
javier.calcAge();

('use strict');

const PersonProto2 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const javier2 = Object.create(PersonProto);
/*
And now finally lets look at how we can use Object.create in order to implement
a complex prototype chain. So similar to what we implemented before with classes
and constructor functions.

We create a new person object using Object.create (our parent class). Now we basically
want to add another prototype in the middle of the chain. So between PersonProto and
the object. And so what we're going to do is to make student inherit directly from person.

So we're going to create now an object that will be the prototype of students. So StudentProto,
for now an empty object:
*/
const StudentProto = Object.create(PersonProto2);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const melissa = Object.create(StudentProto);
melissa.init('melissa', 2010, 'Computer Science');
melissa.introduce(); // My name is melissa and I study Computer Science
melissa.calcAge(); //27
