// The 'typeof' operator
// Find value type

let log = console.log;

let str = "Winchester";
let num = 13;
let bool = true;
let obj = { prop: "Dean" };
let arr = ["Josh", "Lindsey", "Ashley", "Austin", "Chairwoman"];
let today = new Date();
let dt = Date();
let fn = function () {};

log("typeof str:\t", typeof str); // -> string
log("typeof num:\t", typeof num); // -> number
log("typeof bool:\t", typeof bool); // -> boolean

log("typeof obj:\t", typeof obj); // -> object
log("typeof arr:\t", typeof arr); // -> object

/* 
Note:
- Testing if something is an Array.
*/

log("isArray arr:\t", Array.isArray(arr)); // -> true

log("typeof today:\t", typeof today); // -> object
log("typeof dt:\t", typeof dt); // -> string

log("typeof fn:\t", typeof fn); // -> function

/* 
Note:
- Special types:
    - NaN
    - undefined
    - null
*/

log("typeof NaN:\t", typeof NaN); // -> number
log("typeof undefined:\t", typeof undefined); // -> undefined
log("typeof null:\t", typeof null); // -> object
