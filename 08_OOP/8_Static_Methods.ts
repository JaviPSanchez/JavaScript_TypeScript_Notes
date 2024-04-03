import './main.css';

/*
let's quickly gonna talk about statics methods. Now a good example to understand what a
static method actually is, is the build in Array.from method. So remember that we have
the Array.from method which converts any structure to a real Array:
*/
console.log(Array.from(document.querySelectorAll('h1')));
/*
But that's not really the point, what's the point is that this from method here is really
a method that is attached to the Array constructor. No podemos usarlo directaamente sobre
un objeto array, but why?

La respuesta radica en la naturaleza de OOP, el method .from() esta encapsulado dentro
del constructor de la class ARRAY
*/
// [1, 2, 3].from(); ⛔
console.log(Array.from([1, 2, 3], item => item + item)); // ✅
/*
And so that is because this from method here is really attached
to the entire constructor, so the Array constructor and not to the prototype property of the
constructor. And so therefore all the Arrays do not inherit this method. Again because its
not on their prototype. Its simply attached to the constructor itself. We also say that the
.from() method is in the Array name space.

Remember for example Number.parsefloat, aqui parsefloat method es static!
*/
console.log(Number.parseFloat('12.65')); //12
/*
So this method is another static method and its static on the number constructor.So its not
available on Number Class, but only on the constructor. So these are some good examples that
we understand what a static method is.


The main idea behind static properties and methods is to access directly to the looked method
without needing to create a instance with the new keyword.
*/

class Department {
  //Static PROPERTY
  static fiscalYear = 2024;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // console.log(this.fiscalYear); 👉 ⛔
    console.log(Department.fiscalYear);
  }
  //Static METHOD
  static createEmployee(employeeName: string) {
    return { name: employeeName };
  }

  describe(this: Department) {
    console.log(`Department: ${this.id}, ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// If we want a new employee calling directly to the class! without new keyword
const employee1 = Department.createEmployee('Mariano');
console.log(employee1, Department.fiscalYear);
