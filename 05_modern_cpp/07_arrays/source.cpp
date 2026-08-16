/* 
ARRAYS

- Arrays are sequences of objects of the same type.
*/

#include <iostream>
#include <array>

// An array of type char

int main()
{
    // This example declares an array of 5 chars.
    char arr1[5];

    // To declare an array of type int which holds 5 elements we should use
    int arr2[5];

    // To initialise an array, we can use the initilisiation list {}:
    int arr3[5] = { 10,20,30,40,50 };

    // We can access individual array elements through a subscript [] operator and an index.
    // The first array element has an index of 0

    arr3[0] = 100; // changing the value of the first element in the array

    std::cout << arr3[0] << "\n";
    // -> 100

    // Note: arr1, arr2, arr3 are just the name of the array!

    int arr4[5] = { 1,2,3,4,5 }; // -> when initialising array, [5] says the array contains 5 objects
    arr4[4] = 10; // -> here, [4] (note: 0-index) says, take the last element and change the value to be 10

    // Output array (loop is needed to do this process!)
    std::cout << "arr4 values are: \n";
    for (int i = 0; i < sizeof(arr4)/sizeof(arr4[0]); i++) {
        std::cout << arr4[i] << std::endl;
    }

    // In modern C++, we should prefer the std::array and std::vector containers to raw arrays.
    // We must have the array include at the top of the file to use it!
    std::array<int, 3> newArrInit = {1,2,3};

    // Output array (loop is needed to do this process!)
    std::cout << "newArrInit values are: \n";
    for (int i = 0; i < sizeof(newArrInit)/sizeof(newArrInit[0]); i++) {
        std::cout << newArrInit[i] << std::endl;
    }
}