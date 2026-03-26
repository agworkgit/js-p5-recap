// Globals and numbers, and math

let r = parseInt('234'); // gives us the string as number
console.log(r); // 234

// partseInt(toBeParsed [, radix (base)]);

let bin = parseInt("01010101", 2); // from binary
console.log(bin); // 85 in decimal

let hex = parseInt('FF', 16) // from hex
console.log(hex); // 255

let num = 234.2323556456;
r = Number.parseInt(num);
console.log(r); // 234

// Fixed number of decimals

r = num.toFixed(2); // 2 decimal places
console.log(r); // 234.23

// Rounding

r = Math.round(num);
console.log(r); // 234

r = Math.floor(num);
console.log(r); // 234

r = Math.ceil(num);
console.log(r); // 235

// Random numbers

let randomNum = Math.floor(Math.random() * 5) + 1; // a random number between 1-5
console.log(randomNum);

// Gives min or max in a list

let min = Math.min(33, 12, 5, 7);
let max = Math.max(55, 22, 5, 13);
console.log(min, max); // 5, 55


