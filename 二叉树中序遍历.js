var inorderTraversal = function(root) {
  var stack = [];
  var result = [];
  if(root == null){
    return result;
  }
  stack.push(root);
  var temp = root;
  while (stack.length>0){
    while(temp.left){
      stack.push(temp.left);
      temp = temp.left;
    }
    var p = stack.pop();
    result.push(p.val);
    if(p.right){
      stack.push(p.right);
      temp = p.right;
    }
  }
  return result;
};
