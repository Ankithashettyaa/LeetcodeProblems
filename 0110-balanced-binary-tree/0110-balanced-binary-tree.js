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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    return checkBalance(root)[0]
    
};

function checkBalance(root){
    if(root == null)
        return [true,0]
    let leftbalanced = checkBalance(root.left)
    let rightbalanced = checkBalance(root.right)
    balanced = Math.abs(leftbalanced[1]-rightbalanced[1])<=1&&leftbalanced[0]&&rightbalanced[0]
    console.log(leftbalanced[1],rightbalanced[1],balanced)
    return [balanced,Math.max(leftbalanced[1],rightbalanced[1])+1]
}

