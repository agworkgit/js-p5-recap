// null and undefined in JS
//
// null = nothing, void, intentional emptiness
//
// undefined = the container exists but hasn't been given a value yet
// functions with no return statement will return 'undefined' by default

let log = console.log;

log(typeof null); // object
log(typeof undefined); // undefined

log(null === undefined); // false
log(null == undefined); // true

log(null === null); // true
log(null == null); // true

log(undefined === undefined); // true
log(undefined == undefined); // true

log(!null); // true

// Odd cases
log(isNaN(1 + null)); // false
log(isNaN(1 + undefined)); // true

// Note: default to using '===' for equivalency

let x;
log(x); // undefined, no value assigned

function abc() {
  // if we say 'return null', the function returns null
}
log(abc()); // undefined, no return specified

let y = global.blah;
log(y); // undefined, property does not exist on global object (which exists)

// let z = asdf.blah;
// log(z); // ReferenceError: asdf is not defined

let a = null;
log(a); // null
