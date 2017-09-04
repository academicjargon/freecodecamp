function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  if(str.indexOf(target) === -1) {
  	//debug(false);
  	return false;
  }
  else {
  	//debug(str.indexOf(target)); //Location of needle
    //debug(str.length); //Length of haystack
    //debug(target.length); //length of needle
	//debug(str.substring(str.length,str.length-target.length)); 
    if(str.length -target.length === str.indexOf(target)) {
	  	//debug(true);
    	return true;
    }
    else {
    	return false;
    }
  }
}
confirmEnding("Bastian", "ian");
confirmEnding("Open sesame", "pen");


