/* 
Closure
Notes:
- The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question: What happens to local bindings when the function call that created them is no longer active?
*/

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1()); // -> 1
console.log(wrap2()); // -> 2

/* 
- This is allowed and works as you'd hope, both instances of the binding can be acessed. This situation is a good demonstraction of the fact that local bindings are created anew for every call, and different calls don't affect each other's local bindings.
- This feature; being able to reference a specific instance of a local binding in an enclosed scope is called 'closure'. A function that references bindings from local scopes around it is called 'a' closure. This behaviour not only frees you from having to worry about the lifetimes of bindings but also makes it possible to use function values in some creative ways.
- With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary amount.
*/

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2); // (number) => number * 2
console.log(twice(10)); // (10) => 10 * 2
// -> 20

/* 
- 'multiplier' is called and creates an environment in which its 'factor' param is bound to 2. The function value it returns, which is store in 'twice', remembers this environment so that when that is called, it multiplies its argument by 2.
*/

/*
Extra Examples (Corey Schafer):
- HTML formatting closure
*/

function htmlTag(tag) {
  function wrapText(msg) {
    console.log("<" + tag + ">" + msg + "</" + tag + ">");
  }
  return wrapText;
}

printH1 = htmlTag("h1");
printH1("Something goes in here...");
// -> <h1>Something goes in here...</h1>
