function sumAll(arr) {
  var mySum = 0;
  for(var i=Math.min(arr[0],arr[1]); i<Math.max(arr[0],arr[1])+1;i++) {
    mySum += i;
  }
  return mySum;
}

sumAll([4, 1]);