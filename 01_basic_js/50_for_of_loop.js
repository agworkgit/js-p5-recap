// for...of loops
// for...of vs for...in loops

let supernatural = {
  actors: [
    "Jared Padelecki",
    "Jensen Ackles",
    "Mark Sheppard",
    "Misha Collins",
  ],
  characters: ["Sam Winchester", "Dean Winchester", "Crowley", "Castiel"],
  seasons: 12,
};

for (let prop in supernatural) {
  console.log(prop);
  //   actors
  //   characters
  //   seasons
  console.log(
    supernatural[prop],
    "isArray:",
    Array.isArray(supernatural[prop]),
  );
  // shows the data inside actors, characters, or seasons
}

// for (let prop in supernatural.actors) {
//   console.log(prop);
//   console.log(supernatural.actors[prop]);
// }

// for...in
for (let name in supernatural.actors) {
  console.log(name);
  // Logs the indexes:
  // - 0
  // - 1
  // - 2
  // - 3
}

// for...of
for (let name of supernatural.actors) {
  console.log(name);
  // Logs the values:
  // - Jared Padelecki
  // - Jensen Ackles
  // - Mark Sheppard
  // - Misha Collins
}
