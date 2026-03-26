// Array filter() method

let numbers = [23, 45, 66, 16, 456, 56, 77];
let pivot = 30;

let smallNums = numbers.filter(function (item, index, array) {
  return item < pivot;
});

let bigNums = numbers.filter(function (item, index, array) {
  return item > pivot;
});

let oddNums = numbers.filter(function (item, index, array) {
  return item % 2 === 1;
});

let log = console.log;

log("\nSmall numbers:", smallNums);
log("\nLarge numbers:", bigNums);
log("\nOdd numbers:", oddNums);

/* Logs:
Small numbers: [ 23, 16 ]
Large numbers: [ 45, 66, 456, 56, 77 ]
Odd numbers: [ 23, 45, 77 ] 
*/
