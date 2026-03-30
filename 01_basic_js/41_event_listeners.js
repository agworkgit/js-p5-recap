// JS Event Listeners
// Event-driven programming: your program waits for events and uses them as triggers to run the next function(s)
// object.addEventListener(event, function)

let btn = document.getElementById("btn");
let lnk = document.getElementById("lnk");
let input = document.getElementById("input");

btn.addEventListener("click", btnClicked);
function btnClicked(ev) {
  console.log("type:", ev.type, "target:", ev.target, ev.currentTarget);
}

lnk.addEventListener("click", lnkClicked);
function lnkClicked(ev) {
  ev.preventDefault(); // prevent link from firing ('default behaviour')
  console.log("type:", ev.type, "target:", ev.target, ev.currentTarget);
}

/* On keydown
input.addEventListener("input", inputAction);
function inputAction(ev) {
  // 'ev' or any other name really is given to the event-object received from addEventListener through the callback
  ev.preventDefault(); // prevent link from firing ('default behaviour')
  console.log(
    "type:",
    ev.type,
    "target:",
    ev.target,
    ev.currentTarget,
    "output:",
    ev.currentTarget.value,
  );
}
*/

// On change (leave after change)
input.addEventListener("change", changeAction);
function changeAction(ev) {
  // fires when the user leaves (clicks away from) the input field after having changed something
  // 'ev' or any other name really is given to the event-object received from addEventListener through the callback
  ev.preventDefault(); // prevent link from firing ('default behaviour')
  console.log(
    "type:",
    ev.type,
    "target:",
    ev.target,
    ev.currentTarget,
    "output:",
    ev.currentTarget.value,
  );
}

// On blur (focus)
input.addEventListener("blur", changeAction);
function changeAction(ev) {
  // fires when the user leaves (clicks away from) the input field
  // 'ev' or any other name really is given to the event-object received from addEventListener through the callback
  ev.preventDefault(); // prevent link from firing ('default behaviour')
  console.log(
    "type:",
    ev.type,
    "target:",
    ev.target,
    ev.currentTarget,
    "output:",
    ev.currentTarget.value,
  );
}

/*
let btn = document.getElementById("btn");
btn.addEventListener("click", doSomething); // arg1: type of event, arg2: callback name [no parentheses, parentheses = immediate value return]
function doSomething(event) {
  // addEventListener will pass the event object down to the callback, to be used in an if...else statement, etc...
  console.log("type of event:", event.type);
  console.log("what was the trigger?", event.target);
  // <button id="btn">
  console.log("clicked");
}
*/
