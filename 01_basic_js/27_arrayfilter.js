// Array filter() method

let numbers = [23, 45, 66, 16, 456, 56, 77];
let pivot = 30;

let smallNums = numbers.filter(function (item, index, array) {
  return item < pivot; // less than pivot
});

let bigNums = numbers.filter(function (item, index, array) {
  return item > pivot; // greater than pivot
});

let oddNums = numbers.filter(function (item, index, array) {
  return item % 2 === 1; // has remainder after division by 2 = odd number
});

let oddNumsBitwise = numbers.filter((item, index, array) => {
  return item & 1; // will compare each decimal in binary form to see if it ends in 0 or 1 (if it ends in 1, it is odd and will return true)
});

let log = console.log;

log("\nSmall numbers:", smallNums);
log("\nLarge numbers:", bigNums);
log("\nOdd numbers:", oddNums);
log("\nOdd numbers bitwise:", oddNumsBitwise);

/* Logs:
Small numbers: [ 23, 16 ]
Large numbers: [ 45, 66, 456, 56, 77 ]
Odd numbers: [ 23, 45, 77 ]
*/
