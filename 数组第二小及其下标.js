function secondMin(arr) {
  var min1 = Number.MAX_VALUE;
  var min2 = Number.MAX_VALUE;
  var index1=0,index2=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]<min1){
      min2 = min1;
      index2 = index1;
      min1 = arr[i];
      index1 = i;
    }else if(arr[i]<min2){
      min2 = arr[i];
      index2 = i;
    }
  }
  return {index2,min2};
}
console.log(secondMin([2,8,2,-1,0,2,5]));
