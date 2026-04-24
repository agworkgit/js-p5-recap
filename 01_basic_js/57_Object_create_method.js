// Object.create(prototype, propertiesObject) method
// propertiesObject same as 2nd argument from Object.defineProperties()

let obj = {
  name: "Batman",
};

let obj2 = Object.create(obj, {}); // create empty object
console.log(obj2); // {}
console.log(obj2.name);
// 'Batman' -> obj2 went up the proto chain to find the 'name' property and found it on 'obj'

let obj3 = Object.create(obj2, {
  fullName: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: "Bruce Wayne",
  },
  hasBatmobile: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: true,
  },
});

console.log(obj3); // { fullName: 'Bruce Wayne', hasBatmobile: true }
console.log(obj3.name); // goes up the proto chain to find the 'name' prop, 'Batman'
