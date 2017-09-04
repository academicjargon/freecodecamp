function convertHTML(str) {
  var myStr = str.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")
  return myStr;
  //OR//
  var strArr = str.split("");
  var output = strArr.map(function(value) {
    switch(value) {
      case "&":
      return "&amp;"
      break;
      case ">":
      return "&gt;"
      break;
      case "<":
      return "&lt;"
      break;
      case '"':
      return "&quot;"
      break;
      case "'":
      return "&apos;"
      break;
      default:
      return value
    }
  });
  return output.join("");

  //OR// FROM GITHUB ANSWERS, AFTER I SOLVED TOP TWO
  var htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  var strArr = str.split("").map(function(value) {
      return htmlEntities[value] || value
  });
  return strArr.join("");
}


convertHTML("Dolce & Gabbana");

