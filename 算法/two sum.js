function towSum(arr,num) {
  var hash = {};
  var len = arr.length;
  for(var i=0;i<len;i++){
    var target = num - arr[i];
    if(hash[target] !== undefined){
      return [i,hash[target]];
    }
    hash[arr[i]] = i;
  }
}

var arr = [2,3,4,5,6];
console.log(towSum(arr,9));