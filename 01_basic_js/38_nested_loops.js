// Nested loops and multi-dimensional objects
// We can use nested loops to access all the elements inside multi-dimensional arrays or objects

let twoDimensions = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 22],
  [123, 35, 3456, 234, 30],
];

let bigHero = {
  characters: [
    {
      name: "Hiro",
      voice: "Ryan Potter",
    },
    { name: "Baymax", voice: "Scott Adsit" },
    { name: "Go Go Tamago", voice: "Jamie Chung" },
    { name: "Fred", voice: "T.J. Miller" },
  ],
};

// Nested for loops (obj)
let chars = bigHero["characters"]; // bigHero.characters
for (let i = 0, len = chars.length; i < len; i++) {
  // console.log(chars[i]);
  // console.log(chars[i].name);
  // console.log(chars[i]["voice"]);
  for (let prop in chars[i]) {
    // for...in loop, when we don't know the number of props we will loop through
    console.log(prop, chars[i][prop]); // <- we use bracket notation because prop is a string!
  }
}

// Nested for loops (arrays)
// let rows = twoDimensions.length; // 3

// for (let i = 0; i < rows; i++) {
//   let items = twoDimensions[i].length;
//   console.log("index", i, "has", items, "items");
//   for (let n = 0; n < items; n++) {
//     console.log("value is", twoDimensions[i][n], "at index", n);
//   }
// }
