/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    let res = nums.filter((n)=> n!== min && n !== max);

    return res.length === 0 ? -1 : res[0];
};