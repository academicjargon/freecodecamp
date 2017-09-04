function convertToRoman(num) {	//Convert num to a string. 	//Split num into an array. 	//Map ones to romanArr[0]	//Map tens to romanArr[1]	//Map huns to romanArr[2]	//Map thds to romanArr[3]	//Join and return	var myNumber = ("000"+num).slice(-4)).split("");
	var myromanArr=[];	myromanArr[0] = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
	myromanArr[1] = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
	myromanArr[2] = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
	myromanArr[3] = ["","M","MM","MMM","M^","^","^M","^MM","^MMM","MW"];
	return myNumber.map( function(value,index) {		return myromanArr[Math.abs(index-(myNumber.length-1))][value];	}).join("");}debug(convertToRoman(3));