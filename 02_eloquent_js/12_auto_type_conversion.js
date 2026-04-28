/* 
Notes:
- JavaScript is a very lenient language when it comes to keeping types in check.
- When an operator is applied to the "wrong" type of value, JavaScript will quietly convert that value to the type it needs. This is called 'type coercion'.
- When you do not want automatic type conversion to happen use === and !==, these operators will check for both same type and same value.
*/

console.log(8 * null); // -> 0
// The operation auto-cast the null into a number.

console.log("5" - 1); // -> 4
// Again, the string got auto-cast into a number.

console.log("5" + 1); // -> 51
// Here, the number is cast into a string, as the plus operator serves also as a concatenation operator.

console.log("five" * 2); // -> NaN
// The string can not be cast into a valid number.

console.log(false == 0); // -> true
// The number is auto-cast into a Boolean.

console.log(null == undefined); // -> true
console.log(null == 0); // -> false
