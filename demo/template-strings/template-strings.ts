/* eslint-disable */
import { strict as assert } from "assert";

// Template literals allow us to substitute variables into a string.
// This makes it easy to display customized messages.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//

function greet (message)
{
    console.log (`Hello ${message}`);
    //backtickts are so that the consol reads the following as a variable and not as a string
}

greet ("TypeScript");

const kids = 2;
const adults = 4;
const totalPeople = `There are ${kids + adults} people`;

const totalAttending = kids + adults;
const message = `There are ${totalAttending} people`;

console.log(`${message} to seat at the`);

