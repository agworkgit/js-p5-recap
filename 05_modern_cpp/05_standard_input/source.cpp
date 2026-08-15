/* 
STANDARD INPUT

- We can think of the standard input as our keyboard.
- A facility for accepting user input from a user in the console.
- The std::cin is the standard input stream, and it uses the >> operator to extract what has been read into a variable
- std::cout is used to output data (to a screen)
- std::cin is used for inputting data (from the keyboard)
*/

#include <iostream>

int main() {
    std::cout << "Please enter a number and press enter: ";
    int x = 0;
    std::cin >> x;
    std::cout << "You entered: " << x;
    std::cout << "\n";

    // We can accept multiple values from the input stream by separating them with multiple >> operators:

    std::cout << "Please enter two numbers separated by a space and press enter: ";
    int y = 0;
    int z = 0;
    std::cin >> x >> y;
    std::cout << "You entered: " << x << " and " << y;
    std::cout << "\n";

    // We can accept values of different types:

    std::cout << "Please enter a character, an integer and a double: ";
    char c = 0;
    int n = 0;
    double m = 0.0;
    std::cin >> c >> n >> m;
    std::cout << "You entered: " << c << ", " << n << " and " << m;
}