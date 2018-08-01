/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var len = nums.length;
  var sumMax = nums[0];
  for(var start=0;start<len;start++){
    var sum = 0;
    for(var end = start;end<len;end++){
      sum += nums[end];
      if(sum>sumMax){
        sumMax = sum;
      }
    }
  }
  return sumMax;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));