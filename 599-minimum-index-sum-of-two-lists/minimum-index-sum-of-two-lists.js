/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let dict = {};
    let result = [];
    let minIndexSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        if (list2.includes(list1[i])) {
            let j = list2.indexOf(list1[i]);
            let index = i + j;

            if (index < minIndexSum) {
                result = [list1[i]];
                minIndexSum = index;
            }
            else if (index === minIndexSum) {
                result.push(list1[i])
            }
        }

    }

    return result;
};