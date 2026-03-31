// Truthy and Falsy in JavaScript
// Boolean-ish
// Falsy values -> null, undefined, 0, false, '', "", NaN - FALSE

let log = console.log;

let bob; // this is declared, but 'undefined', no assigned value
let es = "";
let z = 0;
let n = null;
let u = undefined;
let f = false;
let i = NaN;

if (es || z || n || u || f || i) {
  log("The true part");
} else {
  log("The false part");
} // The false part

// Anything other than these values will be considered Truthy
