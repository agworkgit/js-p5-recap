/*
 * Math.round(), floor(), ceil(), - returns Number
 * Number.toFixed(), toExponential(), toPrecision(), - returns String
 * Number.parseInt(), parseFloat(), - returns Number
 */

let num1 = 1111.567;
let str1 = "1111.567 tonnes of apple sauce";
let dec1 = 0.000161;

let log = console.log;

log(Math.round(num1)); // 1112 int - over 0.5 round up, under 0.5 round down
log(Math.floor(num1)); // 1111 int - rounded down
log(Math.ceil(num1)); // 1112 int - rounded up

log(num1.toFixed(2)); // 1111.57 (last digit made the one to its left to round up!) str
log(num1.toExponential(2)); // 1.11e+3 - exponent notation (e+3 = 10^3)
log(dec1.toPrecision(1)); // 0.0002 (goes to the most significant digit and rounds off the rest into it, that's why we get the 2)
// if we increase the precision beyond what is needed, additional zeros will be inserted after the last digit

// extract int portion out of strings
log(parseInt(str1)); // 1111 - int
log(parseFloat(str1)); // 1111.567 - float
