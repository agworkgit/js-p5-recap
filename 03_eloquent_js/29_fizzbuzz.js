/* 
Exercise:
- Write a program that uses the console to print all the numbers trom 1 to 100, with two exceptions:
1) For numbers divisible by 3, print 'Fizz' instead of the number.
2) And for numbers divisible by 5 (and not 3!), print 'Buzz' instead.
3) When you have that working, modify the program to print 'FizzBuzz' for numbers that are divisible by both.
*/

for (let num = 1; num <= 100; num++) {
  if (num % 3 == 0) {
    console.log(num + " Fizz");
  } else {
    console.log(num);
  }
  if (num % 5 == 0) {
    console.log(num + " Buzz");
  } else {
    console.log(num);
  }
  if (num % 5 == 0) {
    if (num % 3 == 0) {
      console.log(num + " FizzBuzz");
    }
  } else {
    console.log(num);
  }
}
