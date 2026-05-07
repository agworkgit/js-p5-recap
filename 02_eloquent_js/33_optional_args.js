/* 
Optional Arguments
Notes:
- The following code is allowed and executes without a problem:
*/

function square(x) {
  return x * x;
}
console.log(square(4, true, "hedgehog"));
// -> 16

/*
Notes:
- We defined 'square' with only one parameter. Yet when we call it with three, the language doesn't complain. It ignores the extra arguments and computes the square of the first one.
- If you pass too few, the missing parameters are assigned the value of undefined.
- The upside to this kind of behaviour is to allow a function to be called with different numbers of arguments. For example, this 'minus' function tries to imitate the '-' operator by acting on either one or two arguments:
*/

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10));
// -10
console.log(minus(50, 14));
// 36

/* 
Notes:
- If you write an '=' after the parameter, followed by an expression, the value of that expression will become the parameter's default value until a value is passed by the argument. For example, this version of 'roundTo' makes its second argument optional. If you don't provide it or pass the value undefined, it will default to one:
*/

function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}
console.log(roundTo(4.5)); // -> 5
console.log(roundTo(4.5, 2)); // -> 4
