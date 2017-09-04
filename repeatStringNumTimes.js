function repeatStringNumTimes(str, num) {
  // repeat after me
  var newString = "";
  for(var i=num;i>0;i--) {
    newString = newString + str;
  }
  //debug(newString);
  return newString;
}
repeatStringNumTimes("abc", 3);


