// Array custom sort() function
let log = console.log;

const movies = [
  "The Godfather",
  "The Shawshank Redemption",
  "Pulp Fiction",
  "Inception",
  "The Dark Knight",
  "Forrest Gump",
  "Fight Club",
  "The Matrix",
  "Goodfellas",
  "Star Wars: Episode IV - A New Hope",
  "Interstellar",
  "Titanic",
  "Jurassic Park",
  "Spirited Away",
  "Schindler's List",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Back to the Future",
  "Casablanca",
  "Psycho",
  "Parasite",
];

const numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283];

let people = [
  { id: 123, name: "Rick Deckard", email: "rick@bladerunner.org" },
  { id: 456, name: "Roy Batty", email: "roy@replicant.io" },
  { id: 789, name: "J.F. Sebastian", email: "j.f@tyler.com" },
  { id: 258, name: "Pris", email: "pris@replicant.io" },
];

// the problem with numbers

log(movies.sort()); // ok - alphabetical order
log(numbers.sort()); // not okay, sorts by 1st char

// the solution -> using a custom sort

let sortedNum = numbers.sort((a, b) => {
  // log("sorting", a, b);
  // takes in the values and does comparisons
  if (a > b) return 1;
  else if (b > a) return -1;
  else return 0;
}); // define a function to run inside .sort(func to compare)
log(sortedNum);

// what about objects?

let sortedPeople = people.sort((a, b) => {
  if (a.name > b.name) return 1;
  else if (b.name > a.name) return -1;
  return 0; // want to sort by id? just change to a.id instead of a.name
});
log(sortedPeople);

// [
//   { id: 789, name: 'J.F. Sebastian', email: 'j.f@tyler.com' },
//   { id: 258, name: 'Pris', email: 'pris@replicant.io' },
//   { id: 123, name: 'Rick Deckard', email: 'rick@bladerunner.org' },
//   { id: 456, name: 'Roy Batty', email: 'roy@replicant.io' }
// ]
