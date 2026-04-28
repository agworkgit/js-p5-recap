/* 
Notes:
- How does a program keep internal state? How does it remember things?
- To catch and hold values, JavaScript provides 'bindings' or 'variables'.
*/

let rememberThis = 5 * 5;
console.log(rememberThis); // -> 25

let ten = 10;
console.log(ten * ten); // -> 100

/* 
- This gives us a second kind of statement. The special word (keyword, reserved word) 'let' indicates that this sentence is going to define a binding.
- The = operator can be used at any time on existing bindings to disconnect them from their current value and point to a new one.
*/

let mood = "light";
console.log(mood); // -> light
mood = "dark";
console.log(mood); // -> dark

/* 
- You should imagine bindings as tentacles rather than boxes. They do not contain values, they 'graps' them, two bindings can refer to the same value.
*/

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // -> 105

/* 
- When you define a binding by only giving it a name, that binding will have undefined as its value.
- A single let statment may defined multiple bindings at once.
*/

let one = 1,
  two = 2;
console.log(one + two); // -> 3

/* 
- The keywords 'var' and 'const' can also be used to create bindings, same as we did with 'let'.
*/

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// -> Hello Ayda

/* 
- 'var' is short for variable, was used in JS pre 2015, when 'let' did not exist yet. We will not use this as it has very unpredictable behaviours.
- 'const' stands for constant, or values that don't change.
*/
