function fearNotLetter(str) {
  var myArr = str.split(""); /* e.g. [b,c,d] */
  var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  alph.splice(0,alph.indexOf(myArr[0])); /* e.g. changes alph from [a,b,c,d,e...] to [b,c,d,e...] */
  var blip = myArr.findIndex(function(value,index,arr) { /* finds the index where... */
    return alph.indexOf(value) != index; /* the index of myArr's current value is not the same as alph's index */
  });
  return alph[blip]; /* that is the index of the missing letter; return it. */
}
fearNotLetter("bcd");
