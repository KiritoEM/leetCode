/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let dict = {};
    let result = [];

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                dict[list1[i]] = i + j;
            }
        }
    }

    let Keys = Object.values(dict);
    minIndex = Math.min(...Keys);

    for (const [k, v] of Object.entries(dict)) {
        if (v === minIndex) {
            result.push(k);
        }
    }

    return result;
};