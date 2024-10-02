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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = [];

    const traversal = (node) => {
        if (node === null) return;

        //traverse the left  subtree
        traversal(node.left);

        result.push(node.val);

        //traverse the right  subtree
        traversal(node.right);
    }

    traversal(root);

    return result;
};
