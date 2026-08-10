/* 
Pseudocode

DECLARE three variables to hold the locations of each cell of the battleship. Let's call them location1, location2, location3

DECLARE a variable to hold the user's current guess. Let's call it guess

DECLARE a variable to hold the number of hits. We'll call it hits and set it to 0

DECLARE a variable to hold the number of guesses. We'll call it guesses and set it to 0

DECLARE a variable to keep track of whether the ship is sunk or not. Let's call it isSunk and set it to false.
*/

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
