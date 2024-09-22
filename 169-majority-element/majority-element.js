/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;

        if (count > nums.length /2) break;
    }

    return candidate;
};
