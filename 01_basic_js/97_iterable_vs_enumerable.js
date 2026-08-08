/* 
for...of loops VS for...in loops

iterable vs enumerable
*/

let log = console.log;

let names = ["Gandalf", "Bilbo", "Aragorn", "Gimli"];
names.elf = "Legolas";
Object.defineProperty(names, "ent", { value: "Treebeard", enumerable: false }); // ???

let middleEarth = {
  towns: ["Hobbiton", "Rivendell"],
  races: ["Elves", "Hobbits", "Men"],
};

middleEarth.creator = "J.R.R. Tolkien";
Object.defineProperty(middleEarth, "age", { value: "3rd", enumerable: true });

// for (let p in names) {
//   log("in names", p);
// }

// indexes!
// in names 0
// in names 1
// in names 2
// in names 3
// in names elf

// for...in is looking through all of the enumerable properties inside of the object called 'names'

// for (let s in middleEarth) {
//   log("in Middlearth", s);
// }

// in Middlearth towns
// in Middlearth races
// in Middlearth creator

// we are not seeing 'age', the fourth parameter, because it is set to enumerable: false

// in Middlearth towns
// in Middlearth races
// in Middlearth creator
// in Middlearth age (now it does show up, with enumerable: true)

// for...in goes through enumerable
// for...of is designed to use the iterators
// an 'iterator' is simply put another object that's attached to the array that tells some other function how to access all the different values that are inside of it
// objects by default don't have built-in iterators (something like Set() does)

// for (let p of names) {
//   log("of names", p);
// }

// values only for iterators!
// of names Gandalf
// of names Bilbo
// of names Aragorn
// of names Gimli
// additional properties are not part of it

// for (let p of middleEarth) {
//   log("of middleEarth", p);
// }
// objects by default are not iterable!
// if you want to iterate over an object you have to build your own custom object iterator

for (let p of middleEarth.towns) {
  log("of middleEarth", p);
}
