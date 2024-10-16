/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let new_nums = applyOperation(nums);
    moveZeroes(new_nums);

    return new_nums;
};

const applyOperation = (nums) => {
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
        i++;
    }

    return nums;
}

const moveZeroes = (nums) => {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }

    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
}