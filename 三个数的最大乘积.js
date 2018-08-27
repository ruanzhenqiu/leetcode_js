/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {//时间复杂度O(n)
  if(nums.length == 3){
    return nums[0]*nums[1]*nums[2];
  }
  var max1 = Number.MIN_VALUE;
  var max2 = Number.MIN_VALUE;
  var max3 = Number.MIN_VALUE;
  var min1 = Number.MAX_VALUE;
  var min2 = Number.MAX_VALUE;
  for(var i=0;i<nums.length;i++){
    if(nums[i]>max1){
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    }else if(nums[i]>max2){
      max3 = max2;
      max2 = nums[i];
    }else if(nums[i]>max3){
      max3 = nums[i];
    }
    if(nums[i]<min1){
      min2 = min1;
      min1 = nums[i];
    }else if(nums[i]<min2){
      min2 = nums[i];
    }
  }
  if(max1<=0 || min1>=0){//均为正数或均为负数的情况
    return max1*max2*max3;
  }
  var result1 = max1*max2*max3;
  var result2 = max1*min1*min2;
  return result1>result2? result1:result2;

};