/* 
Tips and gotchas for ES6 arrow functions
Notes:
- If you add more than one line of code inside an arrow function, curly braces and the 'return' keyword are required
- We can use '_' to represent no value being passed into an arrow function (instead of '()')
*/

let retVal = 42;
let obj = { prop1: "foo", prop2: "bar" };

// 1. One parameter, with and without curly braces
const fn1 = (param) => param;
console.log(fn1(7)); // -> returns 7 even without the keyword 'return'
// const fn2 = param => param;

// 2. No parameters
const fn3 = () => retVal;
console.log(fn3()); // -> returns 42
// const fn4 = _ => retVal;
// console.log(fn4()); // -> returns 42

// 3. Returning objects
const fn5 = (param) => obj; // no difference
// const fn6 = (param) => { prop1: "foo", prop2: "bar" }; // sees the curly braces as a wrapper of code -> fails
const f7 = () => ({ prop1: "foo", prop2: "bar" }); // -> fix
console.log(f7());
