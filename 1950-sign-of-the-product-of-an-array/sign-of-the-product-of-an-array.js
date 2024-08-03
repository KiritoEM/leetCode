/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    if (nums.includes(0)) {
        return 0;
    }

    let product = nums.reduce((acc, curr) => acc * curr);

    if (product > 0) {
        return 1;
    }
    else {
        return -1;
    }
};