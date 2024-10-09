/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    let res = [];

    for (let i = 0; i < candies.length; i++) {
        let currCandies = candies[i] + extraCandies;
        if (currCandies >= maxCandies) {
            res.push(true);
        }
        else {
            res.push(false);
        }
    }

    return res;
};
