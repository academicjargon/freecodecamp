function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  //return typeof bool === "boolean"; (this is the correct and ideal way i found after doing the below.)
  var x = new Boolean(bool);
  return (x.valueOf() === bool.valueOf()) ? true : false;
}
booWho([1, 2, 3]);

