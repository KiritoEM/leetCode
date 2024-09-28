/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0; //si vide, profoundeur max est 0
    let queue = [root]
    let depth = 0;

    while (queue.length > 0) {
        depth++
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (!node.right && !node.left) return depth; //si une feuille

            if (node.left) queue.push(node.left);

            if (node.right) queue.push(node.right)
        }
    }

    return depth;
};