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
var maxDepth = function(root) {
    if (root === null) {
        return 0; // profondeur 0
    }

    let queue = [root]; // par défaut le root
    let depth = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        depth++;
    }

    return depth;
};
