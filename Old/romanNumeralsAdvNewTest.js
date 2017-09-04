var convertToRoman = function(num) {

  var romanNumeral = [ 'M', 'CM', 'D', 'CD','C','XC','L','XL','X','IX','V','IV','I' ];
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50,  40, 10,  9,   5,  4,   1 ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {    	//debug("decimalValue["+index+"]: "+ decimalValue[index]+" <= " + num);
	   //debug("num: "+num);
	   //debug("decimalValue["+index+"]: "+ decimalValue[index]+" <= " + num);	   //debug("_____________________________________________________________");
		debug(num+">"+decimalValue[index] + "(" + (decimalValue[index] <= num) +")");      while (num >= decimalValue[index]) {		   debug("_____________________________________________________________");
	    	//debug("num: "+num);
	    	//debug("decimalValue["+index+"]: "+ decimalValue[index]+" <= " + num);	    	//debug(index+": "+decimalValue[index]);
	      romanized += romanNumeral[index];	      debug(romanNumeral[index]);
	      debug(num +"-" + decimalValue[index]);	      num -= decimalValue[index];
		   debug("_____________________________________________________________");
	    }
  }  debug(romanized);

  return romanized;
}

// test here
convertToRoman(1836);