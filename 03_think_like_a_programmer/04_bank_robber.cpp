// RobberX, RobberY, RobberSpeed
// GuardX, GuardY, GuardSpeed
// RobberPos, GuardPos
// RobberPos moves to door (0,0)
// GuardPos moves to RobberPos
// Speed = feet/second
// 1s = 1000ms;
// 1ft = feet * 0.3048 = meters
// Are the X, Y, Speed random? Let's say yes.

// Where is the Robber after one second?

#include <iostream>
#include <cmath>
using std::cout;

#define PI 3.14159265

int main()
{
    // Robber pos and speed
    double robberX = -10.0;
    double robberY = 100.0;
    double robberSpeed = 11;

    // Guard pos and speed
    double guardX = -5.0;
    double guardY = 140.0;
    double guardSpeed = 13;

    // The ratio of the robber pos in relation to the door (trig)
    // Corners of the big triangle are here
    double bigTriangleWidth = guardX - robberX;
    double bigTriangleHeight = guardY - robberY;
    double bigTriangleRatio = bigTriangleWidth / bigTriangleHeight;
    // Arc tangent function -> atan
    double bigTriangleAngle = atan(bigTriangleRatio);

    // Output (radians converted to deg)
    // -> Big Triangle Ratio in degrees: 5.71059

    cout << "Big Triangle Ratio in degrees: " << bigTriangleAngle * 180 / PI << "\n";

    double ratioX = sin(bigTriangleAngle);
    double changeX = ratioX * robberSpeed;
    double ratioY = cos(bigTriangleAngle);
    double changeY = ratioY * robberSpeed;

    // Output (should be below the robberSpeed of 11)
    // -> changeX: 1.09454 changeY: 10.9454

    cout << "changeX: " << changeX << " changeY: " << changeY << "\n";

    // Output
    // -> Original robberX: -10 robberY: 100

    cout << "Original robberX: " << robberX << " robberY: " << robberY << "\n";

    robberX += copysign(changeX, robberX * -1);
    robberY += copysign(changeY, robberY * -1);

    // Output
    // -> New robberX: -8.90527 robberY: 89.0547

    cout << "New robberX: " << robberX << " robberY: " << robberY << "\n";

    // Output
    // -> Original guardX: -5 guardY: 140

    cout << "Original guardX: " << guardX << " guardY: " << guardY << "\n";

    guardX += copysign(changeX, bigTriangleWidth * -1);
    guardY += copysign(changeY, bigTriangleHeight * -1);

    // Output
    // -> New guardX: -6.36426 guardY: 129.086

    cout << "New guardX: " << guardX << " guardY: " << guardY << "\n";
}
