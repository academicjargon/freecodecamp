function convertToRoman(num) {
	digitArr[0] = ["I","V","X"]; //for the ones (the default values)
	digitArr[1] = ["X","L","C"]; //for the tens ('multiply' previous set by 10)
	digitArr[2] = ["C","D","M"]; //for the hundreds ('multiply' previous set by 10)
	digitArr[3] = ["M","^","W"]; //for the thousands ('multiply' previous set by 10)
	return myNumber.map( function(value,index){ return myromanArr[value].replace(/X/g,digitArr[Math.abs(index-(myNumber.length-1))][2]).replace(/V/g,digitArr[Math.abs(index-(myNumber.length-1))][1]).replace(/I/g,digitArr[Math.abs(index-(myNumber.length-1))][0]);}).join("");