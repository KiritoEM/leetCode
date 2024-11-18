/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let stack = [];

    for (let char of logs) {
        if (char === "../" && stack.length > 0) {
            stack.pop();
        }
        else if (char !== "./" && char !== "../") {
            stack.push(char);
        }
    }

    return stack.length;
};