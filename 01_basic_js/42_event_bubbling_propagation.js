// By default events that are triggered by and event that contains nested elements will bubble the event down to the last nested element

let m = document.getElementById("m");
let d = document.getElementById("d");
let p = document.getElementById("p");
let s = document.getElementById("s");
let log = console.log;

// element.addEventListener(type, callback, useCapture?: boolean)

d.addEventListener("click", (ev) => {
  ev.stopImmediatePropagation(); // preventing event bubbling
  log(ev.currentTarget, "Hi I'm a DIV");
});

// highight clicked element
let highlight = (ev) => {
  // add CSS class 'gold' to the element that triggered the 'click' event listener
  ev.stopImmediatePropagation(); // preventing event bubbling
  let target = ev.currentTarget;
  target.className = "gold";
  reset(target);
};

// remove highlight after 2s
let reset = (_element) => {
  setTimeout(() => {
    _element.className = "";
  }, 2000);
};

[m, d, p, s].forEach((element) => {
  element.addEventListener("click", highlight);
});
