// Keyboard events in the browser
// ev.char || ev.charCode || ev.which
// keydown    keyup    keypress

let log = console.log;

document.addEventListener("DOMContentLoaded", init);
// this event listener and the 'init' function are only useful if the JS script is loaded at the top of the html file without defer

function init() {
  let txt = document.getElementById("txt");
  txt.addEventListener("keydown", anyKey); // on input
  document.body.addEventListener("keydown", anyKey); // on body
}

function anyKey(ev) {
  // log(ev.type, ev.target);
  let target = ev.currentTarget;
  let tag = target.tagName;
  let char = ev.char || ev.charCode || ev.which;
  log(char, tag);
  let s = String.fromCharCode(char); // convert unicode to char
  // log(s);
  switch (char) {
    case 37:
      log("left");
      break;
    case 40:
      log("down");
      break;
  }
}
