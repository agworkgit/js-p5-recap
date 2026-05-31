/*
 * Trimming and padding strings
 * trim(), trimLeft(), trimRight()
 * padStart(minLength, [, padString]), padEnd()
 */

let name = 'Sterling';
let longName = '   Sterling Archer   ';

// trimming = removal of white space at the beginning or end of your strings

let log = console.log;

log(longName.trim()); // 'Sterling Archer' (brand new string!, and the middle space is kept)

// padding = adding spaces, the opposite of trim

log(name.padStart(10)); // the original str length + the remainder in padding space = length 10 (so 2 spaces of padding)
// we can specify and optional string of characters that will replace the default SPACE character


