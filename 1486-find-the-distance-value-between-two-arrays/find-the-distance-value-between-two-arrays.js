/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    arr2.sort((a, b) => a - b);
    let count = 0;

    for (let val of arr1) {
        if (!findDistance(arr2, val, d)) {
            count++;
        }
    }

    return count;
};

const findDistance = (arr, val, d) => {
    let start = 0, end = arr.length - 1; //binary search

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        let distance = Math.abs(val - arr[mid]);

        if (distance <= d) {
            return true
        }
        else if (val > arr[mid]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return false;
}