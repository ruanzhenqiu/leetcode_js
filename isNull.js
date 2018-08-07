//1
var data = {};
var dataJson = JSON.stringify(data);
console.log(dataJson == '{}');

//2
var data2 = {};
function isNull(data) {
  for(var key in data){
    return false;//有key则不为空
  }
  return true;
}
console.log(isNull(data2));

//3 jquery方法
// var data3 = {};
// var result = $.isEmptyObject(data3);
// console.log(result);

//4
var data4 = {};
var arr = Object.getOwnPropertyNames(data4);
console.log(arr.length);

//5
var data5 = {};
var arr2 = Object.keys(data);
console.log(arr2.length == 0);//true