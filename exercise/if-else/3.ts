// You are developing a weather advisory application that provides
// recommendations based on the current temperature. The application will
// suggest whether a user should wear a coat, bring an umbrella, or go out
// without any weather-related gear.
//
// Requirements:
// - Use an if-else statement to check the current temperature.
//   - If the temperature is below 10°C, print "It's cold, wear a coat."
//   - If the temperature is between 10°C and 20°C, print "Mild weather, bring
//     a light jacket."
//   - If the temperature is above 20°C, print "It's warm, no need for a
//     coat."
// - Use another if-else statement to check if it's raining.
//   - If it is raining, print "Don't forget your umbrella!"
//   - If it's not raining, print "No umbrella needed."
//
// Notes:
// - Optionally use functions
// - Change the initial constants to different values to check how your program
//   behaves.

/* eslint-disable */

// Change this to different values to check your program behavior.
const temperature = 9; // Example: 15°C

//
// Put your code here to check the current temperature
//

function CurrentTemperature (temperature : number)
{
    if (temperature <= 10)
    {
        console.log ("It's cold, wear a coat.");
        return;
    }
    else if (temperature >= 20)
            {
                console.log ("It's warm, no need for a coat.");
                return;
            }
            else
                    {
                        console.log ("Mild weather, bring a light jacket.");
                        return;
                    }
}

CurrentTemperature (temperature);

// Change this to different values to check your program behavior.
const isRaining = true;

//
// Put your code here to check if it's raining
//
//

function UmbrellaNeed (isRaining)
{
 const Rain = isRaining ? (console.log ("Don't forget your umbrella!")) : (console.log ("No umbrella needed")); 
 return Rain;
}

UmbrellaNeed (isRaining);

