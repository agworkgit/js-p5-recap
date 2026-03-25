// Return values from functions
// - When we want a value back from a function we called, not just a side-effect (such as logging something at the end, or calling another function)

// user's money
let account_bal = 16;

// product prices
let beer_cost = 3;
let burger_cost = 2;

/* we are using this checkBal function to pass down elsewhere a true/false so that we know if other could should run
 */

function checkBal(amount) {
  if (account_bal - amount >= 0) {
    return true; // here
  } else {
    console.log(
      `You tried to spend $${amount.toFixed(2)}, insufficient funds!`,
    );
    return false; // here
  }
}

// drink beer
function drinkBeer() {
  if (checkBal(beer_cost)) {
    account_bal = account_bal - beer_cost;
    console.log("Enjoy your beer!");
    console.log("\tYour remaining balance:", "$" + account_bal.toFixed(2));
  } else {
    console.log("\tYour current balance:", "$" + account_bal.toFixed(2));
  }
}

// eat burger
function eatBurger() {
  if (checkBal(burger_cost)) {
    account_bal = account_bal - burger_cost;
    console.log("Enjoy your burger!");
    console.log("\tYour remaining balance:", "$" + account_bal.toFixed(2));
  } else {
    console.log("\tYour current balance:", account_bal);
  }
}

drinkBeer(); // Enjoy your beer!
eatBurger(); // Enjoy your burger!
drinkBeer(); // Enjoy your beer!
drinkBeer(); // Enjoy your beer!
drinkBeer(); // Enjoy your beer!
drinkBeer(); // Insufficient funds!
