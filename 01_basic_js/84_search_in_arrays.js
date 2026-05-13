import readline from "readline";

/* 
Searching for values in Arrays
Notes:
- Call method and get a single value
- Array.includes( searchElement, [, from Index]) returns Boolean
- Array.indexOf( searchElement, [, from Index]) returns -1 or index of first match

- Loop and return a single value - provides opportunity for more detailed matches
- Array.some( callback, [, thisArg]) returns Boolean
- Array.find( callback, [, thisArg]) returns value from Array or undefined
*/

let names = [
  "Walter",
  "Jesse",
  "Saul",
  "Gus",
  "Skyler",
  "Marie",
  "Todd",
  "Badger",
  "Pete",
  "Hector",
];

let log = console.log;

// 1. Find out if 'Todd' or 'Steve' is in the Array
let isToddPresent = names.includes("Todd");
let isStevePresent = names.includes("Steve");
log("Is Todd in the array?:", isToddPresent); // true
log("Is Steve in the array?:", isStevePresent); // false

// 2. Find out what positions in the Array are 'Gus' or 'Tuco'
let posOfGus = names.indexOf("Gus");
let posOfTuco = names.indexOf("Tuco");
log("Index of Gus is:", posOfGus); // 3
log("Index of Tuco is:", posOfTuco); // -1

// 3. Find out whether anyone in the list has a capital letter 'M' in their name
let hasCapitalM = names.some((value) => value.includes("M"));
log("Is there a name that has capital M?: ", hasCapitalM); // true

let returnCapitalM = names.find((value) => value.includes("M"));
log("What is the capital M name?: ", returnCapitalM); // Marie

// 4. Find the first name in the list that is more than 5 characters and comes before or after 'Walter'
let moreThanFiveAfterWalter = names.find(
  (value) => value.length > 5 && !value.includes("Walter"),
);
log(moreThanFiveAfterWalter); // Skyler

// Console input revision

// const userInput = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// userInput.question("Please give input: ", (value) => {
//   console.log(value);
//   userInput.close();
// });
