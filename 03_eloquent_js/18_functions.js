/* 
Notes:
- A function is a piece of program wrapped in a value.
- Such values can be applied to run the wrapped program.
- For example, in a browser environment, the binding 'prompt' holds a function that
shows a little dialog asking for user input.
- Executing a function is called 'invoking, calling' or 'applying it'. 
- You can call a function by adding parentheses after an expression that produces a function value.
- Values we define as placeholders are called 'parameters'.
- Values given to a function are called 'arguments' and replace the 'parameters' with real values.
- Functions that perform some action are said to have 'side effects'. Functions may also produce values, in which case they don't need to have a 'side effect' to be useful.
*/

console.log(Math.max(2, 4)); // -> 4

/* 
- When a function produces a value, it is said to return that value.
*/

console.log(Math.min(2, 4) + 100); // -> 102
