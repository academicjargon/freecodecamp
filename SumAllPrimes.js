function sumPrimes(num) {
	var allNums = makeArray(num);
	var item;
	var sum = 0;
	for(item in allNums) {
		allNums.filter(function(a,b) {
			if((a%item == 0) && (item != 1) && (item != 0) && ((allNums[b]) != item)) {
				allNums.splice(b,1);
			}
		});
	}
	allNums.filter(function(a){
		sum+=a;
	});
	function makeArray(num) {
		allNums = [];
		for(var i = num; i>0; i--) {
			allNums.push(i);
		}
		return allNums;
	}
	
	return sum-1;
}
sumPrimes(977);

