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
var diameterOfBinaryTree = function(root) {
    let max = 0;
    if (root == null)
        return 0;
    let left = depth(root.left);
    let right = depth(root.right);
    
    let diameter = left + right;
    let leftdia = diameterOfBinaryTree(root.left);
    let rightdia = diameterOfBinaryTree(root.right);
    max = Math.max(leftdia,rightdia,diameter)

    return max;
};

function depth(root) {
    if (root == null)
        return 0;
    let leftDepth = depth(root.left);
    let rightDepth = depth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}