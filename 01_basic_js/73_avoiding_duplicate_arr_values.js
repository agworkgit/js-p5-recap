/* 
Notes:
1. Removing duplicates from an array
2. Generating an array without duplicates
*/

let names = ["John", "Paul", "George", "Ringo"];
let nums = [63, 69, 72, 88, 92, 93, 96, 98];
let log = console.log;

for (let i = 0; i < 4; i++) {
  let rand = Math.floor(Math.random() * names.length);
  // log(names[rand]);
  // gives duplicates
}

for (let i = 0, tempnames = names, len = names.length; i < len; i++) {
  let rand = Math.floor(Math.random() * tempnames.length);
  // floor = round down
  // we get values between 0 and 3
  log(tempnames[rand]);
  tempnames.splice(rand, 1);
}

// We always get a random order without duplicates

log("\n");

let min = 50;
let max = 100;
let range = max - min;

for (let i = 0; i < 9; i++) {
  let rand = Math.floor(Math.random() * range) + min;
  // nums.push(rand);
  // log(new Set(nums)); // -> hacky way
}

// using .includes to skip duplicates
while (nums.length < 17) {
  let rand = Math.floor(Math.random() * range) + min;
  if (!nums.includes(rand)) {
    nums.push(rand);
    log(nums.sort());
  } else {
    log("skipped duplicate");
  }
}
