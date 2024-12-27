/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let rowArr = []
    for (let i = 1; i <= rowIndex + 1; i++) {
        let ColArr = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                ColArr.push(1);
            }
            else {
                ColArr.push(rowArr[i - 2][j - 1] + rowArr[i - 2][j]);
            }
        }
        rowArr.push(ColArr);
    }

    return rowArr[rowIndex];
};