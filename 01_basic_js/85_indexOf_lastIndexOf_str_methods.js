/* 
indexOf() and lastIndexOf() string methods
Notes:
- indexOf lets us search for the index of any string inside another string.
- The searches are case sensitive.
- If the target index is not found the return is -1
*/

let log = console.log;

let word = "Excalibur";
let sentence =
  "In the end, we decided to sell the children and go on vacation.";

log(sentence.indexOf("end")); // index 7
log(sentence.lastIndexOf("I")); // index 0

log(sentence.toLowerCase().indexOf("i")); // index 0
