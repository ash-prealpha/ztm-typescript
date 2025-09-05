// Using at least one ternary operator, create a program that can convert
// Celsius and Fahrenheit temperatures.
//
// To convert °C to °F: (°C * 1.8) + 32
// To convert °F to °C: (°F - 32) / 1.8
//
// To confirm that your program works properly, do the following:
// 1. convert 25°C to °F, and assert that the value is 77
// 1. convert 68°F to °C, and assert that the value is 20

import { strict as assert } from "assert";


const temperature = 68;
const Unite = "F";

function convertCtF (temperature : number) : number
{
    console.log ("convert °C to °F");
    return (temperature * 1.8) + 32;
}

function convertFtC (temperature : number) : number
{
    console.log ("convert °F to °C")
    return (temperature - 32) / 1.8;
}


function ConverttoUnite (temperature : number, Unite : "C" | "F") : number
{
    return Unite === "C" ? convertCtF (temperature) : convertFtC (temperature);
}

console.log (`Temperatuer: ${temperature} ${Unite}`);
console.log (`${ConverttoUnite (temperature, Unite)}`);
