// Function currying
// In JavaScript, functions are first-class objects,
// just like String, Number, Boolean
// This means that they can be passed to functions or returned from functions

function greet(msg) {
  // console.log(msg);
  return function (name) {
    console.log(msg, name);
    // console.log('Hi', name);
  };
}

let english = greet("Hi");
let svenska = greet("Hej");
let espanol = greet("Hola");
let deutch = greet("Servus");

english("Tom"); // Hi Tom
svenska("Inga"); // Hej Inga
espanol("Carlos"); // Hola Carlos
deutch("Mattias"); // Servus Mattias

/* Prev example
function x(a) {
  console.log("x ran");
  a(); // this will exec func y
  return a;
}

function y() {
  console.log("y ran");
}

// x(y); // calling func x

// x
// y

let b = x(y);
b();

// x ran
// y ran
// y ran
*/
