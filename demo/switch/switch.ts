/* eslint-disable */
import { strict as assert } from "assert";

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
//

let someNumber = parseInt ("10");
const sample = "sample";
const someString = `${sample}`;

switch (someString)
{
 
    case "sample":
        //code
    break;
    
}



switch (someNumber) 
{
    case 1:
        //A
        break;
    case 2:
        //B
        break;
    case 3:
        //C
        break;
    default:
        //code
}

if (someNumber === 1)
{
    //A
}
    else if (someNumber === 2)
    {
        //B
    }
        else if (someNumber === 3)
        {
            //C
        }

someNumber = parseInt ("1");
switch (someNumber)
{
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        break;
}

//we exist as so as there is a break

if (someNumber >= 1 && someNumber <= 5)
{
    //code
}
//the example on top is the same as the one with switch and the 5 case and 1 break