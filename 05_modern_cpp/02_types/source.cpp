/* 
*** TYPES ***
- Every entity has a type.
- A type is a set of possible values and operations.
- Instances of types are called 'objects'.
- An 'object' is some region in memory that has a value of particular type (not to be confused with an instance of a class which is also called 'object').

*** FUNDAMENTAL TYPES (BUILT-INS) ***
- Accesing uninitailised variables results in Undefined Behaviour (UB)
- Boolean Type - bool - (true/false)
- Character Type - char - (single character / one byte character) 
- Integer Types - int - (pos/neg integral values)
- Floating-Point Types - float/double/long double (double = double-precision)
    - We use these to store real numbers / floating-point values!
- void - a type used on functions with no return value - (functions)
- void* - used for a void pointer type - (pointers)

*** VARIABLES ***
- Once we declare a variable, we access and manipulate the variable name by its name only, without the type name
- Introducing a name into a current scope is called a 'declaration'
- We are letting the world know there is a name (i.e. a variable) of some type, from now on in the current scope


*** INTEGERS ***
- Integer literals can be decimal, octal, and hexadecimal. Octals start with the prefix of '0', and hexadecimal literals beging with a prefix of '0x'

*** TYPE MODIFIERS ***
- Types can have modifiers, some of the modifiers are 'signed' and 'unsigned'.
- 'signed' (the default is omitted) means the type can hold both positive and negative values
- 'unsigned' means the type has unsigned representation
- 'short' will have the width of at least 16 bits
- 'long' will have the width of at least 32 bits
- We can combine these modifiers
*/

#include <iostream>

int main() {
    // BOOLEAN TYPE
    // bool b = true; or
    bool b{ true }; // local variable, all local variables should be initialised

    // SINGLE CHARACTERS TYPE
    char c = 'a'; // enclosed in single quotes
    // is the same as if we had
    // char c = 97 (ASCII lowercase 'a')

    // Print
    std::cout << "The value of variable c is: " << c;
    std::cout << "\n";

    // Changing char
    c = 'Z';

    // Print
    std::cout << "The value of variable c is: " << c;
    std::cout << "\n";

    // Getting the size in memory of char
    std::cout << "The size of type char is: " << sizeof(char) << " byte(s)";
    std::cout << "\n";
    // Prints -> The size of type char is: 1 byte(s)

    // Other types of 'char'
    // -> wchar_t for holding Unicode
    // -> char16_t for holding UTF-16

    // Every char is represented by an integer in the character set
    // This is why we can assign both numeric literals and character literals to 'char'

    // INTEGER TYPE (whole numbers)
    int x = 123;
    // int y = -256;
    int y = x; // we can also initialise the variable with another variable
    // It will receive a copy of its value, we will have two separate objects in memory
    
    // The size of int is usually 4 bytes
    std::cout << "The value of x is: " << x << ", the value of y is: " << y;
    std::cout << "\n";
    // -> The value of x is: 123, the value of y is: 123

    x = 456;
    // The size of int is usually 4 bytes
    std::cout << "The value of x is: " << x << ", the value of y is: " << y;
    std::cout << "\n";
    // -> The value of x is: 456, the value of y is: 123

    // Number bases (int)
    // Representing 10 in oct/hex
    int dec = 10; // decimal literal
    int oct = 012; // octal literal
    int hex = 0xA; // hex literal

    std::cout << "The value of dec is: " << dec << ", the value of oct is: " << oct << ", the value of hex is: " << hex;
    std::cout << "\n";
    // -> The value of dec is: 10, the value of oct is: 10, the value of hex is: 10

    // FLOATING-POINT TYPES (real numbers) (float/double/long double)
    double dbl = 3.14;

    std::cout << "The value of dbl is: " << dbl;
    std::cout << "\n";
    // -> The value of dbl is: 3.14

    // Scientific notation "e" represents "times ten raised to the power of," making it easier to write very large or very small numbers, such as 4.5e6 for 4.5 × 10^6.

    double scnot = 4.5e6;

    std::cout << "The value of scnot is: " << scnot;
    std::cout << "\n";
    // -> The value of scnot is: 4.5e+06 = 4.5 * 10^6

    // TYPE MODIFIERS
    // Type 'int' is by default 'signed'
    unsigned long int q = 4294967295;

    std::cout << "The value of an unsigned long integer variable is: " << q;
    std::cout << "\n";

    // DECLARATIONS
    char dct1;
    int dct2;
    double dct3;
    // We can also do multiple on the same line
    int m, n, o;

    // INITIALISATIONS (three ways)
    int init1 = 123;
    int init2{ 123 };
    int init3 = { 123 };

    // DEFINITION
    char def1 = 'a';
    int def2 = 123;
    double def3 = 456.78;
}