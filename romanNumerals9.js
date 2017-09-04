function convertToRoman(num) {	var numAsRoman = ""; //Will be populated and returned
	var numAsStr = "000"+num; //Convert to string and ensure string has leading zeros.
	var newArr = (numAsStr).slice(-4).split(""); //ensure string has only 4 digits: e.g., 0021	var romanArr = []; //The array of romans. e.g., [i,ii,iii,iv,v,vii,viii,ix,x]	var digitArr = []; //Letters change depending on whether tens, hundreds, or thousands, etc.	digitArr[0] = ["I","V","X"]; //So we create an array for the ones
	digitArr[1] = ["X","L","C"]; //So we create an array for the tens
	digitArr[2] = ["C","D","M"]; //So we create an array for the hundreds
	digitArr[3] = ["M","√","ç"]; //So we create an array for the thousands
	debug("newArr: "+newArr + ' //e.g. 2,4,5,9');	debug("newArr.length: "+newArr.length + ' //which is this many chars long');	debug("newArr["+(newArr.length-1) + "]: " + (newArr.length-1) + ' //which is the index of the ones');	debug("newArr["+(newArr.length-1)+"]: "+newArr[(newArr.length -1)] + ' //which prints the ones: "9"');	//debug("for(var i="+(newArr.length-1)+";i>=0;i--) {");	//for(var i=(newArr.length-1);i>=0;i--) {		debug("for(var i=0;i<"+(newArr.length)+";i++) {");	for(var i=0;i<newArr.length;i++) {		//debug(i);		//debug("digitArr["+i+"][0] :" + digitArr[i][0]);		var j = Math.abs(i-(newArr.length-1));		var a = digitArr[j][0];		var b = digitArr[j][1];		var c = digitArr[j][2]; 		romanArr = ["",a,a+a,a+a+a,a+b,b,b+a,b+a+a,b+a+a+a,a+c];
		debug("newArr["+i+"]: " + newArr[i] + " // which is the digit we need to translate");		numAsRoman += romanArr[newArr[i]];
	}
	debug(numAsRoman);
	return numAsRoman;
}

