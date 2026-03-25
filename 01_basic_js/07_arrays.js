// An array is a numbered (0-indexed) list of items

var chars = ["Luke", "Leia", "Han", "Chewie"];
console.log(chars); // print array
console.log(chars.length); // print length
console.log(chars[1]); // print specific value in the array, in this case the calue at index 3

// The last item in the array is always the length - 1
console.log(chars[chars.length]); // undefined
console.log(chars[chars.length - 1]); // Chewie

// Add new values to the end of the array
chars.push("Anakin");
chars.push("Obiwan");
console.log(chars);

// Remove elements from the end of the array
chars.pop(); // Obiwan is gone
console.log(chars);

// Remove elements from the beginning of the array
chars.shift(); // Luke is gone
console.log(chars);

// Add new values to the beginning of the array
chars.unshift("R2D2"); // R2D2 is now the first element of the array
console.log(chars); // [ 'R2D2', 'Leia', 'Han', 'Chewie', 'Anakin' ]
