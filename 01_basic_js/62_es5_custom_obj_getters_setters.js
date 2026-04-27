// es5/6 object methods
// New ways of declaring methods for objects
// 'getters' and 'setters' for object properties

// old way

let log = console.log;

let objOld = {
  prop1: 1979,
  prop2: "Alien",
  prop3: function () {
    log("called prop3 old");
  },
};

// objOld.prop1 = 1980;

// we can create getters/setters withing the object to control properties

// new way
// '_' prefix means private

let x = 7; // global
let objNew = {
  // Private prop, holds value internally
  _prop1: 1979,
  // getter (public property) - a method that gets a value privately, the user doesn't know the source of the value
  get prop1() {
    return this._prop1; // we can also add modifications to the return (i.e times result by 2)
  },
  // setter (takes a param) - modifies another internal prop
  set prop1(val) {
    this._prop1 = val;
  },
  prop2: "Alien",
  x, // the prop name automatically knows about the value given in the global scope!
  prop3() {
    log("called prop3 new");
  },
};

// prop3 now has a shorter syntax

objNew.prop3();
log(objNew.x); // 7

// Public get/set methods
log(objNew.prop1); // via getter -> 1979
objNew.prop1 = 1980; // modify prop1 via setter
log(objNew.prop1); // return prop1 -> 1980 via getter
log(objNew._prop1); // ??? (why can i still access the property directly??!)

// Why use getters/setters? (control, not privacy)
// -> Control, rules, or data transformation
// -> For privacy concerns use private fields with '#', or closures (older way)
