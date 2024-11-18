/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} rootB
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let result = [];

    const BST = (root) => {
        if (root === null) return;

        BST(root.left);

        result.push(root.val);

        BST(root.right);
    }

    BST(root);

    let dummyNode = new TreeNode(0);
    let currentNode = dummyNode;

    for (let val of result) {
        currentNode.right = new TreeNode(val);
        currentNode = currentNode.right;
    }

    return dummyNode.right;
};
