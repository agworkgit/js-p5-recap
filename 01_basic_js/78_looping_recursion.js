/* 
Looping and Recursion in JS
Notes:
- 
*/

import fetch from "node-fetch";

let url = "https://jsonplaceholder.typicode.com/comments?postId=42";
let log = console.log;
let count = 0;
const SIZE = 120;

/* 
Looping
*/

// log("Starting the loop");
// for (let i = 0; i < 10; i++) {
//   log("Inside loop", i);
// }
// log("Ended loop");

/* 
Recursion
*/

let recurseFn = function () {
  // recursive operation
  log("inside recursion", count);
  count++;
  // break case
  if (count < 10) {
    // recursive run
    recurseFn();
  }
};

log("Starting recursion");
recurseFn(); // calling recursive function while count < 10
log("Ending recursion");

/* 
Example: Recursive Countdowns
Notes:
- The repeat halves as the size approaches 1
*/

let size = 50;
let countdown = function (size) {
  log("#".repeat(size));
  size = Math.floor(size * 0.5);
  if (size > 1) {
    log("recursive call", size * 0.5);
    countdown(size);
  }
};

countdown(size);

/* 
Asyncronous Methods
Notes:
- AJAX, Database, Promises, Timers...
*/

// first
log("About to fetch...");

// last??? (network dependent, separate thread)
// until resolved the fetch is a 'pending promise'
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("data", JSON.stringify(data));
  });

// second
log("After fetch???");
