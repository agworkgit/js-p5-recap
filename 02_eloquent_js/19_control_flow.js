/* 
Notes:
- Node requires some setup to be able to request user input.
- Number() converts a number string into a number.
- There are similar conversion functions for String() and Boolean().
- All user input will come back as a string.
*/

// STRAIGHT-LINE EXECUTION

// 1) Setup
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// // 2) Query the user for input
// readline.question("Pick a number: ", (theNumber) => {
//   // console.log(typeof theNumber); // -> string
//   // Do something with the value you received.
//   console.log(
//     "Your number is the square root of " +
//       Number(theNumber) * Number(theNumber),
//   );
//   readline.close();
//   // Close the interface once you're done.
// });

// CONDITIONAL EXECUTION

/* 
Notes:
- We might want to create branches in our program so that the correct path is selected based on our given fact.
*/

// // Creating conditional execution (if, only one execution path but with a pre-check)
// readline.question("Pick another number: ", (theNumber) => {
//   // console.log(typeof theNumber); // -> string
//   // Do something with the value you received.
//   // Check if the input is an actual number type before executing code.
//   if (!Number.isNaN(theNumber)) {
//     console.log(
//       "Your number is the square root of " +
//         Number(theNumber) * Number(theNumber),
//     );
//     readline.close();
//     // Close the interface once you're done.
//   }
// });

/* 
Notes:
- We can use if...else to create two different execution branches in our code.
*/

readline.question("Pick a number: ", (anotherPick) => {
  const num = Number(anotherPick);
  if (!Number.isNaN(num)) {
    console.log(
      "Your number is the square root of " + anotherPick * anotherPick,
    );
  } else {
    console.log(`Hey. Why didn't you give a number?`);
  }
  readline.close();
});
