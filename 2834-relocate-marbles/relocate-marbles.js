/**
 * @param {number[]} nums
 * @param  {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
    let mapSet = new Set(nums);

    for (let i = 0; i < moveFrom.length; i++) {
        if (mapSet.has(moveFrom[i])) {
            mapSet.delete(moveFrom[i]);
            mapSet.add(moveTo[i]);
        }
    };

    return Array.from(mapSet).sort((a, b) => a - b);
}