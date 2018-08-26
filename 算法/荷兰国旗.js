//描述：一个数组，一个num
//<num放左边，=num放中间，>num放右边
function helan(arr,left,right,num) {
  var less = left-1;
  var more = right+1;
  var cur = left;
  while(cur<more){
    if(arr[cur]<num){//当前数小于num，则less后一位与当前数交换位置，当前位置前进
      swap(arr,++less,cur++);
    }else if(arr[cur] == num){//当前数等于num，处理下一位
      cur++;
    }else{//当前数大于num，则扩大more区，该数字放至more区，处理交换回来的数
      swap(arr,--more,cur);
    }
  }
  return(arr);
}
function swap(arr,i,j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [2,3,4,1,2,7,2,8,5,5,3];
console.log(helan(arr,0,arr.length-1,5));