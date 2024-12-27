/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num.toString().length !== 1) {
        let totalDigits = num.toString().split("").map((n) => {
            return parseInt(n);
        }).reduce((acc, curr) => acc + curr, 0);
        num = totalDigits;
    }
    return num;
};
