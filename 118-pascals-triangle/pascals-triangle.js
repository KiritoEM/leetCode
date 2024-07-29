/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let tab = [];

    for (let i = 0; i < numRows; i++) {
        tab[i] = [];
        tab[i][0] = 1;

        for (let j = 1; j < i; j++) {
            tab[i][j] = tab[i - 1][j - 1] + tab[i - 1][j];
        }

        tab[i][i] = 1;
    }

    console.log(tab);
    return tab;
};

