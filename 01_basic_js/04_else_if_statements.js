// There comes a time where you might want to use more than one condition
// That is a good moment to start using 'else if' blocks

// Logical operators
// && = AND (both must be true to evaluate to true)
// || = OR (one value must be true to evaluate to true)
// ! = NOT (opposite value)

var firstName = "Ricky";
var lastName = "Bobby";
var age = 45;
var votingAge = 18;
var isStudent = true;

if (age > 18) {
  console.log("You are voting age."); // prints and stops
} else if (age < 50 && isStudent) {
  console.log("You are a student.");
} else if (age < 0) {
  // prevent an action in the code
} else {
  // catch all
  console.log("I don't know much about you.");
}

// Comparison operators
// <, <=, >, >=, == (loose equality), === (strict equality - must be of same type), != (not equal), !== (strictly not equal)
