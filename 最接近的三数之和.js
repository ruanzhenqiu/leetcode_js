/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var res = Number.MAX_VALUE;
  nums = nums.sort((a,b)=>a-b);
  for(var i=0;i<nums.length;i++){
    let l = i+1;
    let r = nums.length-1;
    while(l < r){
      let sum = nums[i]+nums[l]+nums[r];
      if(Math.abs(sum-target) < Math.abs(res - target)){
        res = sum;
      }
      if(sum<=target){
        l++;
      }else{
        r--;
      }
    }
  }
  return res;
};
