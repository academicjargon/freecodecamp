function convertToRoman(num) {	var digitArr=[]; //Vars
	digitArr[0] = ["I","V","X"]; //We create an array for the ones (the default values)
	digitArr[1] = ["X","L","C"]; //We create an array for the tens ('multiply' previous set by 10)
	digitArr[2] = ["C","D","M"]; //We create an array for the hundreds ('multiply' previous set by 10)
	digitArr[3] = ["M","√","ç"]; //We create an array for the thousands ('multiply' previous set by 10)	var myromanArr = ["","I","II","III","IV","V","VI","VII","VIII","IX"]; //concatinates the strings per the counting rules
	return ("000"+num)		.slice(-4)		.split("")		.map(		function(value,index){ 			debug('("000"+num): '+("000"+num).slice(-4)); //00097			debug("index of map loop: "+index); // index: 0, index: 1, index: 2, index: 3			debug("length (minus one) of "+("000"+num).slice(-4)+": "+((("000"+num).slice(-4).split("")).length-1)); //3			debug("index (" + index + ") - legnth (" + ((("000"+num).slice(-4).split("")).length-1) + ") = " + (index-((("000"+num).slice(-4).split("")).length-1)));			debug("Math.abs: ===="+Math.abs(index-((("000"+num).slice(-4).split("")).length-1))+"====");			debug("digitArr["+Math.abs(index-((("000"+num).slice(-4).split("")).length-1))+"]["+0+"]: "+digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][0]);			//debug(digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][0]);			debug(myromanArr);			debug("myromanArr["+value+"] digit-"+index+"==========="+value+" ("+myromanArr[value]+")");			debug("replace '"+digitArr[0][0]+"' with '"+digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][0]+"': digitArr["+Math.abs(index-((("000"+num).slice(-4).split("")).length-1))+"][0]");			debug("replace '"+digitArr[0][1]+"' with '"+digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][1]+"': digitArr["+Math.abs(index-((("000"+num).slice(-4).split("")).length-1))+"][1]");			debug("replace '"+digitArr[0][2]+"' with '"+digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][2]+"': digitArr["+Math.abs(index-((("000"+num).slice(-4).split("")).length-1))+"][2]");			debug("replace i with: "+ digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][0]);			debug("replace v with: "+ digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][1]);			debug("replace x with: "+ digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][2]);			debug("replaced with: "+myromanArr[value]				.replace(					/X/g,					digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][2]				)				.replace(					/V/g,					digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][1]				)				.replace(					/I/g,					digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][0]				)				);			debug("______________________________________________________");			return myromanArr[value]				.replace(					/X/g,					digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][2]				)				.replace(					/V/g,					digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][1]				)				.replace(					/I/g,					digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][0]				);		})		.join(""); //ensure string has only 4 digits: e.g., 0021	//debug(finalAnswer);}debug(convertToRoman(999));//.replace(/I/g,digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][0]).replace(/V/g,digitArr[Math.abs(index-((("000"+num).slice(-4).split("")).length-1))][1])//debug(convertToRoman(2) + ': Should return "II".');
//debug(convertToRoman(3) + ': Should return "III".');
/*debug(convertToRoman(4) + ': Should return "IV".');
debug(convertToRoman(5) + ': Should return "V".');
debug(convertToRoman(9) + ': Should return "IX".');
debug(convertToRoman(12) + ': Should return "XII".');
debug(convertToRoman(16) + ': Should return "XVI".');
debug(convertToRoman(29) + ': Should return "XXIX".');
debug(convertToRoman(44) + ': Should return "XLIV".');
debug(convertToRoman(45) + ': Should return "XLV"');
debug(convertToRoman(68) + ': Should return "LXVIII"');
debug(convertToRoman(83) + ': Should return "LXXXIII"');
debug(convertToRoman(97) + ': Should return "XCVII"');
debug(convertToRoman(99) + ': Should return "XCIX"');
debug(convertToRoman(500) + ': Should return "D"');
debug(convertToRoman(501) + ': Should return "DI"');
debug(convertToRoman(649) + ': Should return "DCXLIX"');
debug(convertToRoman(798) + ': Should return "DCCXCVIII"');
debug(convertToRoman(891) + ': Should return "DCCCXCI"');
debug(convertToRoman(1000) + ': Should return "M"');
debug(convertToRoman(1004) + ': Should return "MIV"');
debug(convertToRoman(1006) + ': Should return "MVI"');
debug(convertToRoman(1023) + ': Should return "MXXIII"');
debug(convertToRoman(2014) + ': Should return "MMXIV"');
debug(convertToRoman(3999) + ': Should return "MMMCMXCIX"');/*	digitArr[0] = ["I","V","X"]; //We create an array for the ones (multiply previous set by 10)
	digitArr[1] = ["X","L","C"]; //We create an array for the tens (multiply previous set by 10)
	digitArr[2] = ["C","D","M"]; //We create an array for the hundreds (multiply previous set by 10)
	digitArr[3] = ["M","√","ç"]; //We create an array for the thousands (multiply previous set by 10)	j = Math.abs(i-(newArr.length-1)); //Flips the index. If i = 0, j = 3; if i = 3, j = 0. Allows us to start with the thousands digit, then the hundreds, then the tens, then the ones, not the other way around.	a = digitArr[j][0]; //A string. e.g., "I" or "X" or "C"	b = digitArr[j][1]; //A string. e.g., "X" or "L" or "C"	c = digitArr[j][2];  //A string. e.g., "C" or "D" or "M"	romanArr = ["",a,a+a,a+a+a,a+b,b,b+a,b+a+a,b+a+a+a,a+c]; //concatinates the strings per the counting rules
	
	var myromanArr = ["",a,a+a,a+a+a,a+b,b,b+a,b+a+a,b+a+a+a,a+c]; //concatinates the strings per the counting rules
	var myromanArr = ["","I","II","III","IV","V","VI","VII","VIII","IX"]; //concatinates the strings per the counting rules
	var finalAnswer = ("000"+num).slice(-4).split("").map(function(value,index){ return "; " + value+": "+myromanArr[value].replace("y","I"); }).join(""); //ensure string has only 4 digits: e.g., 0021	debug(finalAnswer);	var digitArr = []; //Letters change depending on whether tens, hundreds, or thousands, etc.	digitArr[0] = ["I","V","X"]; //We create an array for the ones (multiply previous set by 10)
	digitArr[1] = ["X","L","C"]; //We create an array for the tens (multiply previous set by 10)
	digitArr[2] = ["C","D","M"]; //We create an array for the hundreds (multiply previous set by 10)
	digitArr[3] = ["M","√","ç"]; //We create an array for the thousands (multiply previous set by 10)
	for(var i=0;i<newArr.length;i++) {		j = Math.abs(i-(newArr.length-1)); //Flips the index. If i = 0, j = 3; if i = 3, j = 0. Allows us to start with the thousands digit, then the hundreds, then the tens, then the ones, not the other way around.		a = digitArr[j][0]; //A string. e.g., "I" or "X" or "C"		b = digitArr[j][1]; //A string. e.g., "X" or "L" or "C"		c = digitArr[j][2];  //A string. e.g., "C" or "D" or "M"		romanArr = ["",a,a+a,a+a+a,a+b,b,b+a,b+a+a,b+a+a+a,a+c]; //concatinates the strings per the counting rules
		romanized += romanArr[newArr[i]]; //Adds the "digit" (e.g., XL for 40) to the  output string
	}	debug(romanized); //debug
	return romanized; //return answer	*/

//digitArr