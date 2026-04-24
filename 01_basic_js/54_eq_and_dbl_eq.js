// == and ===
// equality vs strict equality
// what are the differences between the two?
// The negative versions are != and !==
// not equal and strictly non-equal

let a, b, obj1, obj2, copy1, copy2;
a = 5;
b = 5;

obj1 = { prop: "value" };
obj2 = { prop: "value" };

copy1 = obj1;
copy2 = obj1;

// numbers

if (a == b) {
  console.log("a b are double equal");
} else {
  console.log("a b are not equal");
} // a b are double eq

if (a === b) {
  console.log("a b are triple equal");
} else {
  console.log("obj1 obj2 are not triple equal");
} // a b are triple eq

// objects

if (obj1 == obj2) {
  console.log("obj1 obj2 are double equal");
} else {
  console.log("obj1 obj2 are not equal");
} // obj1 obj2 are NOT double eq

if (obj1 === obj2) {
  console.log("obj1 obj2 are triple equal");
} else {
  console.log("obj1 obj2 are not triple equal");
} // obj1 obj2 are NOT triple eq

// copies of the same thing

if (copy1 == copy2) {
  console.log("copy1 copy2 are double equal");
} else {
  console.log("copy1 copy2 are not equal");
} // copy1 copy2 are double eq

if (copy1 === copy2) {
  console.log("copy1 copy2 are triple equal");
} else {
  console.log("copy1 copy2 are not triple equal");
} // copy1 copy2 are triple eq

// What about if we were to compare HTML DOM nodes?
// If you compare two nodes asigned to different vars, they'll both be equal in javascript's eyes
