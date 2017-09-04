function sumFibs(num) {
	var currentNum = 0;
	var previousNum = 0;
	var nextNum;
	var numSum = 0;
	for(var i=1; i <= num; i=nextNum) {
		//debug(currentNum);
		currentNum = i;
		if(currentNum%2 !== 0) {
			numSum += currentNum;
		}
		nextNum = currentNum + previousNum;
		previousNum = i;
	}
	return numSum;
}
sumFibs(75025);

