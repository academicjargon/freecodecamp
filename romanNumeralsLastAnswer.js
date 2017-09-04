function convertToRomanA(num) {
	var j,a,b,c; //declare vars
 	var romanized = ""; //Will be populated and returned
	var numAsStr = "000"+num; //Convert to string and ensure string has leading zeros.
	var newArr = (numAsStr).slice(-4).split(""); //ensure string has only 4 digits: e.g., 0021
	var romanArr = []; //The array of romans. e.g., [i,ii,iii,iv,v,vii,viii,ix,x]
	var digitArr = []; //Letters change depending on whether tens, hundreds, or thousands, etc.
	digitArr[0] = ["I","V","X"]; //So we create an array for the ones (multiply previous set by 10)
	digitArr[1] = ["X","L","C"]; //So we create an array for the tens (multiply previous set by 10)
	digitArr[2] = ["C","D","M"]; //So we create an array for the hundreds (multiply previous set by 10)
	digitArr[3] = ["M","√","ç"]; //So we create an array for the thousands (multiply previous set by 10)
	for(var i=0;i<newArr.length;i++) {
		j = Math.abs(i-(newArr.length-1)); //Flips the index. If i = 0, j = 3; if i = 3, j = 0. Allows us to start with the thousands digit, then the hundreds, then the tens, then the ones, not the other way around.
		a = digitArr[j][0]; //A string. e.g., "I" or "X" or "C"
		b = digitArr[j][1]; //A string. e.g., "X" or "L" or "C"
		c = digitArr[j][2];  //A string. e.g., "C" or "D" or "M"
		romanArr = ["",a,a+a,a+a+a,a+b,b,b+a,b+a+a,b+a+a+a,a+c]; //concatinates the strings per the counting rules
		romanized += romanArr[newArr[i]]; //Adds the "digit" (e.g., XL for 40) to the  output string
	}
	return romanized; //return answer
}
convertToRomanA(2197);