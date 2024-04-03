import './main.css';

/*
Until now we have worked with:

- Constructor Method and its Parameters
- Double Initialization ⛔
- Readonly properties
- Access Modifiers:
    👉 Private - Internal access
    👉 Protected - Internal access from all inheriting classes
    👉 Public - free access

- Static Properties
- Static Methods

- Getter and Setter Methods


Ahora vamos a ver un caso de:

- Abstract Classes and methods

Bsicamente si definimos un metodo como abstract, tenemos obligatoriamente
que definir la clase tambien como abstract.

¿Que hace abstract?

Basicamente definir el metodo ogligatoriamente en cada inheriting class y no
en la parent class! quizás por temas de dejar claro que hace cada class

Una vez declara como abstract la class Department, ya no podemos
instanciarla como new Department, y los metodos definidos como
abstracts tiene que ser definidos individualmente en cada class.

Abstract Classes are classes that can´t be instantiated but has to be extended...

*/

abstract class Department {
  //Static Properties
  static fiscalYear = 2020;
  employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    console.log('FiscalYear:', Department.fiscalYear);
  }

  //   describe() {
  //     console.log('Department:', this.id, this.name);
  //   }
  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  //Static METHOD
  static createEmployee(employeeName: string) {
    return { name: employeeName };
  }

  printEmployeeInformation() {
    console.log(
      `Number of employees: ${this.employees.length}, ${this.employees}`
    );
  }
}

class ITDepartment extends Department {
  //   public admins: string[];
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID | Name:', this.id, this.name);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  constructor(id: string, public reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  get mostRecentReport(): void {
    if (this.lastReport) {
      return console.log(this.lastReport);
    }
    throw new Error('No report found! 😥');
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value! ❌');
    }
    this.addReport(value);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe() {
    console.log(`Accounting Department - ID | Name:`, this.id, this.name);
  }
}
const info = Department.createEmployee('Gabriel');
console.log(info, Department.fiscalYear);

// const abstractLimitation = new Department();
// console.log(abstractLimitation);

const it = new ITDepartment('d1', ['CTO']);
it.addEmployee('Javier');
it.printEmployeeInformation();
it.describe();
console.log(it);

const accounting = new AccountingDepartment('d2', ['Melissa']);
accounting.addEmployee('Almudena');
accounting.printEmployeeInformation();
accounting.addReport('Some Random Report...');
accounting.mostRecentReport;
accounting.mostRecentReport = 'Another report';
accounting.describe();
console.log(accounting);
