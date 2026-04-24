// Understanding .call(), .apply(), and .bind()
// call and apply explicitly define what an object will point to

let bob = function (num, str) {
  console.log("bob", num, str, this);
  return true;
};

let bill = {
  name: "Bill Murray",
  movie: "Lost in Translation",
  myMethod: function (fn) {
    // arguments = accessing the arguments that bill has when called below!
    let n = arguments[1]; // arg1 -> 4
    let s = arguments[2]; // arg2 -> 'ciao'
    fn.apply(bill, [n, s]); // we are accessing the function call arguments from the inside, just above!
    // fn.call(bill, n, s); // almost the same as .apply()
  },
};

// bob(1, "hello"); // this = undefined (DOM would default to its global object)
// bill.myMethod(bob); // bob undefined undefined undefined

// apply/bind

// set context manually
bob.call(bill, 2, "goodbye");
// bob 2 goodbye {
//   name: 'Bill Murray',
//   movie: 'Lost in Translation',
//   myMethod: [Function: myMethod]
// } -> 'this'

let arrApply = [3, "hi"]; // same as slotting the params manually into .apply
bob.apply(bill, arrApply); // -> 3, 'hi' get combined into an array
// bob 3 hi {
//   name: 'Bill Murray',
//   movie: 'Lost in Translation',
//   myMethod: [Function: myMethod]
// }

bill.myMethod(bob, 4, "ciao");
// bob 4 ciao {
//   name: 'Bill Murray',
//   movie: 'Lost in Translation',
//   myMethod: [Function: myMethod]
// }

// .bind() method
// does the same as .call() and .apply(), but you can save it as a variable to use later
let fred = bob.bind(bill, 5, "hasta la vista"); // context(this), args...
// nothing showing up, .bind prepares the function for later
// .bind passes back a copy of the function
fred(); // you can also pass in additional params if you want
// bob 5 hasta la vista {
//   name: 'Bill Murray',
//   movie: 'Lost in Translation',
//   myMethod: [Function: myMethod]
// }
