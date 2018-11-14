var arr = new Array(25,35,4,2,8,1,5,3,9,15,3);
for(let i = 0 ; i < arr.length ; i++){
  setTimeout(function(){console.log(arr[i]);},arr[i]);
}