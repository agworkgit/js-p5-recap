let total = 0,
  count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total); // 55 (1 +...+ 10 = 55)

/* 
total = 0
count = 1

while count is less than or equal to 10:
add count to total
add 1 to count

total = 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 
-> total result is 55
count = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 
-> count is now equal to 10 so we stop
*/
