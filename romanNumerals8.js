function convertToRoman(num) {
	var numAsStr = "000"+num; //Convert to string and ensure string has leading zeros.
	var newArr = (numAsStr).slice(-4).split(""); //ensure string has only 4 digits: e.g., 0021
	digitArr[1] = ["X","L","C"]; //So we create an array for the tens (multiply previous set by 10)
	digitArr[2] = ["C","D","M"]; //So we create an array for the hundreds (multiply previous set by 10)
	digitArr[3] = ["M","F","T"]; //So we create an array for the thousands (multiply previous set by 10)
	var i = 0;
		romanized += romanArr[newArr[i]];
	}
	return romanized;
}
convertToRoman(9197);
	var numAsStr = "000"+num; //Convert to string and ensure string has leading zeros.
	var newArr = (numAsStr).slice(-4).split(""); //ensure string has only 4 digits: e.g., 0021
	digitArr[1] = ["X","L","C"]; //So we create an array for the tens (multiply previous set by 10)
	digitArr[2] = ["C","D","M"]; //So we create an array for the hundreds (multiply previous set by 10)
	digitArr[3] = ["M","√","ç"]; //So we create an array for the thousands (multiply previous set by 10)
	for(var i=0;i<newArr.length;i++) {
		romanized += romanArr[newArr[i]]; //Adds the "digit" (e.g., XL for 40) to the  output string
	}
	return romanized; //return answer
}
convertToRomanA(2197);