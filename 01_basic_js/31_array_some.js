// Array some() method
// Wider availability than includes()
// Functional approach like map, filter, and forEach
// Returns boolean when first true value match is found

let movies = [
  "Star Wars",
  "Star Trek",
  "Jaws",
  "Jurassic Park",
  "Gross Pionte Blank",
  "Eternal Sunshine of the Spotless Mind",
  "Momento",
  "Dog Soldiers",
  "The Host",
  "Gran Torino",
  "Close Encounters of the Third Kind",
  "Good Will Hunting",
  "Layer Cake",
  "Casino Royale",
  "Almost Famous",
];

let keyword1 = "Star"; // Appears more than once
let keyword2 = "Cake"; // Appears once
let keyword3 = "Max"; // Not in list

let test1 = movies.some(function (val, idx) {
  console.log(idx, val); // checking what some does at each step
  return val.indexOf(keyword2) > -1;
});

console.log(test1); // the callback function will run until it encounters he first matching keyword
// if found, returns true
