/* 
Object Prototypes
Notes:
- JS is a prototype based language
- Every object that you create automatically gets a prototype object attached
- [toString, valueOf, isPrototypeOf, hasOwnProperty...]
- obj -> obj.prototype (Object prototype) -> null
*/

let obj1 = {
  prop1: () => {
    console.log("prop1");
  },
};

obj1.prop1();

// obj.toString(); // attaches to the object???

// obj.prop2(); // this doesn't exist but js will go looking in the prototype chain, if nothing is found the parent object will point to null (end of prototype chain)

let obj2 = {
  prop2: () => {
    console.log("prop2");
  },
};

// We are setting obj1 to be the prototype of obj2
Object.setPrototypeOf(obj2, obj1);

obj2.prop2();
obj2.prop1(); // prop1 is a method in obj1, but we are calling it from obj2!
obj2.toString();
// no error -> obj2 looks at obj1, obj1 looks at the default object and above that is null

for (let prop in obj2) {
  console.log("loop:", prop);
  // the loop will not list all the properties sitting on the default js Object object
}
// loop: prop2
// loop: prop1

console.log(Object.getPrototypeOf(obj2)); // this is a pointer to obj1
// { prop1: [Function: prop1] } -> obj1

console.log(Object.getOwnPropertyNames(obj2));
// gets a list of all props in obj2 -> [ 'prop2' ]

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj1)));
/* 
[
  'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  '__proto__',
  'toLocaleString'
] 
*/

/* 
Other ways to create objects in JS
*/

// Object.create()

Object.create(proto, propertiesObject);

// Object.assign(target, source1, source2, /* …, */ sourceN)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
