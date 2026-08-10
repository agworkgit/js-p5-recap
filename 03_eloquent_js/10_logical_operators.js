/* 
Notes:
- Logical AND is && (binary)
- Logical OR is || (binary)
- Logical NOT is ! (unary)
- Ternary operator 'expression' ? 'action for true' : 'action for false'
*/

console.log(true && false); // -> false
console.log(true && true); // -> true

console.log(false || true); // -> true
console.log(false || false); // -> false

console.log(!true); // -> false
console.log(!false); // -> true

console.log(true ? 1 : 2); // -> 1
console.log(false ? 1 : 2); // -> 2
