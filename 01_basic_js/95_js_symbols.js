/* 
A symbol is a JS primitive data type (Number, String, Boolean, null, undefined, Symbol)

Every symbol value returned from Symbol() is unique.

A symbol value may be used as an identifier for object properties; this is the data type's only purpose.
*/

let log = console.log;

const s1 = Symbol(); // think of it as a unique ID
const s2 = Symbol(123);
const s3 = Symbol("steve");

log(s1, s2, s3);
// Symbol() Symbol(123) Symbol(steve) - these are just descriptions

log(Symbol() == Symbol()); // false
log(Symbol() === Symbol()); // false
// The proof that these are unique

log(typeof s2); // symbol

// If you use the method .for on the Symbol, that becomes the key to identify a Symbol

log(Symbol.for(123) === Symbol(123)); // false
//         key          description
log(Symbol.for(123) === Symbol.for(123)); // true
log(Symbol.keyFor(s2)); // undefined, has description but not key
let s5 = Symbol.for(555); // creates it or finds it
log(Symbol.keyFor(s5)); // returns the key -> 555

// Moving on to looking at objects

let obj = {};
obj["prop1"] = "value1";
obj["prop2"] = "value2";
obj[Symbol()] = "value3";
obj[Symbol()] = "value3";
obj[Symbol()] = "value3";
obj[Symbol()] = "value3";
obj["prop4"] = Symbol(); // you would not use Symbol as a value, no real purpose to it, but you can do it

for (let p in obj) {
  log(p, obj[p]);
}

// prop1 value1
// prop2 value2
// prop3 - does not show up! so the for...in loop does not include any prop inside of an object if the key is a Symbol
// prop4 Symbol()

log(JSON.stringify(obj)); // {"prop1":"value1","prop2":"value2"}

let s4 = Symbol.for("fred");
log(s4); // the symbol created with the key 'fred'
let k4 = Symbol.keyFor(s4);
log(k4); // 'fred'
