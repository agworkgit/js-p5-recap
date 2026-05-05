/* 
Pseudo-random Generators
Notes:
- Not 'real' random numbers
- DO NOT USE THIS FOR SECURITY!
*/

let num;
let people = ["John Bonham", "Robert Plant", "John Paul Jones", "Jimmy Page"];
let classes = ["highlight", "active", "sale"];
let log = console.log;

// Number between 1 and 3
num = Math.floor(Math.random() * (2 + 1)) + 1;
log(num);

// Number between 500 and 1000
num = Math.floor(Math.random() * (500 + 1)) + 500;
log(num);

// Random Person
let max = people.length - 1; // 4 - 1 = 3
let min = 0;

num = Math.floor(Math.random() * (max - min + 1));
log(people[num]);

// Random CSS Class
let max2 = classes.length - 1;
min = 0;

num = Math.floor(Math.random() * 3); // 0-2.99 floored -> 0, 1, 2 ints
log(classes[num]);
