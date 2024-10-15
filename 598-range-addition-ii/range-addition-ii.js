/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if (ops.length === 0) {
        return m * n;
    }

    let minRow = m;
    let minCol = n;

    for (let op of ops) {
        minRow = Math.min(minRow, op[0]);
        minCol = Math.min(minCol, op[1]);
    }

    return minRow * minCol;
};
