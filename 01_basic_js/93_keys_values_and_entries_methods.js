/* 
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Create an iterable object from the Object
*/

let westeros = {
  cersei: "Lannister",
  arya: "Stark",
  jon: "Snow",
  brienne: "Tarth",
  daenerys: "Targaryen",
  theon: "Greyjoy",
  margaery: "Tyrell",
  sandor: "Clegane",
  samwell: "Tarly",
  ramsay: "Bolton",
};

// for(let prop of arr)

let keys = Object.keys(westeros); // creates an arr containing all the keys (e.g. cersei, arya, ...)
console.log(keys);
/* 
[
  'cersei',   'arya',
  'jon',      'brienne',
  'daenerys', 'theon',
  'margaery', 'sandor',
  'samwell',  'ramsay'
]
*/

let vals = Object.values(westeros); // creates an array with the values (e.g. Lannister, ...)
console.log(vals);
/* 
[
  'Lannister', 'Stark',
  'Snow',      'Tarth',
  'Targaryen', 'Greyjoy',
  'Tyrell',    'Clegane',
  'Tarly',     'Bolton'
]
*/

let entries = Object.entries(westeros);
console.log(entries);
/* 
[
  [ 'cersei', 'Lannister' ],
  [ 'arya', 'Stark' ],
  [ 'jon', 'Snow' ],
  [ 'brienne', 'Tarth' ],
  [ 'daenerys', 'Targaryen' ],
  [ 'theon', 'Greyjoy' ],
  [ 'margaery', 'Tyrell' ],
  [ 'sandor', 'Clegane' ],
  [ 'samwell', 'Tarly' ],
  [ 'ramsay', 'Bolton' ]
]
*/
console.log(entries[2][1]); // Snow

// forEach(), filter(), map(), reduce() can now be used on these arrays
