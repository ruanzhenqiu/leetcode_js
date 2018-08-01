/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var s = s.trim();
  if(!s){
    return 0;
  }
  var sArr = s.split(' ');
  return sArr[sArr.length-1].length;
};
