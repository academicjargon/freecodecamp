
function spinalCase(str) {
  str=str.replace(/(?<z)[A-Z]/g,'x');
  debug(str);

  str = str.replace(/[^A-Za-z]/g,'').replace(/([A-Z])/g,'-$1').replace(/^-/,"").toLowerCase();
  return str;
}

spinalCase('ThiszIsSpinalTrap');
