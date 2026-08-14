// Running a script in C#
// dotnet run hello.cs

// Console.WriteLine("Hello, world!"); - worked

/*
Problem:

- Fire
- Police
- Sanitation

Each assigned a number in the range 1-7
Fire #, Police #, Sanitation # all different
Fire # + Police # + Sanitation # = 12
Police # must be even

Write a program to display all valid department number permutations.

Permutation: the different possible ways to show the numbers, order matters.
Combination: the order does not matter.
 */

#include <iostream>

using std::cout;

// function to check logic
bool isValidDeptNumbers(int fire, int police, int sanitation)
{
    return (fire != police &&
            fire != sanitation &&
            police != sanitation &&
            fire + police + sanitation == 12 &&
            police % 2 == 0);
};

// main
int main()
{
    // loop through numbers
    for (int fire = 1; fire <= 7; fire++)
    {
        for (int police = 1; police <= 7; police++)
        {
            for (int sanitation = 1; sanitation <= 7; sanitation++)
            {
                // check if the numbers are different
                // check if the sum is 12
                // check if the police number is even
                if (isValidDeptNumbers(fire, police, sanitation))
                {
                    // print result
                    cout << "Fire: " << fire
                         << " - Police: " << police
                         << " - Sanitation: " << sanitation
                         << '\n';
                }
            }
        }
    }

    return 0;
}

/*
Fire: 1 - Police: 4 - Sanitation: 7
Fire: 1 - Police: 6 - Sanitation: 5
Fire: 2 - Police: 4 - Sanitation: 6
Fire: 2 - Police: 6 - Sanitation: 4
Fire: 3 - Police: 2 - Sanitation: 7
Fire: 3 - Police: 4 - Sanitation: 5
Fire: 4 - Police: 2 - Sanitation: 6
Fire: 4 - Police: 6 - Sanitation: 2
Fire: 5 - Police: 4 - Sanitation: 3
Fire: 5 - Police: 6 - Sanitation: 1
Fire: 6 - Police: 2 - Sanitation: 4
Fire: 6 - Police: 4 - Sanitation: 2
Fire: 7 - Police: 2 - Sanitation: 3
Fire: 7 - Police: 4 - Sanitation: 1
*/