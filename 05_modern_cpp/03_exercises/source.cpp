#include <iostream>

int main() {
    // this is a comment
    std::cout << "Hello, world." << "\n" << "C++ rocks!" << "\n";

    // Declare
    // char mychar;
    // int myint;
    // double mydouble;

    // Define
    char mychar = 'a';
    int myint = 3;
    double mydouble = 3.14;

    // Initialisation
    char initchar{ 'a' };
    int initint{ 22 };
    double initdouble{ 254.534 };

    std::cout << "The value of initchar: " << initchar << "\n";
    std::cout << "The value of initint: " << initint << "\n" ;
    std::cout << "The value of initdouble: " << initdouble << "\n";
}