/* 
The Call Stack
Note:
- The way control flows through functions can be complex.
*/

function greet(who) {
  console.log("Hello " + who); // 2 - param received, print string
}
greet("Harry"); // 1 - jump up to greet() and pass it the argument
console.log("Bye"); // 3 - print 'Bye'

/* 
Note:
- We could show the flow of control schematically like this:
    not in function
        in greet
            in console.log
        in greet
    not in function
        in console.log
    not in function

- Because a function has to jump back to the place that called it when it returns, the interpreter must remember the context from which the call happened.
- The place where the interpreter stores this context is called the 'call stack'.
- Every time a new function is called, the current context is stored on top of the stack. When a function 'returns', it removes the top context from the stack and uses that context to continue execution.
- Storing this stack requires space in the computer's memory. When the stack grows too big, the computer will fail with a message like 'out of stack space' or 'too much recursion'.
- The following code illustrates this by asking the interpreter a really hard question that causes an infinite back-and-forth between two functions, this would go on indefinitely if the interpreter had an infinite stack. As it is, we will run out of space, or 'blow the stack'.

function chicken() {
    return egg();
} 

function egg() {
    return chicken();    
}

console.log(chicken() + " came first.");
*/
