// Array concat() method

let a = [2, 4, 6, 8];
let b = [1, 3, 5, 7];

let c = a.concat(b); // 1st way
console.log("c:", c);

let d = [].concat(a, b); // 2nd way -> even an empty array has the method
console.log("d:", d);

let e = [...a, ...b].sort(); // 3rd way -> spread operator
console.log("e:", e);
