// Hoisting
// The process of taking two passes through the js file
// First pass hoists all declarations to the top of the file

console.log(d); // undefined

let a; // variable declaration, value is 'undefined'
let b = 4; // declaration + assignment

// the whole function + block gets hoisted to the top of the file
function c() {
  // function declaration
}

let d = 5;

e(); // undefined

// variable hoisted to the top, but can only be used after the function is assigned
let e = function () {
  // function expression
};
