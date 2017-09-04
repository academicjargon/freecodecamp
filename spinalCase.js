function spinalCase(str) {
    str=str.replace(/([A-Z])/g,'-$1');
    str=str.replace(/[^A-Za-z]/g,'-');
    str=str.replace(/^-/,"");
    str=str.replace(/--/g,"-");
    str=str.toLowerCase();
  return str;
}

spinalCase('This Is_SpinalTap');

