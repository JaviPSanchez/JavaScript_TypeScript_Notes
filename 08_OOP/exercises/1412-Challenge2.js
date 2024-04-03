'use strict';

/*
CODING CHALLENGE #2

Your tasks:

1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
}
/*
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
*/
class CarCl2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}
/*
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
*/
class CarCl3 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
/*
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
*/
const ford = new CarCl3('Ford', 120);
console.log(ford.speedUS); //75
ford.accelerate(); //Ford is going at 130 km/h.
ford.accelerate(); //Ford is going at 140 km/h.
ford.accelerate(); //Ford is going at 150 km/h.
ford.brake(); //Ford is going at 145 km/h.
ford.speedUS = 50;
console.log(ford);
/*
CarCl3 {make: "Ford", speed: 80}
make: "Ford"
speed: 80
speedUS: (...)
__proto__: Object
*/
