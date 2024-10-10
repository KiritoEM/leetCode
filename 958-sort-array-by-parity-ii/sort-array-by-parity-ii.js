/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let i = 0, j = 1;

    while ((i < nums.length) && (j < nums.length)) {
        if (nums[i] % 2 === 0) { //si i pair et nums[i] pair
            i += 2;
        }
        else if (nums[j] % 2 !== 0) {//si i impair et nums[i] impair
            j += 2;
        }
        else {
            [nums[i], nums[j]] = [nums[j], nums[i]]; //échanger
            i += 2;
            j += 2;
        }
    }

    return nums;
};