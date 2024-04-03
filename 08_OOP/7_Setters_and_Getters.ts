import './main.css';

/*
Let's now talk about a feature that is actually common to all objects in JavaScript, and that's
getters and setters. So every object in JavaScript can have setter and getter properties. And
we call these special properties assessor properties, while the more normal properties are called
data properties.

So getters and setters are basically functions that get and set a value so just as the name says,
but on the outside they still look like regular properties.

Let's first take a look at getters and setters in a simple object literal, we will add a getter
method and a setter method (needs to have exactly one parameter):
*/
const account = {
  owner: 'jonas',
  movements: [200, 530, 100, 300],

  // Getter
  get latest() {
    return this.movements.slice(-1).pop();
  },
  // Setter
  set latest(mov: any) {
    this.movements.push(mov);
  },
};
account.latest = 50;
console.log(account.movements);
/*
Classes do also have getters and setters, and they do indeed work in the exact same way.
*/
class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

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
class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  //Getter METHOD 👉 has to return something
  get mostRecentReport(): void {
    //Now lastReport is publicly accesible
    if (this.lastReport) {
      return console.log(this.lastReport);
    }
    throw new Error('No report found! 😥');
  }
  // Setter METHOD 👉 needs a value
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value! ❌');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
    console.log(this.lastReport);
  }
}

const it = new ITDepartment('d1', ['Max']);
it.describe();
it.printEmployeeInformation();
const accounting = new AccountingDepartment('d2', []);
// accounting.mostRecentReport; // 👉 We access like a normal PROPERTY
accounting.addReport('Some boring report');
accounting.mostRecentReport;
accounting.mostRecentReport = 'This is the lastest Report!';
accounting.addEmployee('Peter');
accounting.printReports();
