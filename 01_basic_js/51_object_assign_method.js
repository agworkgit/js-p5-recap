// Object.assign(target, sources...) method
// used to copy objects OR to merge objects

let obj1 = { arms: true, armCount: 2 };
let obj2 = { weapons: ["missile launcher", "reciprocating saw"] };
let obj3 = { canMove: true, legs: 0, treads: 2 };

let arms = Object.assign({ hasHands: true, arms: false }, obj1);
// the 'arms' value in target gets overriden by the 'arms' value inside the source!
console.log(arms); // { hasHands: true, arms: true, armCount: 2 }

let robot = Object.assign({}, obj1, obj2, obj3);
console.log(robot);
// {
//   arms: true,
//   armCount: 2,
//   weapons: [ 'missile launcher', 'reciprocating saw' ],
//   canMove: true,
//   legs: 0,
//   treads: 2
// }
