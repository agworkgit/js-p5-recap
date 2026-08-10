/* 
Recursion
Notes:
- It is perfectly okay for a function to call itself, as long as it doesn't do it so often that it overflows the stack (e.g no break/stop condition is present - infinite loop).
- A function that calls itself is called 'recursive'
- Recursion allows some functions to be written in a different style.
- Take for example, this 'power' function, which does the same as the ** (exponentiation) operator:
*/

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// -> 8

/* 
Notes:
- This rather close to the way mathematicians define exponentiation and arguably describes the concept more clearly than loops.
- The function calls itself multiple times with ever smaller exponents to achieve the repeated multiplication.
- However, this implementation has one problem: in typical JS implementations, it's about three times slower than a version using the 'for' loop.
- Running through a simple loop is generally cheaper than calling a function multiple times.
- You should generally first start writing something that is correct and easy to understand, then you can measure speed and improve if necessary.
- Recursion is often useful in cases where you need to consider 'several branches', each of which might branch out again into even more branches. (Like a tree)
*/

/* 
Puzzle:
- By starting from the number 1 and either repeatedly adding 5 or multiplying by 3, and infinite set of numbers can be produced. How would you write a function that, given any number, tries to find a sequence of such additions and multiplications that produces the number?
- For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 can not be reached at all.
- Here is a recursive solution:
*/

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ??
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// -> (((1 * 3) + 5) * 3)

/* 
Notes:
- This program doesn't necessarily find the 'shortest' sequence of operations. It is satisfied when it finds any sequence at all.
- It's okay if you don't see how this code works right away. Let's work through it since it makes for a great exercise in recursive thinking.
*/

/* 
Process Notes:
- The inner function 'find' does the actual recursing.
- It takes two arguments: the current number and a string that records how we reached this number.
- If it finds a solution, it returns a string that shows how to get to the target.
- It it can't find a solution from this number it returns 'null'.
- To do this, the function performs one of three actions:
    - If the current number is the target number, the current history is a way to reach that target, so it is returned.
    - If the current number is greater than the target, there's no sense in further exploring this branch because both adding or multiplying will make the number bigger, so it returns 'null'
    - Finally, if we're still below the target number, the function tries both possible paths that start from the current number by calling itself twice, once for addtition and once for multiplication.
- If the first call returns something that is not 'null', it is returned. Otherwise, the second call is returned, regardless of whether it produces a string or 'null'.
- To better understand how this function produces the effect we're looking for, let's look at all the calls to 'find' that are made when searching for a solution for the number 13:
*/

/* 
find(1, "1");
    find(6, "(1 + 5)");
        find(11, "((1 + 5) + 5)");
            find(16, "(((1 + 5) + 5) + 5)");
            // too big
            find(33, "(((1 + 5) + 5) * 3)");
            // too big
        find(18, "((1 + 5) * 3)");
        // too big
    find(3, "(1 * 3)");
        find(8, "((1 * 3) + 5)");
            find(13, "(((1 * 3) + 5) + 5)");
            // found! 

Notes:
- The indentation indicates the depth of the call stack.
- The frist time 'find' is called, the function starts by calling itself to explore the solution that starts with (1 + 5). That call will further recurse to explore 'every' continued solution that yields a number less than or equal to the target number.
- Since it doesn't find one that hits the target, it returns 'null' back to the first call.
- There the ?? operator causes the call that explores (1 * 3) to happen.
- This search has more luck, its first recursive call, through yet 'another' recursive call, hits upon the target number.
- That innermost call returns a string, and each of the ?? operators in the intermediate call passes that string along, ultimately returning the solution.
*/

/* 
Practice:
1. Counting
2. Tree Structures
3. Factorials
4. Fibonnaci
5. Collatz Conjecture
*/

/* 
let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num);
  // recursion must also have a stopping condition
  // what else? you exceed the call stack size
  num--;
  countDownFrom(num);
};

countDownFrom(10);
 */

// Initial data

let categories = [
  { id: "animals", parent: null },
  { id: "mammals", parent: "animals" },
  { id: "cats", parent: "mammals" },
  { id: "dogs", parent: "mammals" },
  { id: "chihuahua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" },
];

// Recursive transformation

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter((c) => c.parent === parent)
    .forEach((c) => (node[c.id] = makeTree(categories, c.id)));
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));

/* New format:

{
  "animals": {
    "mammals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {},
        "labrador": {}
      }
    }
  }
}
*/

// Calculating factorial recursively

let factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(`Factorial of 7 is:`, factorial(7)); // 5040

// Fibonacci sequences (recursive demonstration)

// (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// (1, 1, 2, 3, 5, 8, 13, 21, 34, 55)

let fibonacci = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 1;

  if (n >= 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else {
    return "Please insert a positive integer";
  }
};
console.log(
  "What is the 10th digit in the Fibonacci sequence?:",
  fibonacci(10),
);
// what is the 10th digit in the sequence? 55

// Collatz conjecture

let collatz = (n) => {
  // if n is 1 stop
  if (n === 1) return 0;

  // is n even? no remainder?
  if (n % 2 === 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz(3 * n + 1);
  }
};

console.log("Collatz of 7 took:", collatz(7), "steps"); // 16 steps
