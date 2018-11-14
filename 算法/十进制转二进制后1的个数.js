function count1(n) {
  for (var count =0; n; count++){
    n &= (n -1) ; // 清除最低位的1
  }
  return count ;
}
console.log(count1(16));
//跟比n小一的数按位与