/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    if (m * n !== r * c) return mat;

    let flat_matrix = mat.flat();
    let flatten = Array.from({ length: r }, () => new Array(c));

    for (let i = 0; i < r * c; i++) {
        flatten[Math.floor(i / c)][i % c] = flat_matrix[i];
    }

    return flatten;

}