/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for(var i=0;i<=nums.length;i++){//考虑边界：插入在最后
    if(i == nums.length){
      return nums.length;
    }
    if(nums[i]>=target){
      return i;
    }
  }
};