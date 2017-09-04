function myReplace(str, before, after) {
  if (before.charCodeAt(0) < 97) {
    var charCodeOfAfter = after.charCodeAt(0);
    after = after.split("");
    after[0] = String.fromCharCode(charCodeOfAfter-32);
    after = after.join("")
  }
  var myArr = str.split(" ");
  myArr.splice(myArr.indexOf(before),1,after);
  return myArr.join(" ");
}

myReplace("Let us go to the store", "Store", "mall");

