// using 'new' with functions
// new does 4 things:
// 1. new object created
// 2. new object is prototype linked
// 3. new object set as 'this' binding
// if no return statement exists then a copy of the object is returned

let log = console.log;

// CONSTRUCTOR PATTERN
function Car(make, model) {
  // if variables declared here they exist only here, in the function scope!
  // use 'this' instead
  this.props = {
    make,
    model,
  };
  this.info = function () {
    return this.props;
  };
}

// let c1 = Car("Honda", "Accord"); -> FACTORY PATTERN (does not use 'this' in the func scope, only inside props)
// what does 'this' point to? the global context (in the browser)
let c2 = new Car("Tesla", "Model 3");
// what does 'this' point to with 'new'? a copy of the 'current' context

// log(c1); // undefined
// log(c2); // Car {} object
log(c2.info()); // ==> { make: 'Tesla', model: 'Model 3' }
