#include <cmath>
#include <iostream>
using std::cout;

// General function based on first program position of the guard
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