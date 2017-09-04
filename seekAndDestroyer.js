function destroyer(arr) {
  var args = [].slice.call(arguments);
  args.unshift();
  return arr.filter(function(value) {
    return args.indexOf(value) === -1;
  });
}


destroyer([1, 2, 3, 1, 2, 3], 4, 3);