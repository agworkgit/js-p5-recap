/* 
Notes:
- We would use the following approach if we required more than two branches.
*/

let someNum = Math.floor(Math.random() * 1000 + 1);
console.log(someNum);

if (someNum < 10) {
  console.log("Small");
} else if (someNum < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
