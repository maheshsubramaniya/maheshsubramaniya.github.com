---
layout: post
title: MinT - An mathematical programming language
excerpt: An easy to use mathematical programming languages supports Combinatircs,Calculus,Big numbers, graphs, matrices and many more
categories: ['projects']
tags: ['math','programming language','calculus','combinatrics','matrices']
---

**MinT** is a mathematical programming language, which is fully designed in java. MinT is developed for solving the problems in some areas by writing the program that is meant by the MinT mathematical programming language. MinT helps in many ways the students, professors and lectures also the research peoples. MinT provides about 100 mathematical functions for the calculations. Since MinT has built in Interpreter it can compile the source in the fly and show the results. MinT has its own GUI for writing programs and the output console window. Both Input and output functions are also provided in MinT. MinT follows the C-style writing program. It is done in C-style because for the easy learning for the new users. The MinT built in functions replace hundreds of C or C++ or Java source codes. The function done in more than 100 lines of code are done in a single statement. MinT replaces lots and lots of C, C++ and Java codes by just two or three statements of coding. This saves the time factor and fastness in developing the program.

**The types of functions that MinT provide are**

* Basic Arithmetic Calculations

* Trigonometric and Logarithmic Calculations

* Differential Calculus

* Matrix Calculations

* Complex Number Calculations

* Big Number Calculations ( Values in the order of 10n )

* Graph Plotting ( 2D [static and animated] and 3D )

* Combinatrics

* Miscellaneous Functions (I/O functions etc...).

Sample Examples:

Example :

    /* example of differential calculus */

  y = 'arcsin(x^2)';

  d1 = dx(y,'x');

   print('Derivative of f(x)=' + y);

    value = eval('x=0.1;c = ' + d1 + ';return c;');

    print(ans);print('Value f(0.1)=' + value);

Explanation:

            Line 2 is the given equation to derive

            Line 3 derives the given equation with respect to x

            Line 4 simplify the equation

Line 5 print the derived equation, Line 6 evaluates the numerical value for the equation and Line 7 prints the result

Output:

Derivative of f(x)=arcsin(x^2)

2 * 1 * x ^ (2 - 1) / sqrt(1 - (x ^ 2) ^ 2)

Value f(0.1)=0.20001000075006253

Example:



Plot3D(“cos(sqrt(((x+0)^2)+((y+0)^2)))*7”)           



Plot3D(“sin(sqrt(((x+0)^2)+((y+0)^2)))*7–5”)

           

 

 

 

/* example for graph plotting */
plot3D(“Example1”, “x^3/y^3” ); //rotated in some direction





            plot3D(“Example1”, “sin(x^2+y^2-500)” ); //rotated in some direction

