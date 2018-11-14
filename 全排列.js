var permute = function(nums) {
  var nums = nums.join();
  var result = [];
  if(nums.length ==1){
    return [nums];
  }else{
    var left = nums[0];
    var rest = nums.slice(1);
    var preResult = permute(rest);
    for(var i=0;i<preResult.length;i++){
      for(var j=0;j<preResult[i].length+1;j++){
        var tmp = preResult[i].slice(0,j) + left + preResult[i].slice(j);
        result.push(tmp);
      }
    }
  }
  return result;
};