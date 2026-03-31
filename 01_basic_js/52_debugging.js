// Tips for debugging in JS

const DEBUG_MODE = true;

var R = "Ricky";
var B = "Bobbie";
console.count(R); // Ricky: 1

if (DEBUG_MODE) {
  debugger;
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
