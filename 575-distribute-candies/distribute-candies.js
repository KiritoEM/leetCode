/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let typesLen = [...new Set(candyType)].length;
    let n = candyType.length / 2;

    if (typesLen > n) {
        return n;
    }
    else {
        return typesLen;
    }
};