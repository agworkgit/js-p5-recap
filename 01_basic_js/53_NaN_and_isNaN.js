// NaN and isNaN()
//
// NaN is a property of the global object it represents a value which is 'Not A Number' (NaN)
// It will be unequal !== to ANYTHING inside if()
//
// is NaN() first converts the value to a Number, next the coerced number is tested for NaN

let log = console.log;

let t = isNaN(true);
let f = isNaN(false);
let n = isNaN(null);
let u = isNaN(undefined); // <==

log('t:', t); // false (coerced to 1)
log('f:', f); // false (coerced to 0)
log('n:', n); // false (coerced to 0)
log('u:', u); // true // <== can't be coerced! therefore NaN
// strings that contain numeric values will also be cast (coerced) to a number type
// timestamps are also numbers
// empty string coerces to 0
// string with empty spaces coerces to 0

// NaN does an initial IMPLICIT CONVERSION to number before asserting its value
