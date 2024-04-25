import './main.css';

/**
 * Decorators are just functions, which apply for a class when is defined, the objective
 * is to give extra functionality to our classes behind the scenes, add some metadata
 */

function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Javier';

  constructor() {
    console.log('Creating person object...');
  }
}

// const person = new Person();
// console.log(person);

/**
 * Factory Decorator, it allows to customize our Decorator function, it gives us more power.
 */

function Logger2(logString: string) {
  //Anonymous function
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger2('LOGGING - PERSON')
class Person2 {
  name = 'Javier';

  constructor() {
    console.log('Creating person object...');
  }
}

// const person2 = new Person2();
// console.log(person2);

/**
 * We can manipulate HTML DOM, we can create our own library and expose this
 * decorator in order to do some action
 */

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookElement = document.getElementById(hookId);
    if (hookElement) {
      hookElement.innerHTML = template;
    }
  };
}

@Logger
@WithTemplate('<h1>This is my Template</h1>', 'app')
class Person3 {
  name = 'Javier';

  constructor() {
    console.log('Creating person object...');
  }
}

// const person3 = new Person3();
// console.log(person3);

/**
 * Setting decorators to properties, to accessors, methods and parameters!
 */

//Add decorator to a property
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

//Add decorator to accessors: setter & getter
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Add decorator to Methods
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Add decorator to Parameters
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  //Add decorator to a property
  @Log
  title: string;
  // We make it private
  private _price: number;
  //Add decorator to accessors
  @Log2
  set price(val: number) {
    //Avoid negative values
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  //Add decorator to Methods
  @Log3
  //Add decorator to Parameters
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
