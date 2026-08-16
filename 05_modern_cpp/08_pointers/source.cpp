/* 
POINTERS

- Objects reside in memory, and so far we learned how to access and manipulate objects through variables.
- Another way to access an object in memory is through pointers.
- Each object in memory has it's own type and an address.
- This allows us to access the object through a pointer.
- So, pointers are types that can hold the address of a particular object.
- For illustrative purposes only, we will declare an unutilised pointer that can point to an int object.

- Pointers are variables/objects just like any other type of object.
- Their value is the address of an object, a memory location where the object is stored.
- To access a value stored in an object pointed to by a pointer, we need to "de-reference a pointer".
- De-referencing is done by prepending a pointer (variable) name with a de-referencing operator *

- We will talk about pointers, and especially about smart pointers when we cover the concepts such as dynamic memory allocation and lifetime of an object.
*/

#include <iostream>

int main()
{
    int* p; // we say that p is of type int*

    // To declare a pointer that points to a char (object) we declare a pointer of type char*

    char* q;

    // In the first example we declared a pointer of type int*. To make it point to an existing int object in memory, we use the address-of operator &.
    // We say that p points to x.

    int x = 123;
    int* r = &x;

    // In our second example we declared a pointer of type char* and similarly, we have
    
    char c = 'a';
    char* s = &c;

    // To initialise a pointer that does not point to any object we can use nullptr literal

    char* t = nullptr; // it is said that s is now a null pointer

    // DE-REFERENCING
    char d = 'b';
    char* u = &d;
    char e = *u;

    std::cout << "The value of the de-referenced pointer is: " << *u;
    // -> The value of the de-referenced pointer is: b

    // Now, the value of the de-referenced pointer *u is simply 'b'

    // Similarly, for an integer pointer we should have

    int newX = 123;
    int* newP = &newX;
    std::cout << "The value of the de-referenced pointer is: " << *newP << "\n";
    // -> The value of the de-referenced pointer is: 123

    // We can change the value of the pointed-to object through a de-referenced pointer

    int newY = 123;
    int* newQ = &newY;
    *newQ = 456; // changed the value of pointed-to object 'newY'
    std::cout << "The value of newY is: " << newY << "\n";
    // -> The value of newY is: 456
}