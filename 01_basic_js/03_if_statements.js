// Giving programmes the ability to make decisions

var firstName = "Alex";
var lastName = "Grigore";
var age = 32;
var isStudent = true;
var isEmployed = false;

// Basic 'if statement'
if (isStudent) {
  // do something if true
  console.log(firstName + " is a student.");
} else {
  // do something if false
  console.log(firstName + " is not a student.");
}

// Evaluating expression 'if statement'
if (age > 18) {
  console.log("You are voting age.");
} else {
  console.log("You are not voting age yet.");
}

// Falsy evaluations
// -> false, null, undefined, 0, '', "", NaN
