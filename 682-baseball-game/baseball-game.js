/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [];

    for (let oper of operations) {
        if (oper === "C") {
            stack.pop();
        }
        else if (oper === "D") {
            stack.push(parseInt(stack.at(-1)) * 2);;
        }
        else if (oper === "+") {
            stack.push(parseInt(stack.at(-1)) + parseInt(stack.at(-2)));
        }
        else {
            stack.push(parseInt(oper))
        }
    }

    return stack.reduce((acc, curr) => acc + curr, 0);

};