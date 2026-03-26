// Array forEach loop

let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin', 'Balin', 'Dwalin', 'Nori', 'Dori'];

// Covert all names to lowercase, except Thorin
// and console.log them
// anonymous funciton

dwarves.forEach(function(item, index, array) {
  if (item === 'Thorin') {
    item = item.toUpperCase();
  } else {
    item = item.toLowerCase();
  }
  console.log(index, item);
});
