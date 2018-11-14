/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(root == null){
    return 0;
  }else if(root.left == null && root.rigth == null){//为什么要有个判断呢？如果没有的话，左右均为Number.MAX_VALUE
    return 1;
  }else{
    var leftDepth = minDepth(root.left);
    if(leftDepth == 0){
      leftDepth = Number.MAX_VALUE;
    }
    var rightDepth = minDepth(root.right);
    if(rightDepth == 0){
      rightDepth = Number.MAX_VALUE;
    }
    var depth = leftDepth<rightDepth?leftDepth:rightDepth;
    return 1 + depth;
  }
};