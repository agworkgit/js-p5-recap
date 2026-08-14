#include <cmath>
#include <iostream>
using std::cout;

// General function based on the second half of the first program, position of the guard
void computeChanges(double &movingX, double &movingY, double speed, double targetX, double targetY)
{
    double bigTriangleWidth = movingX - targetX;
    double bigTriangleHeight = movingY - targetY;
    double bigTriangleRatio = bigTriangleWidth / bigTriangleHeight;
    double bigTriangleAngle = atan(bigTriangleRatio);

    double ratioX = sin(bigTriangleAngle);
    double changeX = ratioX * speed;
    double ratioY = cos(bigTriangleAngle);
    double changeY = ratioY * speed;

    movingX += __copysignf16(changeX, bigTriangleWidth * -1);
    movingY += __copysignf16(changeY, bigTriangleHeight * -1);
}

// Distance function for Cartesian coords
double abs_distance(double object1X, double object1Y, double object2X, double object2Y)
{
    double diffX = object2X - object1X;
    double diffY = object2Y - object1Y;
    double d = sqrt(diffX * diffX * diffY * diffY);
    return abs(d);
}

// Speed normalisation

void normaliseSpeeds(double &speed1, double &speed2, double maxSpeed)
{
    double larger = speed1;
    if (speed2 > larger)
        larger = speed2;
    speed1 = speed1 / larger * maxSpeed;
    speed2 = speed2 / larger * maxSpeed;
}

int main()
{
    double robberX = -10.0;
    double robberY = 100.0;
    double robberSpeed = 11;

    double guardX = -5.0;
    double guardY = 115.0;
    double guardSpeed = 13;

    normaliseSpeeds(robberSpeed, guardSpeed, 0.1);

    double doorX = 0.0;
    double doorY = 0.0;

    double closeEnough = 0.2;

    while (abs_distance(robberX, robberY, guardX, guardY) > closeEnough && abs_distance(robberX, robberY, doorX, doorY) > closeEnough)
    {
        computeChanges(robberX, robberY, robberSpeed, doorX, doorY);
        computeChanges(guardX, guardY, guardSpeed, robberX, robberY);
    }

    if (abs_distance(robberX, robberY, doorX, doorY) <= closeEnough)
    {
        cout << "Robber escapes.\n"
             << " GuardX: " << guardX << " GuardY: " << guardY << "\n";
    }

    if (abs_distance(robberX, robberY, guardX, guardY) <= closeEnough)
    {
        cout << "Guard reaches robber.\n"
             << " RobberX: " << robberX << " RobberY: " << robberY << "\n GuardX: " << guardX << " GuardY: " << guardY << "\n";
    }

    return 0;
}

// Example output
// Guard reaches robber.
// -> RobberX: -8.05524 RobberY: 80.5573
// -> GuardX: -8.03924 GuardY: 92.2