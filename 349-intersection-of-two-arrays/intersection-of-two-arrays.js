/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let intersection = new Set();

    nums1.forEach((num) => {
        if (nums2.includes(num)) {
            intersection.add(num)
        }
    })

    return Array.from(intersection);
};