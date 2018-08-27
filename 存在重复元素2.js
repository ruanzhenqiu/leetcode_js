/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var hash = {};
  for(var i=0;i<nums.length;i++){
    if(hash[nums[i]]!==undefined){
      var len = hash[nums[i]].length;;
      if(i-hash[nums[i]][len-1]<=k){
        return true;
      }else{
        hash[nums[i]].push(i);
      }
    }else{
      hash[nums[i]] = [i];
    }
  }
  return false;
};
console.log(containsNearbyDuplicate([1,2,3,1],3));