function convertToRoman(num) {
	digitArr[0] = ["I","V","X"]; //We create an array for the ones (the default values)
	digitArr[1] = ["X","L","C"]; //We create an array for the tens ('multiply' previous set by 10)
	digitArr[2] = ["C","D","M"]; //We create an array for the hundreds ('multiply' previous set by 10)
	digitArr[3] = ["M","√","ç"]; //We create an array for the thousands ('multiply' previous set by 10)
	return ("000"+num) //Add leading zeros