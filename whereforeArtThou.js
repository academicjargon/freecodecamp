function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var myArr = [];
  // Only change code below this line
  collection.forEach(function(value1,index1,arr1) {
    continues = true
    myArr = {};
    Object.keys(source).forEach(function(value2,index2,arr2) {
      if(value1[value2] == source[value2]) {
        myArr[value2] = value1[value2];
      }
      else {
        continues = false;
      }
    });
    if(continues === true) {
      arr.push(value1);
    }
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });