function convertToRoman(num) {
	var myromanArr=[];
	myromanArr[1] = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
	myromanArr[2] = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
	myromanArr[3] = ["","M","MM","MMM","M^","^","^M","^MM","^MMM","MW"];
	return myNumber.map( function(value,index) {