function convertToRoman(num) {
	//Convert num to a string with leading 0s
	//Slice to 4 places and split num into an array. 
	//Map array to return value, substituting corresponding roman numerals: 
		//>> e.g., 2 in ones place is romanArr[0][2]; e.g., 2 in tens place maps to romanArr[1][2]
		//>> Math.abs(index-(myNumber.length-1)) reverses array order... i.e., 0 index looks at 4th place
	//Join and return
	var myNumber = ("000"+num).slice(-4).split("");
	var romanArr=[];
	romanArr[0] = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
	romanArr[1] = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
	romanArr[2] = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
	romanArr[3] = ["","M","MM","MMM","M^","^","^M","^MM","^MMM","MW"];
	return myNumber.map( function(value,index) {
		return romanArr[Math.abs(index-(myNumber.length-1))][value];
	}).join("");
}
debug(convertToRoman(3471));