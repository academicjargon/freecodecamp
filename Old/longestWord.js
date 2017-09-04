
function findLongestWord(str) {
  var arr = str.split(" ");
  var lengthOfLongestWord = 0;
  var indexOfWord = 0;
  arr.forEach(function(currentValue, index) {
    return currentValue + ":" + index;
    if(currentValue.length > lengthOfLongestWord) {
      indexOfWord = index;
    }
  });
  //return arr[indexOfWord].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