convertToRoman(2459); //D
/*		romanArr = ["",digitArr[j][0],digitArr[j][0]+digitArr[j][0],digitArr[j][0]+digitArr[j][0]+digitArr[j][0],digitArr[j][0]+digitArr[j][1],digitArr[j][1],digitArr[j][1]+digitArr[j][0],digitArr[j][1]+digitArr[j][0]+digitArr[j][0],digitArr[j][1]+digitArr[j][0]+digitArr[j][0]+digitArr[j][0],digitArr[j][0]+digitArr[j][2]];


		romanArr = ["",digitArr[j][0],digitArr[j][0]+digitArr[j][0],digitArr[j][0]+digitArr[j][0]+digitArr[j][0],digitArr[j][0]+digitArr[j][1],digitArr[j][1],digitArr[j][1]+digitArr[j][0],digitArr[j][1]+digitArr[j][0]+digitArr[j][0],digitArr[j][1]+digitArr[j][0]+digitArr[j][0]+digitArr[j][0],digitArr[j][0]+digitArr[j][2]];
		//romanArr = ["",digitArr[Math.abs(i-(newArr.length-1))][0],digitArr[Math.abs(i-(newArr.length-1))][0]+digitArr[Math.abs(i-(newArr.length-1))][0],digitArr[Math.abs(i-(newArr.length-1))][0]+digitArr[Math.abs(i-(newArr.length-1))][0]+digitArr[Math.abs(i-(newArr.length-1))][0],digitArr[Math.abs(i-(newArr.length-1))][0]+digitArr[Math.abs(i-(newArr.length-1))][1],digitArr[Math.abs(i-(newArr.length-1))][1],digitArr[Math.abs(i-(newArr.length-1))][1]+digitArr[Math.abs(i-(newArr.length-1))][0],digitArr[Math.abs(i-(newArr.length-1))][1]+digitArr[Math.abs(i-(newArr.length-1))][0]+digitArr[Math.abs(i-(newArr.length-1))][0],digitArr[Math.abs(i-(newArr.length-1))][1]+digitArr[Math.abs(i-(newArr.length-1))][0]+digitArr[Math.abs(i-(newArr.length-1))][0]+digitArr[Math.abs(i-(newArr.length-1))][0],digitArr[Math.abs(i-(newArr.length-1))][0]+digitArr[Math.abs(i-(newArr.length-1))][2]];		//romanArr = ["",digitArr[Math.abs(i-(newArr.length-1))][0],digitArr[i][0]+digitArr[i][0],digitArr[i][0]+digitArr[i][0]+digitArr[i][0],digitArr[i][0]+digitArr[i][1],digitArr[i][1],digitArr[i][1]+digitArr[i][0],digitArr[i][1]+digitArr[i][0]+digitArr[i][0],digitArr[i][1]+digitArr[i][0]+digitArr[i][0]+digitArr[i][0],digitArr[i][0]+digitArr[i][2]];		//debug(romanArr);
		//debug(newArr[i]);
		if(i===0) { //it's the hundreds digit
			a="M";
			b="√";
			c="ç";
		}
		if(i===1) { //it's the hundreds digit
			a="C";
			b="D";
			c="M";
		}
		if(i===2) { //it's the hundreds digit
			a="X";
			b="L";
			c="C";
		}
		if(i===3) { //it's the hundreds digit
			a="I";
			b="V";
			c="X";
		}
*/
/*

mynumber = mynumber.split("");
debug(mynumber[0]);
debug(mynumber[1]);
debug(mynumber[2]);
var romanNumber = "";
debug("mynumber:"+mynumber);
debug("num/100:"+num/100);
debug("num%100:"+num%100);
debug("Math.floor(mynumber/1000:"+Math.floor(mynumber/1000));
debug("mynumber%1000:"+mynumber%1000);
for(var i=1;i<=(Math.floor(num/1));i++) {
	romanNumber += "I";
}
debug("romanNumber:"+romanNumber);


*/

/*
function miniConvert(value,digit,digitUp,digitUpUp) {
	debug("Math.floor(mynumber/value):"+Math.floor(mynumber/value));
	if((Math.floor(mynumber/value))>0) {
		for(var i=1;i<=(Math.floor(mynumber/value));i++) {
			romanNumber += digit;
		}
		romanNumber = romanNumber.replace(digit+digit+digit+digit+digit,digitUp);
		romanNumber = romanNumber.replace(digit+digit+digit+digit,digit+digitUp);
		romanNumber = romanNumber.replace(digitUp+digit+digitUp,digit+digitUpUp);
		romanNumber = romanNumber.replace(digit+digitUpUp+digit,digitUpUp);
	};
	return romanNumber;
}

	debug(mynumber.length);
	var myArr = [];
	for(var i=1; i<=num;i++) {
		myArr.push("i");
	}
	debug(myArr);
	var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
	debug(myFish);
	
	myFish.splice(0, 500, 'drum'); 
	// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
	debug(myFish[0]);
	
	myFish.splice(2, 1); 
	// myFish is ["angel", "clown", "mandarin", "sturgeon"]
	debug(myFish);

	var myNumeral = "";

	for( var i=0; i<=Math.floor((num%5)/1); i++ ) {
		if(Math.floor((num%5)/1) === 0) {
			myNumeral += "v";
			break;
		}
	}
	for( var i=1; i<=Math.floor((num%5)/1); i++ ) {
		if(Math.floor((num%5)/1) === 4) {
			myNumeral += "iv";
			break;
		}
		else {
		//debug(i);
			myNumeral += "i";
		}
	}


	var myNumeral = "";
	debug(Math.floor(num%500/100));
	for( var i=1; i<=Math.floor(num%500); i++ ) {
		//myNumeral += "D";
	}
	/*
	for( var i=1; i<=Math.floor((num%500)/100); i++ ) {
			debug(Math.floor((num%500)/100))	
			//debug(i);
			myNumeral += "C";
	}
	for( var i=1; i<=Math.floor((num%100)/50); i++ ) {
			debug(Math.floor((num%100)/50));
			//debug(i);
			myNumeral += "L";
	}
	for( var i=1; i<=Math.floor((num%50)/10); i++ ) {
			debug(Math.floor((num%50)/10));	
			//debug(i);
			if(Math.floor((num%50)/10) === 4) {
				myNumeral += "XL";
				break;
			}
			else if (Math.floor((num%10)) === 0) {
				myNumeral += "X";
				break;
			}
			else {
			//debug(i);
				myNumeral += "X";
			}
	}

	for( var i=1; i<=Math.floor((num%5)/1)+1; i++ ) {
			if(Math.floor((num%5)/1) === 4) {
				myNumeral += "iv";
				break;
			}
			else if (Math.floor((num%5)/1) === 0) {
				myNumeral += "v";
				break;
			}
			else {
			//debug(i);
				myNumeral += "i";
			}
	}
	debug(myNumeral);
	
	
	*/

