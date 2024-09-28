/**
 * @param {number[]} nums
 * @return {string[]}
 */
const pushStringRanges = (ranges, start, end) => {
    if (start !== end) {
        ranges.push(`${start}->${end}`);
    }
    else {
        ranges.push(`${start}`);
    }
}

var summaryRanges = function (nums) {
    let start = nums[0];
    let end = nums[0];
    let ranges = []

    if (nums.length === 0) return []

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + 1 !== nums[i]) {
            pushStringRanges(ranges, start, end);
            end = nums[i];
            start = nums[i];
        }
        else {
            end = nums[i]; //le end increment jusqu' au nombre non consécutif
        }
    }

    pushStringRanges(ranges, start, end); //pour inclure la dernière élément

    return ranges;
};