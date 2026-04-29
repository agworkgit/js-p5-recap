// Composition VS Inheritance

// INHERITANCE
// - PARENT > CHILDREN OBJECTS > GRAND CHILDREN > ...
// - Character > Human > Sam
// - Character > Robot > x73

/* 
Notes:
- This works well if things are kept relatively simple.
- If you want to combine methods from the children into a new class, that's when you start to run into problems.
- e.g. Character > Cyborg (Human + Robot methods) > Dolph
- Consider well if your architecture might change before implementing an inheritance structure. Some refactoring will be required when that happens.
*/

const Character = {
  talk: function (...msg) {
    console.log(msg.join(" "));
  },
};

const Human = Object.create(Character, {
  speed: { value: 3 },
  name: { value: "Hector" },
});

Human.walk = function () {
  this.talk(this.name, "walking");
};

Human.eat = function () {
  this.talk(this.name, "eating");
};

const Robot = Object.create(Character, {
  speed: { value: 8 },
  id: { value: "THX1138" },
});

Robot.drive = function () {
  this.talk(this.id, "\u26A1", "driving");
};

Robot.wifi = function () {
  this.talk(this.id, "connecting");
};

// New instances

const sam = Object.create(Human, { name: { value: "Samuel" } });
sam.walk(); // -> Samuel walking
sam.talk("Hello from Samuel"); // -> Hello from Samuel

const x73 = Object.create(Robot, { id: { value: "x73" } });
x73.drive(); // -> x73 ⚡ driving
x73.wifi(); // -> x73 connecting

// COMPOSITION

/* 
Notes:
- We will take the methods above and turn them into objects themselves.
- When we create new constructors this allows us to mix and match the methods.
*/

// Method containers

const talker = (state) => ({
  talk: (...msg) => console.log(msg.join(" ")),
});

const walker = (state) => ({
  walk: () => {
    let nm = state.name || state.id;
    console.log(nm, "walking");
  },
});

const eater = (state) => ({
  eat: () => {
    let nm = state.name || state.id;
    console.log(nm, "eating");
  },
});

const driver = (state) => ({
  drive: () => {
    let nm = state.name || state.id;
    console.log(nm, "driving");
  },
});

const wifier = (state) => ({
  wifi: () => {
    let nm = state.name || state.id;
    console.log(nm, "connecting");
  },
});

// Constructor (?)

const Person = (name, speed = 3) => {
  // This is where we assign the state!
  let state = {
    name,
    speed,
  };

  // And we're passing it here
  return Object.assign({}, talker(state), walker(state), eater(state));
};

// New Instance (we passed only the name, the speed is defaulted to be 3 but we can provide that too)

let Bob = Person("Bob");
Bob.talk("Hello from Bob"); // -> Hello from Bob
Bob.eat(); // -> Bob eating

// Constructor (?)

let Android = (id, speed = 6) => {
  let state = {
    id,
    speed,
  };

  return Object.assign({}, talker(state), driver(state), wifier(state));
};

let k45 = Android("k45");
k45.drive(); // -> k45 driving
k45.wifi(); // -> k45 connecting

/* 
Note:
- Out Cyborg problem is now solved, we can mix and match the methods without refactoring.
*/

const Cyborg = (name, speed) => {
  let state = {
    name,
    speed,
  };

  return Object.assign(
    {},
    talker(state),
    walker(state),
    eater(state),
    wifier(state),
  );
};

let dolph = Cyborg("Dolph", 9);
dolph.walk(); // -> Dolph walking
dolph.wifi(); // -> Dolph connecting
