
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/gi,'');  
  if(str.split('').reverse().join('') === str) {
    return true;
  }
  else {
    return false;
  }

}
palindrome("0_0 (: /-\ :) 0-0");

