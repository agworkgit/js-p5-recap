/* 
STANDARD INPUT (std::cin, std::cout)

5) Write a program that defines an int variable called x with a value of 123, post-increments that value in the next statement, and adds the value of 20 in the following statement using the compound assignment operator. Print the value at the end.
6) Write a program that divides numbers 9 and 2 and assigns a result to an int and a double variable. Then modify one operand, so that it is of type double and observe the different outcomes of a floating-point division where at least one of the operands is of type double. Print at the end.
*/

#include <iostream>

int main()
{
    // 5
    int x = 123;
    x++;
    x += 20;
    std::cout << "Final value is: " << x << "\n";
    // -> 144

    // 6
    int div1 = 9 / 2;
    double div2 = 9 / 2.0;
    std::cout << "Value of div1 is: " << div1 << ", value of div2 is: " << div2;
    // if one operand is double, we get the result as a double, otherwise int
    // -> Value of div1 is: 4, value of div2 is: 4.5
}
