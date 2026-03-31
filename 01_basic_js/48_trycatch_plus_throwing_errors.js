// Throwing Errors and Exceptions
// and
// using Try...Catch to handle thrown Errors and Exceptions
// Error Types:
// - EvalError (when working with the eval statement)
// - InternalError (too much recursion, etc...)
// - RangeError (the program is expecting something within a range to be passed to a function, etc., and you're passing a value outside that range)
// - ReferenceError (referencing something that does not exist)
// - SyntaxError (invalid syntax)
// - TypeError (you passed the wrong data type)
// - URIError (errors coming from URI methods when they fail)
// - Error (is the generic parent of all error types, and we're allowed to create these with 'new Error('error message')')

// throw "Javelin"; -> we introduce a problem (a point at which the interpreter has to stop)
// console.log("This will not run, program crashed");

try {
  // 1. try to see if this works?
  // throw { name: "Bubba", message: "Salmon" }; // -> own error object
  throw new Error("A stick"); // -> generic/built-in Error object
  console.log("Hello");
} catch (err) {
  // 2. if it didn't, do this
  // browser won't crash if you specify what happens with the error
  console.log("Caught:", err.name, err.message); // Caught: true
} finally {
  // 3. regardless whether it worked or not, do this
  // catch-all portion, wrapping up
  console.log("Took you a long time");
}
console.log("I will run, the error above was caught");
