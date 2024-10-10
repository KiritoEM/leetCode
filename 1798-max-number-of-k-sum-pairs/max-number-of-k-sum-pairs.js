/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) { // approche recherche dichotomique
    let count = 0;

    let i = 0, j = nums.length - 1;

    nums.sort((a, b) => a - b);

    while (i < j) {
        if (nums[i] + nums[j] === k) {
            count++;
            i++;
            j--;
        }
        else if (nums[i] + nums[j] > k) {
            j--;
        }
        else {
            i++;
        }
    }

    return count;
};
