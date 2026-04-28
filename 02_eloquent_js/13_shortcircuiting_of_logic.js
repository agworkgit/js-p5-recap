/* 
Notes:
- The logical operators && and || will convert the value of their left-side to Boolean type in order to decide what to do. Depending on the result of the conversion, they will return either the original left-side value or the right-hand value.
- We can use this functionality to fallback on a default value.
*/

/* 
LOGICAL OR ||, will return the value to its left if the value gets converted to true, or the value on the right-side otherwise.
*/

console.log(null || "user"); // -> 'user'
console.log("Agnes" || "user"); // -> 'Agnes'

/* 
NULLISH COALESCING ??, will return the value to its right only if the one on the left is null or undefined, not if it is some other value that can be converted to false.
*/

console.log(0 || 100); // -> 100
console.log(0 ?? 100); // -> 0
console.log(null ?? 100); // -> 100

/* 
LOGICAL AND &&, when the left value coverts to false, it returns that value, else it returns the value to its right.
*/
