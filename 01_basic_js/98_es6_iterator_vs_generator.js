/* 
ES6 Iterators and Generators
Arrays, Strings, Maps, Sets, NodeLists - have built-in iterators

{Object} => Iterator => Generator (wrapper around the Iterator)
*/

let log = console.log;

let characters = ["Finn", "Poe", "Rey", "Kylo", "Luke", "Leia"];

function* genny() {
  yield characters[0];
  yield characters[1];
  // return; // from here on we get undefined if we have this return
  yield characters[2];
  yield characters[3];
  yield characters[4];
  yield characters[5];
  // default behaviour -> return undefined
}

let iter = genny();
// log(iter); // Object [Generator] {}
// log(iter.next()); // { value: 'a', done: false }
// log(iter.next()); // { value: undefined, done: true }
// log(iter.next());
// log(iter.next());
// log(iter.next()); // { value: undefined, done: true }

// { value: 'a', done: false }
// { value: 'b', done: false }
// { value: 'c', done: false }
// { value: 'd', done: false }

let starwars8 = {
  title: "The Last Jedi",
  director: "Rian Johnson",
  year: 2017,
  boxOffice: "1.3B",
};

// for (let p of starwars8) {
//   log(p);
// }
// TypeError: starwars8 is not iterable

// if you want to use an interator to step through an object, you have to build it

let count = -1; // i

// generator object
let SW8 = {
  // unique value, we can create an iterator function, returns one object
  [Symbol.iterator]: function () {
    return {
      next: () => {
        count++;
        switch (count) {
          case 0:
            return {
              value: starwars8.title,
              done: false,
            };
          case 1:
            return {
              value: starwars8.year,
              done: false,
            };
          case 2:
            return {
              value: starwars8.director,
              done: false,
            };
          case 3:
            return {
              value: undefined,
              done: true,
            };
          case 4:
            return {
              value: undefined,
              done: true,
            };
        }
      },
    };
  },
};

let data = SW8[Symbol.iterator](); // we're calling this function which is going to return the iterator object
log(data.next()); // { value: 'The Last Jedi', done: false }
