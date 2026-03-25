// All about strings

let str1 = new String("Toy Story"); // string object
let str2 = String("WALL-e"); // converting into a string
let str3 = "Cars"; // string literal

// Methods

let uppercased = str1.toUpperCase();
console.log(uppercased); // TOY STORY
let lowercased = str2.toLowerCase();
console.log(str2, lowercased); // WALL-e -> wall-e

let short = str1.substring(4, 9); // start at index 4 and up to the end but not including the last index
console.log(short); // Story

// MDN -> (1 [, optional parameter])

let r = str2.substring(4, 5);
console.log(r); // -

let p = str2.substr(4, 1);
console.log(p); // -
