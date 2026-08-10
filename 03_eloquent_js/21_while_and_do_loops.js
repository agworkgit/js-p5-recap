// WHILE LOOPS

/* 
Notes:
- Consider a program that needs to output all even number from 0 to 12.
- One way to write this would be:
*/

// console.log(0);
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);
// console.log(12);

/* 
Notes:
- That works, but the idea of writing a program is to make something less work, not more. 
- We need a way to run a piece of code multiple times. This form of control flow is called a loop.
*/

let number = 0; // binding
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

// -> 0
// -> 2
// ... so on

/* 
Notes:
- A statement starting with 'while' creates a loop, this is followed by an expression in parentheses.
- The loop keeps entering that statement as long as the expression keeps evaluating to true when converted to a Boolean.
*/

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// -> 1024

// PROCESS:
// 1 * 2
// 2 * 2
// 4 * 2
// 8 * 2
// 16 * 2
// 32 * 2
// 64 * 2
// 128 * 2
// 256 * 2
// 512 * 2 = 1024

// EXPONENTIAL OPERATOR

/* 
Note:
- Your can also use the exponent operator (**), but that would've ruined the example.
*/

console.log(2 ** 10); // -> 1024

// DO LOOPS

/* 
Notes:
- A 'do' loop differs in that it always executes its body at least once, and it starts testing whether it should stop only after the first run.
*/

// Terminal Prompt Setup

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Wrap readline.question inside a Promise and return it

function ask(question) {
  return new Promise((resolve) => {
    readline.question(question, resolve);
  });
}

// Wait until the user provides a value, then continue

(async () => {
  let yourName;

  do {
    yourName = await ask(`What's your name?: `);
  } while (!yourName);

  console.log("Hello, " + yourName);
  readline.close();
})();
