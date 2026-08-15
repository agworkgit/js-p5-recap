/* 
OPERATORS

- The assignment operator '=' assigns a value to a variable / object
- Arithmetic operators: +, -, *, /, %
- Compound assignment operators: +=, -=, *=, /=, %=
- Increment/Decrement: ++var, var++, --var, var--
    - with pre-increment a value is added first, then the object is evaluated
    - with post-increment the object is evaluated first and then the value is added
    - the only difference is the timing in the expression where it's used
*/

#include <iostream>

int main() {
    char mychar = 'c'; // define a char variable mychar
    mychar = 'd'; // assign a new value to mychar

    int x = 123; // define an int variable x
    x = 456; // assign a new value to x

    // ARITHMETIC
    int y = 123;
    int z = 456;

    int w = y + z; // addition

    std::cout << "The value of w after addition is: " << w << "\n";

    w = y - z; // subtraction

    std::cout << "The value of w after subtraction is: " << w << "\n";

    w = y * z; // multiplication

    std::cout << "The value of w after multiplication is: " << w << "\n";

    w = y / z; // division
    // -> 0, why?!
    // -> the result of the integer division where both operands are integers is 'truncated' towards zeros

    std::cout << "The value of w after division is: " << w << "\n";

    // If we want a floating-point result, we need to use the type 'double' and make sure at least one of the division operands is also of type 'double'

    int m = 123;
    double n = 456;
    double s = m / n;

    std::cout << "The value of s is: " << s << "\n";
    // -> The value of 's' is: 0.269737

    // Note: for divisions, use the double type!

    // COMPOUNDS
    int comp = 100;
    double div = 5;

    comp += 10; // same as comp = comp + 10
    std::cout << "The value of comp after add is: " << comp << "\n";

    comp -= 5; // 110 - 5
    std::cout << "The value of comp after sub is: " << comp << "\n";

    comp *= 2; // 210
    std::cout << "The value of comp after mult is: " << comp << "\n";

    comp /= div; // 42
    std::cout << "The value of comp after div is: " << comp << "\n";

    comp %= 2; // 0
    std::cout << "The value of comp after mod is: " << comp << "\n";

    // INCREMENT / DECREMENT
    int updt = 123;
    updt++; // add 1 to the value of x
    ++updt; // add 1 to the value of x
    --updt; // decrement the value of x by 1
    updt--; // decrement the value of x by 1

    std::cout << "The value of updt is: " << updt << "\n";
    // -> 123
}