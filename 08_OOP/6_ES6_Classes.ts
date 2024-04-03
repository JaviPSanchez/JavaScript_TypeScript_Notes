import './main.css';
/*
So we learned how to implement prototypal inheritance with constructor functions and then
manually setting methods on the constructor functions, prototype property. But now it's time
to turn our attention to ES6 classes. Which essentially allow us to do the exact same thing,
but using a nicer and more modern syntax.

Now, as I mentioned earlier, classes in JavaScript do not work like traditional classes in
other languages like Java or C++. So instead classes in JavaScript are just synthetic sugar
over OOP.

We have two ways of creating classes (We can pick both of them)
Class Expression
Class Declaration
*/
// const PersonEx = class {}; // Expression
// class PersonDe {} // Declaration

class Department {
  //Properties (public, private and protected)
  // private name: string 👉 avoid double initialization (put directly in the constructor)
  protected employees: string[] = []; // 👉 extended classes can use this property

  //Contructor Method (Function tied to this class), constructor takes a parameter
  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  //Methods
  describe(this: Department) {
    console.log(`Department: ${this.id}, ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2'; 👉 Read only property
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//Inheritance
class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

//Create new Object, constructor is called, we create a new instance
const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Javier');
it.addEmployee('Melissa');
// it.employees[2] = 'Maria'; //👉 avoid this approach

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Some boring report');
accounting.addEmployee('Peter');

console.log(accounting);
/*
So, this is great for people who are coming from another language and have experience with
object oriented programming, because it's going to be a bit easier for these developers to
start writing object oriented code in JavaScript. Now, if you're one of these developers,
then please make sure that before just starting to use classes, you really truly understand
function constructors and to prototype and to hold prototype chain logic.

Now, to finish, I just need to say a couple of more things about classes that are important
to keep in mind:

1. Classes are not hoisted, and so even if they are class declarations. So function declarations,
remember are hoisted, which means we can use them before they are declared in the code. But with
classes, that doesn't work.

2. classes are also first-class citizens. First-class citizens means that we can pass them into
functions and also return them from functions. And as I mentioned before, that is because classes
are really just a special kind of function behind the scenes.

3. Classes are executed in strict mode. And so even if we didn't activate it for our entire script,
all the code that is in the class will be executed in strict mode.


With function constructors, in my opinion, it all looks just like a big mess.
*/

// Define an interface to describe the structure of Car instances
interface Car {
  make: string;
  speed: number;
  accelerate: () => void;
  brake: () => void;
}
const Car: { new (make: string, speed: number): Car } = function (
  this: Car,
  make: string,
  speed: number
) {
  this.make = make;
  this.speed = speed;
} as any;

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
console.log(mercedes);

Car.prototype.accelerate = function (this: Car): void {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};
Car.prototype.brake = function (this: Car): void {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};
