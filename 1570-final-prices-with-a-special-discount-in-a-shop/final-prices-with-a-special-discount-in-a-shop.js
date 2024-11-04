/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let stack = [];
    let answer = [];
    let i = prices.length - 1;

    while (i >= 0) {
        while ((stack.length > 0) && (prices[i] < stack.at(-1))) {
            stack.pop();
        }

        let pay = prices[i] - (stack.at(-1) ?? 0);
        answer.push(pay);

        stack.push(prices[i]);

        i--;
    }

    return answer.reverse();
};