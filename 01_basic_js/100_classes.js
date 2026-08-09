/* 
Intro to Classes in JS
************ JS is still a prototype based lang ******************

Keywords of Classes:
- class
- extends
- constructor
- super
- get
- set
- static
*/

// a class is like a blueprint for an object

class Vehicle {
  constructor(_wheels) {
    // 'this' will reference each individual instance created with 'new'
    this.numWheels = _wheels;
  }

  get wheels() {
    return this.numWheels;
  }

  set wheels(_wheels) {
    this.numWheels = _wheels;
  }

  // 'static' is shared by every single blueprint, they all point to this
  // the individual instances don't have this!
  static accelerate() {
    console.log("go faster");
  }

  static decelerate() {
    console.log("go slower");
  }

  // custom methods
  justAMethod() {
    // just like a function
    console.log("do something");
  }
}

// an instance of that blueprint

let car = new Vehicle(4);
car.wheels = 7; // changed the number of wheels
console.log(car.wheels); // 7

// static
Vehicle.accelerate(); // go faster

// more instances of Vehicle

let car1 = new Vehicle(2);
let car2 = new Vehicle(6);

// extends and super

// the class Car will borrow things from Vehicle
// Vehicle is the prototype of Car
class Car extends Vehicle {
  constructor(_wheels, _make, _model, _year) {
    // when we call super, we're pointing to the constructor inside Vehicle
    super(_wheels);
    // we pass the value up with extends/super, hence we can make use of this.wheels
    this.make = _make;
    this.model = _model;
    this.year = _year;
  }

  info() {
    console.log(
      "The",
      this.make,
      this.model,
      "was made in",
      this.year,
      "and has",
      this.wheels,
      "wheels",
    );
  }
}

// we're calling the constructor inside Car
let ferrari = new Car(4, "Ferrari", "Testarossa", 1985);
ferrari.info(); // The Ferrari Testarossa was made in 1985 and has 4 wheels
Car.accelerate();
