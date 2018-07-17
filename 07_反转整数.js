var reverse = function(x) {
  var result = [];
  var str = x.toString();
  var len = str.length;
  for(var i=len-1;i>0;i--){
    result.push(str[i]);
  }
  if(str[0] == '-'){//判断是否有符号位
    result.unshift(str[0]);
  }else {
    result.push(str[0]);
  }
  var resultX = parseInt(result.join(''));
  if(resultX<=Math.pow(-2,31)||resultX>=Math.pow(2,31)-1){
    return 0
  }else{
    return resultX;
  }
};

//console.log(reverse(123));
