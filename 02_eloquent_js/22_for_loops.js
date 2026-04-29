/* 
Notes:
- Many loops follow the pattern shown in the 'while' examples. First a 'counter' binding is created to track progress of the loop. Then comes a 'while' loop, usually with a test expression that checks for the 'counter' value. At the end of the loop body the 'counter' is updated to track progress.
*/

let counter = 1;
let product = 1;
while (counter <= 5) {
  product *= counter;
  counter += 1;
}
console.log(product);

/* 
Notes:
- Because this pattern is so common, JavaScript and similar languages provide a shorter and more comprehensive form, the 'for loop':
*/

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

// 0
// 2
// ... etc

/* 
Notes:
- The only change is that all the statements that are related to the 'state' of the loop are now grouped together after 'for'.
*/

let result = 1;
for (let counter = 0; counter < 10; counter++) {
  result = result * 2;
}
console.log(result); // -> 1024
