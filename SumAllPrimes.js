function sumPrimes(num) {
	var allNums = makeArray(num);
	//debug(allNums);
	var item;
	var sum = 0;
	for(item in allNums) {
		allNums.filter(function(a,b) {
			if((a%item == 0) && (item != 1) && (item != 0) && ((allNums[b]) != item)) {
				//debug((a !== 1)+":"+item+": "+a+" % "+item+" = "+a%item+" -- Delete allNums["+b+"] if "+allNums[b]+" != "+item);
				allNums.splice(b,1);
			}
		});
	}
	debug(allNums);
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
	
	//debug(eval(allNums.join("+")));
	return sum-1;
}
debug(sumPrimes(977));
