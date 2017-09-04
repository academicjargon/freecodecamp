var count = 0;

function cc(card) {
  // Only change code below this line
  var message;
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      if(count > 0) {
        message = " Bet";
      }
      else {
        message = " Hold";
      }
      return count + message;
    case 7:
    case 8:
    case 9:
      if(count > 0) {
        message = " Bet";
      }
      else {
        message = " Hold";
      }
      return count + message;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      if(count > 0) {
        message = " Bet";
      }
      else {
        message = " Hold";
      }
      return count + message;

  }
  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

