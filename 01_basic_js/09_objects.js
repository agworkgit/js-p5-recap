// Objects -> a list of property(key)/value pairs
let dog = { name: "Flakey", type: "dog" };
let cat = { name: "Grumpatron", type: "cat" };
console.log(dog);
// { name: 'Flakey', type: 'dog' }

// Array -> a list of indexed values
let petNames = ["Woody", "Sparky"];
console.log(petNames);
// [ 'Woody', 'Sparky' ]

let pets = [dog, cat, { name: "Flurby", type: "hamster" }];
console.log(pets);
/*
An array that contains two objects
[
  { name: 'Flakey', type: 'dog' },
  { name: 'Grumpatron', type: 'cat' }
]
*/
pets.push({ name: "Speedy", type: "rabbit" });
console.log(pets);
/*
[
  { name: 'Flakey', type: 'dog' },
  { name: 'Grumpatron', type: 'cat' },
  { name: 'Speedy', type: 'rabbit' }
]
*/

// Adding new object properties
cat.age = 2; // dot notation
dog["age"] = 7; // bracket notation
pets[2].age = 2; // adding new properties to object literals in an array
pets[2]["age"] = 3; // or via bracket notation
console.log(pets);
/*
[
  { name: 'Flakey', type: 'dog', age: 7 },
  { name: 'Grumpatron', type: 'cat', age: 2 },
  { name: 'Flurby', type: 'hamster', age: 3 },
  { name: 'Speedy', type: 'rabbit' }
]
*/
