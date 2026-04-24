// delete keyword in JS
// How to remove properties from Objects

let log = console.log;

let obj = {
  prop1: 42,
  prop2: "Meaning of Life",
  prop3: function () {},
  // prop4 does not exist = undefined
};

obj.prop1 = null;
obj.prop2 = undefined;

// Delete will wipe it completely
// Setting it to undefined will keep the declaration
delete obj.prop3; // delete prop mentioned from the object

log(obj.prop1, obj.prop2, obj.prop3, obj.prop4);
// null(i intentionally want nothing stored), undefined, undefined, undefined

// What props are left in obj?
for (let p in obj) {
  log(p);
}
// prop1
// prop2
