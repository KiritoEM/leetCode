/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let store = new Set();

    while (n !== 1 && !(store.has(n))) {
        store.add(n);
        n = getNext(n);
    }

    return n === 1;
};

function getNext(n) {
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }

    return sum;
}