/* 
Exercise:
- Write a loop that makes seven calls to console.log() to output the following triangle:

#
##
###
####
#####
######
#######

- You can find the length of a string by writing .length() after it.
*/

let string = "#";
for (let y = 0; string.length <= 7; y++) {
  console.log(string);
  string += "#";
}
