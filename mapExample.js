var a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

// These two assignments are equivalent:

// Old-school:
var a2 = a.map(function(s){ return s.length });
// ECMAscript 6 using arrow functions
var a3 = a.map( s => s.length );
debug(a2);
debug(a3);



var b = [
	"make my day",
	"make my day again",
	"hi there"
]

var b1 = b.map(function(string) { return string.length; });
debug(b1);
var b2 = b.map( string => string);
debug(b2);


    'use strict';
    var string2 = string => "hi";
	debug(string2);