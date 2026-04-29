/* 
Note:
- Especially when looping, a program often needs to 'update' a binding to hold a value based on that binding's previous value.
*/

let counter = 0;
counter = counter + 1;

/* 
Note:
- JS provides a shortcut for this:
*/

counter += 1;

/* 
Note:
- Similar shortcuts work for all arithmetic operators.
*/

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

/* 
Note:
- For += and -= there are even shorter equivalents ++ (to increment by 1) amd -- (to decrement by 1)
*/
