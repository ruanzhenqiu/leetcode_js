var lowestCommonAncestor = function(root, p, q) {
  if(root == null){
    return null;
  }
  if(p == root || q == root){
    return root;
  }
  var left = lowestCommonAncestor(root.left,p,q);
  var right = lowestCommonAncestor(root.right,p,q);
  if(left && right){
    return root;
  }
  return left? left:right;
};