'use strict';

/*
CODING CHALLENGE 1

Your tasks:

1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h.
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;

  //We do not write de method here!!!!
  //   this.accelerate....
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw); //Car {make: "BMW", speed: 120}
console.log(mercedes); //Car {make: "Mercedes", speed: 95}
/*
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
*/
Car.prototype.accelerate = function () {
  this.speed += 10;
  //BONUS
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};
/*
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
*/
Car.prototype.brake = function () {
  this.speed -= 5;
  //BONUS
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};
/*
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
*/
bmw.accelerate(); //BMW is going at 130 km/h.
bmw.accelerate(); //BMW is going at 140 km/h.
bmw.brake(); //BMW is going at 135 km/h.
bmw.accelerate(); //BMW is going at 145 km/h.
mercedes.accelerate(); //Mercedes is going at 105 km/h.
mercedes.accelerate(); //Mercedes is going at 115 km/h.
mercedes.accelerate(); //Mercedes is going at 125 km/h.
mercedes.accelerate(); //Mercedes is going at 135 km/h.
mercedes.brake(); //Mercedes is going at 130 km/h.
mercedes.brake(); //Mercedes is going at 125 km/h.
mercedes.brake(); //Mercedes is going at 120 km/h.
mercedes.brake(); //Mercedes is going at 115 km/h.
mercedes.brake(); //Mercedes is going at 110 km/h.
