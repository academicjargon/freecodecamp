function largestOfFour(arr) {
  // You can do this!
  myNewArray = arr.map(function(val) {
  	val.sort(function(a,b) {
  		return b-a;
  	});
  	return val[0];
  });  
  //debug(myNewArray);
  return myNewArray;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);