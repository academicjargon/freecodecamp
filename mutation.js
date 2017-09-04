function mutation(arr) {
  var mySub = arr[1].split('');
  var myBool = true;
  var i = 0;
  while(mySub[i]) {
    if(arr[0].toLowerCase().indexOf(mySub[i].toLowerCase()) == -1) {
      myBool = false;
    }
    i++;
  }
  return myBool;
}

mutation(["hello", "hey"]);

