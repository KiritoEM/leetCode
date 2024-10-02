/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let array_sum = 0;
    let actual_sum = nums.reduce((acc, curr) => acc + curr);

    for (let i = 0; i < nums.length + 1; i++) {
        array_sum += i;
    }

    return array_sum - actual_sum;
};