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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let count = 0;
    let result;

    const inOrderTraversal = (node) => {
        if (node === null) return;

        // Traverse the left subtree
        inOrderTraversal(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        // Traverse the right subtree
        inOrderTraversal(node.right);
    };

    inOrderTraversal(root);

    return result;
};
