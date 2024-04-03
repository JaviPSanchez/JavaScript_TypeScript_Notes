import './main.css';

/*
Until now we have worked with:

- Constructor Method and its Parameters
- Double Initialization ⛔
- Readonly properties
- Access Modifiers:
    👉 Private - Internal access only, just from the class
    👉 Protected - Internal access from all inheriting classes
    👉 Public - free access

- Static Properties --> Accesible from the class itself!
- Static Methods --> We can call them directly

- Getter and Setter Methods
- Abstract Classes and methods


El Singleton Pattern nos interesa cuando solo queremos tener una Class unica.
Por ejemplo, si solo queremos una class de AccountingDepartment podemos definirlo
convirtiendo el constructor en privado


With the Singleton Pattern we only have one instance of a singleton class!

*/

abstract class Department {
  static fiscalYear = 2020;
  employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    console.log('FiscalYear:', Department.fiscalYear);
  }

  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

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
  private static instance: AccountingDepartment; // Type AccountingDepartment so the class itself
  private constructor(id: string, public reports: string[]) {
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

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', ['Reports Array']);
    return this.instance;
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

// const accounting = new AccountingDepartment('d2', ['Melissa']);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.addEmployee('Almudena');
accounting.printEmployeeInformation();
accounting.addReport('Some Random Report...');
accounting.mostRecentReport;
accounting.mostRecentReport = 'Another report';
accounting.describe();
console.log(accounting);
console.log(accounting2);
