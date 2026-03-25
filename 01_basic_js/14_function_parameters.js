// Function parameters

let account_balance = 20;
function calculateTotal(a, b, c, d) {
  // a, b, c, d are placeholders/parameters to this function
  let totalDeductible = a + b + c + d;
  if (totalDeductible < account_balance) {
    return account_balance - totalDeductible;
  } else {
    return "You don't have enough available funds!";
  }
}

// Function arguments

// When we call this function we must replace the placeholders with real values (function arguments)
console.log(calculateTotal(1, 2, 3, 4)); // 10

// Running multiple functions at once
function eat_burger() {
  account_balance = account_balance - 2;
  console.log(account_balance);
}

function drink_beer() {
  account_balance = account_balance - 5;
  console.log(account_balance);
}

function eat_gelato() {
  account_balance = account_balance - 5;
  console.log(account_balance);
}

// Array of functions
let themeParkList = [eat_burger, drink_beer, eat_gelato];

// Defining a function that loops through the functions array and calls each one
function visitThemePark(list) {
  for (let i = 0, num = list.length; i < num; i++) {
    list[i]();
  }
}

// Calling the function
visitThemePark(themeParkList);
// We just ran 3 other functions by triggering one, the 3 other functions are what's called 'callback functions' (they only get passed to another function)
// 18
// 13
// 8
