#include <iostream>
#include <stdlib.h>
using std::cout;

/* int totalDiff(int sensorA[], int sensorB[], int size)
{
    int diff = 0;
    for (int i = 0; i < size; i++)
    {
        // abs returns absolute value of the calculation
        diff += abs(sensorA[i] - sensorB[i]);
    }
    return diff;
}
 */

// We get rid of the iterative part
// Replace it with a recursive solution
// Specifically making diff = totalDiffDispatcher

int totalDiffDispatcher(int sensorA[], int sensorB[], int size)
{
    if (size == 0)
        return 0;
    int lastElementDiff = abs(sensorA[size - 1] - sensorB[size - 1]);
    int diff = totalDiffDispatcher(sensorA, sensorB, size - 1) + lastElementDiff;
    return diff;
}

int main()
{
    int firstSensor[] = {15, -4, 56, 10, -23};
    int secondSensor[] = {14, -9, 56, 14, -23};
    cout << "The total difference in sensor reading is: " << totalDiffDispatcher(firstSensor, secondSensor, 5) << "\n";
    return 0;
}

// Recursion gives the same output:
// -> The total difference in sensor reading is: 10