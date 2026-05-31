/* substring() and substr() String methods
 * str.substring(from, to)
 * str.substr(from, length)
 * both used to extract a sub string
 */

let log = console.log;

let str = "Nobody calls me Lebowski, you got the wrong guy, I'm the Dude, man.";

// substring();
// -> start idx, end idx

let name = str.substring(16, 24); // Lebowski // Note: Omitting the second param gets the rest of the string
log(name);

// substr();
// -> start idx, length
let nickname = str.substr(57, 4); // Dude
log(nickname);
// Note: If we specify a negative for the first param, substr will start at the end and go backwards

