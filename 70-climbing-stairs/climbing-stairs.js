/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1)
        return 1;
    if (n === 2) {
        return 2;
    }

    let p1 = 1;
    let p2 = 2;
    let current;

    for (let i = 3; i < n + 1; i++) {
        current = p1 + p2
        p1 = p2;
        p2 = current;
    }
    return p2
};