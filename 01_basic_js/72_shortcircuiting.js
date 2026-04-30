/* 
Notes:
- How to use short-circuiting in JS
- Falsy values -> 0, false, null, undefined, "", '', NaN
*/

let log = console.log;

let obj = { prop: 42, bool: true };
let num = 0;

let fn1 = () => {
  return num;
};

let fn2 = () => {
  log(42); // <- side-effect
};

// 0 && 1 && 1 && 1; // stops at the first falsy value

// false && true = false
if (0 && 1) {
  log("yes");
} else {
  log("no"); // <-
}

// expression && expression ? exec for true : exec for false

obj.bool === true && obj.prop > 40 ? log("yes") : log("no");
obj.bool === true && num ? log("yes") : log("no"); // num is falsy

obj.bool === true && fn1 ? log("yes") : log("no");
obj.bool === true && fn1() ? log("yes") : log("no - the return of fn1 = 0");

// Note: functions without return statements will default to 'undefined', e.g. fn2 above

obj.bool === true && obj.prop && log(fn1()); // 0
// eval true && eval true && exec
