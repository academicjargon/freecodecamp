function pairElement(str) {
  var myInput = str.split("");
  var myTempArr = [];
  var comp = {
    "A": "T",
    "G": "C",
    "T": "A",
    "C": "G"
  };
  var myArr = myInput.map(function(value) {
    return myTempArr[0] = [value, comp[value]];
  });
  return myArr;
}
pairElement("GCG");

