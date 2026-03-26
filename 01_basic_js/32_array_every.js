// Array every() method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// Checks EVERY element to see if it returns true

let numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283];

let checkGreaterThan20 = numbers.every(function (val, idx) {
  console.log(idx, val);
  return val > 20;
});

console.log(checkGreaterThan20);

// Log:
// 0 -> 40
// 1 -> 16 (16 is not greater than 20)
// false

let checkGreaterThan10 = numbers.every(function (val, idx) {
  console.log(idx, val);
  return val > 10;
});

console.log(checkGreaterThan10);

// Log:
// 0 40
// 1 16
// 2 67
// 3 345
// 4 22
// 5 23
// 6 142
// 7 63
// 8 59
// 9 283
// true -> after going through all values, the check was true for every value
