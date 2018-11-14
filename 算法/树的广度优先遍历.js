function wideTraversal(node){
  var result = [];
  var i = 0;
  while(node!=null){
    result.push(node);
    node = result[i++];
    var children = node.children;
    children.forEach(e=>{
      result.push(e);
    });
  }
  return result;
}