// String split and Array join methods
// Converting strings to Arrays and Arrays to strings
// String to Array -> str.split();
// Array to String -> arr.join();

let sentence = "Hello my name is Inigo Montoya";

let words = sentence.split(" ").sort(); // split on space, and sort (by unicode char precedence)
console.log(words); // [ 'Hello', 'my', 'name', 'is', 'Inigo', 'Montoya' ] (without sort) / (with sort) [ 'Hello', 'Inigo', 'Montoya', 'is', 'my', 'name' ]

let chars = sentence.split('');
console.log(chars);

let hyphenated = words.join('-');
console.log(hyphenated); // Hello-Inigo-Montoya-is-my-name

let oneWord = words.join("");
console.log(oneWord); // HelloInigoMontoyaismyname

let x = sentence.split(" ").sort().join(" ");
console.log(x); // Hello Inigo Montoya is my name
