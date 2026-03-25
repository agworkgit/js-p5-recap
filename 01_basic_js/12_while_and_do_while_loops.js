// While loops
//
// while (condition) {
// statements
// }

// Do-while loops
//
// do {
// statements
// } while (condition)

// While example
let total = 0;
while (total < 30) {
  total += Math.floor(Math.random() * 5) + 1;
  console.log("while loop:", total);
}

// while loop: 1
// while loop: 6
// while loop: 7
// while loop: 8
// while loop: 12
// while loop: 17
// while loop: 21
// while loop: 23
// while loop: 28
// while loop: 30 - is 30 < 30? no. exit.

// Do while example
let sum = 0;
do {
  sum += Math.floor(Math.random() * 5) + 1;
  console.log("do loop:", sum);
} while (sum < 30);

// do loop: 5
// do loop: 10
// do loop: 14
// do loop: 19
// do loop: 22
// do loop: 23
// do loop: 24
// do loop: 28
// do loop: 30 - is 30 < 30? no. exit.
// So what's the difference?! The difference is that this kind of loop runs a minimum of one time regardless of the condition
