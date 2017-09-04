function chunkArrayInGroups(arr, size) {
  // Break it up.

	var myArr = [];
	var mySubArr = [];
	var count = 0;
	for(var i = 0; i < arr.length; i++) {
  		for(var j = 0; j < size; j++) {
  		    mySubArr.push(arr[count]);
  			count++;
            if(count === arr.length) {
              break;
            }
  		}
  		myArr.push(mySubArr);
        mySubArr = [];
        if(count === arr.length) {
          return myArr;
        }
  	}
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);