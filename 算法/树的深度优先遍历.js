function deepTraversal(node){
 var result = [];
 var stack = [];
 if(node!=null){
   stack.push(node);
 }
 while(stack.length){
   var p = stack.pop();
   result.push(p);
   var children = p.children;
   for(var i=children.length-1;i>0;i--){//待会拿出来的时候就可以先拿第一个child了
     stack.push(children[i]);
   }
 }
 return result;
}