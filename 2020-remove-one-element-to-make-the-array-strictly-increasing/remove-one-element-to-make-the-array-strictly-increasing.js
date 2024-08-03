/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    let v = -1;
    
    for (let i = 0; i < nums.length; i++) {
        let new_tab = nums.slice(0, i).concat(nums.slice(i + 1));
        
        let isIncreasing = true;
        for (let j = 1; j < new_tab.length; j++) {
            if (new_tab[j - 1] >= new_tab[j]) {
                isIncreasing = false;
                break;
            }
        }
        
        if (isIncreasing) {
            return true;
        }
    }
    
    return false;
};
