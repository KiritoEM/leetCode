/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        if (nums[start] % 2 !== 0) {
            if (nums[end] % 2 === 0) {
                [nums[start], nums[end]] = [nums[end], nums[start]];
                start++;
                end--;
            }
            else {
                end--;
            }
        }
        else {
            start++;
        }
    }

    return nums;
};