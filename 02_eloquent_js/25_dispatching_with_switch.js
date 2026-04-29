/* 
Note:
- It is not uncommon for code to look like this:
*/

// if (x == "value1") action1();
// else if (x == "value2") action2();
// else if (x == "value3") action3();
// else defaultAction();

/* 
Note:
- This is a construct called 'switch' that is intended to express such a 'dispatch' in a more direct way.
- Unfortunately, the syntax JS uses for this (which is inherited from C/Java line of languages) is somewhat awkward -> a chain of 'if' statements may look better.
- Here's an example:
*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
}); // -> interface

// -> start console input and get value
readline.question("What is the weather like?: ", (value) => {
  switch (value) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Shorts and tees!");
      break;
    case "cloudy":
      console.log("It might rain...");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  } // -> output
  readline.close(); // -> close console
});
