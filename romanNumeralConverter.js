function convertToRoman(num) {
	//Create array out of num (e.g., 9461). Map ones, tens, etc to their roman equivalents, stored here in arrays. 
	var myNumber = ("000"+num).slice(-4).split("");
	var myromanArr=[];
	myromanArr[0] = ["","I","II","III","IV","V","VI","VII","VIII","IX"];//one
	myromanArr[1] = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];//ten
	myromanArr[2] = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];//hundred
	myromanArr[3] = ["","M","MM","MMM","M^","^","^M","^MM","^MMM","MW"];//thousand
	return myNumber.map( function(value,index) {
		return myromanArr[Math.abs(index-(myNumber.length-1))][value];
	}).join("");
}
convertToRoman(9461);