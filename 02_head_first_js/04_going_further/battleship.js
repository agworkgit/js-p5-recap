// VARIABLES

let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess; // undefined until guess is made
let hits = 0;
let guesses = 0;

let isSunk = false; // true when ship is sunk

/* 
To do:

- Create loop and get user guess [x]
- Check user guess []
- Check if ship has been sunk []
- Display stats to user []
*/

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  // prompt is a built-in browser function used to get input from the user
  // checking the user's guess
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
  }
}
