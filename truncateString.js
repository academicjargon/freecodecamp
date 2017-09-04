function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num <= 3) {
    str = str.substring(0,num)+"...";
  }
  else if (num >= str.length) {
    str = str;
  }
  else {
    str = str.substring(0,num-3)+"...";
  }
  //debug(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

