/**
 * @param {number[]} digits
 * @return {number[]}
 * [9,9]
 */
var plusOne = function(digits) {
  var len = digits.length;
  digits[len-1]++;
  for(var i=len-1;i>=0;i--){
    if(digits[i]== 10){
      digits[i]=0;
      if(i==0){
        digits.unshift(1);
      }else{
        digits[i-1]++;
      }
    }
  }
  return digits;
};
