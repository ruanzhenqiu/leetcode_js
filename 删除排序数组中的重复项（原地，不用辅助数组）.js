/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var i = 0;
  var j = 1;
  for(j;j<nums.length;j++){
    if(nums[j] !== nums[i]){
      i++;
      nums[i] = nums[j];
    }
  }
  return i+1;
};