# Recursion Gameplan

1. Watch the video
2. Read the chapter
3. Try some recursive problems

## What is recursion?

When a function or sub-program calls itself.
Most of the time this means Direct Recursion.

```C++
int recursiveFunc() {
    ...
    int result = 2 * recursiveFunc();
    ...
}
```

There's also Indirect Recursion. When two different functions call each other in a loop, quite rare.

## Why study recursion?

Use it every day? Not likely!
Then why talk about it so much, because recursive problem-solving is hard...
...but much easier with the right techniques.

Recursive programming is a great way to show yourself that you can solve difficult problems.

## The Big Recursive Idea

Just don't think about the recursion.
The last thing you should think about is diagrams of the function calls, or what's happening on the system stack.

## Three-step Recursion Problem Solving

**Note:**
Start with problems you can solve already using iteration (i.e. loops)

**Problem:**
Two int arrays of sonsor data.
Sensor data arrays should be the same, but have small differences.
The second sensor is intended to be redundant.

**Example:**
```text
                    Abs. Diff.
sensorA[0] is 15         1         sensorB[0] is 14
sensorA[1] is -4         5         sensorB[1] is -9
sensorA[2] is 56         0         sensorB[2] is 56
sensorA[3] is 10         4         sensorB[3] is 14
sensorA[4] is -23        0         sensorB[4] is -23
```

Absolute difference of 10 and 14 is 4.
Total difference in values is 1 + 5 + 0 + 4 + 0 = 10

### Step 1: Write an interative function to solve the problem
-- Ultimately not necessary but good for learning technique
-- Helps us get details right
-- Important that parameter list is correct

```C++
int totalDiff(int sensorA[], int sensorB[], int size)
```

### Step 2: Write a "dispatcher" function

- Dispatcher function solves problem for some "minimal" data set. In this case when size parameter == 0. (you can't get a dataset smaller than an empty set)
- Dispatcher calls iterative function to handle non-minimal cases
- IMPORTANT: must pass smaller data set to iterative function
- In this case, passing `size - 1` for third parameter does the trick.
- Dispatcher must then handle last elements in the arrays.

### Step 3: In dispatcher, replace call to iterative function with call to dispatcher

## Apply the technique

- Start with problems that you can already solve non-recursively (iteratively)
- Learn to apply the technique conceptually, without using iterative function
- Don't think about what recursion function call does... just ask, "if this call returns the result it is supposed to, how do i solve the entire problem?"