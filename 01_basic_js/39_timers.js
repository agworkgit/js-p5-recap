// setTimeout
// How to use setTimeout, clearTimeout, setInterval, and clearInterval

function log(msg) {
  console.log("MESSAGE", msg);
  clearInterval(interval); // stops the interval
}

let timeout = setTimeout(log, 2000, "Hello"); // call log after 2000ms = 2s
// params: callback, duration, additional params will be passed to the callback
// runs a callback after the set time

let interval = setInterval(log, 1000, "msg");
// runs a callback in a loop at the specified interval
// clearInterval required else this runs indefinetely
