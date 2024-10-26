/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let map = {};

    for (let num of nums2) {
        while (num > stack.at(-1)) {
            map[stack.pop()] = num;
        }
        stack.push(num);
    }

    return nums1.map(num => map[num] ?? -1);
};
