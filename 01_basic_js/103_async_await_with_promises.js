/* 
Using async and await with Promises
and error handling with Promises
*/

let log = console.log;

doThings();

function doThings() {
  let p = delay(1000);
  log(p);
}

function delay(ms) {
  // fetch() is just a Promise too
  return new Promise((resolve, reject) => {
    // resolve(42);
    // reject(new Error('bad things happened'));
    // setTimeout(resolve, ms, 42);
    // setTimeout(reject, ms, new Error('bad things happened'));
  });
}
