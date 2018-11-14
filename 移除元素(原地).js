/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * nums = [0,1,2,2,3,0,4,2], val = 2,
 */
//可以利用快排的思想
var removeElement = function(nums, val) {
  var less = -1;
  for(var i=0;i<nums.length;i++){
    if(nums[i]!==val){
      swap(nums,++less,i);
    }
  }
  return less+1;
};
function swap(nums,i,j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}