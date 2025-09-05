// You are building a making application that helps determine whether a store
// is open or closed based on the current time. The application will also check
// if a user has sufficient funds to make a purchase.
//
// Requirements:
// - Use an if-else statement to determine if the store is open.
//   - The store is open between 9 AM and 9 PM.
//   - Use 24-hour clock for time. So 4AM will be `400` and 10PM will be `2200`
//   - If the store is open, print "Store is open". If the store is closed,
//     print "Store is closed".
// - Use another if-else statement to check if a user has enough money to make
//   a purchase.
//   - The user has enough money if their balance is greater than or equal to
//     the item price
//   - If the user has enough money to buy the item, print "Enough funds". If
//     not, print "Insufficient funds".
//
// Notes:
// - Optionally use functions
// - Change the initial constants to different values to check how your program
//   behaves.

/* eslint-disable */

// Change these to different values to check your program behavior.
const userBalance = 30;
const itemPrice = 40;

//
// Put your code here to check if the user has enough money to make a purchase
//
//
function Purchasepossible (userBalance : number, itemPrice : number)
{
   
    console.log (`User Balance: ${userBalance} $`);
    console.log (`Item Price: ${itemPrice} $`);

    if (userBalance >= itemPrice)
    {
        console.log ("Enough funds");
        return;
    }
    else
            {
                console.log ("Insufficent funds");
                return;
            }

}


// Change this to different values to check your program behavior.
const currentTime = 900; // Example: 10 AM

//
// Put your code here to check if the store is open
//

function StoreOpeningstatus (currentTime : number)
{
    if (currentTime >= 900 && currentTime <= 2100)
    {
        console.log (`Store is open! It's ${currentTime}.`);
        Purchasepossible (userBalance, itemPrice);
        return;
    }
    else  
        {
            console.log (`Store is closed! It's ${currentTime}.`);
            return;
        }
}

StoreOpeningstatus (currentTime);




