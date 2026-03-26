// Array map() method

let dwarves = [
  "Bifur",
  "Bofur",
  "Bombur",
  "Fili",
  "Kili",
  "Oin",
  "Gloin",
  "Thorin",
  "Balin",
  "Dwalin",
  "Nori",
  "Dori",
];

// determine the length of each name and save it in an Array

let nameLengths = dwarves.map(function (item, index, array) {
  return index + " " + item + " " + item.length;
});

console.log(nameLengths);

// index + item + length of item
// [
//   '0 Bifur 5',  '1 Bofur 5',
//   '2 Bombur 6', '3 Fili 4',
//   '4 Kili 4',   '5 Oin 3',
//   '6 Gloin 5',  '7 Thorin 6',
//   '8 Balin 5',  '9 Dwalin 6',
//   '10 Nori 4',  '11 Dori 4'
// ]
