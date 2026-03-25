// food prices
let beer_cost = 5;
let burger_cost = 3;
let beverage_cost = 1.5;

// user's money
let account_balance = 15.75;

// // drink beer
// account_balance = account_balance - beer_cost;
// console.log(account_balance); // 10.75

// // eat burger
// account_balance = account_balance - burger_cost;
// console.log(account_balance); // 7.75

// // drink beverage
// account_balance = account_balance - beverage_cost;
// console.log(account_balance); // 6.25

// By using a function, we reduce a lot of repetitive code, also, functions can take in an infinite number of arguments (with the help of rest parameters) which futureproofs our programme

// Storing the function + parameters (...rest) (function definition)
function calculateTotal(...values) {
  let totalDeductible = values.reduce((val, sum) => (sum += val));
  // console.log(totalDeductible);
  if (totalDeductible < account_balance) {
    return account_balance - totalDeductible;
  } else {
    return "You don't have enough available funds!";
  }
}

// Calling the function with arguments (function invocation)
// You're spending more than you have!
console.log("Your total:", calculateTotal(2, 3, 4, 5, 3)); // 17 > 15.75, error!
// Your total: You don't have enough available funds!

// Eat a burger + drink a beverage
console.log("Your total:", calculateTotal(burger_cost, beverage_cost));
// Your total: 11.25
