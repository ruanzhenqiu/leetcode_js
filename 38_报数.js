/*
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n ，输出报数序列的第 n 项。
 */


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var str = n.toString();
  if(str == '1'){
    return str;
  }else{
    var beforeStr = countAndSay(Number(n)-1);
    var len = beforeStr.length;
    var result = '';
    var first = beforeStr[0];
    var count = 0;
    for(var i=0;i<len;i++) {
      if (beforeStr[i] == first) {
        count++;
      } else {
        result = result + count + first;
        count = 1;
        first = beforeStr[i];
      }
      if (i == len - 1) {
        result = result + count + first;
      }
    }
    return result;
  }
};

console.log(countAndSay(6));

// var countAndSay = function (n) {
//   var str = n.toString();
//   var result = '';
//   var first = str[0];
//   var len = str.length;
//   var count = 1;
//   for(var i=1;i<len;i++){
//     if(str[i] == first){
//       count++;
//     }else{
//       result = result + count + first;
//       count = 1;
//       first =str[i];
//     }
//     if(i == len-1){
//       result = result + count + first;
//     }
//
//   }
//   console.log(result);
// };
// countAndSay(11112233);