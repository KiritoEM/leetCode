/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;
    let start = 1;
    let end = x;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (BigInt(mid) * BigInt(mid) === BigInt(x)) {
            return mid;
        } else if (BigInt(mid) * BigInt(mid) > BigInt(x)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return end;
};
