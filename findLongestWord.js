function findLongestWord(str) {
  var arr = str.split(" ");
  var lengthOfLongestWord = 0;
  var indexOfWord = 0;
  arr.forEach(function(currentValue, index) {
    if(currentValue.length > lengthOfLongestWord) {
      lengthOfLongestWord = currentValue.length;
    }
  });
  return lengthOfLongestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");