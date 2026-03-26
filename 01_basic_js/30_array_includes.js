// Array includes() method
// Check to see if something is inside an array
// Method returns a Boolean value

let dwarves = [
  "Grumpy",
  "Sneezy",
  "Happy",
  "Bashful",
  "Doc",
  "Dopey",
  "Sleepy",
];

let name1 = "Peter Dinklage";
let name2 = "Kenny Baker";
let name3 = "Happy";

let hasPeter = dwarves.includes(name1);
console.log("Does it contain Peter:", hasPeter); // false

let hasKenny = dwarves.includes(name2);
console.log("Does it contain Lenny:", hasKenny); // false

let hasHappy = dwarves.includes(name3, 3); // second param is for when we want to start looking (idx)
console.log("Does it contain Happy:", hasHappy); // false, it does exist but not from position 3 onwards
