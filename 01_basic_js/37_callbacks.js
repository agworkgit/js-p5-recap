// Callback functions
// Built-in callback functions: setTimeout, arr.forEach, geolocation.getCurrentPosition

// Example 1

let names = ["Inga", "Tom", "Mattias", "Carlos"];

function hello(nm) {
  console.log("Hello", nm);
}

names.forEach(hello); // <- wants a callback to call for each iteration (item)

// Example 2

Navigator.geolocation.getCurrentPosition(gotPosition, positionError, {}); // -> {} === options obj

function gotPosition(position) {
  // a position obj with all info about current geo location
}

function positionError(error) {
  // an error object
}

/*
setTimeout(
  (name) => {
    console.log("hello", name);
  },
  3000,
  "Bob",
);
*/

/* Making your own
function doThing(other) {
  let x = 7;
  // do lots of other things
  // ...
  let name = "Steve";
  other(name); //
}

function hello(nm) {
  console.log("Hello", nm);
}

doThing(hello);

// call doThing(pass hello), hello expects nm (from other(name)) -> prints Hello Steve
*/
