function titleCase(str) {
  var arr = str.split(' ');
  var newArray = arr.map(function(val) {
    val = val.toLowerCase();
    myArr = val.split('');
    //debug(myArr[0]);
    myArr[0] = myArr[0].toUpperCase();
    //debug(myArr[0]);
    return myArr.join('');
  });
  //debug(newArray.join(' '));
  return newArray.join(' ');
}
titleCase("I'm a little tea pot");