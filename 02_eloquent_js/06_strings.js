/* 
Notes:
- + can be used to concatenate (glue) strings together.
- the String object has methods attached to it that can further manipulate strings.
- Single and double quotes behave the same, while Backticks (``) can also embed other values/variables.
- Template literal is written as ${} and its result will be computed, converted to a string, and slotted in the correct position.
*/

`Down on the sea`; // ticks
("Lie on the ocean"); // single quotes
("Float on the ocean"); // double quotes

let str = 'A newline character is written like "\\n".';
let nl_str = "This is the first line\nThis is the second line";

console.log(nl_str);

let con = "con";
let cat = "cat";
let enate = "enate";
let full_str = con + cat + enate;

console.log(full_str);

let embed = `half of 100 is ${100 / 2}`;
let var_embed = `the value of PI is roughly ${Math.PI}`;

console.log(embed);
console.log(var_embed);
