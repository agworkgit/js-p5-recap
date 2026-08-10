/* 
Notes:
- Comparisons will often produce Boolean values.
- Strings can also be compared, but yeld the following results:
    - They are sorted alphabetically.
    - Lowercase takes precedence to uppercase.
    - Non-alphabetical characters (!, -, ...) are also included in the ordering.
    - JS goes from left to right, comparing the Unicode character codes one by one.
- The is only one value in JS that does not equal itself, that is NaN ('not a number').
*/

console.log(3 > 2); // -> true
console.log(3 < 2); // -> false

console.log("Garnet" != "Ruby"); // -> true
console.log("Pearl" == "Amethyst"); // -> false

console.log(NaN == NaN); // -> false