/*
if(i===10) {
	myNumeral = "X";
}
if(i===50) {
	myNumeral = "L";
}
if(Math.floor(i/100)===1) {
	myNumeral = "C";
}
if(i===500) {
	myNumeral = "D";
}
*/


/*
print(convertToRoman(2) + 'should return "II".');
print(convertToRoman(3) + 'should return "III".');
print(convertToRoman(4) + 'should return "IV".');
print(convertToRoman(5) + 'should return "V".');
print(convertToRoman(9) + 'should return "IX".');
print(convertToRoman(12) + 'should return "XII".');
print(convertToRoman(16) + 'should return "XVI".');
print(convertToRoman(29) + 'should return "XXIX".');
print(convertToRoman(44) + 'should return "XLIV".');
print(convertToRoman(45) + 'should return "XLV"');
print(convertToRoman(68) + 'should return "LXVIII"');
print(convertToRoman(83) + 'should return "LXXXIII"');
print(convertToRoman(97) + 'should return "XCVII"');
print(convertToRoman(99) + 'should return "XCIX"');
print(convertToRoman(500) + 'should return "D"');
print(convertToRoman(501) + 'should return "DI"');
print(convertToRoman(649) + 'should return "DCXLIX"');
print(convertToRoman(798) + 'should return "DCCXCVIII"');
print(convertToRoman(891) + 'should return "DCCCXCI"');
print(convertToRoman(1000) + 'should return "M"');
print(convertToRoman(1004) + 'should return "MIV"');
print(convertToRoman(1006) + 'should return "MVI"');
print(convertToRoman(1023) + 'should return "MXXIII"');
print(convertToRoman(2014) + 'should return "MMXIV"');
print(convertToRoman(3999) + 'should return "MMMCMXCIX"');



var fivehundreds = num/500;
debug(fivehundreds);
debug(Math.floor(fivehundreds));
var hundreds = num/100;
var fifties = num/50;
var tens = num/10;
var fives = num/5;
for(var i = 0;i<Math.floor(fivehundreds);i++) {
debug(i);
	debug(Math.floor(fivehundreds));
}
//return fivehundreds+":"+hundreds+":"+fifties+":"+tens+":"+fives;



for( var i=1; i<=Math.floor((num%10)/5); i++ ) {
		debug(Math.floor((num%10)/5));
		//debug(i);
		myNumeral += "v";
}

for( var i=1; i<=Math.floor((num%10)/5); i++ ) {
		if(Math.floor((num%10)/5) === 4) {
			//myNumeral = "pr";
		}
		else {
		//debug(i);
			//myNumeral += "p";
		}
}

*/