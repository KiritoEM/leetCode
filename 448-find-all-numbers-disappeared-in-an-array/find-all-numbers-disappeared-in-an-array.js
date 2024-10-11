/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let curr = Math.abs(nums[i]) - 1;

        if (nums[curr] > 0) {
            nums[curr] = - nums[curr];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }

    return res;
};