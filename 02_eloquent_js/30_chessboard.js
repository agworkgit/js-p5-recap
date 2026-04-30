/* 
Exercise:
- Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a '#' character. The characters should form a chessboard.
- Passing the string to console should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

*/

let chessboard = "";
let size = 8;

for (let columns = 0; columns < size; columns++) {
  for (let rows = 0; rows < size; rows++) {
    if ((rows + columns) % 2 === 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
