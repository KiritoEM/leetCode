/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    let flat_matrix = mat.flat()
    let flatten = [[]]

    if (m * n !== r * c) return mat;

    for (let i = 0; i < r; i++) {
        flatten[i] = []
        for (let j = 0; j < c; j++) {
            flatten[i][j] = flat_matrix[c * i + j];
        }
    }

    return flatten;
}