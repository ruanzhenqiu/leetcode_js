/*
假设你正在爬楼梯。需要 n 步你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 步 + 1 步
2.  2 步
 */

/**
 * @param {number} n
 * @return {number}
 */
//这真是一种SB的方法，记录下耻辱
var climbStairs = function(n) {
  var result = 0;
  for(var count1=n;count1>=0;count1--){
    var count2 = (n-count1)/2;
    if(count2%1!==0){
      continue;
    }else{
      if(count2 ==0 || count1 ==0){
        result++;
      }else{
        let fenzi = 1;
        let fenmu = 1;
        let sum = count1+count2;
        //计算C(sum,count2);
        for(let i=1;i<=count2;i++){//循环count2次
          fenmu *= i;
          fenzi *= sum;
          sum--;
        }
        result += (fenzi/fenmu);
      }
    }
  }
  return result;
};
//逆向思维，只能走一步或者两步，则达到n有两种可能：
//（1）从n-1跨一步（2）从n-2跨两步
// arr[n] = arr[n-1] + arr[n-2]
// 可怕
var climbStairs1 = function(n) {
  var result = [];
  result[1] = 1;
  result[2] = 2;
  for(var i=3;i<=n;i++){
    result[i] = result[i-1]+result[i-2];
  }
  return result[n];
};

//斐波那契 普通递归算法
function climbStairs2(n) {
  if(n<=2){
    return n
  }
  return climbStairs2(n-1) + climbStairs2(n-2)
};

function climbStairs3(n) {
  if(n<1){
    return 0;
  }
  if(n==1){
    return 1;
  }
  if(n==2){
    return 2;
  }
  var a = 1;
  var b = 2;
  var temp = 0;
  for(var i=3;i<=n;i++){
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
};








