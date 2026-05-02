/* 
Functions
Notes:
- Functions give us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.
*/

/* 
Defining a function
Notes:
- A function definition is a regular binding where the value of the binding is a function.
*/

const square = function (x) {
  return x * x;
};

console.log(square(12)); // -> 144

/* 
- A function can have multiple parameters or no params at all.
- makeNoise does not list any parameter names, whereas roundTo (which rounds n to the neareast multiple of the step) lists two:
*/

const makeNoise = function () {
  console.log("Pling!");
};

makeNoise();
// -> Pling!

const roundTo = function (n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10)); // -> 20

/*
Bindings and scopes
Notes:
- Each binding has a 'scope', which is the part of the program in which the binding is visible. For bindings defined outside any function, block, or module, the scope is the whole program - you can refer to such bindings wherever you want. These are called 'global'.
- Bindings created for function params or declared inside the function body, can be referenced only in that function, so they are known as 'local' bindings.
- This provides some isolation between functions - each function call acts in its own little world (its local environment) and can often be understood without knowing a lot about what's going on in the global environment.
- Bindings declared with 'let/const' are in fact local to the 'block' in which they are declared, so if you create one of these inside a loop, the code before and after the loop cannot 'see it'.
*/

let x = 10; // global
if (true) {
  let y = 20; // local to block
  var z = 30; // also global (!var!)
}

/* 
- Each scope can 'look outside' into the scope around it, so 'x' is visible inside the block in the example.
- The exception is when multiple bindings have the same name - in that case, code can only see the innermost one.
- For example, when the code inside the 'halve' function refers to 'n', it is seeing its 'own' n, not the 'global' n.
*/

const halve = function (n) {
  return n / 2;
};

let n = 10;
console.log(halve(100)); // -> 50
console.log(n); // -> 10

/* 
Nested scope
Notes:
- JS distinguishes not just global and local bindings. Blocks and functions can be created inside other blocks and functions, producting multiple degrees of locality.
- For example, this function - which outputs the ingredients needed to make a batch of hummus - has another function inside it:
*/

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  console.log(ingredient(1, "can", "chickpeas"));
  console.log(ingredient(0.25, "cup", "tahini"));
  console.log(ingredient(0.25, "cup", "lemon juice"));
  console.log(ingredient(1, "clove", "garlic"));
  console.log(ingredient(2, "tablespoon", "olive oil"));
  console.log(ingredient(0.5, "teaspoon", "cumin"));
};

/* 
Notes:
- The code inside the 'ingredient' function can see the 'factor' binding from the outer function, but its 'local' bindings, such as 'unit' or 'inhredientAmount', are not visible in the outer function.
- The set of bindings visible inside a block is determined by the place that block is in the program.
- Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called 'lexical scoping'.
*/

/* 
Functions as values
Notes:
- A function binding usually simply acts as a name for a specific piece of the program. Such binding is defined once and never changed. This makes it easy to confuse the function and its name.
- But the two are different. A function value can do all the things other values can do - you can use it in arbitrary expressions, not just call it.
- It is possible to store a function value in a new binding, pass it as an argument to a function, and so on.
- Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:
*/

let launchMissiles = function () {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function () {
    /* do nothing */
  };
}

/* 
Declaration Notation
Notes:
- There is a slightly shorter way to create a function binding. When the 'function' keyword is used at the start of a statement, it works differently:
*/

function square(x) {
  return x * x;
}

/* 
- This is a function 'declaration'. The statement defines the binding square and points it at a given function. It is slightly easier to write and doesn't require a semicolon after the function.
- There is one subtlety with this form of function definition.
*/

console.log("The future says: ", future());

function future() {
  return "You'll never have flying cars";
}

/* 
- The preceeding code works, even though the function is defined 'below' the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in the scope. 
- This can be useful because it offers the freedom to order code in a way that seems the clearest, without worrying about having to define all functions before they are used.
*/

/* 
Arrow Functions
Notes:
- There's a third notation for functionsm which looks very different from the others.
- Instead of the 'function' keyword, it uses an arrow (=>) made up of an equal sign and a greater-than character (not to be confused with the greater-than-or-equal operator, which is written >=):
*/

const newRoundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step ? 0 : step);
};

/* 
- The arrow comes 'after' the list of params and is followed by the functions's body. It expresses something like 'this input (the params) produces this result (the body)'
- When there is only one param name, you can omit the parentheses around the param list.
- If the body is a single expression rather than a block in braces, that expression will be returned from the function.
- So, these two definitions of 'square' do the same thing:
*/

const sqr1 = (x) => {
  return x * x;
};
const sqr2 = (x) => x * x;

/* 
- When and arrow function has no params at all, its param list is just an empty set of parentheses.
*/

const horn = () => {
  console.log("Toot!");
};

/* 
- There's no deep reason to have both arrow functions and 'function' expressions in the language.
- Apart from a minor detail, they do the same thing.
- Arrow functions were added in 2015, mostly to make it possible to write small funcion expressions in a less verbose way.
*/
