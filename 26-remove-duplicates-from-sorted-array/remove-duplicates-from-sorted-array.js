/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1) return nums.length;
    let store = new Set();

    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!store.has(nums[i])) {
            store.add(nums[i]);
            nums[index++] = nums[i];
        }
    }

    return index;
};