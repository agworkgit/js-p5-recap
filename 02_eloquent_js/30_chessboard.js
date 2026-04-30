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
let size = 8; // size of (x, y) grid

// top to botton
for (let row = 0; row < size; row++) {
  // left to right
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);

/* 
Pos 1 (0, 0) 
-> is (0 + 0) % 2 === 0? -> 0 === 0? true -> insert ' '

Pos 2 (0, 1)
-> is (0 + 1) % 2 === 1? -> 1 === 0? false -> insert '#'

Pos 2 (1, 1)
-> is (1 + 1) % 2 === 0? -> 0 === 0? true -> insert ' '
*/
