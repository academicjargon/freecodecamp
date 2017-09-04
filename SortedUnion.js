function uniteUnique(arr) {
  var accumulator = [];
  for (var i in arguments) {
    arguments[i].forEach(function(value) {
      if((accumulator.indexOf(value) === -1)) {
        accumulator.push(value);
      };
    });
  }
  return accumulator;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

