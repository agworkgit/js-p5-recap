// for loops
let names = [
  "Jeff Lebowski",
  "Donnie Karabatsos",
  "Walter Sobchak",
  "Bunny Lebowski",
  "Karl Hungus",
  "Brandt",
  "Maude Lebowski",
  "Jackie Treehorn",
];

let numNames = names.length;

// Incrementing
// init; test; increment
// for (let i = 0; i < numNames; i++) {
//   console.log(i + ". " + names[i]);
// }

// init; test; increment
for (let i = numNames - 1; i >= 0; i--) {
  console.log(i + ". " + names[i]);
}

// Forwards / Incrementing
// 0. Jeff Lebowski
// 1. Donnie Karabatsos
// 2. Walter Sobchak
// 3. Bunny Lebowski
// 4. Karl Hungus
// 5. Brandt
// 6. Maude Lebowski
// 7. Jackie Treehorn

// Backwards / Decrementing
// 7. Jackie Treehorn
// 6. Maude Lebowski
// 5. Brandt
// 4. Karl Hungus
// 3. Bunny Lebowski
// 2. Walter Sobchak
// 1. Donnie Karabatsos
// 0. Jeff Lebowski
