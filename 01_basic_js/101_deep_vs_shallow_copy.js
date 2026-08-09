let shallowArr = [123, "bob", true, null, undefined];

let deepArr = [
  123,
  "bob",
  true,
  ["Hank", "Brent", "Lacy"],
  { Rouleau: "Dog River", Wilcox: "Woolerton" },
];

let deepObj = {
  characters: ["Wanda", "Davis", "Emma", "Karen"],
  places: ["Corner Gas", "Ruby", "Foo Mart"],
  grad68: false,
  seasons: 5,
};

/* 
Shallow Copy Method examples
    1. arr1.slice(0)
    2. arr1.concat(arr2)
    3. Spread Operator
    4. Object.create({},obj)
    5. Object.assign({},obj)
    6. Array.from(arr1)
*/

let s = "steve";
let g = s;
s = "new value";
// console.log(s, g); // new value steve

// reference to shallowArr
let arr = shallowArr;
shallowArr[0] = 456;
// console.log(arr, shallowArr);
// both are the same
// [ 456, 'bob', true, null, undefined ] [ 456, 'bob', true, null, undefined ]

// how do we actually make a copy, not just a reference?
let arr1 = Array.from(shallowArr);
shallowArr[0] = 662;
// console.log(arr1, shallowArr);
// arr1 -> [ 456, 'bob', true, null, undefined ]
// shallowArr -> [ 662, 'bob', true, null, undefined ]

let arr2 = [...shallowArr]; // spread operator copy
let arr3 = [].concat(shallowArr); // concat with empty array
// all of these are Shallow Copies
// complex properties like arrays/objects we copy over a reference not a primitive

/* 
Deep Copy Methods
    1. JSON.parse(JSON.stringify())
    2. Service Workers postMessage() onmessage
    3. History API history.pushState(obj, title) history.state
    4. Notification API new Notification("title", {data: obj}).data
    5. Build a custom recursive function
*/

// let's say we want a true copy of the deepObj

// let newObj = deepObj; // creates a reference to deepObj (it's not a primitive)
// let newObj = { ...deepObj };
// newObj.places[0] = "Ottawa"; // both objects change, reference point in memory
// newObj.places = ["Ottawa", "Calcutta"]; // new reference created
// console.log(newObj, deepObj);

// stringify converts the object into a string
// parse converts it back from string into an object
let otherObj = JSON.parse(JSON.stringify(deepObj)); // simplest syntax
otherObj.places[0] = "Ottawa";
console.log(otherObj, deepObj);

// now a deep copy
/* 
otherObj
{ characters: [ 'Wanda', 'Davis', 'Emma', 'Karen' ],
  places: [ 'Ottawa', 'Ruby', 'Foo Mart' ],
  grad68: false,
  seasons: 5
} 

deepObj
{ characters: [ 'Wanda', 'Davis', 'Emma', 'Karen' ],
  places: [ 'Corner Gas', 'Ruby', 'Foo Mart' ],
  grad68: false,
  seasons: 5
} 
*/
