/*
Lesser known features when using JSON.stringify() 
Notes:
- A great way to encode and decode objects if you work with localStorage.
*/

let obj = {
  name: "Walter",
  last: "Sobchak",
  age: 50,
  angry: true,
  bestscore: 200,
  armed: true,
};

let log = console.log;
let str;

// REGULAR CONVERSION

str = JSON.stringify(obj);
log("1:", str);

/* 1: {
  "name":"Walter",
  "last":"Sobchak",
  "age":50,
  "angry":true,
  "bestscore":200,
  "armed":true
} */

// FILTER OBJ PROPS WITH ARRAY

str = JSON.stringify(obj, ["age", "angry", "last"]);
log("2:", str);

/* 2: {
  "age":50,
  "angry":true,
  "last":"Sobchak"
} */

// PROCESS PROPS WITH A FUNCTION

function replace1(key, val) {
  if (typeof val === "string") {
    return "STRING";
  } else {
    return val;
  }
}

str = JSON.stringify(obj, replace1);
log("3:", str);

/* 3: {
  "name":"STRING",
  "last":"STRING",
  "age":50,
  "angry":true,
  "bestscore":200,
  "armed":true
} */

function replace2(key, val) {
  // this function runs for every prop in the object
  // and filters out what we specified in the if...else
  if (typeof val === "string") {
    return undefined; // setting to undefined removes the object prop!
  } else {
    return val;
  }
}

str = JSON.stringify(obj, replace2);
log("4:", str);

/* 4: {
  "age":50,
  "angry":true,
  "bestscore":200,
  "armed":true
} */

// FORMAT OUTPUT

str = JSON.stringify(obj, null, 4);
// spaces = 4, we can also pass a format string e.g. '\t\t\n' etc...
log("5:", str);

/* 5: {
    "name": "Walter",
    "last": "Sobchak",
    "age": 50,
    "angry": true,
    "bestscore": 200,
    "armed": true
} */
