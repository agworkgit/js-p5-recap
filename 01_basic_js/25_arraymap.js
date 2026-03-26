// Array map() method

let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin', 'Balin', 'Dwalin', 'Nori', 'Dori'];

// determine the length of each name and save it in an array

let nameLengths = dwarves.map(function(item, index, array) {
  return item + ': ' + item.length;
});

console.log(nameLengths);
/* 
[
  'Bifur: 5',  'Bofur: 5',
  'Bombur: 6', 'Fili: 4',
  'Kili: 4',   'Oin: 3',
  'Gloin: 5',  'Thorin: 6',
  'Balin: 5',  'Dwalin: 6',
  'Nori: 4',   'Dori: 4'
]
*/
