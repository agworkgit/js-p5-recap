/* 
indexOf() and lastIndexOf() string methods
Notes:
- indexOf lets us search for the index of any string inside another string.
- The searches are case sensitive.
- If the target index is not found the return is -1.
- Second argument tells indexOf to start its search from that index onward.
*/

let log = console.log;

let word = "Excalibur";
let sentence = "In the end, we decided to sell the children and go on vacation.";

let whereIsA = word.indexOf('a'); // if we were to search for 'e' we get -1 (or does not exist)
log(whereIsA); // index 3

// To find the capital E in word
// We first must convert the string to toLowerCase() before searching for the indexOf
let lowercaseWord = word.toLowerCase();
let whereIsE = lowercaseWord.indexOf('e');
log (whereIsE); // index 0

// lastIndexOf does the same thing, but will start searching at the bottom of the string and go backward to find the first result
let whereIsTheLastE = sentence.lastIndexOf('e');
log(whereIsTheLastE); // Inside of word 'children' at index 41
