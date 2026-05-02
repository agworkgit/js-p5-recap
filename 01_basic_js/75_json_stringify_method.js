/*
Lesser known features when using JSON.stringify() 
Notes:
-
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

// REGULAR STRINGIFY

str = JSON.stringify(obj);
log("1", str);

/* 
1 {
    "name":"Walter",
    "last":"Sobchak",
    "age":50,
    "angry":true,
    "bestscore":200,
    "armed":true
    }
*/

// ARRAY PARAM

str = JSON.stringify(obj, ["age", "angry", "last"]);
// The array holds keys of the object that we want to allow!
log("2", str);

/* 
2 {"age":50,"angry":true,"last":"Sobchak"}
*/

// FUNCTION PARAM

function replace(key, val) {
  if (typeof val === "string") {
    return undefined; // -> setting values to undefined will remove them from the object
  } else {
    return val;
  }
}

str = JSON.stringify(obj, replace); // 'replace' will be a function
log("3", str);

/* 
3 {"age":50,"angry":true,"bestscore":200,"armed":true}
*/

// ADDITIONAL CHARACTERS (LOG PRETTIFIER)

str = JSON.stringify(obj, null, 4);
log("4", str);

/* 
4 {
    "name": "Walter",
    "last": "Sobchak",
    "age": 50,
    "angry": true,
    "bestscore": 200,
    "armed": true
}
*/
