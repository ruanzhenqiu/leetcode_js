/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var i = 0;
  var j = 0;
  var k = 0;
  var arr = [];
  while(i<=m-1 && j<=n-1){
    arr[k++] = nums1[i]<=nums2[j]? nums1[i++]:nums2[j++];
  }
  while(i<=m-1){
    arr[k++] = nums1[i++];
  }
  while(j<=n-1){
    arr[k++] = nums2[j++];
  }
  for(var index=0;index<arr.length;index++){
    nums1[index] = arr[index];
  }
};

