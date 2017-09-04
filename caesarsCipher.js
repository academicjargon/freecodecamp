function rot13(str) { // LBH QVQ VG!
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  str = str.toLowerCase();
  str.split('');
  var myNewArray = [];
  for(var i = 0; i < str.length; i++) {
    if(alphabet.indexOf(str[i]) === -1) {
      myNewArray.push(str[i]);
    }
    else {
      myNewArray.push(alphabet[(alphabet.indexOf(str[i])+13)%26]);
    }
  }
  return myNewArray.join("").toUpperCase();
}
// Change the inputs below to test
rot13("LBH QVQ VG");