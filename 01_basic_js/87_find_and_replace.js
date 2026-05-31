/*
 * search through a string to find all matches
 * then you can do a find and replace
 * with indexOf() and replace(, )
 * without using Regex
 */

let log = console.log;

let paragraph = 'Pellentesque massa odio, tempor ut tortor euismod, imperdiet interdum lectus. Maecenas rhoncus arcu a massa pretium, vitae condimentum arcu dapibus. Donec a felis sit amet dui rutrum convallis. Nulla ornare lorem elit, id elementum nisi porta eget. Sed iaculis et mauris eget hendrerit. Ut suscipit at turpis a laoreet. Aenean dignissim hendrerit consectetur. Donec posuere velit risus, eget accumsan augue commodo eget.'

let find = ' ';
let replace = '';

log(paragraph.indexOf(find)); // idx 0
// Note: -1 will be returned if what we're looking for wasn't found

// Replacing all instances where ' ' appears
let newPara = "".concat(paragraph)
let counter = 0;
while (counter < newPara.length) {
if (newPara.indexOf(find) > -1) {
  newPara = newPara.replace(find, replace);
  }
  counter++;
}
log(newPara); // paragraph, but with all spaces removed, and newPara is a deep copy (not a pointer to paragraph)
