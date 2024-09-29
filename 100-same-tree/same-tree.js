/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    //utilisation de pile (stack) => approche DFS
    let stackP = [p];
    let stackQ = [q];

    while (stackP.length > 0 && stackQ.length > 0) {
        let nodeP = stackP.pop()
        let nodeQ = stackQ.pop()

        if (nodeP === null && nodeQ === null) {
            continue;
        }

        if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) {
            return false;
        }

        stackP.push(nodeP.left);
        stackP.push(nodeP.right);
        stackQ.push(nodeQ.left);
        stackQ.push(nodeQ.right);
    }

    return stackP.length === 0 && stackQ.length === 0;

};