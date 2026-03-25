// JS for...in loops (object looping)
let monsters = {
  Canada: "Sasquatch",
  Nepal: "Yeti",
  Scotland: "Loch Ness Monster",
};

console.log(monsters.length); // undefined

for (let monster in monsters) {
  console.log(monster);
}

// Looping keys/index (properties):
// Canada
// Nepal
// Scotland

for (let monster in monsters) {
  console.log(monsters[monster]);
}

// Looping values:
// Sasquatch
// Yeti
// Loch Ness Monster

// You can also loop through arrays with for...in
let pets = ["Woody", "Flakey", "Sparky"];

// Looping array with for...in
for (let pet in pets) {
  console.log(pets[pet]);
}

// 'pet' becomes the index (e.g 0, 1, 2)
// 'pets' is the array we are looping through
// Looping array values:
// Woody
// Flakey
// Sparky
