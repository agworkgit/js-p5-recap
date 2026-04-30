/* 
Bitwise Operators and Binary Numbers

AND &
OR |
XOR ^
NOT ~
SHIFT LEFT <<
SHIFT RIGHT >> 

Notes:
- When you convert a decimal number to a string using toString(radix), you can provide a radix/base to which to convert it. 2 = binary, 16 = hex, 10 = decimal
*/

let log = console.log;

// Log decimal to binary conversions
let n = 10; // 1010
let i = 6; // 110
log(n.toString(2), i.toString(2));

// Log binary to decimal conversion
let b = 2;
log(b.toString(2)); // 10

// AND &
//1010
// 110
//0010 -> signifies the value that carries over when two nums are added

log("AND & ", n & i); // 2

// OR |
// 1010
//  110
// 1110 -> signifies all columns where we have a 1

log("OR | ", n | i); // 14

// XOR ^
// 1010
//  110
// 1100 -> carry over 1 only if not in both rows

log("XOR ^ ", n ^ i); // 12

// NOT ~
// ~1010
//  0101
// x = -(x + 1)

log("NOT ~ ", ~n); // -11

/* 
User Permissions:
(read, write, delete)
- You could use a single integer to store user permissions by looking at the binary level.
-> & 100 → "is read switch on?"
-> & 010 → "is write switch on?"
-> & 001 → "is delete switch on?"

e.g.
100 (4) - read
110 (6) - read, write
111 (7) - read, write, delete
*/

let accessLevel = 6;

let allowedToRead = (accessLevel & 4) !== 0 ? true : false;

// 0110  6
// 0100  AND 4
// 0100  4

let allowedToWrite = (accessLevel & 2) !== 0 ? true : false;

// 0110  6
// 0010  AND 2
// 0010  2

let allowedToDelete = (accessLevel & 1) !== 0 ? true : false;

log(allowedToRead, allowedToWrite, allowedToDelete);
// true true false

// SHIFT LEFT <<
// 111 << 1 -> 1110 (decimal 14)
// 1000 << 1 -> 10000 (decimal 16)
log(8 << 1); // 16
// Shifting 1 to the left is kind of like multiplying the number by 2

// SHIFT RIGHT >>
// 101010 >> 4 (shift places) -> 10 (decimal 2)
// 111 >> 1 -> 11 (decimal 3)
log(7 >> 1); // 3

/* 
Applications of shift operations:
- HEX colours
- FF3300
- 24bit values, 8bits red, 8bits green, 8bits blue
- GREEN -> Shift 8 >>, AND 11111111
- 111111110011001100000000 >> 8 = 1111111100110011
- 1111111100110011
- 0000000011111111
-         00110011
*/

let hexColour = 0xff3300;
let noBlue = hexColour >> 8; // drops the blue channel
let green = noBlue & 255; // value of green
log("green:", green, green.toString(16));
