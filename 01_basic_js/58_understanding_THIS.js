// Understanding what 'this' does/is in JS
//
"use strict";

let box = document.querySelector(".box");
let log = console.log;

let myFunc = function () {
  setTimeout(() => {
    console.log("timed log", this);
  }, 250); // -> again, will point to whatever called myFunc, check the last three calls and the event listener!
  log("1", this); // 'this' is pointing to whoever called it
};

let myArrowFunc = () => {
  setTimeout(() => {
    console.log("timed log", this);
  }, 250); // -> points to Window
  log("2", this); // this = Window???, no longer gets the context
}; // where was myArrowFunc declared? -> global namespace
// -> okay, 'this' will also point to global namespace

box.addEventListener("mousedown", myFunc); // points to what called the function
box.addEventListener("mouseup", myArrowFunc); // arrow functions point to Window

myFunc(); // undefined
myFunc.call(window); // Window
myFunc.call(box); // -> provided context, you will call the function from within 'box'
// myFunc.apply(box) will do the same as .call()
