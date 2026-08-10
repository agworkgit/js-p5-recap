/* 
Note:
- Having the looping condition produce a false is not the only way a loop can finish.
- The 'break' statement has the effect of immediately jumping out of the enclosing loop.
*/

for (let current = 10; ; current++) {
  if (current % 9 == 0) {
    console.log(current);
    break;
  }
} // -> 18

/* 
Note:
- Using the % operator is an easy way to test whether a number is divisible by another number. If it is, the remainder of their division is 0.
- This loop won't stop until the break clause is executed.
- If you were to remove the 'break' statement or create a condition that always produces true, you'd be stuck in an 'infinite loop', which is usually a bad thing if not intended.
*/

/* 
Note:
- The 'continue' keyword is similar to 'break' in that it influences the progress of a loop. When 'continue' is encountered in a loop, control jumps out of the body and continues with the loop's next iteration.
*/

for (let count = 1; count <= 5; count++) {
  if (count === 3) {
    continue;
    // 'continue' will skip the block if count is 3 and continue with the remaining iterations
  }

  console.log(count);
}
