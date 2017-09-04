function convertToRoman(num) {
	digitArr[0] = ["I","V","X"]; //We create an array for the ones (the default values)
	digitArr[1] = ["X","L","C"]; //We create an array for the tens ('multiply' previous set by 10)
	digitArr[2] = ["C","D","M"]; //We create an array for the hundreds ('multiply' previous set by 10)
	digitArr[3] = ["M","√","ç"]; //We create an array for the thousands ('multiply' previous set by 10)
	return ("000"+num)
//debug(convertToRoman(3) + ': Should return "III".');
/*
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
debug(convertToRoman(3999) + ': Should return "MMMCMXCIX"');
	digitArr[1] = ["X","L","C"]; //We create an array for the tens (multiply previous set by 10)
	digitArr[2] = ["C","D","M"]; //We create an array for the hundreds (multiply previous set by 10)
	digitArr[3] = ["M","√","ç"]; //We create an array for the thousands (multiply previous set by 10)
	
	var myromanArr = ["",a,a+a,a+a+a,a+b,b,b+a,b+a+a,b+a+a+a,a+c]; //concatinates the strings per the counting rules
	var myromanArr = ["","I","II","III","IV","V","VI","VII","VIII","IX"]; //concatinates the strings per the counting rules
	var finalAnswer = ("000"+num).slice(-4).split("").map(function(value,index){ return "; " + value+": "+myromanArr[value].replace("y","I"); }).join(""); //ensure string has only 4 digits: e.g., 0021
	digitArr[1] = ["X","L","C"]; //We create an array for the tens (multiply previous set by 10)
	digitArr[2] = ["C","D","M"]; //We create an array for the hundreds (multiply previous set by 10)
	digitArr[3] = ["M","√","ç"]; //We create an array for the thousands (multiply previous set by 10)
	for(var i=0;i<newArr.length;i++) {
		romanized += romanArr[newArr[i]]; //Adds the "digit" (e.g., XL for 40) to the  output string
	}
	return romanized; //return answer

//digitArr