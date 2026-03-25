// && = AND
// || = OR
// They are used to create compound 'if statmenets'

let ingredients = [
  "lettuce",
  "tomato",
  "gouda",
  "brioche",
  "seitan",
  "tofu",
  "soy chunks",
];

let sandwichHas = function (ingredient) {
  for (let i of ingredients) {
    if (i == ingredient) {
      return true;
    }
  }
  return false;
  // if this line is omitted the interpreter returns undefined, which is also a falsy value
};

console.log(sandwichHas("lettuce")); // true

if (
  sandwichHas("seitan") ||
  sandwichHas("tofu") ||
  sandwichHas("veggie meat")
) {
  console.log("Sandwich has protein");
} else {
  console.log("No protein found.");
}

if (sandwichHas("lettuce") && sandwichHas("onion")) {
  console.log("It has both.");
} else {
  console.log("Maybe it has one, but not both.");
}

if ((sandwichHas("lettuce") && sandwichHas("gouda")) || sandwichHas("onion")) {
  console.log("gounda and lettuce, ... or onion");
} else {
  console.log("none");
}
