function diffArray(arr1, arr2) {
  var ar1 = arr1.filter(function(value) {
    if(arr2.indexOf(value) == -1) {
     return value;
    }
  });
  var ar2 = arr2.filter(function(value) {
    if(arr1.indexOf(value) == -1) {
     return value;
    }
  });
  return ar1.concat(ar2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

