// You are developing a application to determine whether a user is eligible for
// a discount.
//
// Requirements:
//
// - Create two functions to check for discount eligibility:
//   1. `isSenior`: returns `true` when the input `age` is 65 or older
//   2. `isLargePurchase`: returns `true` when the input `amount` is over 99
// - Define a function named `isEligibleForDiscount` and then use both the
//   `isSenior` and `isLargePurchase` functions that you created to determine
//   if there is discount eligibility.
//   - Use boolean logic and compound boolean operators to return `true` or
//   `false` from this function.
// - Print out whether a user is eligible for a discount.

/* eslint-disable */

import { strict as assert } from "assert";

function isSenior (age : number) : boolean
{
    return age > 65;
};

function isLargePurchase (amount : number) : boolean
{
    return amount > 99;
};

function isEligibleForDiscount (ageSenior, Purchaseamount) : boolean
{
 const Seniordiscount = isSenior (ageSenior);
 const Purchasdiscount = isLargePurchase (Purchaseamount);
 return Seniordiscount || Purchasdiscount;
}

// 
// Test cases
assert.equal(isEligibleForDiscount(60, 90), false);
assert.equal(isEligibleForDiscount(70, 90), true);
assert.equal(isEligibleForDiscount(60, 100), true);

console.log (`Eligibal for Discount? - Age: 60, Purchaseamount: 90 - ${isEligibleForDiscount(60,90)}`);
console.log (`Eligibal for Discount? - Age: 70, Purchaseamount: 90 - ${isEligibleForDiscount(70,90)}`);
console.log (`Eligibal for Discount? - Age: 60, Purchaseamount: 100 - ${isEligibleForDiscount(60,100)}`);
