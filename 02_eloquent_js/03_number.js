/* 
Notes:
- JS uses a fixed number of 64 bits. (9 quintillion digits)
- You only need to worry about overflow when dealing with truly astronomical numbers. 
- Some bits are allocated to the signage and some to the floating point.
- Treat fractional digital numbers as approximations, not precise values. (Limited number of digits available for series that go on infinitely, like PI).
*/

// Big numbers can also be represented using scientific notation (e, for exponent)
2.998e8; // -> 2.998 * 10^8 = 299,800,000

// BigInt??? 123235435234234n???
