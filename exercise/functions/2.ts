// You are developing a application to manage a set of basic operations related
// to geometric shapes. The application should be able to calculate the area of
// a rectangle, the perimeter of a rectangle, and the area of a circle. You'll
// implement these functions and demonstrate their usage.
//
// Requirements:
// - Define a function named `calculateRectangleArea` that calculates the area
//   of a rectangle by returning the `width` multiplied by the `height`.
// - Define a function named `calculateRectanglePerimeter` that calculates the
//   perimeter of a rectangle by returning the `width + height` and multiplying
//   it by 2
// - Define a function named `calculateCircleArea` that calculates the area of
//   a circle by taking π (pi) as approximately 3.14 and multiplying it by the
//   `radius` times `radius`.
// - Use these functions to perform some sample calculations and print the
//   results.

import { strict as assert } from "assert";

const RectangleLength : number = 5;
const RectangleWith : number = 10;
const Circeldiameter : number = 7;

function calculateRectangleArea (RectangleLength : number , RectangleWith : number ) : number
{
    const RectangleArea = RectangleLength * RectangleWith;
    return RectangleArea; 
}

function calculateRectanglePerimeter (RectangleLength : number, RectangleWith : number) : number
{
    const RectanglePerimeter = 2 * (RectangleLength + RectangleWith);
    return RectanglePerimeter;
}

function calculateCircleArea (Circeldiameter : number) : number
{
    const pi = 3.14;
    const CircleArea = pi * Circeldiameter * Circeldiameter;
    return CircleArea;
}

//
// Test cases
assert.equal(calculateRectangleArea(5, 10), 50);
assert.equal(calculateRectanglePerimeter(5, 10), 30);
assert.equal(calculateCircleArea(7), 153.86);

const rectanglearea = calculateRectangleArea (RectangleLength, RectangleWith);
const rectangleperimeter = calculateRectanglePerimeter (RectangleLength, RectangleWith);
const circlearea = calculateCircleArea (Circeldiameter);

console.log (`Rectangle Length: ${RectangleLength}`);
console.log (`Rectangle With: ${RectangleWith}`);
console.log (`Rectangle Area: ${rectanglearea}`);
console.log (`Rectangle Perimeter: ${rectangleperimeter}`);
console.log (`Circeldiameter: ${Circeldiameter}`);
console.log (`Circle Area: ${circlearea}`);
