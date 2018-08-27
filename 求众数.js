/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var hash = {};
  for(var i=0;i<nums.length;i++){
    if(hash[nums[i]] !== undefined){
      hash[nums[i]]++;
    }else{
      hash[nums[i]] = 1;
    }
  }
  var max ={
    key:0,
    value:0
  };
  for(var key in hash){
    if(hash[key]>max.value){
      max.value = hash[key];
      max.key = key;
    }
  }
  console.log(max.key);
};

majorityElement([2,2,1,1,1,2,2]);