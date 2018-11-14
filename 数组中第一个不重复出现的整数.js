function firstNoRepeat(arr) {
  var res = [];
  arr.forEach((e)=>{
    if(arr.indexOf(e) === arr.lastIndexOf(e)){
      res.push(e);
    }
  });
  return res;
}
var arr2 = [1,"1",2,1,3,2,3,3];
console.log(firstNoRepeat(arr2));// ["1"]