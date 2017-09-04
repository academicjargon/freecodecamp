function convertToRoman(num) {	//Approach: Create array out of num, map each digit to its roman equivalent, substituting the correct letter depending on whether a one (i,v), a ten (x,L), a hundred (c,d), or a thousand (m,√)	var digitArr=[]; //Vars	var myNumber = ("000"+num).slice(-4).split("");
	digitArr[0] = ["I","V","X"]; //for the ones (the default values)
	digitArr[1] = ["X","L","C"]; //for the tens ('multiply' previous set by 10)
	digitArr[2] = ["C","D","M"]; //for the hundreds ('multiply' previous set by 10)
	digitArr[3] = ["M","^","W"]; //for the thousands ('multiply' previous set by 10)	var myromanArr = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
	return myNumber.map( function(value,index){ return myromanArr[value].replace(/X/g,digitArr[Math.abs(index-(myNumber.length-1))][2]).replace(/V/g,digitArr[Math.abs(index-(myNumber.length-1))][1]).replace(/I/g,digitArr[Math.abs(index-(myNumber.length-1))][0]);}).join("");}convertToRoman(9461);