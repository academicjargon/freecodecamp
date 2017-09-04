
function translatePigLatin(str) {
  var myArr = str.split("");
  var myVowels = ["a","e","i","o","u"];
  var myConsonant= "";
  var x =0;
  if(myVowels.indexOf(myArr[0]) !== -1) {
    myArr.push("way");
  }
  else {
    while(myArr[x]) {
      if(myVowels.indexOf(myArr[x]) !== -1) {
        break;
      }
      else {
        myConsonant = myArr.shift();
        myArr.push(myConsonant);
      }
    }
    myArr.push("ay");
  }
  var answer = myArr.join("");
  return answer;
}

translatePigLatin("glove");
