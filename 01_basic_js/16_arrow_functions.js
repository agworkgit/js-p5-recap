// Abbreviated syntax for functions
// Use only when it doesn't impact readablity
let numbers = [1, 2, 3, 4, 5];
let names = [
  "Alex",
  "Bree",
  "Cara",
  "Devon",
  "Riley",
  "Bob",
  "Amelia",
  "Alice",
];

let big = numbers.filter((num) => num > 2);
console.log(big); // [ 3, 4, 5 ]

let capitalA = names.filter((name) => name.slice(0, 1) === "A");

capitalA.forEach((name, index) => console.log(index, name));
// 0 Alex
// 1 Amelia
// 2 Alice

// Parentheses around parameters, if more than one used
// Brackes around the return if doing more than one thing inside the arrow function
