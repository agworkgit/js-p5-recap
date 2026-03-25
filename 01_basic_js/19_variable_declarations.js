// var, let, const

// variable scope
// create some global variables
var ranger = "Aragorn";
// var = global or local
let elf = "Legolas";
// let = global/local/block(anywhere between curly braces)
const DWARF = "Gimli"; // cannot be reassigned!, block level scoped
let hobbit = "Sam";

function goToMountDoom() {
  for (var i = 0; i < 100; i++) {
    // i is a local scope variable
  }
  for (let c = 0; c < 100; c++) {
    // c exists only inside here!
    // c is a block scope variable
  }
  console.log("i", i); // i 100 (no problem here, i is a local variable inside the function)
  console.log("c", c); // hence, c is not defined here!
  let hobbit = "Frodo";
}

function visitLothLorien() {
  elf = "Galadriel";
  ranger = "Strider";
  DWARF = "Gloin";
  let hobbit = "Bilbo";
}

goToMountDoom();
visitLothLorien();

// Transition from using 'var' to 'let', it's more secure!
