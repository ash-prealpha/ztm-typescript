/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
//


const courseName = "typescript";
const courseName2 = 'typescript';

//it doesn't matter if u use '' or ""

const CourseName3 = `typescript`;

//backquotes are used a different way take a look at template-strings



const amount = 10;
const fraction = 10.5;

const oneThousand = 1e3;
//Exponent

const allPermissions = 0o777; 
//can be used on Linux

const hexByte = 0xff ;

const binary = 0b0100001;

const bigInt = 9000n;

const yes = true;
const no = false;
//booleans

const missing = undefined;
//when something is missing and we know nothing about it

const empty = null;
//we know its missing

let someNum = 0;
someNum = 1;
someNum = 2;

//if you want to change a variable use "let"
//but u can't use let multipeltypes

//VARIABLE SHADOWING
//is used for testing

{
    let someNum = 5;
}

let hello;
//u don't need to initalize variables, can be usefull if u want to set ur variable later but u need to use let and not const 
