/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let number = BigInt(digits.join("")) + BigInt(1);
    return number.toString().split("").map(Number);
};