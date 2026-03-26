// Array reduce() method
// Reduce all the values in an array into a single result
// Uses a callback function just like map, forEach, filter, etc...
// array.reduce(callback, initialValue)
// Also has a second parameter which is an initialValue

let numbers = [12, 34, 56, 78, 91];
// find the sum of all the numbers

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
// find the first movie alphabetically

let sum = numbers.reduce(function (passedIn, item) {
  // 2. then pass it back in
  return passedIn + item; // 3. then we add each item until we have a total
}, 0); // 1. we default to 0

console.log("Total is", sum, "\n"); // Total is 271

let first = movies.reduce(function (current, item) {
  console.log("comparing", current, "to", item);
  return current < item ? current : item; // is current less than item, true: current, false: item
}, "\u0434");

// Step-by-step comparison
// comparing д to Star Wars (-> Star Wars, starting with 'S' which has a lower unicode)
// comparing Star Wars to Star Trek (-> This process continues all the way down until the lowest unicode is found)
// comparing Star Trek to Jaws
// comparing Jaws to Jurassic Park
// comparing Jaws to Gross Pionte Blank
// comparing Gross Pionte Blank to Eternal Sunshine of the Spotless Mind
// comparing Eternal Sunshine of the Spotless Mind to Momento
// comparing Eternal Sunshine of the Spotless Mind to Dog Soldiers
// comparing Dog Soldiers to The Host
// comparing Dog Soldiers to Gran Torino
// comparing Dog Soldiers to Close Encounters of the Third Kind
// comparing Close Encounters of the Third Kind to Good Will Hunting
// comparing Close Encounters of the Third Kind to Layer Cake
// comparing Close Encounters of the Third Kind to Casino Royale
// comparing Casino Royale to Almost Famous

console.log("First movie is", first); // First movie is Almost Famous
