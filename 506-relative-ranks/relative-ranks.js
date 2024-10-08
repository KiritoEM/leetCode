/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let rankDict = {};
    let s_score = [...score];
    let sorteScore = score.sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < sorteScore.length; i++) {
        rankDict[sorteScore[i]] = i + 1;
    }

    for (let i = 0; i < s_score.length; i++) {
        if (rankDict[s_score[i]] === 1) {
            result.push("Gold Medal")
        }
        else if (rankDict[s_score[i]] === 2) {
            result.push("Silver Medal")
        }
        else if (rankDict[s_score[i]] === 3) {
            result.push("Bronze Medal")
        }
        else {
            result.push(`${rankDict[s_score[i]]}`)
        }
    }

    return result;
};