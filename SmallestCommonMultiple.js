function smallestCommons(arr) {
  arr.sort(function(a,b) { return a-b; });
  var low = arr[0];
  var high = arr[0] * arr [1];
  var commonMultiple = 1;
  var commonMultipleFound = false;
  for(var j=high;j>=low;j--) {
	  commonMultiple *= j;
  }
  debug(commonMultiple);
  return commonMultiple;
}
smallestCommons([1,5]);

