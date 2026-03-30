// JS IIFE (Immediately Invoked Function Expressions)

// NOTE: if no return value is specified, the function will return 'undefined' by default

function doSomething() {
  // function declaration
}

var somethingElse = function () {
  // function expression
};

doSomething; // like shouting out a name - does nothing
doSomething(); // actually runs the function and expects a return value

somethingElse;
somethingElse(); // actually runs the function and expects a return value

// Example - IIF (immediately invoked function)

(function doThisNow() {
  console.log("immediately invoked");
})(); // immediately invoked

// Example - IIFE (immediately invoked function expression)

let assignThisNow = (function immediatelyAssigned(nm) {
  return {
    name: nm,
    id: 123,
    x: function () {
      console.log("method");
    },
  };
})("Bob");
console.log(assignThisNow); // { name: 'Bob', id: 123, x: [Function: x] }
assignThisNow.x(); // method
