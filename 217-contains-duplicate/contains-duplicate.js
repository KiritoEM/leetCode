/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        }
        else {
            obj[nums[i]] = 1;
        }
    }

    let state = [];

    Object.values(obj).forEach((n) => {
        if (n > 1) {
            state.push(true)
        }
    });

    return state.includes(true);

};