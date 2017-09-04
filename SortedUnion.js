function uniteUnique(arr) {
  var accumulator = [];
  for (var i in arguments) {
    arguments[i].forEach(function(value) {
      if((accumulator.indexOf(value) === -1)) {
        accumulator.push(value);
      };
    });
  }
  debug(accumulator);
  return accumulator;
}
//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);




var list1 = [[0, 1], [2, 3], [4, 5]];
const flatten = arr => arr.reduce(
  function(acc, val) { return acc.concat(
    Array.isArray(val) ? flatten(val) : val
  )}
  ,[]
);
debug(flatten(list1)); // returns [0, 1, 2, 3, 4, 5]
//flatten(list2); // returns [0, 1, 2, 3, 4, 5]
