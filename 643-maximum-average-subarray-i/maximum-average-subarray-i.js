/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let subarrays = [];
    let maxAverage = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    maxAverage = parseFloat(currentSum / k);

    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        let currentAverage = parseFloat(currentSum / k);
        maxAverage = Math.max(maxAverage, currentAverage);
    }

    return maxAverage;
};
