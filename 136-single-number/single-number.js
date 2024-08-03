/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let occ = {};

    for (let i = 0; i < nums.length; i++) {
        if (occ[nums[i]]) {
            occ[nums[i]]++;
        }
        else {
            occ[nums[i]] = 1;
        }
    }

    let output = -1;

    Object.keys(occ).forEach((k) => {
        if (occ[k] === 1) {
            output = k;
        }
    })

    return output;

};