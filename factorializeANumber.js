
function factorialize(num) {
  var total = 1;
  for ( var i = num; i > 0; i-- ){
      total *= i;
  }
  return total;
}

factorialize(0);

