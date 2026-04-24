// Tips for debugging in JS

const DEBUG_MODE = true;

var R = "Ricky";
var B = "Bobbie";
console.count(R); // Ricky: 1

if (DEBUG_MODE) {
  debugger; // only thing required for the browser to jump to /sources -> 'file to be debugged'
}

function x(nm) {
  console.count(nm);
  return true;
}

console.count(B); // Bobbie: 1
x(R); // Ricky: 2

console.count(R); // Ricky: 3
x(B); // Bobbie: 2

console.count(R); // Ricky: 4

console.time("countdown");
console.group();
console.log("log");
console.group();
console.info("Info");
console.groupEnd();
// console.error("Error");
console.groupEnd();
console.timeEnd("countdown"); // countdown: 0.993ms

// Note: In the browser console the formatting is slightly more visually informative

// Chrome DevTools:
// - Play = resume execution down to the last line in the script, or the next breakpoint
// - Step Over (next to Play) = move line by line
// - cmd + P = search for files