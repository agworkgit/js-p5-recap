/* 
Primitives and Objects
Data Types in JS:
- Primitives (go in memory): boolean, null, undefined, number, string, symbol
- Objects (properties / methods)
*/

// String literal
let nm = "bob";
// String object
let nm2 = new String("bob");

nm2.toUpperCase();

let nm3 = nm.toUpperCase(); // js does autoboxing - stuffs the primitve into an object wrapper
// 'BOB'

// Create an object
// let o = new Object(); // constructor
let o = {
  prop1: 1,
  prop1: false,
  prop3: "string",
  // method (obj prop that resolves to type function)
  prop4: function () {},
}; // literal

// JS auto-boxing (when you call method on a primitive value) - putting a primitive value into a wrapper of the correct type
