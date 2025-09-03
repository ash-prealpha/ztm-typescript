/* eslint-disable */
import { strict as assert } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//

//some Math

const add = 1 + 1;
assert.equal (add, 2);

const sub = 2 - 1;
assert.equal (sub, 1);

const mul = 3 * 3;
assert.equal (mul, 9);

const div = 8 / 2;
assert.equal (div, 4);

const inf = 1 / 0;
assert.equal (inf, Infinity);
//"Infinity" is infinity in Maths

const nan = 0 / 0;
assert(isNaN(nan));
//"NaN" = Not a Number

const rem = 10 % 3;
assert.equal (rem, 1);

const neg = -rem;
assert.equal (neg, -1);
const neg2 = -neg;
assert.equal (neg2, 1);


const exp = 2 ** 3;
assert.equal (exp, 8);

//all funktion work with decimals

const abs = Math.abs (-5);
assert.equal (abs, 5);
// u can just tipe in "Math." for Math oporations