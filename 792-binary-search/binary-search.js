/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0, end = nums.length - 1;
    let pos = -1;
    let mid = -1;

    nums.sort((a, b) => a - b);

    while (start <= end && pos === -1) {
        mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            pos = mid;
        }
        else if (nums[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return pos;
};