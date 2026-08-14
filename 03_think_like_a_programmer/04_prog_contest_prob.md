# Programming Contest Problems

- All about problem solving
- Programs are short -- but difficult
- Difficult for everyone?...
- Raw problem solving skill level differs in different people, BUT...
- ...more important to have a system of solving problems, so that you can never get "stuck".

## This problem just requires "basic" programming skills

- No arrays, classes, pointers, etc...

### Problem: Robber and Guard

We got a robber who just triggered the alarm of a bank, his location is specified in coordinates.
(i.e. Input Data: RobberX, RobberY, RobberSpeed)
For the sake of discussion the measurements are in feet. The robber is also given a speed in feet/s.
The door of the bank is at a fixed location (0,0), the bank also has a guard, the guard also has a location and a speed.
So when the alarm sounds the robber runs towards the door while the guard runs towards the robber. So the robber is running towards a fixed point while the guard is running towards a moving target.
The problem is to figure out where the robber and guard meet (intersect), or, robber escapes if door reached.

## What NOT to do

- Attack the problem head-on
- Start work on full program without solving details

**Major concern:** How am I going to have confidence in the answer produced by my program?

## Solving the "Robber and Guard" problem

- I need to simplify or reduce the problem
- We do this by changing the specifications to make the problem easier

**Options:**

1. Have both robber and guard head directly towards the door.
2. Ignore X axis; both guard and robber are at X = 0, so only Y values change.
3. Have only the robber -- see how many seconds it takes the robber to escape.
4. Just see where robber is after one second.

My options are not necessarily your options...nor my solution your solution. That's fine.

