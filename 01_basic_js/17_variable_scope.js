// Variable scope
var name = "Aragorn"; // global variable

function x() {
  var name = "Gimli"; // local variable (only available inside this function)
  console.log(name);

  // NOTE: if we leave out the declaration, we will re-assign the value of 'name'!

  // IMPORTANT: If we use a variable name without the declaration, and that variables is unique, JS will jump into the global scope and create that variable, even though we have not used a declaration inside the function scope. that variable can then be used even outside the function scope.
}

function y() {
  // no name variable, jump outside and get the global scope variable
  console.log(name);
}

x(); // Gimli
console.log(name); // Aragorn
x(); // Gimli
y(); // Aragorn
