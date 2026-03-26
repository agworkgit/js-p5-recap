// Arrays of Objects
// Efficiently combining and chaining Array methods and Arrow functions
// person.email.indexOf("@replicant.io") > -1
// Find the names of all the people who have "replicant.io" emails

let people = [
  { id: 123, name: "Rick Deckard", email: "rick@bladerunner.org" },
  { id: 456, name: "Roy Batty", email: "roy@replicant.io" },
  { id: 789, name: "J.F. Sebastian", email: "j.f@tyler.com" },
  { id: 258, name: "Pris", email: "pris@replicant.io" },
];

// Two step version
let replicants = people.filter(function (val, idx) {
  return val.email.includes("replicant.io");
});

let names = people.map(function (val, idx) {
  return val.name;
});

console.log("List of replicants:", replicants);

// List of replicants: [
//   { id: 456, name: 'Roy Batty', email: 'roy@replicant.io' },
//   { id: 258, name: 'Pris', email: 'pris@replicant.io' }
// ]

console.log("List of replicant names:", names);

// List of replicant names: [ 'Rick Deckard', 'Roy Batty', 'J.F. Sebastian', 'Pris' ]

// Chain the two steps
let replicantNames = people
  .filter(function (val, idx) {
    return val.email.includes("replicant.io");
  })
  .map(function (val, idx) {
    return val.name;
  });

console.log("List of replicant names:", replicantNames);

// List of replicant names: [ 'Roy Batty', 'Pris' ]

// Arrow function version
let rn = people
  .filter((val) => val.email.includes("replicant"))
  .map((val) => val.name);
console.log("List of replicant names:", rn);

// List of replicant names: [ 'Roy Batty', 'Pris' ]
