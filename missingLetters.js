function fearNotLetter(str) {
  var myArr = str.split("");
  var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  alph.splice(0,(alph.indexOf(myArr[0])));
  var blip = myArr.findIndex(function(value,index,arr) {
    return alph.indexOf(value) != index;
  });
  return alph[blip];
}
fearNotLetter("bcd");

