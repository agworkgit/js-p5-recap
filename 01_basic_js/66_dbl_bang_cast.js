// Casting to Boolean with the !!
// Casting to Number with unary +
// Unary Binary Ternary

let log = console.log;

let num = 12;

// num gets converted to a Boolean value
// if (!num)

let bool = !!num; // ! will cast the number into a boolean (false in this case), ! again to convert to a positive
log(bool);

let str = "14";
let fourteen = +str; // convert from str to number type
log(typeof str); // string
log(typeof fourteen); // number
