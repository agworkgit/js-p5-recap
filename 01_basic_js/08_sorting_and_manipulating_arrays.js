/**
 * 0 - Rey
 * 1 - Chewie
 * 2 - BB8
 * 3 - Obiwan
 */

var chars = ["Luke", "Leia", "Han", "Chewie"];
console.log(chars);
// [ 'Luke', 'Leia', 'Han', 'Chewie' ]

// .splice method

// Start at index 0, remove 1 item, replace with optional arg provided
chars.splice(0, 1, "Rey");
console.log(chars);
// [ 'Rey', 'Leia', 'Han', 'Chewie' ]

chars.splice(1, 2, "Kylo");
// take out 2 items, replace with optional
console.log(chars);
// [ 'Rey', 'Kylo', 'Chewie' ]

chars.splice(1, 1, "C3PO", "R2D2");
// take out 1 items, replace with 2 optionals
console.log(chars);
// [ 'Rey', 'C3PO', 'R2D2', 'Chewie' ]

chars.splice(1, 2);
console.log(chars);
// [ 'Rey', 'Chewie' ]

// .push method -> add new items to the top (end) of the array
chars.push("BB8");
chars.push("Obiwan");
console.log(chars);

// .reverse -> reverse the indexes of the array
chars.reverse();
console.log(chars);
// [ 'Obiwan', 'BB8', 'Chewie', 'Rey' ]

// .sort -> sort by alphabetical order
chars.sort();
console.log(chars);
// [ 'BB8', 'Chewie', 'Obiwan', 'Rey' ]

// .indexOf -> find the index of an item inside an array
var pos1 = chars.indexOf("Luke");
console.log(pos1); // -1 (meaning not found)
var pos2 = chars.indexOf("BB8");
console.log(pos2); // 0 (found at index 0)

// .lastIndexOf -> similar to above, the difference is it starts at the end of the array
// - if we have two of the same item in the array, this method helps us get only the position of the last entry of the searched item
