// Private variables

let log = console.log;

// closure
let obj = (function () {
  // local/blockscoped/private variables
  let _prop1 = "Starman";
  return {
    prop2: 1981,
    // public facing access below
    get prop1() {
      return _prop1;
    },
    set prop1(_val) {
      _prop1 = _val;
    },
  };
})(); // IIFE - immediately invoked function expression

log(obj); // { prop2: 1981, prop1: [Getter/Setter] }

for (let prop in obj) {
  log(prop);
}

// prop2
// prop1

log(obj.prop2); // 1981
log(obj.prop1); // 'Starman'
obj.prop1 = "The Big Lebowski";
log(obj.prop1); // 'The Big Lebowski'
log(obj._prop1); // undefined (due to being private)
