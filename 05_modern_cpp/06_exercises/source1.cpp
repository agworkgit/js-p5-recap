/* 
STANDARD INPUT (std::cin, std::cout)

1) Write a program that accepts and integer number from the standard input and then print that number.
2) Write a program that accepts two integers from the standard input, adds them together and prints the result.
3) Write a program that accepts three values of type char, int, and double, then print out those values.
4) Write a program that accepts two int numbers, sums them up, and assigns the result to a third integer, print out the result afterward.
*/

#include <iostream>

int main()
{
    // 1
    int x = 0;
    std::cout << "Please enter a number between 1-10 and press enter: ";
    std::cin >> x;
    std::cout << "Your number is: " << x << "\n";

    // 2
    double a = 0.0;
    double b = 0.0;
    std::cout << "Please enter two numbers (can be real) separated by spaces to add them together: ";
    std::cin >> a >> b;
    std::cout << "The result is: " << a + b << "\n";

    // 3
    char t = 0;
    int i = 0;
    double d = 0.0;
    std::cout << "Please enter a single character, followed by a number, and a double, separated by spaces: ";
    std::cin >> t >> i >> d;
    std::cout << "You entered char: " << t << ", int: " << i << " and double: " << d << "\n";

    // 4
    int one;
    int two;
    int sum;
    std::cout << "Please enter two integers to sum up and press enter: ";
    std::cin >> one >> two;
    sum = one + two;
    std::cout << "The result is: " << sum << "\n";
}